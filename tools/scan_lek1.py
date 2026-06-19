import fitz
import sys

doc = fitz.open(sys.argv[1])
# "Lernwortschatz" for Lektion 1 is usually around page 12-14 in Arbeitsbuch
for i in range(8, 16):
    text = doc[i].get_text()
    if "Lernwortschatz" in text or "Lektion 1" in text:
        print(f"--- PAGE {i} ---")
        print(text[:1000])
