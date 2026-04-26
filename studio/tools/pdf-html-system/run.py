#!/usr/bin/env python3
"""PDF ↔ HTML Annotator — Entry Point

Checks dependencies, installs missing ones, starts the server.
"""

import os
import subprocess
import sys
import time
import webbrowser
import shutil

PORT = 5001
URL = f"http://localhost:{PORT}"
HERE = os.path.dirname(os.path.abspath(__file__))

# Python deps: import_name -> pip_name
PY_DEPS = {
    "flask": "flask",
    "flask_cors": "flask-cors",
}

# Optional Python deps
PY_OPTIONAL = {
    "fitz": "pymupdf",  # Fallback converter
}


def check_python_deps():
    """Check and install Python dependencies."""
    missing = []
    for imp, pip_name in PY_DEPS.items():
        try:
            __import__(imp)
        except ImportError:
            missing.append(pip_name)

    # Check optional
    optional_missing = []
    for imp, pip_name in PY_OPTIONAL.items():
        try:
            __import__(imp)
        except ImportError:
            optional_missing.append(pip_name)

    if missing:
        print(f"  Missing required: {', '.join(missing)}")
        answer = input("  Install now? [Y/n] ").strip().lower()
        if answer in ("", "y", "yes"):
            subprocess.run([sys.executable, "-m", "pip", "install"] + missing)
        else:
            print("  Cannot start without dependencies.")
            return False

    if optional_missing:
        print(f"  Optional (PyMuPDF fallback): {', '.join(optional_missing)}")
        answer = input("  Install PyMuPDF for fallback converter? [Y/n] ").strip().lower()
        if answer in ("", "y", "yes"):
            subprocess.run([sys.executable, "-m", "pip", "install"] + optional_missing)

    return True


def check_node_deps():
    """Check Node.js and Playwright."""
    # Node.js
    if not shutil.which("node"):
        print("  Node.js not found. Install from https://nodejs.org/")
        print("  (needed for Playwright PDF export)")
        return False

    # Playwright
    pkg_json = os.path.join(HERE, "package.json")
    node_modules = os.path.join(HERE, "node_modules", "playwright")

    if not os.path.exists(node_modules):
        print("  Installing Playwright...")
        subprocess.run(["npm", "install"], cwd=HERE)

    # Check Chromium
    result = subprocess.run(
        ["node", "-e", "require('playwright').chromium.executablePath()"],
        capture_output=True, text=True, cwd=HERE,
    )
    if result.returncode != 0:
        print("  Installing Chromium for Playwright...")
        subprocess.run(["npx", "playwright", "install", "chromium"], cwd=HERE)

    return True


def check_docker():
    """Check Docker for pdf2htmlEX (optional)."""
    if not shutil.which("docker"):
        print("  Docker not found — pdf2htmlEX unavailable")
        print("  Will use PyMuPDF fallback for PDF → HTML conversion")
        print("  (Install Docker Desktop for pixel-perfect conversion)")
        return False

    # Check if image is pulled
    result = subprocess.run(
        ["docker", "images", "-q", "pdf2htmlex/pdf2htmlex"],
        capture_output=True, text=True,
    )
    if not result.stdout.strip():
        print("  pdf2htmlEX Docker image not found")
        answer = input("  Pull pdf2htmlex/pdf2htmlex? [Y/n] ").strip().lower()
        if answer in ("", "y", "yes"):
            subprocess.run(["docker", "pull", "pdf2htmlex/pdf2htmlex"])
        else:
            print("  Will use PyMuPDF fallback")
            return False

    return True


def main():
    os.chdir(HERE)

    print("=" * 48)
    print("  PDF ↔ HTML Annotator")
    print("=" * 48)
    print()

    # 1. Python deps
    print("[1/3] Python dependencies...")
    if not check_python_deps():
        sys.exit(1)

    # 2. Node + Playwright
    print("[2/3] Node.js + Playwright...")
    if not check_node_deps():
        print("  Warning: PDF export will not work without Node.js + Playwright")

    # 3. Docker (optional)
    print("[3/3] Docker + pdf2htmlEX (optional)...")
    check_docker()

    print()
    print(f"Starting server at {URL}")
    print("Press Ctrl+C to stop.\n")

    # Open browser after delay
    import threading
    threading.Thread(target=lambda: (time.sleep(1.5), webbrowser.open(URL)), daemon=True).start()

    try:
        subprocess.run([sys.executable, "server.py"], cwd=HERE)
    except KeyboardInterrupt:
        print("\nShutting down. Bye.")
        sys.exit(0)


if __name__ == "__main__":
    main()
