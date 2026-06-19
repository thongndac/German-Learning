// A2 — Elementary (24 lessons)
window.LEVEL_A2 = {
  id:'A2', name:'Elementary', nameDE:'Grundkenntnisse', color:'#60A5FA', shadow:'#2563EB', icon:'📘',
  lessons:[
    // --- PHẦN 1: ĐỜI SỐNG & SINH HOẠT ---
    { id:'a2_l1', title:'Beruf', subtitle:'Professions', icon:'💼', unlocked:false, questions:[
      {emoji:'👨‍⚕️',german:'Arzt',english:'Doctor',choices:['Arzt','Lehrer','Koch','Fahrer']},
      {emoji:'👩‍🏫',german:'Lehrerin',english:'Teacher (f)',choices:['Lehrerin','Ärztin','Köchin','Malerin']},
      {emoji:'🏢',german:'Büro',english:'Office',choices:['Büro','Krankenhaus','Schule','Fabrik']},
      {emoji:'💻',german:'Computer',english:'Computer',choices:['Computer','Drucker','Telefon','Maus']},
      {emoji:'📞',german:'Anrufen',english:'To call',choices:['Anrufen','Schreiben','Lesen','Hören']},
      {emoji:'⏰',german:'Feierabend',english:'End of work',choices:['Feierabend','Pause','Urlaub','Wochenende']}
    ]},
    { id:'a2_l2', title:'Am Arbeitsplatz', subtitle:'At workplace', icon:'📠', unlocked:false, questions:[
      {emoji:'📧',german:'E-Mail',english:'Email',choices:['E-Mail','Brief','Paket','Postkarte']},
      {emoji:'🖨️',german:'Drucker',english:'Printer',choices:['Drucker','Bildschirm','Tastatur','Maus']},
      {emoji:'📅',german:'Termin',english:'Appointment',choices:['Termin','Pause','Feier','Urlaub']},
      {emoji:'🤝',german:'Besprechung',english:'Meeting',choices:['Besprechung','Party','Spiel','Pause']},
      {emoji:'📝',german:'Notiz',english:'Note',choices:['Notiz','Buch','Brief','Zeitung']},
      {emoji:'🗣️',german:'Kollege',english:'Colleague',choices:['Kollege','Chef','Kunde','Gast']}
    ]},
    { id:'a2_l3', title:'Krankheit', subtitle:'Illness', icon:'🤒', unlocked:false, questions:[
      {emoji:'🤒',german:'Fieber',english:'Fever',choices:['Fieber','Husten','Schnupfen','Schmerz']},
      {emoji:'🤧',german:'Schnupfen',english:'Cold',choices:['Schnupfen','Husten','Fieber','Allergie']},
      {emoji:'🗣️',german:'Husten',english:'Cough',choices:['Husten','Schmerz','Schnupfen','Fieber']},
      {emoji:'🤕',german:'Kopfschmerzen',english:'Headache',choices:['Kopfschmerzen','Bauchschmerzen','Zahnschmerzen','Rückenschmerzen']},
      {emoji:'💊',german:'Medikament',english:'Medicine',choices:['Medikament','Pflaster','Salbe','Spritze']},
      {emoji:'🛌',german:'Sich ausruhen',english:'To rest',choices:['Sich ausruhen','Arbeiten','Laufen','Spielen']}
    ]},
    { id:'a2_l4', title:'Beim Arzt', subtitle:'At the doctor', icon:'🏥', unlocked:false, questions:[
      {emoji:'🏥',german:'Krankenhaus',english:'Hospital',choices:['Krankenhaus','Apotheke','Praxis','Klinik']},
      {emoji:'🩺',german:'Untersuchen',english:'To examine',choices:['Untersuchen','Operieren','Spritzen','Behandeln']},
      {emoji:'🩹',german:'Pflaster',english:'Plaster',choices:['Pflaster','Verband','Salbe','Tablette']},
      {emoji:'⚕️',german:'Apotheke',english:'Pharmacy',choices:['Apotheke','Krankenhaus','Drogerie','Supermarkt']},
      {emoji:'📄',german:'Rezept',english:'Prescription',choices:['Rezept','Rechnung','Quittung','Notiz']},
      {emoji:'💉',german:'Spritze',english:'Injection',choices:['Spritze','Tablette','Tropfen','Salbe']}
    ]},
    { id:'a2_l5', title:'Wohnen', subtitle:'Living', icon:'🏠', unlocked:false, questions:[
      {emoji:'🏠',german:'Haus',english:'House',choices:['Haus','Wohnung','Zimmer','Balkon']},
      {emoji:'🏢',german:'Wohnung',english:'Apartment',choices:['Wohnung','Haus','Garten','Keller']},
      {emoji:'🔑',german:'Schlüssel',english:'Key',choices:['Schlüssel','Schloss','Tür','Fenster']},
      {emoji:'🛋️',german:'Möbel',english:'Furniture',choices:['Möbel','Teppich','Lampe','Sofa']},
      {emoji:'📦',german:'Umzug',english:'Moving',choices:['Umzug','Miete','Vertrag','Kaution']},
      {emoji:'💶',german:'Miete',english:'Rent',choices:['Miete','Kauf','Strom','Wasser']}
    ]},
    { id:'a2_l6', title:'Zimmer', subtitle:'Rooms', icon:'🛋️', unlocked:false, questions:[
      {emoji:'🍳',german:'Küche',english:'Kitchen',choices:['Küche','Bad','Schlafzimmer','Wohnzimmer']},
      {emoji:'🚿',german:'Badezimmer',english:'Bathroom',choices:['Badezimmer','Küche','Flur','Keller']},
      {emoji:'🛏️',german:'Schlafzimmer',english:'Bedroom',choices:['Schlafzimmer','Wohnzimmer','Büro','Balkon']},
      {emoji:'🛋️',german:'Wohnzimmer',english:'Living room',choices:['Wohnzimmer','Küche','Bad','Flur']},
      {emoji:'🪴',german:'Balkon',english:'Balcony',choices:['Balkon','Garten','Terrasse','Dach']},
      {emoji:'🚪',german:'Flur',english:'Hallway',choices:['Flur','Keller','Dach','Balkon']}
    ]},
    { id:'a2_l7', title:'Alltag', subtitle:'Daily routine', icon:'⏰', unlocked:false, questions:[
      {emoji:'🥱',german:'Aufwachen',english:'Wake up',choices:['Aufwachen','Schlafen','Essen','Trinken']},
      {emoji:'🚿',german:'Duschen',english:'To shower',choices:['Duschen','Baden','Waschen','Putzen']},
      {emoji:'🦷',german:'Zähneputzen',english:'Brush teeth',choices:['Zähneputzen','Kämmen','Schminken','Rasieren']},
      {emoji:'👕',german:'Sich anziehen',english:'To get dressed',choices:['Sich anziehen','Ausziehen','Umziehen','Waschen']},
      {emoji:'🍳',german:'Frühstücken',english:'Eat breakfast',choices:['Frühstücken','Mittagessen','Abendessen','Kochen']},
      {emoji:'🏃',german:'Beeilen',english:'To hurry',choices:['Beeilen','Warten','Laufen','Bleiben']}
    ]},
    { id:'a2_l8', title:'Medien', subtitle:'Media', icon:'📱', unlocked:false, questions:[
      {emoji:'📺',german:'Fernseher',english:'TV',choices:['Fernseher','Radio','Computer','Handy']},
      {emoji:'📻',german:'Radio',english:'Radio',choices:['Radio','Fernseher','Tablet','Laptop']},
      {emoji:'📱',german:'Handy',english:'Mobile phone',choices:['Handy','Telefon','Tablet','Computer']},
      {emoji:'📰',german:'Zeitung',english:'Newspaper',choices:['Zeitung','Zeitschrift','Buch','Brief']},
      {emoji:'🌐',german:'Internet',english:'Internet',choices:['Internet','Netzwerk','WLAN','Computer']},
      {emoji:'🎮',german:'Videospiel',english:'Video game',choices:['Videospiel','Brettspiel','Kartenspiel','Sport']}
    ]},

    // --- PHẦN 2: QUÁ KHỨ & XÃ HỘI ---
    { id:'a2_l9', title:'Gestern', subtitle:'Yesterday', icon:'🕰️', unlocked:false, questions:[
      {emoji:'🕰️',german:'Gestern',english:'Yesterday',choices:['Gestern','Heute','Morgen','Früher']},
      {emoji:'📅',german:'Letzte Woche',english:'Last week',choices:['Letzte Woche','Nächste Woche','Dieses Jahr','Heute']},
      {emoji:'🚶',german:'Ich bin gegangen',english:'I went',choices:['Ich bin gegangen','Ich gehe','Ich werde gehen','Ich ging']},
      {emoji:'👀',german:'Ich habe gesehen',english:'I saw',choices:['Ich habe gesehen','Ich sehe','Ich sah','Ich werde sehen']},
      {emoji:'🍔',german:'Ich habe gegessen',english:'I ate',choices:['Ich habe gegessen','Ich esse','Ich aß','Ich werde essen']},
      {emoji:'🗣️',german:'Ich habe gesagt',english:'I said',choices:['Ich habe gesagt','Ich sage','Ich sagte','Ich werde sagen']}
    ]},
    { id:'a2_l10', title:'Erinnerungen', subtitle:'Memories', icon:'💭', unlocked:false, questions:[
      {emoji:'💭',german:'Erinnerung',english:'Memory',choices:['Erinnerung','Gedanke','Traum','Idee']},
      {emoji:'👶',german:'Als Kind',english:'As a child',choices:['Als Kind','Als Erwachsener','Früher','Heute']},
      {emoji:'🏫',german:'Schule',english:'School',choices:['Schule','Universität','Kindergarten','Arbeit']},
      {emoji:'🚴',german:'Fahrrad fahren',english:'Ride a bike',choices:['Fahrrad fahren','Auto fahren','Laufen','Schwimmen']},
      {emoji:'⚽',german:'Spielen',english:'To play',choices:['Spielen','Lernen','Arbeiten','Schlafen']},
      {emoji:'📸',german:'Foto',english:'Photo',choices:['Foto','Bild','Kamera','Video']}
    ]},
    { id:'a2_l11', title:'Reisen', subtitle:'Travel', icon:'✈️', unlocked:false, questions:[
      {emoji:'✈️',german:'Flugzeug',english:'Airplane',choices:['Flugzeug','Zug','Bus','Auto']},
      {emoji:'🎫',german:'Ticket',english:'Ticket',choices:['Ticket','Pass','Koffer','Geld']},
      {emoji:'🧳',german:'Koffer',english:'Suitcase',choices:['Koffer','Tasche','Rucksack','Tüte']},
      {emoji:'🛂',german:'Pass',english:'Passport',choices:['Pass','Ausweis','Ticket','Visum']},
      {emoji:'🗺️',german:'Landkarte',english:'Map',choices:['Landkarte','Reiseführer','Navi','Kompass']},
      {emoji:'🏖️',german:'Strand',english:'Beach',choices:['Strand','Berg','See','Wald']}
    ]},
    { id:'a2_l12', title:'Im Hotel', subtitle:'At the hotel', icon:'🏨', unlocked:false, questions:[
      {emoji:'🏨',german:'Hotel',english:'Hotel',choices:['Hotel','Hostel','Zelt','Pension']},
      {emoji:'🛌',german:'Doppelzimmer',english:'Double room',choices:['Doppelzimmer','Einzelzimmer','Mehrbettzimmer','Balkon']},
      {emoji:'🗝️',german:'Zimmerschlüssel',english:'Room key',choices:['Zimmerschlüssel','Karte','Code','Schloss']},
      {emoji:'🛎️',german:'Rezeption',english:'Reception',choices:['Rezeption','Lobby','Aufzug','Treppe']},
      {emoji:'🍳',german:'Frühstück',english:'Breakfast',choices:['Frühstück','Mittagessen','Abendessen','Snack']},
      {emoji:'🧽',german:'Sauber',english:'Clean',choices:['Sauber','Schmutzig','Groß','Klein']}
    ]},
    { id:'a2_l13', title:'Feste', subtitle:'Festivals', icon:'🎉', unlocked:false, questions:[
      {emoji:'🎉',german:'Party',english:'Party',choices:['Party','Treffen','Besprechung','Fest']},
      {emoji:'🎂',german:'Geburtstag',english:'Birthday',choices:['Geburtstag','Hochzeit','Weihnachten','Ostern']},
      {emoji:'🎁',german:'Geschenk',english:'Gift',choices:['Geschenk','Kuchen','Karte','Blumen']},
      {emoji:'🍾',german:'Feiern',english:'To celebrate',choices:['Feiern','Trauern','Arbeiten','Schlafen']},
      {emoji:'🥂',german:'Prost!',english:'Cheers!',choices:['Prost!','Hallo!','Tschüss!','Danke!']},
      {emoji:'🎈',german:'Luftballon',english:'Balloon',choices:['Luftballon','Dekoration','Kuchen','Geschenk']}
    ]},
    { id:'a2_l14', title:'Kultur', subtitle:'Culture', icon:'🎭', unlocked:false, questions:[
      {emoji:'🎭',german:'Theater',english:'Theater',choices:['Theater','Kino','Museum','Konzert']},
      {emoji:'🏛️',german:'Museum',english:'Museum',choices:['Museum','Theater','Bibliothek','Galerie']},
      {emoji:'🖼️',german:'Ausstellung',english:'Exhibition',choices:['Ausstellung','Konzert','Film','Stück']},
      {emoji:'🎫',german:'Eintrittskarte',english:'Entry ticket',choices:['Eintrittskarte','Gutschein','Rechnung','Bon']},
      {emoji:'🎨',german:'Kunst',english:'Art',choices:['Kunst','Musik','Literatur','Tanz']},
      {emoji:'🎶',german:'Musik',english:'Music',choices:['Musik','Kunst','Sport','Film']}
    ]},
    { id:'a2_l15', title:'Gefühle', subtitle:'Emotions', icon:'😊', unlocked:false, questions:[
      {emoji:'😊',german:'Glücklich',english:'Happy',choices:['Glücklich','Traurig','Wütend','Müde']},
      {emoji:'😢',german:'Traurig',english:'Sad',choices:['Traurig','Glücklich','Wütend','Müde']},
      {emoji:'😡',german:'Wütend',english:'Angry',choices:['Wütend','Glücklich','Traurig','Müde']},
      {emoji:'😨',german:'Angst',english:'Fear',choices:['Angst','Freude','Wut','Trauer']},
      {emoji:'😲',german:'Überrascht',english:'Surprised',choices:['Überrascht','Gelangweilt','Müde','Interessiert']},
      {emoji:'😴',german:'Müde',english:'Tired',choices:['Müde','Wach','Aktiv','Fit']}
    ]},
    { id:'a2_l16', title:'Gründe', subtitle:'Reasons (weil)', icon:'🤔', unlocked:false, questions:[
      {emoji:'❓',german:'Warum?',english:'Why?',choices:['Warum?','Wann?','Wo?','Wer?']},
      {emoji:'💡',german:'Weil...',english:'Because...',choices:['Weil...','Dass...','Ob...','Wenn...']},
      {emoji:'🌧️',german:'Weil es regnet',english:'Because it rains',choices:['Weil es regnet','Weil die Sonne scheint','Weil es schneit','Weil es windig ist']},
      {emoji:'🤒',german:'Weil ich krank bin',english:'Because I am sick',choices:['Weil ich krank bin','Weil ich gesund bin','Weil ich müde bin','Weil ich glücklich bin']},
      {emoji:'⏱️',german:'Weil ich keine Zeit habe',english:'Because I have no time',choices:['Weil ich keine Zeit habe','Weil ich viel Zeit habe','Weil ich Geld habe','Weil ich Lust habe']},
      {emoji:'🤔',german:'Deshalb',english:'Therefore',choices:['Deshalb','Trotzdem','Weil','Dass']}
    ]},

    // --- PHẦN 3: TỰ NHIÊN & MỞ RỘNG ---
    { id:'a2_l17', title:'Wetter', subtitle:'Weather', icon:'☀️', unlocked:false, questions:[
      {emoji:'☀️',german:'Sonne',english:'Sun',choices:['Sonne','Regen','Schnee','Wind']},
      {emoji:'🌧️',german:'Regen',english:'Rain',choices:['Regen','Sonne','Schnee','Wolke']},
      {emoji:'❄️',german:'Schnee',english:'Snow',choices:['Schnee','Regen','Sonne','Wind']},
      {emoji:'☁️',german:'Wolke',english:'Cloud',choices:['Wolke','Sonne','Nebel','Sturm']},
      {emoji:'🌬️',german:'Wind',english:'Wind',choices:['Wind','Regen','Schnee','Sonne']},
      {emoji:'🌩️',german:'Gewitter',english:'Thunderstorm',choices:['Gewitter','Nebel','Sonne','Schnee']}
    ]},
    { id:'a2_l18', title:'Jahreszeiten', subtitle:'Seasons', icon:'🍂', unlocked:false, questions:[
      {emoji:'🌷',german:'Frühling',english:'Spring',choices:['Frühling','Sommer','Herbst','Winter']},
      {emoji:'☀️',german:'Sommer',english:'Summer',choices:['Sommer','Frühling','Herbst','Winter']},
      {emoji:'🍂',german:'Herbst',english:'Autumn',choices:['Herbst','Frühling','Sommer','Winter']},
      {emoji:'❄️',german:'Winter',english:'Winter',choices:['Winter','Frühling','Sommer','Herbst']},
      {emoji:'🌡️',german:'Temperatur',english:'Temperature',choices:['Temperatur','Wetter','Klima','Grad']},
      {emoji:'🥵',german:'Heiß',english:'Hot',choices:['Heiß','Kalt','Warm','Kühl']}
    ]},
    { id:'a2_l19', title:'Sport', subtitle:'Sports', icon:'⚽', unlocked:false, questions:[
      {emoji:'⚽',german:'Fußball',english:'Football',choices:['Fußball','Basketball','Tennis','Volleyball']},
      {emoji:'🎾',german:'Tennis',english:'Tennis',choices:['Tennis','Tischtennis','Badminton','Squash']},
      {emoji:'🏊',german:'Schwimmen',english:'Swimming',choices:['Schwimmen','Laufen','Radfahren','Tauchen']},
      {emoji:'🏃',german:'Laufen',english:'Running',choices:['Laufen','Gehen','Springen','Werfen']},
      {emoji:'🏋️',german:'Fitnessstudio',english:'Gym',choices:['Fitnessstudio','Schwimmbad','Sportplatz','Turnhalle']},
      {emoji:'🥇',german:'Gewinnen',english:'To win',choices:['Gewinnen','Verlieren','Spielen','Trainieren']}
    ]},
    { id:'a2_l20', title:'Natur', subtitle:'Nature', icon:'🌲', unlocked:false, questions:[
      {emoji:'🌲',german:'Wald',english:'Forest',choices:['Wald','Wiese','Berg','See']},
      {emoji:'⛰️',german:'Berg',english:'Mountain',choices:['Berg','Tal','Hügel','Fluss']},
      {emoji:'🏞️',german:'Fluss',english:'River',choices:['Fluss','See','Meer','Ozean']},
      {emoji:'🌊',german:'Meer',english:'Sea',choices:['Meer','See','Fluss','Teich']},
      {emoji:'🌺',german:'Blume',english:'Flower',choices:['Blume','Baum','Gras','Busch']},
      {emoji:'🌳',german:'Baum',english:'Tree',choices:['Baum','Blume','Wald','Pflanze']}
    ]},
    { id:'a2_l21', title:'Tiere', subtitle:'Animals', icon:'🐶', unlocked:false, questions:[
      {emoji:'🐶',german:'Hund',english:'Dog',choices:['Hund','Katze','Maus','Vogel']},
      {emoji:'🐱',german:'Katze',english:'Cat',choices:['Katze','Hund','Maus','Fisch']},
      {emoji:'🐦',german:'Vogel',english:'Bird',choices:['Vogel','Fisch','Insekt','Reptil']},
      {emoji:'🐴',german:'Pferd',english:'Horse',choices:['Pferd','Kuh','Schwein','Schaf']},
      {emoji:'🐮',german:'Kuh',english:'Cow',choices:['Kuh','Pferd','Schwein','Ziege']},
      {emoji:'🐷',german:'Schwein',english:'Pig',choices:['Schwein','Kuh','Schaf','Huhn']}
    ]},
    { id:'a2_l22', title:'Aussehen', subtitle:'Appearance', icon:'👱', unlocked:false, questions:[
      {emoji:'📏',german:'Groß',english:'Tall/Big',choices:['Groß','Klein','Dick','Dünn']},
      {emoji:'🤏',german:'Klein',english:'Short/Small',choices:['Klein','Groß','Lang','Kurz']},
      {emoji:'💇',german:'Haare',english:'Hair',choices:['Haare','Augen','Nase','Mund']},
      {emoji:'👁️',german:'Augen',english:'Eyes',choices:['Augen','Ohren','Lippen','Zähne']},
      {emoji:'👓',german:'Brille',english:'Glasses',choices:['Brille','Hut','Schal','Mütze']},
      {emoji:'🧔',german:'Bart',english:'Beard',choices:['Bart','Schnurrbart','Haare','Glatze']}
    ]},
    { id:'a2_l23', title:'Kleidung II', subtitle:'Clothing II', icon:'👗', unlocked:false, questions:[
      {emoji:'👔',german:'Krawatte',english:'Tie',choices:['Krawatte','Hemd','Anzug','Gürtel']},
      {emoji:'🧥',german:'Mantel',english:'Coat',choices:['Mantel','Jacke','Pullover','Weste']},
      {emoji:'👟',german:'Turnschuhe',english:'Sneakers',choices:['Turnschuhe','Stiefel','Sandalen','Hausschuhe']},
      {emoji:'🧦',german:'Socken',english:'Socks',choices:['Socken','Strumpfhose','Schuhe','Handschuhe']},
      {emoji:'👙',german:'Bikini',english:'Bikini',choices:['Bikini','Badeanzug','Badehose','Handtuch']},
      {emoji:'💍',german:'Schmuck',english:'Jewelry',choices:['Schmuck','Uhr','Kette','Ring']}
    ]},
    { id:'a2_l24', title:'A2 Test', subtitle:'Final Review', icon:'🏆', unlocked:false, questions:[
      {emoji:'🇩🇪',german:'Ich habe gelernt',english:'I have learned',choices:['Ich habe gelernt','Ich lerne','Ich werde lernen','Ich lernte']},
      {emoji:'🗣️',german:'Sprechen',english:'To speak',choices:['Sprechen','Lesen','Schreiben','Hören']},
      {emoji:'📝',german:'Prüfung',english:'Exam',choices:['Prüfung','Hausaufgabe','Test','Klasse']},
      {emoji:'✅',german:'Bestanden',english:'Passed',choices:['Bestanden','Durchgefallen','Gelernt','Vergessen']},
      {emoji:'📜',german:'Zertifikat',english:'Certificate',choices:['Zertifikat','Zeugnis','Diplom','Brief']},
      {emoji:'🥳',german:'Herzlichen Glückwunsch',english:'Congratulations',choices:['Herzlichen Glückwunsch','Vielen Dank','Gute Reise','Gute Besserung']}
    ]}
  ]
};
