// data/lessons.js
// =====================================================
// LESSON DATA — Add new lessons here
// Structure: levels[] > lessons[] > questions[]
// =====================================================

window.LESSON_DATA = {

  levels: [

    // ─── A1: COMPLETE BEGINNER ───────────────────────
    {
      id: 'A1',
      name: 'Beginner',
      nameDE: 'Anfänger',
      color: '#34D399',
      shadow: '#059669',
      icon: '🌱',
      lessons: [
        {
          id: 'a1_l1',
          title: 'Begrüßung',
          subtitle: 'Greetings',
          icon: '👋',
          unlocked: true,
          questions: [
            { emoji:'👋', german:'Hallo',          english:'Hello',           choices:['Hallo','Danke','Bitte','Tschüss'] },
            { emoji:'🌅', german:'Guten Morgen',   english:'Good morning',    choices:['Guten Abend','Guten Morgen','Gute Nacht','Hallo'] },
            { emoji:'🌆', german:'Guten Abend',    english:'Good evening',    choices:['Guten Tag','Guten Abend','Guten Morgen','Auf Wiedersehen'] },
            { emoji:'🌙', german:'Gute Nacht',     english:'Good night',      choices:['Gute Nacht','Guten Tag','Hallo','Danke'] },
            { emoji:'👋', german:'Auf Wiedersehen',english:'Goodbye',         choices:['Bitte','Tschüss','Auf Wiedersehen','Hallo'] },
          ]
        },
        {
          id: 'a1_l2',
          title: 'Zahlen 1–10',
          subtitle: 'Numbers',
          icon: '🔢',
          unlocked: false,
          questions: [
            { emoji:'1️⃣', german:'Eins',  english:'One',   choices:['Eins','Zwei','Drei','Vier'] },
            { emoji:'2️⃣', german:'Zwei',  english:'Two',   choices:['Eins','Zwei','Drei','Fünf'] },
            { emoji:'3️⃣', german:'Drei',  english:'Three', choices:['Zwei','Drei','Vier','Sechs'] },
            { emoji:'5️⃣', german:'Fünf',  english:'Five',  choices:['Vier','Fünf','Sechs','Sieben'] },
            { emoji:'🔟', german:'Zehn',  english:'Ten',   choices:['Acht','Neun','Zehn','Sieben'] },
          ]
        },
        {
          id: 'a1_l3',
          title: 'Farben',
          subtitle: 'Colors',
          icon: '🎨',
          unlocked: false,
          questions: [
            { emoji:'🔴', german:'Rot',    english:'Red',    choices:['Rot','Blau','Grün','Gelb'] },
            { emoji:'🔵', german:'Blau',   english:'Blue',   choices:['Rot','Blau','Grün','Weiß'] },
            { emoji:'🟢', german:'Grün',   english:'Green',  choices:['Grün','Gelb','Schwarz','Blau'] },
            { emoji:'🟡', german:'Gelb',   english:'Yellow', choices:['Gelb','Orange','Weiß','Rot'] },
            { emoji:'⚫', german:'Schwarz',english:'Black',  choices:['Weiß','Schwarz','Grau','Blau'] },
          ]
        },
        {
          id: 'a1_l4',
          title: 'Tiere',
          subtitle: 'Animals',
          icon: '🐾',
          unlocked: false,
          questions: [
            { emoji:'🐶', german:'Hund',   english:'Dog',   choices:['Hund','Katze','Vogel','Fisch'] },
            { emoji:'🐱', german:'Katze',  english:'Cat',   choices:['Hund','Katze','Maus','Vogel'] },
            { emoji:'🐦', german:'Vogel',  english:'Bird',  choices:['Vogel','Fisch','Hund','Pferd'] },
            { emoji:'🐟', german:'Fisch',  english:'Fish',  choices:['Fisch','Vogel','Maus','Katze'] },
            { emoji:'🐴', german:'Pferd',  english:'Horse', choices:['Pferd','Kuh','Schwein','Schaf'] },
          ]
        },
        {
          id: 'a1_l5',
          title: 'Familie',
          subtitle: 'Family',
          icon: '👨‍👩‍👧',
          unlocked: false,
          questions: [
            { emoji:'👩', german:'Mutter',   english:'Mother', choices:['Mutter','Vater','Kind','Bruder'] },
            { emoji:'👨', german:'Vater',    english:'Father', choices:['Mutter','Vater','Oma','Opa'] },
            { emoji:'👧', german:'Schwester',english:'Sister', choices:['Bruder','Schwester','Kind','Tante'] },
            { emoji:'👦', german:'Bruder',   english:'Brother',choices:['Bruder','Schwester','Onkel','Vater'] },
            { emoji:'👴', german:'Opa',      english:'Grandpa',choices:['Oma','Opa','Vater','Onkel'] },
          ]
        },
      ]
    },

    // ─── A2: ELEMENTARY ──────────────────────────────
    {
      id: 'A2',
      name: 'Elementary',
      nameDE: 'Grundkenntnisse',
      color: '#60A5FA',
      shadow: '#2563EB',
      icon: '📘',
      lessons: [
        {
          id: 'a2_l1',
          title: 'Essen & Trinken',
          subtitle: 'Food & Drink',
          icon: '🍽️',
          unlocked: false,
          questions: [
            { emoji:'🍞', german:'Brot',   english:'Bread',  choices:['Brot','Käse','Wurst','Milch'] },
            { emoji:'🥛', german:'Milch',  english:'Milk',   choices:['Wasser','Milch','Saft','Kaffee'] },
            { emoji:'🍎', german:'Apfel',  english:'Apple',  choices:['Apfel','Banane','Orange','Birne'] },
            { emoji:'☕', german:'Kaffee', english:'Coffee', choices:['Tee','Kaffee','Wasser','Saft'] },
            { emoji:'🧀', german:'Käse',   english:'Cheese', choices:['Käse','Wurst','Brot','Ei'] },
          ]
        },
        {
          id: 'a2_l2',
          title: 'Körper',
          subtitle: 'Body Parts',
          icon: '🧍',
          unlocked: false,
          questions: [
            { emoji:'👁️', german:'Auge',  english:'Eye',   choices:['Auge','Ohr','Nase','Mund'] },
            { emoji:'👂', german:'Ohr',   english:'Ear',   choices:['Auge','Ohr','Nase','Mund'] },
            { emoji:'👃', german:'Nase',  english:'Nose',  choices:['Nase','Mund','Kopf','Hand'] },
            { emoji:'🤚', german:'Hand',  english:'Hand',  choices:['Fuß','Hand','Bein','Arm'] },
            { emoji:'🦷', german:'Zähne', english:'Teeth', choices:['Lippen','Zähne','Haare','Hals'] },
          ]
        },
        {
          id: 'a2_l3',
          title: 'Kleidung',
          subtitle: 'Clothing',
          icon: '👕',
          unlocked: false,
          questions: [
            { emoji:'👕', german:'T-Shirt',english:'T-shirt', choices:['Hemd','T-Shirt','Jacke','Hose'] },
            { emoji:'👖', german:'Hose',   english:'Trousers', choices:['Rock','Hose','Mantel','Schuhe'] },
            { emoji:'👟', german:'Schuhe', english:'Shoes',    choices:['Schuhe','Socken','Stiefel','Hut'] },
            { emoji:'🧥', german:'Jacke',  english:'Jacket',   choices:['Jacke','Mantel','Hemd','Kleid'] },
            { emoji:'🎩', german:'Hut',    english:'Hat',      choices:['Hut','Mütze','Kappe','Schal'] },
          ]
        },
      ]
    },

    // ─── B1: INTERMEDIATE ────────────────────────────
    {
      id: 'B1',
      name: 'Intermediate',
      nameDE: 'Mittelstufe',
      color: '#F472B6',
      shadow: '#BE185D',
      icon: '📗',
      lessons: [
        {
          id: 'b1_l1',
          title: 'Im Restaurant',
          subtitle: 'At the Restaurant',
          icon: '🍴',
          unlocked: false,
          questions: [
            { emoji:'🍽️', german:'Ich möchte bestellen',   english:'I would like to order',    choices:['Ich möchte bestellen','Wo ist die Toilette?','Die Rechnung bitte','Guten Appetit'] },
            { emoji:'💰', german:'Die Rechnung bitte',      english:'The bill, please',          choices:['Die Rechnung bitte','Guten Appetit','Ich möchte bestellen','Entschuldigung'] },
            { emoji:'😋', german:'Guten Appetit',           english:'Enjoy your meal',           choices:['Guten Appetit','Danke schön','Auf Wiedersehen','Entschuldigung'] },
            { emoji:'🚽', german:'Wo ist die Toilette?',   english:'Where is the bathroom?',    choices:['Wo ist die Toilette?','Wo ist der Bahnhof?','Wo ist das Hotel?','Wo ist das Restaurant?'] },
            { emoji:'🥢', german:'Schmeckt es Ihnen?',     english:'Does it taste good?',       choices:['Schmeckt es Ihnen?','Wie viel kostet es?','Haben Sie Reservierung?','Was empfehlen Sie?'] },
          ]
        },
        {
          id: 'b1_l2',
          title: 'Berufe',
          subtitle: 'Professions',
          icon: '👷',
          unlocked: false,
          questions: [
            { emoji:'👨‍⚕️', german:'Arzt',      english:'Doctor',   choices:['Arzt','Lehrer','Ingenieur','Koch'] },
            { emoji:'👩‍🏫', german:'Lehrerin',   english:'Teacher',  choices:['Ärztin','Lehrerin','Ingenieurin','Köchin'] },
            { emoji:'👨‍🍳', german:'Koch',       english:'Chef',     choices:['Koch','Bäcker','Metzger','Kellner'] },
            { emoji:'👮', german:'Polizist',    english:'Police',   choices:['Polizist','Feuerwehrmann','Soldat','Pilot'] },
            { emoji:'✈️', german:'Pilot',       english:'Pilot',    choices:['Pilot','Kapitän','Ingenieur','Arzt'] },
          ]
        },
      ]
    },

    // ─── B2: UPPER INTERMEDIATE ──────────────────────
    {
      id: 'B2',
      name: 'Advanced',
      nameDE: 'Fortgeschritten',
      color: '#A78BFA',
      shadow: '#7C3AED',
      icon: '📙',
      lessons: [
        {
          id: 'b2_l1',
          title: 'Grammatik: Kasus',
          subtitle: 'Grammar: Cases',
          icon: '📝',
          unlocked: false,
          questions: [
            { emoji:'📖', german:'Nominativ',  english:'Nominative (subject)',        choices:['Nominativ','Akkusativ','Dativ','Genitiv'] },
            { emoji:'📖', german:'Akkusativ',  english:'Accusative (direct object)',  choices:['Nominativ','Akkusativ','Dativ','Genitiv'] },
            { emoji:'📖', german:'Dativ',      english:'Dative (indirect object)',    choices:['Nominativ','Dativ','Akkusativ','Genitiv'] },
            { emoji:'📖', german:'Genitiv',    english:'Genitive (possession)',       choices:['Genitiv','Nominativ','Akkusativ','Dativ'] },
            { emoji:'📖', german:'der → den',  english:'Masculine → Accusative',     choices:['der → den','der → dem','der → des','der → die'] },
          ]
        },
      ]
    },

  ] // end levels

}; // end LESSON_DATA
