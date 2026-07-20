# /// script
# requires-python = ">=3.9"
# dependencies = ["qrcode[pil]", "opencv-python-headless", "numpy"]
# ///
"""Generate a brand-styled QR PNG for the decks, then verify it decodes back.

The style is locked to match the `link-01` QR pages in the decks (reverse-
engineered from the original `qr-slides.png`, see DECISIONS「視覺線」):

    error correction  L
    box_size          24   (module pixel size)
    border            3    (quiet-zone modules)
    modules           #37352F  on  #FFFFFF

Only the payload URL changes between QR pages, so callers pass a URL and an
output path; everything visual stays constant. After writing, the script
re-decodes the PNG with OpenCV and asserts it equals the input URL — QR params
were miscalculated by hand once, so generation without a decode check is not
trusted here.

Usage:
    uv run scripts/gen-qr.py <url> <output.png>

Example:
    uv run scripts/gen-qr.py \\
      https://github.com/seon-kuraito/github-actions-cicd-course/tree/main/W1/templates/skill-dashboard \\
      apps/week-1/public/qr-dashboard.png
"""
import sys

import cv2
import qrcode
from qrcode.constants import ERROR_CORRECT_L

FILL = "#37352F"
BACK = "#FFFFFF"
BOX_SIZE = 24
BORDER = 3


def generate(url: str, out: str) -> None:
    qr = qrcode.QRCode(error_correction=ERROR_CORRECT_L, box_size=BOX_SIZE, border=BORDER)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color=FILL, back_color=BACK).convert("RGB")
    img.save(out)

    decoded, _, _ = cv2.QRCodeDetector().detectAndDecode(cv2.imread(out))
    modules = 4 * qr.version + 17
    print(f"wrote {out}  (v{qr.version}, {modules}x{modules} modules, {img.size[0]}px)")
    if decoded == url:
        print(f"decode OK: {decoded}")
    else:
        print(f"decode MISMATCH — got: {decoded!r}", file=sys.stderr)
        raise SystemExit(1)


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("usage: uv run scripts/gen-qr.py <url> <output.png>")
    generate(sys.argv[1], sys.argv[2])


if __name__ == "__main__":
    main()
