import json
import random

lessons_raw = [
    ("Hallo! Ich bin Nicole", "Greetings", "👋", [
        ("👋", "Hallo", "Hello"),
        ("🌅", "Guten Morgen", "Good morning"),
        ("☀️", "Guten Tag", "Good day"),
        ("🌙", "Gute Nacht", "Good night"),
        ("🤝", "Wie heißen Sie?", "What is your name? (formal)"),
        ("🙋‍♂️", "Ich bin...", "I am..."),
        ("🌍", "Woher kommen Sie?", "Where do you come from?"),
        ("🇩🇪", "Ich komme aus Deutschland", "I come from Germany")
    ]),
    ("Ich bin Journalistin", "Professions", "💼", [
        ("💼", "der Beruf", "Profession"),
        ("👨‍🏫", "der Lehrer", "Teacher (m)"),
        ("👩‍🏫", "die Lehrerin", "Teacher (f)"),
        ("🩺", "der Arzt", "Doctor (m)"),
        ("💻", "der IT-Spezialist", "IT Specialist"),
        ("📝", "die Sekretärin", "Secretary (f)"),
        ("🎓", "der Student", "University Student (m)"),
        ("🏗️", "der Architekt", "Architect (m)")
    ]),
    ("Das ist meine Mutter", "Family", "👨‍👩‍👧", [
        ("👨‍👩‍👧", "die Familie", "Family"),
        ("👩", "die Mutter", "Mother"),
        ("👨", "der Vater", "Father"),
        ("👧", "die Schwester", "Sister"),
        ("👦", "der Bruder", "Brother"),
        ("👵", "die Oma", "Grandma"),
        ("👴", "der Opa", "Grandpa"),
        ("👶", "das Kind", "Child")
    ]),
    ("Der Schreibtisch ist schön", "Furniture", "🪑", [
        ("🪑", "der Stuhl", "Chair"),
        ("🛋️", "das Sofa", "Sofa"),
        ("🛏️", "das Bett", "Bed"),
        ("🖼️", "das Bild", "Picture"),
        ("🗄️", "der Schrank", "Closet/Cupboard"),
        ("🪴", "die Pflanze", "Plant"),
        ("💡", "die Lampe", "Lamp"),
        ("🖥️", "der Schreibtisch", "Desk")
    ]),
    ("Was ist das?", "Office items", "✏️", [
        ("✏️", "der Bleistift", "Pencil"),
        ("🖊️", "der Kuli", "Ballpoint pen"),
        ("📓", "das Heft", "Notebook"),
        ("📚", "das Buch", "Book"),
        ("📐", "das Lineal", "Ruler"),
        ("✂️", "die Schere", "Scissors"),
        ("🧽", "der Radiergummi", "Eraser"),
        ("👓", "die Brille", "Glasses")
    ]),
    ("Ich habe Zeit", "Time & Hobbies", "⏱️", [
        ("⏱️", "die Zeit", "Time"),
        ("⚽", "Fußball spielen", "Play football"),
        ("📚", "lesen", "Read"),
        ("🎵", "Musik hören", "Listen to music"),
        ("🍳", "kochen", "Cook"),
        ("🏊", "schwimmen", "Swim"),
        ("📅", "das Wochenende", "Weekend"),
        ("🎉", "die Party", "Party")
    ]),
    ("Können Sie mir helfen?", "Helping & Modal Verbs", "🤝", [
        ("🤝", "helfen", "Help"),
        ("🗣️", "sprechen", "Speak"),
        ("🇩🇪", "Deutsch", "German"),
        ("🇬🇧", "Englisch", "English"),
        ("❓", "die Frage", "Question"),
        ("✅", "die Antwort", "Answer"),
        ("👍", "können", "Can / Be able to"),
        ("❌", "kein Problem", "No problem")
    ]),
    ("Was essen Sie gern?", "Food & Drink", "🍽️", [
        ("🍽️", "das Essen", "Food"),
        ("🍞", "das Brot", "Bread"),
        ("🧀", "der Käse", "Cheese"),
        ("🥩", "das Fleisch", "Meat"),
        ("🍎", "der Apfel", "Apple"),
        ("☕", "der Kaffee", "Coffee"),
        ("🥛", "die Milch", "Milk"),
        ("💧", "das Wasser", "Water")
    ]),
    ("Wir machen einen Ausflug", "Trips", "🏞️", [
        ("🏞️", "der Ausflug", "Trip/Excursion"),
        ("🚂", "der Zug", "Train"),
        ("🚌", "der Bus", "Bus"),
        ("🚗", "das Auto", "Car"),
        ("🚲", "das Fahrrad", "Bicycle"),
        ("🎫", "das Ticket", "Ticket"),
        ("🎒", "das Gepäck", "Luggage"),
        ("☀️", "das Wetter", "Weather")
    ]),
    ("Das Fest beginnt um 19 Uhr", "Time & Festivities", "🕰️", [
        ("🕰️", "die Uhr", "Clock/Watch"),
        ("⏱️", "die Stunde", "Hour"),
        ("⏲️", "die Minute", "Minute"),
        ("🗓️", "der Tag", "Day"),
        ("📅", "der Monat", "Month"),
        ("🎆", "das Fest", "Festival/Party"),
        ("🎁", "das Geschenk", "Gift"),
        ("🎂", "der Geburtstag", "Birthday")
    ]),
    ("Ich stehe um sieben Uhr auf", "Daily Routine", "⏰", [
        ("⏰", "aufstehen", "Wake up / Get up"),
        ("🚿", "duschen", "Shower"),
        ("🥐", "frühstücken", "Eat breakfast"),
        ("💼", "arbeiten", "Work"),
        ("🛒", "einkaufen", "Shop / Buy groceries"),
        ("📺", "fernsehen", "Watch TV"),
        ("🛏️", "schlafen gehen", "Go to bed"),
        ("😴", "schlafen", "Sleep")
    ]),
    ("Wir haben den Test geschrieben", "Perfect Tense", "📝", [
        ("📝", "schreiben", "Write"),
        ("📖", "lesen", "Read"),
        ("🗣️", "sagen", "Say"),
        ("👂", "hören", "Hear / Listen"),
        ("👁️", "sehen", "See"),
        ("🏃", "gehen", "Go / Walk"),
        ("🚗", "fahren", "Drive / Ride"),
        ("📚", "lernen", "Learn / Study")
    ]),
    ("Der Weg zum Bahnhof", "City & Directions", "🗺️", [
        ("🗺️", "der Weg", "Path / Way"),
        ("🚉", "der Bahnhof", "Train station"),
        ("✈️", "der Flughafen", "Airport"),
        ("🏨", "das Hotel", "Hotel"),
        ("🏛️", "das Museum", "Museum"),
        ("🏦", "die Bank", "Bank"),
        ("⬅️", "links", "Left"),
        ("➡️", "rechts", "Right")
    ]),
    ("In der Wohnung", "Apartment", "🏠", [
        ("🏠", "die Wohnung", "Apartment"),
        ("🛋️", "das Wohnzimmer", "Living room"),
        ("🍳", "die Küche", "Kitchen"),
        ("🚿", "das Bad", "Bathroom"),
        ("🛏️", "das Schlafzimmer", "Bedroom"),
        ("🚪", "die Tür", "Door"),
        ("🪟", "das Fenster", "Window"),
        ("🪜", "die Treppe", "Stairs")
    ]),
    ("Körper und Gesundheit", "Body & Health", "🩺", [
        ("👁️", "das Auge", "Eye"),
        ("👂", "das Ohr", "Ear"),
        ("👃", "die Nase", "Nose"),
        ("👄", "der Mund", "Mouth"),
        ("🦷", "der Zahn", "Tooth"),
        ("🧠", "der Kopf", "Head"),
        ("🤚", "die Hand", "Hand"),
        ("🤒", "krank", "Sick")
    ]),
    ("Beim Arzt", "At the doctor", "🏥", [
        ("🏥", "das Krankenhaus", "Hospital"),
        ("💊", "die Medizin", "Medicine"),
        ("🤕", "der Schmerz", "Pain"),
        ("🤧", "der Husten", "Cough"),
        ("🌡️", "das Fieber", "Fever"),
        ("🛌", "im Bett bleiben", "Stay in bed"),
        ("🍵", "der Tee", "Tea"),
        ("👩‍⚕️", "die Praxis", "Doctor's office")
    ]),
    ("Im Kaufhaus", "Shopping & Clothes", "🛍️", [
        ("🛍️", "das Kaufhaus", "Department store"),
        ("👕", "das T-Shirt", "T-Shirt"),
        ("👖", "die Hose", "Pants / Trousers"),
        ("👗", "das Kleid", "Dress"),
        ("👞", "der Schuh", "Shoe"),
        ("🧥", "die Jacke", "Jacket"),
        ("💶", "teuer", "Expensive"),
        ("💰", "billig", "Cheap")
    ]),
    ("Das Wetter", "Weather", "⛅", [
        ("⛅", "das Wetter", "Weather"),
        ("☀️", "die Sonne", "Sun"),
        ("🌧️", "der Regen", "Rain"),
        ("❄️", "der Schnee", "Snow"),
        ("🌬️", "der Wind", "Wind"),
        ("☁️", "die Wolke", "Cloud"),
        ("🌡️", "warm", "Warm"),
        ("🥶", "kalt", "Cold")
    ]),
    ("Am Wochenende", "Weekend Activities", "🎉", [
        ("🎉", "feiern", "Celebrate / Party"),
        ("💃", "tanzen", "Dance"),
        ("🎤", "singen", "Sing"),
        ("🏕️", "zelten", "Camp"),
        ("🥩", "grillen", "Barbecue"),
        ("📸", "fotografieren", "Take photos"),
        ("🎮", "spielen", "Play"),
        ("😊", "Spaß haben", "Have fun")
    ]),
    ("Im Restaurant", "Restaurant", "🍴", [
        ("🍴", "das Restaurant", "Restaurant"),
        ("📜", "die Speisekarte", "Menu"),
        ("👨‍🍳", "der Kellner", "Waiter"),
        ("🍽️", "bestellen", "Order"),
        ("🥗", "der Salat", "Salad"),
        ("🍲", "die Suppe", "Soup"),
        ("💵", "bezahlen", "Pay"),
        ("🤑", "das Trinkgeld", "Tip")
    ]),
    ("Meine Sachen", "My Things", "🎒", [
        ("🎒", "die Tasche", "Bag"),
        ("🔑", "der Schlüssel", "Key"),
        ("📱", "das Handy", "Mobile phone"),
        ("💻", "der Laptop", "Laptop"),
        ("👓", "die Brille", "Glasses"),
        ("👛", "der Geldbeutel", "Wallet"),
        ("💳", "die Kreditkarte", "Credit card"),
        ("📖", "das Wörterbuch", "Dictionary")
    ]),
    ("Regeln und Verbote", "Rules & Prohibitions", "🚫", [
        ("🚫", "verboten", "Forbidden"),
        ("🚬", "rauchen", "Smoke"),
        ("📵", "telefonieren", "Make a phone call"),
        ("📸", "fotografieren", "Take photos"),
        ("🤫", "leise", "Quiet"),
        ("🔊", "laut", "Loud"),
        ("🛑", "halten", "Stop"),
        ("⚠️", "Achtung", "Attention / Warning")
    ]),
    ("Beruf und Arbeit", "Jobs & Work", "💼", [
        ("💼", "die Arbeit", "Work / Job"),
        ("🏢", "die Firma", "Company"),
        ("👥", "der Kollege", "Colleague"),
        ("🖥️", "das Büro", "Office"),
        ("📧", "die E-Mail", "E-Mail"),
        ("📞", "anrufen", "Call (phone)"),
        ("📅", "der Termin", "Appointment"),
        ("⏰", "die Pause", "Break")
    ]),
    ("Pläne für die Zukunft", "Future Plans", "🚀", [
        ("🚀", "die Zukunft", "Future"),
        ("✈️", "reisen", "Travel"),
        ("🏡", "umziehen", "Move (house)"),
        ("🎓", "studieren", "Study (university)"),
        ("💑", "heiraten", "Marry"),
        ("👶", "Kinder bekommen", "Have children"),
        ("💰", "Geld verdienen", "Earn money"),
        ("🌟", "glücklich", "Happy")
    ])
]

