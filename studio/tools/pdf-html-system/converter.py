"""
PDF to HTML Converter Module

Converts any PDF into clean, structured, editable HTML suitable for
rendering in a contentEditable div. Uses PyMuPDF (fitz) for extraction.

Usage:
    from converter import convert_pdf_to_html
    html = convert_pdf_to_html("path/to/file.pdf")

CLI:
    python converter.py some.pdf
"""

import base64
import html
import io
import re
import sys
from collections import Counter
from dataclasses import dataclass, field
from typing import Optional

import fitz  # PyMuPDF


# ---------------------------------------------------------------------------
# Data structures
# ---------------------------------------------------------------------------

@dataclass
class TextSpan:
    """A single span of text with uniform formatting."""
    text: str
    font_name: str
    font_size: float
    is_bold: bool
    is_italic: bool
    color: int  # RGB packed integer
    origin_x: float
    origin_y: float


@dataclass
class TextBlock:
    """A block of text composed of one or more spans, sharing a bounding box."""
    spans: list[TextSpan] = field(default_factory=list)
    bbox: tuple[float, float, float, float] = (0, 0, 0, 0)  # x0, y0, x1, y1

    @property
    def y_center(self) -> float:
        return (self.bbox[1] + self.bbox[3]) / 2

    @property
    def x_start(self) -> float:
        return self.bbox[0]

    @property
    def full_text(self) -> str:
        return "".join(s.text for s in self.spans).strip()


# ---------------------------------------------------------------------------
# Font analysis helpers
# ---------------------------------------------------------------------------

def _is_bold_font(font_name: str) -> bool:
    """Detect bold from font name heuristics."""
    name = font_name.lower()
    return any(tag in name for tag in ("bold", "black", "heavy", "demi", "semibold"))


def _is_italic_font(font_name: str) -> bool:
    """Detect italic from font name heuristics."""
    name = font_name.lower()
    return any(tag in name for tag in ("italic", "oblique", "slant"))


# ---------------------------------------------------------------------------
# Document-level analysis
# ---------------------------------------------------------------------------

def _compute_body_font_size(all_spans: list[TextSpan]) -> float:
    """Find the most common font size across the document (= body text size)."""
    if not all_spans:
        return 12.0  # fallback
    sizes = [round(s.font_size, 1) for s in all_spans if s.text.strip()]
    if not sizes:
        return 12.0
    counter = Counter(sizes)
    return counter.most_common(1)[0][0]


def _heading_level(
    font_size: float,
    is_bold: bool,
    body_size: float,
    block_text: str,
) -> Optional[int]:
    """
    Determine heading level based on font size relative to body size.

    Returns 1-4 for headings, None for body text.
    Thresholds:
        2x+   body -> h1
        1.5x+ body -> h2
        1.2x+ body -> h3
        Bold at body size starting a new block -> h4
    """
    ratio = font_size / body_size if body_size > 0 else 1.0
    text = block_text.strip()
    if not text:
        return None
    # Very short blocks that are just whitespace or punctuation are not headings
    if len(text) < 2:
        return None
    if ratio >= 2.0:
        return 1
    if ratio >= 1.5:
        return 2
    if ratio >= 1.2:
        return 3
    if is_bold and ratio >= 0.95:
        # Bold at approximately body size = h4 subheading
        # But only if the block is relatively short (likely a heading, not a paragraph)
        if len(text) < 200:
            return 4
    return None


# ---------------------------------------------------------------------------
# List detection
# ---------------------------------------------------------------------------

_LIST_BULLET_RE = re.compile(r"^\s*[•\-\*]\s+")
_LIST_ORDERED_RE = re.compile(r"^\s*(\d+)[.\)]\s+")


def _detect_list_type(text: str) -> Optional[str]:
    """Return 'ul', 'ol', or None based on the text pattern."""
    if _LIST_BULLET_RE.match(text):
        return "ul"
    if _LIST_ORDERED_RE.match(text):
        return "ol"
    return None


def _strip_list_prefix(text: str) -> str:
    """Remove the bullet/number prefix from a list item."""
    text = _LIST_BULLET_RE.sub("", text)
    text = _LIST_ORDERED_RE.sub("", text)
    return text


# ---------------------------------------------------------------------------
# Span-level HTML rendering
# ---------------------------------------------------------------------------

