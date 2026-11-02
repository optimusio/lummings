"""Flag retired public names in user-facing text. Filenames and IDs stay."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
# Compatibility paths: filenames and internal IDs may still say lila/pip.
ALLOW_SUFFIXES = {".json", ".jsonl", ".py", ".ts", ".tsx", ".js", ".mjs", ".rs", ".toml"}
ALLOW_PATH_PARTS = (
    "lila.json",
    "pip.json",
    "lila-portrait",
    "pip-portrait",
    "modelfiles/",
    "dialogue/",
)


def _allowed(path: Path) -> bool:
    s = str(path).replace("\\", "/")
    if any(part in s for part in ALLOW_PATH_PARTS):
        return True
    return path.suffix in ALLOW_SUFFIXES


def test_svg_aria_labels_use_locked_names():
    bad = []
    for svg in ROOT.rglob("*.svg"):
        text = svg.read_text(encoding="utf-8", errors="replace")
        if 'aria-label="Lila' in text or 'aria-label="Pip' in text:
            bad.append(str(svg.relative_to(ROOT)))
    assert not bad, f"retired names in SVG aria-labels: {bad}"


def test_public_html_does_not_show_retired_names():
    bad = []
    for html in list(ROOT.rglob("*.html")) + list(ROOT.rglob("*.svg")):
        if _allowed(html):
            continue
        text = html.read_text(encoding="utf-8", errors="replace")
        # Skip pure filename mentions; flag visible public names.
        if ">Lila<" in text or ">Pip<" in text or "Lila and Pip" in text and "retired" not in text.lower():
            if "retired" in text.lower():
                continue
            bad.append(str(html.relative_to(ROOT)))
    assert not bad, f"retired names in public markup: {bad}"