# Build JSON structure
data = {
    "id": "A1",
    "name": "Beginner (Menschen A1)",
    "nameDE": "Anfänger",
    "color": "#34D399",
    "shadow": "#059669",
    "icon": "🌱",
    "lessons": []
}

for idx, (title, subtitle, icon, questions_raw) in enumerate(lessons_raw):
    words_in_lesson = [q[1] for q in questions_raw]
    
    lesson = {
        "id": f"a1_l{idx+1}",
        "title": f"Lektion {idx+1}: {title}",
        "subtitle": subtitle,
        "icon": icon,
        "unlocked": True if idx == 0 else False,
        "questions": []
    }
    
    for emoji, german, english in questions_raw:
        distractors = [w for w in words_in_lesson if w != german]
        random.shuffle(distractors)
        choices = distractors[:3] + [german]
        random.shuffle(choices)
        
        lesson["questions"].append({
            "emoji": emoji,
            "german": german,
            "english": english,
            "choices": choices
        })
        
    data["lessons"].append(lesson)

js_content = f"// A1 — Beginner (24 Lektionen based on Menschen A1)\nwindow.LEVEL_A1 = {json.dumps(data, indent=2, ensure_ascii=False)};\n"

with open("data/a1.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated a1.js with {len(data['lessons'])} lessons.")