def _render_inline_html(spans: list[TextSpan]) -> str:
    """Convert a list of spans into inline HTML with <strong>/<em> wrapping."""
    if not spans:
        return ""
    parts: list[str] = []
    for span in spans:
        escaped = html.escape(span.text)
        if not escaped.strip():
            parts.append(escaped)
            continue
        if span.is_bold and span.is_italic:
            parts.append(f"<strong><em>{escaped}</em></strong>")
        elif span.is_bold:
            parts.append(f"<strong>{escaped}</strong>")
        elif span.is_italic:
            parts.append(f"<em>{escaped}</em>")
        else:
            parts.append(escaped)
    return "".join(parts)


# ---------------------------------------------------------------------------
# Table extraction
# ---------------------------------------------------------------------------

def _extract_tables_as_html(page: fitz.Page) -> tuple[str, list[fitz.Rect]]:
    """
    Extract tables from a page using PyMuPDF's find_tables().

    Returns:
        - HTML string of all tables found
        - List of Rect areas covered by tables (to exclude from text extraction)
    """
    table_html = ""
    table_rects: list[fitz.Rect] = []

    try:
        tables = page.find_tables()
    except Exception:
        return "", []

    if not tables or not tables.tables:
        return "", []

    for table in tables:
        table_rects.append(fitz.Rect(table.bbox))
        data = table.extract()
        if not data:
            continue

        table_html += '<table border="1" cellpadding="4" cellspacing="0" style="border-collapse: collapse; margin: 1em 0;">\n'

        # Treat first row as header if it looks like one
        if len(data) > 1:
            table_html += "  <thead>\n    <tr>\n"
            for cell in data[0]:
                cell_text = html.escape(cell or "")
                table_html += f"      <th>{cell_text}</th>\n"
            table_html += "    </tr>\n  </thead>\n"
            body_rows = data[1:]
        else:
            body_rows = data

        table_html += "  <tbody>\n"
        for row in body_rows:
            table_html += "    <tr>\n"
            for cell in row:
                cell_text = html.escape(cell or "")
                table_html += f"      <td>{cell_text}</td>\n"
            table_html += "    </tr>\n"
        table_html += "  </tbody>\n</table>\n"

    return table_html, table_rects


def _point_in_any_rect(x: float, y: float, rects: list[fitz.Rect]) -> bool:
    """Check if a point falls within any of the given rectangles."""
    for r in rects:
        if r.x0 <= x <= r.x1 and r.y0 <= y <= r.y1:
            return True
    return False


# ---------------------------------------------------------------------------
# Image extraction
# ---------------------------------------------------------------------------

def _extract_images_as_html(page: fitz.Page, doc: fitz.Document) -> str:
    """Extract images from a page and return them as base64 <img> tags."""
    images_html = ""
    image_list = page.get_images(full=True)

    for img_info in image_list:
        xref = img_info[0]
        try:
            base_image = doc.extract_image(xref)
            if not base_image:
                continue
            image_bytes = base_image["image"]
            image_ext = base_image.get("ext", "png")
            # Map common extensions to MIME types
            mime_map = {
                "png": "image/png",
                "jpg": "image/jpeg",
                "jpeg": "image/jpeg",
                "gif": "image/gif",
                "bmp": "image/bmp",
                "tiff": "image/tiff",
                "tif": "image/tiff",
                "webp": "image/webp",
            }
            mime = mime_map.get(image_ext.lower(), f"image/{image_ext}")
            b64 = base64.b64encode(image_bytes).decode("ascii")
            images_html += (
                f'<img src="data:{mime};base64,{b64}" '
                f'style="max-width: 100%; height: auto; margin: 0.5em 0;" '
                f'alt="Embedded image" />\n'
            )
        except Exception:
            # Skip unreadable images
            continue

    return images_html


# ---------------------------------------------------------------------------
# Text block extraction and linearization
# ---------------------------------------------------------------------------

