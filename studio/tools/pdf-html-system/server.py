#!/usr/bin/env python3
"""PDF ↔ HTML Annotation Server

Routes:
    GET  /        — Serve the editor/annotation UI
    POST /convert — Upload PDF → HTML (pdf2htmlEX via Docker, PyMuPDF fallback)
    POST /export  — HTML → PDF via Playwright
    GET  /health  — Status check
"""

import json
import os
import shutil
import subprocess
import sys
import tempfile
import traceback

from flask import Flask, request, jsonify, send_file, send_from_directory
from flask_cors import CORS

# Optional: PyMuPDF fallback
try:
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import converter as pymupdf_converter
    HAS_PYMUPDF = True
except ImportError:
    HAS_PYMUPDF = False

app = Flask(__name__)
CORS(app)
app.config["MAX_CONTENT_LENGTH"] = 50 * 1024 * 1024  # 50 MB

HERE = os.path.dirname(os.path.abspath(__file__))


def _has_docker():
    """Check if Docker is available and running."""
    try:
        result = subprocess.run(
            ["docker", "info"],
            capture_output=True, timeout=5
        )
        return result.returncode == 0
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return False


def _has_pdf2htmlex_image():
    """Check if pdf2htmlEX Docker image is pulled."""
    try:
        result = subprocess.run(
            ["docker", "images", "-q", "pdf2htmlex/pdf2htmlex"],
            capture_output=True, text=True, timeout=10
        )
        return bool(result.stdout.strip())
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return False


def _convert_with_pdf2htmlex(pdf_path: str) -> str:
    """Convert PDF to HTML using pdf2htmlEX via Docker."""
    pdf_dir = os.path.dirname(os.path.abspath(pdf_path))
    pdf_name = os.path.basename(pdf_path)
    html_name = os.path.splitext(pdf_name)[0] + ".html"

    result = subprocess.run(
        [
            "docker", "run", "--rm",
            "-v", f"{pdf_dir}:/pdf",
            "pdf2htmlex/pdf2htmlex",
            "--zoom", "1.3",
            "--embed-css", "1",
            "--embed-font", "1",
            "--embed-image", "1",
            "--embed-javascript", "0",
            "--process-outline", "1",
            f"/pdf/{pdf_name}",
        ],
        capture_output=True, text=True, timeout=120
    )

    if result.returncode != 0:
        raise RuntimeError(f"pdf2htmlEX failed: {result.stderr}")

    html_path = os.path.join(pdf_dir, html_name)
    if not os.path.exists(html_path):
        raise RuntimeError("pdf2htmlEX produced no output")

    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    # Cleanup the generated HTML file
    try:
        os.remove(html_path)
    except OSError:
        pass

    return html


def _convert_with_pymupdf(pdf_path: str) -> str:
    """Fallback: convert with PyMuPDF (semantic extraction)."""
    return pymupdf_converter.convert_pdf_to_html(pdf_path)


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@app.route("/")
def index():
    return send_from_directory(HERE, "editor.html")


@app.route("/health")
def health():
    docker_ok = _has_docker()
    pdf2htmlex_ok = _has_pdf2htmlex_image() if docker_ok else False
    return jsonify({
        "status": "ok",
        "converter": "pdf2htmlEX" if pdf2htmlex_ok else ("PyMuPDF" if HAS_PYMUPDF else "none"),
        "exporter": "Playwright",
    })


@app.route("/convert", methods=["POST"])
def convert_pdf():
    """Upload PDF → convert to HTML."""
    if "file" not in request.files:
        return jsonify({"error": "No file in request"}), 400

    pdf_file = request.files["file"]
    if not pdf_file.filename or not pdf_file.filename.lower().endswith(".pdf"):
        return jsonify({"error": "Only PDF files accepted"}), 400

    tmp_path = None
    try:
        fd, tmp_path = tempfile.mkstemp(suffix=".pdf")
        os.close(fd)
        pdf_file.save(tmp_path)

        # Try pdf2htmlEX first (pixel-perfect), fall back to PyMuPDF
        use_pdf2htmlex = _has_docker() and _has_pdf2htmlex_image()

        if use_pdf2htmlex:
            html = _convert_with_pdf2htmlex(tmp_path)
            engine = "pdf2htmlEX"
        elif HAS_PYMUPDF:
            html = _convert_with_pymupdf(tmp_path)
            engine = "PyMuPDF"
        else:
            return jsonify({"error": "No converter available. Install Docker + pdf2htmlEX or PyMuPDF."}), 500

        return jsonify({"html": html, "engine": engine})

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": f"Conversion failed: {str(e)}"}), 500

    finally:
        if tmp_path and os.path.exists(tmp_path):
            try:
                os.remove(tmp_path)
            except OSError:
                pass


@app.route("/export", methods=["POST"])
def export_pdf():
    """HTML → PDF via Playwright."""
    data = request.get_json(silent=True)
    if not data or "html" not in data:
        return jsonify({"error": "JSON with 'html' key required"}), 400

    html_content = data["html"]
    filename = data.get("filename", "output.pdf")
    if not filename.lower().endswith(".pdf"):
        filename += ".pdf"

    tmp_html = None
    tmp_pdf = None
    try:
        # Write HTML to temp file
        fd, tmp_html = tempfile.mkstemp(suffix=".html")
        os.close(fd)
        with open(tmp_html, "w", encoding="utf-8") as f:
            f.write(html_content)

        # Generate PDF path
        fd, tmp_pdf = tempfile.mkstemp(suffix=".pdf")
        os.close(fd)

        # Call Playwright export script
        node_script = os.path.join(HERE, "export-pdf.js")
        result = subprocess.run(
            ["node", node_script, tmp_html, tmp_pdf],
            capture_output=True, text=True, timeout=60,
            cwd=HERE,
        )

        if result.returncode != 0:
            error_msg = result.stderr.strip() or "Playwright export failed"
            try:
                err = json.loads(error_msg)
                error_msg = err.get("error", error_msg)
            except (json.JSONDecodeError, TypeError):
                pass
            return jsonify({"error": error_msg}), 500

        if not os.path.exists(tmp_pdf) or os.path.getsize(tmp_pdf) == 0:
            return jsonify({"error": "PDF generation produced empty output"}), 500

        response = send_file(
            tmp_pdf,
            mimetype="application/pdf",
            as_attachment=True,
            download_name=filename,
        )

        @response.call_on_close
        def cleanup():
            for p in (tmp_html, tmp_pdf):
                if p and os.path.exists(p):
                    try:
                        os.remove(p)
                    except OSError:
                        pass

        return response

    except subprocess.TimeoutExpired:
        return jsonify({"error": "PDF export timed out (60s limit)"}), 500

    except Exception as e:
        traceback.print_exc()
        for p in (tmp_html, tmp_pdf):
            if p and os.path.exists(p):
                try:
                    os.remove(p)
                except OSError:
                    pass
        return jsonify({"error": f"Export failed: {str(e)}"}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    print(f"PDF ↔ HTML server on http://0.0.0.0:{port}")
    print(f"  Converter: {'pdf2htmlEX (Docker)' if _has_docker() and _has_pdf2htmlex_image() else 'PyMuPDF' if HAS_PYMUPDF else 'NONE'}")
    print(f"  Exporter:  Playwright")
    app.run(host="0.0.0.0", port=port, debug=True)
