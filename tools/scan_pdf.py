import fitz # PyMuPDF
import sys

pdf_path = sys.argv[1]
doc = fitz.open(pdf_path)

print(f"Loaded {pdf_path} with {len(doc)} pages.")

# Search for pages containing "Lernwortschatz" or similar
target_pages = []
for i in range(len(doc)):
    page = doc[i]
    text = page.get_text()
    if "Lernwortschatz" in text or "Wortschatz" in text:
        target_pages.append(i)

print("Pages with 'Lernwortschatz' or 'Wortschatz':", target_pages)
if len(target_pages) > 0:
    sample_page = target_pages[0]
    print(f"\n--- Snippet of page {sample_page} ---")
    print(doc[sample_page].get_text()[:500])