def _extract_text_blocks(page: fitz.Page, table_rects: list[fitz.Rect]) -> list[TextBlock]:
    """
    Extract text blocks from a page, excluding areas covered by tables.

    Sorts by y-position (top to bottom) then x-position (left to right)
    to linearize multi-column layouts.
    """
    blocks: list[TextBlock] = []
    text_dict = page.get_text("dict", flags=fitz.TEXT_PRESERVE_WHITESPACE)

    for block in text_dict.get("blocks", []):
        if block.get("type") != 0:  # type 0 = text block
            continue

        block_bbox = (block["bbox"][0], block["bbox"][1], block["bbox"][2], block["bbox"][3])
        block_center_x = (block_bbox[0] + block_bbox[2]) / 2
        block_center_y = (block_bbox[1] + block_bbox[3]) / 2

        # Skip blocks that overlap with detected tables
        if _point_in_any_rect(block_center_x, block_center_y, table_rects):
            continue

        text_block = TextBlock(bbox=block_bbox)

        for line in block.get("lines", []):
            for span in line.get("spans", []):
                raw_text = span.get("text", "")
                if not raw_text:
                    continue
                font_name = span.get("font", "")
                font_size = span.get("size", 12.0)
                flags = span.get("flags", 0)
                # fitz flags: bit 0 = superscript, bit 1 = italic, bit 2 = serif,
                #             bit 3 = monospace, bit 4 = bold
                is_bold = bool(flags & (1 << 4)) or _is_bold_font(font_name)
                is_italic = bool(flags & (1 << 1)) or _is_italic_font(font_name)
                color = span.get("color", 0)
                origin = span.get("origin", (0, 0))

                text_block.spans.append(TextSpan(
                    text=raw_text,
                    font_name=font_name,
                    font_size=font_size,
                    is_bold=is_bold,
                    is_italic=is_italic,
                    color=color,
                    origin_x=origin[0],
                    origin_y=origin[1],
                ))

        if text_block.spans and text_block.full_text:
            blocks.append(text_block)

    # Sort: top to bottom (y), then left to right (x) for multi-column linearization
    blocks.sort(key=lambda b: (round(b.y_center / 10) * 10, b.x_start))
    return blocks


# ---------------------------------------------------------------------------
# Block-level HTML conversion
# ---------------------------------------------------------------------------

def _blocks_to_html(blocks: list[TextBlock], body_size: float) -> str:
    """Convert a list of TextBlocks into semantic HTML."""
    html_parts: list[str] = []
    i = 0

    while i < len(blocks):
        block = blocks[i]
        full_text = block.full_text

        if not full_text:
            i += 1
            continue

        # Determine the dominant font size and bold state for the block
        dominant_size = max(
            (s.font_size for s in block.spans if s.text.strip()),
            default=body_size,
        )
        dominant_bold = all(s.is_bold for s in block.spans if s.text.strip())

        # Check for heading
        level = _heading_level(dominant_size, dominant_bold, body_size, full_text)

        if level is not None:
            tag = f"h{level}"
            inline = _render_inline_html(block.spans)
            html_parts.append(f"<{tag}>{inline}</{tag}>")
            i += 1
            continue

        # Check for list items — collect consecutive list items
        list_type = _detect_list_type(full_text)
        if list_type is not None:
            items: list[str] = []
            current_type = list_type
            while i < len(blocks):
                blk = blocks[i]
                lt = _detect_list_type(blk.full_text)
                if lt != current_type:
                    break
                stripped = _strip_list_prefix(blk.full_text)
                items.append(f"  <li>{html.escape(stripped)}</li>")
                i += 1
            html_parts.append(f"<{current_type}>\n" + "\n".join(items) + f"\n</{current_type}>")
            continue

        # Default: paragraph
        inline = _render_inline_html(block.spans)
        html_parts.append(f"<p>{inline}</p>")
        i += 1

    return "\n".join(html_parts)


# ---------------------------------------------------------------------------
# Page processing
# ---------------------------------------------------------------------------

def _process_page(page: fitz.Page, doc: fitz.Document, body_size: float) -> str:
    """
    Process a single page and return its HTML content.

    Handles tables, images, and text blocks.
    """
    parts: list[str] = []

    # 1. Tables
    table_html, table_rects = _extract_tables_as_html(page)

    # 2. Images
    images_html = _extract_images_as_html(page, doc)

    # 3. Text blocks (excluding table areas)
    text_blocks = _extract_text_blocks(page, table_rects)
    text_html = _blocks_to_html(text_blocks, body_size)

    # Combine: text first, then tables, then images
    # (tables and images appear after the text from their page region)
    if text_html:
        parts.append(text_html)
    if table_html:
        parts.append(table_html)
    if images_html:
        parts.append(images_html)

    return "\n".join(parts)


def _is_scanned_page(page: fitz.Page) -> bool:
    """Check if a page has no extractable text (likely scanned/image-only)."""
    text = page.get_text("text").strip()
    return len(text) == 0


