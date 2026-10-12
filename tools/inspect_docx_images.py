from __future__ import annotations

import argparse
import sys
from pathlib import Path
from zipfile import ZipFile

from lxml import etree


NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "pr": "http://schemas.openxmlformats.org/package/2006/relationships",
}


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser()
    parser.add_argument("docx", type=Path)
    parser.add_argument("--limit", type=int, default=120)
    args = parser.parse_args()

    with ZipFile(args.docx) as archive:
        document = etree.fromstring(archive.read("word/document.xml"))
        rels = etree.fromstring(archive.read("word/_rels/document.xml.rels"))
        targets = {
            rel.get("Id"): rel.get("Target")
            for rel in rels.findall("pr:Relationship", NS)
        }

    shown = 0
    for index, paragraph in enumerate(document.findall(".//w:body/w:p", NS), start=1):
        text = "".join(paragraph.xpath(".//w:t/text()", namespaces=NS)).strip()
        image_ids = paragraph.xpath(".//a:blip/@r:embed", namespaces=NS)
        if not text and not image_ids:
            continue
        images = [targets.get(image_id, image_id) for image_id in image_ids]
        marker = f" images={images}" if images else ""
        print(f"{index:04d}{marker} :: {text[:300]}")
        shown += 1
        if shown >= args.limit:
            break


if __name__ == "__main__":
    main()
