#!/usr/bin/env python3
"""Mount-aware link audit for the Lummings site.

The site is published by GitHub Pages from the ``docs/`` directory and is
served from the ``/lummings/`` mount of the user site, e.g.

    https://optimusio.github.io/lummings/          <- site root  (== docs/)
    https://optimusio.github.io/lummings/shop/     <- docs/shop/

That mount matters. A root-absolute reference such as ``href="/shop/"``
resolves to ``https://optimusio.github.io/shop/`` - the *user* site, which does
not exist - so it 404s. Every reference therefore has to stay inside the
mount, and every target has to exist.

This script walks the local ``docs/`` tree, resolves every ``src``/``href``
the way a browser would against the deployed URL, and reports:

  * refs that escape the mount (they will 404 in production)
  * refs whose target does not exist in the published tree

Exit code 0 = clean, 1 = broken refs found.

Usage:
    python scripts/audit_site_links.py [--mount /lummings/] [--json]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
DOCS = REPO / "docs"
REF_RE = re.compile(r'(?:src|href)="([^"]+)"')
# A past bad rewrite produced tags like <a /shop/="/lummingshref">: the link silently does nothing.
# Any tag carrying an attribute that starts with "/" is malformed.
MALFORMED_RE = re.compile(r'<[a-zA-Z][^<>]*?\s(/[^\s="<>]*)="[^"]*"')
SKIP_PREFIXES = ("http", "#", "mailto:", "data:", "javascript:", "//")


def resolve(page_url: str, ref: str) -> str:
    """Resolve `ref` against `page_url` the way a browser would."""
    if ref.startswith("/"):
        return ref.split("?")[0].split("#")[0]
    joined = page_url.rsplit("/", 1)[0] + "/" + ref
    parts: list[str] = []
    for seg in joined.split("/"):
        if seg in ("", "."):
            continue
        if seg == "..":
            if parts:
                parts.pop()
        else:
            parts.append(seg)
    return "/" + "/".join(parts)


def target_exists(rel_path: str) -> bool:
    """Does the target exist inside the published tree (relative to docs/)?"""
    rel = rel_path.strip("/")
    if not rel:
        return (DOCS / "index.html").exists()
    p = DOCS / rel
    if rel_path.endswith("/"):
        return (p / "index.html").exists()
    return p.exists()


def audit(mount: str) -> list[dict]:
    problems: list[dict] = []
    for f in sorted(DOCS.rglob("*.html")):
        page_url = mount + f.relative_to(DOCS).as_posix().replace("\\", "/")
        text = f.read_text(encoding="utf-8", errors="ignore")
        for bad in MALFORMED_RE.findall(text):
            problems.append({
                "page": page_url[len(mount):], "ref": bad, "resolves_to": "(none)",
                "issue": "malformed tag: attribute name starts with '/' so the link or asset never loads",
            })
        for raw in REF_RE.findall(text):
            ref = raw.strip()
            if not ref or ref.startswith(SKIP_PREFIXES):
                continue
            rel = ref.split("?")[0].split("#")[0]
            if not rel:
                continue
            site_path = resolve(page_url, rel)
            if not site_path.startswith(mount):
                problems.append({
                    "page": page_url[len(mount):], "ref": ref, "resolves_to": site_path,
                    "issue": "escapes the site mount - will 404 in production",
                })
                continue
            if not target_exists(site_path[len(mount):]):
                problems.append({
                    "page": page_url[len(mount):], "ref": ref, "resolves_to": site_path,
                    "issue": "target does not exist in the published tree",
                })
    return problems


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--mount", default="/lummings/",
                    help="URL path the site is served from (default: /lummings/)")
    ap.add_argument("--json", action="store_true", help="machine-readable output")
    args = ap.parse_args()

    mount = args.mount if args.mount.endswith("/") else args.mount + "/"
    problems = audit(mount)

    if args.json:
        print(json.dumps({"mount": mount, "problems": problems, "count": len(problems)}, indent=2))
        return 1 if problems else 0

    pages = len(list(DOCS.rglob("*.html")))
    if not problems:
        print(f"site link audit: clean ({pages} pages, mount {mount})")
        return 0
    print(f"site link audit: {len(problems)} problem(s) across {pages} pages")
    for p in problems:
        print(f"  {p['page']}: {p['ref']}  ->  {p['resolves_to']}  [{p['issue']}]")
    return 1


if __name__ == "__main__":
    sys.exit(main())