def _page_to_image_html(page: fitz.Page) -> str:
    """Render an entire page as a base64-encoded PNG image."""
    mat = fitz.Matrix(2.0, 2.0)  # 2x zoom for readability
    pix = page.get_pixmap(matrix=mat)
    img_bytes = pix.tobytes("png")
    b64 = base64.b64encode(img_bytes).decode("ascii")
    return (
        f'<img src="data:image/png;base64,{b64}" '
        f'style="max-width: 100%; height: auto; margin: 0.5em 0;" '
        f'alt="Scanned page image" />\n'
    )


# ---------------------------------------------------------------------------
# First pass: collect all spans for body-size analysis
# ---------------------------------------------------------------------------

def _collect_all_spans(doc: fitz.Document) -> list[TextSpan]:
    """Collect every text span across all pages for font analysis."""
    all_spans: list[TextSpan] = []
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text_dict = page.get_text("dict", flags=fitz.TEXT_PRESERVE_WHITESPACE)
        for block in text_dict.get("blocks", []):
            if block.get("type") != 0:
                continue
            for line in block.get("lines", []):
                for span in line.get("spans", []):
                    raw_text = span.get("text", "")
                    if not raw_text.strip():
                        continue
                    font_name = span.get("font", "")
                    font_size = span.get("size", 12.0)
                    flags = span.get("flags", 0)
                    is_bold = bool(flags & (1 << 4)) or _is_bold_font(font_name)
                    is_italic = bool(flags & (1 << 1)) or _is_italic_font(font_name)
                    color = span.get("color", 0)
                    origin = span.get("origin", (0, 0))
                    all_spans.append(TextSpan(
                        text=raw_text,
                        font_name=font_name,
                        font_size=font_size,
                        is_bold=is_bold,
                        is_italic=is_italic,
                        color=color,
                        origin_x=origin[0],
                        origin_y=origin[1],
                    ))
    return all_spans


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def convert_pdf_to_html(pdf_path: str) -> str:
    """
    Convert a PDF file to clean, structured, editable HTML.

    The output is a fragment (no doctype/head/body wrappers) suitable
    for injection into a contentEditable div.

    Args:
        pdf_path: Path to the PDF file.

    Returns:
        HTML string with semantic tags (<h1>-<h4>, <p>, <strong>, <em>,
        <ul>/<ol>, <table>, <img>).

    Raises:
        FileNotFoundError: If the PDF file does not exist.
        ValueError: If the file cannot be opened as a PDF.
    """
    # Validate path
    import os
    if not os.path.isfile(pdf_path):
        raise FileNotFoundError(f"PDF file not found: {pdf_path}")

    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        raise ValueError(f"Cannot open PDF: {pdf_path} — {e}") from e

    if doc.page_count == 0:
        doc.close()
        return '<p class="notice">This PDF has no pages.</p>'

    # First pass: analyze all spans to determine body font size
    all_spans = _collect_all_spans(doc)
    body_size = _compute_body_font_size(all_spans)

    # Check if entire document is scanned (no extractable text at all)
    total_text = sum(1 for s in all_spans if s.text.strip())
    is_fully_scanned = total_text == 0

    page_htmls: list[str] = []

    for page_num in range(doc.page_count):
        page = doc.load_page(page_num)

        if _is_scanned_page(page):
            # Scanned page: render as image
            page_img = _page_to_image_html(page)
            if is_fully_scanned and page_num == 0:
                page_htmls.append(
                    '<p class="notice">This PDF appears to be scanned/image-only. '
                    "Text extraction is not possible.</p>\n" + page_img
                )
            else:
                page_htmls.append(page_img)
            continue

        page_html = _process_page(page, doc, body_size)

        # Skip truly empty pages (no content generated)
        if not page_html.strip():
            continue

        page_htmls.append(page_html)

    doc.close()

    if not page_htmls:
        return '<p class="notice">This PDF produced no extractable content.</p>'

    # Join pages with page-break dividers
    page_break = '<div class="page-break" style="page-break-after: always;"></div>'
    return ("\n" + page_break + "\n").join(page_htmls)


# ---------------------------------------------------------------------------
# CLI entry point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python converter.py <path-to-pdf>", file=sys.stderr)
        sys.exit(1)

    path = sys.argv[1]
    try:
        result = convert_pdf_to_html(path)
        print(result)
    except FileNotFoundError as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    except ValueError as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
