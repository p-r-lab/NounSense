
// Fields: rank, noun, article, meaning, plural, logic
const words = [
  {
    "rank": 1,
    "noun": "Zeit",
    "article": "die",
    "meaning": "Time",
    "plural": "Die Zeiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 2,
    "noun": "Mann",
    "article": "der",
    "meaning": "Man",
    "plural": "Die Männer",
    "logic": "Semantic pattern: male persons are usually der."
  },
  {
    "rank": 3,
    "noun": "Hand",
    "article": "die",
    "meaning": "Hand",
    "plural": "Die Hände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 4,
    "noun": "Tag",
    "article": "der",
    "meaning": "Day",
    "plural": "Die Tage",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 5,
    "noun": "Weg",
    "article": "der",
    "meaning": "Way",
    "plural": "Die Wege",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 6,
    "noun": "Auge",
    "article": "das",
    "meaning": "Eye",
    "plural": "Die Augen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 7,
    "noun": "Sache",
    "article": "die",
    "meaning": "Thing",
    "plural": "Die Sachen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 8,
    "noun": "Kopf",
    "article": "der",
    "meaning": "Head",
    "plural": "Die Köpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 9,
    "noun": "Jahr",
    "article": "das",
    "meaning": "Year",
    "plural": "Die Jahre",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 10,
    "noun": "Zimmer",
    "article": "das",
    "meaning": "Room",
    "plural": "Die Zimmer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 11,
    "noun": "Tür",
    "article": "die",
    "meaning": "Door",
    "plural": "Die Türen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 12,
    "noun": "Frau",
    "article": "die",
    "meaning": "Woman",
    "plural": "Die Frauen",
    "logic": "Semantic pattern: female persons are usually die."
  },
  {
    "rank": 13,
    "noun": "Gesicht",
    "article": "das",
    "meaning": "Face",
    "plural": "Die Gesichter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 14,
    "noun": "Mutter",
    "article": "die",
    "meaning": "Mother",
    "plural": "Die Mütter",
    "logic": "Semantic pattern: female persons are usually die."
  },
  {
    "rank": 15,
    "noun": "Leute",
    "article": "die",
    "meaning": "People",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 16,
    "noun": "Nacht",
    "article": "die",
    "meaning": "Night",
    "plural": "Die Nächte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 17,
    "noun": "Haus",
    "article": "das",
    "meaning": "House",
    "plural": "Die Häuser",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 18,
    "noun": "Vater",
    "article": "der",
    "meaning": "Father",
    "plural": "Die Väter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 19,
    "noun": "Leben",
    "article": "das",
    "meaning": "Life",
    "plural": "Die Leben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 20,
    "noun": "Rücken",
    "article": "der",
    "meaning": "Back",
    "plural": "Die Rücken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 21,
    "noun": "Stimme",
    "article": "die",
    "meaning": "Voice",
    "plural": "Die Stimmen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 22,
    "noun": "Mädchen",
    "article": "das",
    "meaning": "Girl",
    "plural": "Die Mädchen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 23,
    "noun": "Ort",
    "article": "der",
    "meaning": "Place",
    "plural": "Die Orte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 24,
    "noun": "Junge",
    "article": "der",
    "meaning": "Boy",
    "plural": "Die Jungen",
    "logic": "Semantic pattern: male persons are usually der."
  },
  {
    "rank": 25,
    "noun": "Auto",
    "article": "das",
    "meaning": "Car",
    "plural": "Die Autos",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 26,
    "noun": "Seite",
    "article": "die",
    "meaning": "Side",
    "plural": "Die Seiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 27,
    "noun": "Arm",
    "article": "der",
    "meaning": "Arm",
    "plural": "Die Arme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 28,
    "noun": "Kind",
    "article": "das",
    "meaning": "Child",
    "plural": "Die Kinder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 29,
    "noun": "Wort",
    "article": "das",
    "meaning": "Word",
    "plural": "Die Wörter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 30,
    "noun": "Moment",
    "article": "der",
    "meaning": "Moment",
    "plural": "Die Momente",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 31,
    "noun": "Haar",
    "article": "das",
    "meaning": "Hair",
    "plural": "Die Haare",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 32,
    "noun": "Fuß",
    "article": "der",
    "meaning": "Foot",
    "plural": "Die Füße",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 33,
    "noun": "Wasser",
    "article": "das",
    "meaning": "Water",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 34,
    "noun": "Licht",
    "article": "das",
    "meaning": "Light",
    "plural": "Die Lichter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 35,
    "noun": "Welt",
    "article": "die",
    "meaning": "World",
    "plural": "Die Welten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 36,
    "noun": "Name",
    "article": "der",
    "meaning": "Name",
    "plural": "Die Namen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 37,
    "noun": "Freund",
    "article": "der",
    "meaning": "Friend",
    "plural": "Die Freunde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 38,
    "noun": "Fenster",
    "article": "das",
    "meaning": "Window",
    "plural": "Die Fenster",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 39,
    "noun": "Körper",
    "article": "der",
    "meaning": "Body",
    "plural": "Die Körper",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 40,
    "noun": "Tisch",
    "article": "der",
    "meaning": "Table",
    "plural": "Die Tische",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 41,
    "noun": "Morgen",
    "article": "der",
    "meaning": "Morning",
    "plural": "Die Morgen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 42,
    "noun": "Bett",
    "article": "das",
    "meaning": "Bed",
    "plural": "Die Betten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 43,
    "noun": "Wand",
    "article": "die",
    "meaning": "Wall",
    "plural": "Die Wände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 44,
    "noun": "Straße",
    "article": "die",
    "meaning": "Street",
    "plural": "Die Straßen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 45,
    "noun": "Schule",
    "article": "die",
    "meaning": "School",
    "plural": "Die Schulen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 46,
    "noun": "Luft",
    "article": "die",
    "meaning": "Air",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 47,
    "noun": "Boden",
    "article": "der",
    "meaning": "Floor",
    "plural": "Die Böden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 48,
    "noun": "Stunde",
    "article": "die",
    "meaning": "Hour",
    "plural": "Die Stunden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 49,
    "noun": "Ende",
    "article": "das",
    "meaning": "End",
    "plural": "Die Enden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 50,
    "noun": "Familie",
    "article": "die",
    "meaning": "Family",
    "plural": "Die Familien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 51,
    "noun": "Kerl",
    "article": "der",
    "meaning": "Guy",
    "plural": "Die Kerle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 52,
    "noun": "Kind",
    "article": "das",
    "meaning": "Kind",
    "plural": "Die Kinder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 53,
    "noun": "Minute",
    "article": "die",
    "meaning": "Minute",
    "plural": "Die Minuten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 54,
    "noun": "Geschichte",
    "article": "die",
    "meaning": "Story",
    "plural": "Die Geschichten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 55,
    "noun": "Gott",
    "article": "der",
    "meaning": "God",
    "plural": "Die Götter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 56,
    "noun": "Woche",
    "article": "die",
    "meaning": "Week",
    "plural": "Die Wochen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 57,
    "noun": "Arbeit",
    "article": "die",
    "meaning": "Work",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 58,
    "noun": "Schulter",
    "article": "die",
    "meaning": "Shoulder",
    "plural": "Die Schultern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 59,
    "noun": "Teil",
    "article": "der",
    "meaning": "Part",
    "plural": "Die Teile",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 60,
    "noun": "Verstand",
    "article": "der",
    "meaning": "Mind",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 61,
    "noun": "Buch",
    "article": "das",
    "meaning": "Book",
    "plural": "Die Bücher",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 62,
    "noun": "Finger",
    "article": "der",
    "meaning": "Finger",
    "plural": "Die Finger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 63,
    "noun": "Mund",
    "article": "der",
    "meaning": "Mouth",
    "plural": "Die Münder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 64,
    "noun": "Kind",
    "article": "das",
    "meaning": "Kid",
    "plural": "Die Kinder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 65,
    "noun": "Glas",
    "article": "das",
    "meaning": "Glass",
    "plural": "Die Gläser",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 66,
    "noun": "Baum",
    "article": "der",
    "meaning": "Tree",
    "plural": "Die Bäume",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 67,
    "noun": "Klang",
    "article": "der",
    "meaning": "Sound",
    "plural": "Die Klänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 68,
    "noun": "Linie",
    "article": "die",
    "meaning": "Line",
    "plural": "Die Linien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 69,
    "noun": "Ehefrau",
    "article": "die",
    "meaning": "Wife",
    "plural": "Die Ehefrauen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 70,
    "noun": "Herz",
    "article": "das",
    "meaning": "Heart",
    "plural": "Die Herzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 71,
    "noun": "Geld",
    "article": "das",
    "meaning": "Money",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 72,
    "noun": "Telefon",
    "article": "das",
    "meaning": "Phone",
    "plural": "Die Telefone",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 73,
    "noun": "Blick",
    "article": "der",
    "meaning": "Look",
    "plural": "Die Blicke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 74,
    "noun": "Bein",
    "article": "das",
    "meaning": "Leg",
    "plural": "Die Beine",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 75,
    "noun": "Stuhl",
    "article": "der",
    "meaning": "Chair",
    "plural": "Die Stühle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 76,
    "noun": "Büro",
    "article": "das",
    "meaning": "Office",
    "plural": "Die Büros",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 77,
    "noun": "Bruder",
    "article": "der",
    "meaning": "Brother",
    "plural": "Die Brüder",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 78,
    "noun": "Frage",
    "article": "die",
    "meaning": "Question",
    "plural": "Die Fragen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 79,
    "noun": "Stadt",
    "article": "die",
    "meaning": "City",
    "plural": "Die Städte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 80,
    "noun": "Monat",
    "article": "der",
    "meaning": "Month",
    "plural": "Die Monate",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 81,
    "noun": "Baby",
    "article": "das",
    "meaning": "Baby",
    "plural": "Die Babys",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 82,
    "noun": "Zuhause",
    "article": "das",
    "meaning": "Home",
    "plural": "Die Zuhause",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 83,
    "noun": "Hund",
    "article": "der",
    "meaning": "Dog",
    "plural": "Die Hunde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 84,
    "noun": "Straße",
    "article": "die",
    "meaning": "Road",
    "plural": "Die Straßen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 85,
    "noun": "Idee",
    "article": "die",
    "meaning": "Idea",
    "plural": "Die Ideen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 86,
    "noun": "Küche",
    "article": "die",
    "meaning": "Kitchen",
    "plural": "Die Küchen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 87,
    "noun": "Grundstück",
    "article": "das",
    "meaning": "Lot",
    "plural": "Die Grundstücke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 88,
    "noun": "Sohn",
    "article": "der",
    "meaning": "Son",
    "plural": "Die Söhne",
    "logic": "Semantic pattern: male persons are usually der."
  },
  {
    "rank": 89,
    "noun": "Job",
    "article": "der",
    "meaning": "Job",
    "plural": "Die Jobs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 90,
    "noun": "Papier",
    "article": "das",
    "meaning": "Paper",
    "plural": "Die Papiere",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 91,
    "noun": "Schwester",
    "article": "die",
    "meaning": "Sister",
    "plural": "Die Schwestern",
    "logic": "Semantic pattern: female persons are usually die."
  },
  {
    "rank": 92,
    "noun": "Lächeln",
    "article": "das",
    "meaning": "Smile",
    "plural": "Die Lächeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 93,
    "noun": "Punkt",
    "article": "der",
    "meaning": "Point",
    "plural": "Die Punkte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 94,
    "noun": "Gedanke",
    "article": "der",
    "meaning": "Thought",
    "plural": "Die Gedanken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 95,
    "noun": "Liebe",
    "article": "die",
    "meaning": "Love",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 96,
    "noun": "Stadt",
    "article": "die",
    "meaning": "Town",
    "plural": "Die Städte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 97,
    "noun": "Tod",
    "article": "der",
    "meaning": "Death",
    "plural": "Die Tode",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 98,
    "noun": "Boden",
    "article": "der",
    "meaning": "Ground",
    "plural": "Die Böden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 99,
    "noun": "Anderen",
    "article": "die",
    "meaning": "Others",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 100,
    "noun": "Feuer",
    "article": "das",
    "meaning": "Fire",
    "plural": "Die Feuer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 101,
    "noun": "Schritt",
    "article": "der",
    "meaning": "Step",
    "plural": "Die Schritte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 102,
    "noun": "Blut",
    "article": "das",
    "meaning": "Blood",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 103,
    "noun": "Tatsache",
    "article": "die",
    "meaning": "Fact",
    "plural": "Die Tatsachen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 104,
    "noun": "Atem",
    "article": "der",
    "meaning": "Breath",
    "plural": "Die Atemzüge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 105,
    "noun": "Lippe",
    "article": "die",
    "meaning": "Lip",
    "plural": "Die Lippen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 106,
    "noun": "Sonne",
    "article": "die",
    "meaning": "Sun",
    "plural": "Die Sonnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 107,
    "noun": "Gebäude",
    "article": "das",
    "meaning": "Building",
    "plural": "Die Gebäude",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 108,
    "noun": "Nummer",
    "article": "die",
    "meaning": "Number",
    "plural": "Die Nummern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 109,
    "noun": "Ehemann",
    "article": "der",
    "meaning": "Husband",
    "plural": "Die Ehemänner",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 110,
    "noun": "Elternteil",
    "article": "der",
    "meaning": "Parent",
    "plural": "Die Elternteile",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 111,
    "noun": "Ecke",
    "article": "die",
    "meaning": "Corner",
    "plural": "Die Ecken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 112,
    "noun": "Problem",
    "article": "das",
    "meaning": "Problem",
    "plural": "Die Probleme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 113,
    "noun": "Paar",
    "article": "das",
    "meaning": "Couple",
    "plural": "Die Paare",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 114,
    "noun": "Tochter",
    "article": "die",
    "meaning": "Daughter",
    "plural": "Die Töchter",
    "logic": "Semantic pattern: female persons are usually die."
  },
  {
    "rank": 115,
    "noun": "Tasche",
    "article": "die",
    "meaning": "Bag",
    "plural": "Die Taschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 116,
    "noun": "Hölle",
    "article": "die",
    "meaning": "Hell",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 117,
    "noun": "Ruhe",
    "article": "die",
    "meaning": "Rest",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 118,
    "noun": "Geschäft",
    "article": "das",
    "meaning": "Business",
    "plural": "Die Geschäfte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 119,
    "noun": "Himmel",
    "article": "der",
    "meaning": "Sky",
    "plural": "Die Himmel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 120,
    "noun": "Schachtel",
    "article": "die",
    "meaning": "Box",
    "plural": "Die Schachteln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 121,
    "noun": "Person",
    "article": "die",
    "meaning": "Person",
    "plural": "Die Personen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 122,
    "noun": "Grund",
    "article": "der",
    "meaning": "Reason",
    "plural": "Die Gründe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 123,
    "noun": "Recht",
    "article": "das",
    "meaning": "Right",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 124,
    "noun": "Haut",
    "article": "die",
    "meaning": "Skin",
    "plural": "Die Häute",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 125,
    "noun": "Vater",
    "article": "der",
    "meaning": "Dad",
    "plural": "Die Väter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 126,
    "noun": "Fall",
    "article": "der",
    "meaning": "Case",
    "plural": "Die Fälle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 127,
    "noun": "Stück",
    "article": "das",
    "meaning": "Piece",
    "plural": "Die Stücke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 128,
    "noun": "Arzt",
    "article": "der",
    "meaning": "Doctor",
    "plural": "Die Ärzte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 129,
    "noun": "Rand",
    "article": "der",
    "meaning": "Edge",
    "plural": "Die Ränder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 130,
    "noun": "Mutter",
    "article": "die",
    "meaning": "Mom",
    "plural": "Die Mütter",
    "logic": "Semantic pattern: female persons are usually die."
  },
  {
    "rank": 131,
    "noun": "Bild",
    "article": "das",
    "meaning": "Picture",
    "plural": "Die Bilder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 132,
    "noun": "Sinn",
    "article": "der",
    "meaning": "Sense",
    "plural": "Die Sinne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 133,
    "noun": "Ohr",
    "article": "das",
    "meaning": "Ear",
    "plural": "Die Ohren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 134,
    "noun": "Sekunde",
    "article": "die",
    "meaning": "Second",
    "plural": "Die Sekunden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 135,
    "noun": "Dame",
    "article": "die",
    "meaning": "Lady",
    "plural": "Die Damen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 136,
    "noun": "Hals",
    "article": "der",
    "meaning": "Neck",
    "plural": "Die Hälse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 137,
    "noun": "Wind",
    "article": "der",
    "meaning": "Wind",
    "plural": "Die Winde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 138,
    "noun": "Schreibtisch",
    "article": "der",
    "meaning": "Desk",
    "plural": "Die Schreibtische",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 139,
    "noun": "Waffe",
    "article": "die",
    "meaning": "Gun",
    "plural": "Die Waffen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 140,
    "noun": "Stein",
    "article": "der",
    "meaning": "Stone",
    "plural": "Die Steine",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 141,
    "noun": "Kaffee",
    "article": "der",
    "meaning": "Coffee",
    "plural": "Die Kaffees",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 142,
    "noun": "Schiff",
    "article": "das",
    "meaning": "Ship",
    "plural": "Die Schiffe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 143,
    "noun": "Erde",
    "article": "die",
    "meaning": "Earth",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 144,
    "noun": "Essen",
    "article": "das",
    "meaning": "Food",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 145,
    "noun": "Pferd",
    "article": "das",
    "meaning": "Horse",
    "plural": "Die Pferde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 146,
    "noun": "Feld",
    "article": "das",
    "meaning": "Field",
    "plural": "Die Felder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 147,
    "noun": "Krieg",
    "article": "der",
    "meaning": "War",
    "plural": "Die Kriege",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 148,
    "noun": "Nachmittag",
    "article": "der",
    "meaning": "Afternoon",
    "plural": "Die Nachmittage",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 149,
    "noun": "Herr",
    "article": "der",
    "meaning": "Sir",
    "plural": "Die Herren",
    "logic": "Semantic pattern: male persons are usually der."
  },
  {
    "rank": 150,
    "noun": "Raum",
    "article": "der",
    "meaning": "Space",
    "plural": "Die Räume",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 151,
    "noun": "Abend",
    "article": "der",
    "meaning": "Evening",
    "plural": "Die Abende",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 152,
    "noun": "Brief",
    "article": "der",
    "meaning": "Letter",
    "plural": "Die Briefe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 153,
    "noun": "Bar",
    "article": "die",
    "meaning": "Bar",
    "plural": "Die Bars",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 154,
    "noun": "Traum",
    "article": "der",
    "meaning": "Dream",
    "plural": "Die Träume",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 155,
    "noun": "Wohnung",
    "article": "die",
    "meaning": "Apartment",
    "plural": "Die Wohnungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 156,
    "noun": "Brust",
    "article": "die",
    "meaning": "Chest",
    "plural": "Die Brüste",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 157,
    "noun": "Spiel",
    "article": "das",
    "meaning": "Game",
    "plural": "Die Spiele",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 158,
    "noun": "Sommer",
    "article": "der",
    "meaning": "Summer",
    "plural": "Die Sommer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 159,
    "noun": "Angelegenheit",
    "article": "die",
    "meaning": "Matter",
    "plural": "Die Angelegenheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 160,
    "noun": "Stille",
    "article": "die",
    "meaning": "Silence",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 161,
    "noun": "Spitze",
    "article": "die",
    "meaning": "Top",
    "plural": "Die Spitzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 162,
    "noun": "Felsen",
    "article": "der",
    "meaning": "Rock",
    "plural": "Die Felsen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 163,
    "noun": "Macht",
    "article": "die",
    "meaning": "Power",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 164,
    "noun": "Kleidung",
    "article": "die",
    "meaning": "Clothes",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 165,
    "noun": "Schild",
    "article": "das",
    "meaning": "Sign",
    "plural": "Die Schilder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 166,
    "noun": "Aufmerksamkeit",
    "article": "die",
    "meaning": "Attention",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 167,
    "noun": "Musik",
    "article": "die",
    "meaning": "Music",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 168,
    "noun": "Zustand",
    "article": "der",
    "meaning": "State",
    "plural": "Die Zustände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 169,
    "noun": "Tasche",
    "article": "die",
    "meaning": "Pocket",
    "plural": "Die Taschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 170,
    "noun": "Abendessen",
    "article": "das",
    "meaning": "Dinner",
    "plural": "Die Abendessen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 171,
    "noun": "Saal",
    "article": "der",
    "meaning": "Hall",
    "plural": "Die Säle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 172,
    "noun": "Schmerz",
    "article": "der",
    "meaning": "Pain",
    "plural": "Die Schmerzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 173,
    "noun": "Alter",
    "article": "das",
    "meaning": "Age",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 174,
    "noun": "Fluss",
    "article": "der",
    "meaning": "River",
    "plural": "Die Flüsse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 175,
    "noun": "Chance",
    "article": "die",
    "meaning": "Chance",
    "plural": "Die Chancen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 176,
    "noun": "Nase",
    "article": "die",
    "meaning": "Nose",
    "plural": "Die Nasen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 177,
    "noun": "Schatten",
    "article": "der",
    "meaning": "Shadow",
    "plural": "Die Schatten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 178,
    "noun": "Polizei",
    "article": "die",
    "meaning": "Police",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 179,
    "noun": "Erinnerung",
    "article": "die",
    "meaning": "Memory",
    "plural": "Die Erinnerungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 180,
    "noun": "Farbe",
    "article": "die",
    "meaning": "Color",
    "plural": "Die Farben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 181,
    "noun": "Knie",
    "article": "das",
    "meaning": "Knee",
    "plural": "Die Knie",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 182,
    "noun": "Holz",
    "article": "das",
    "meaning": "Wood",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 183,
    "noun": "Hemd",
    "article": "das",
    "meaning": "Shirt",
    "plural": "Die Hemden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 184,
    "noun": "Party",
    "article": "die",
    "meaning": "Party",
    "plural": "Die Partys",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 185,
    "noun": "Land",
    "article": "das",
    "meaning": "Country",
    "plural": "Die Länder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 186,
    "noun": "Lastwagen",
    "article": "der",
    "meaning": "Truck",
    "plural": "Die Lastwagen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 187,
    "noun": "Zahn",
    "article": "der",
    "meaning": "Tooth",
    "plural": "Die Zähne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 188,
    "noun": "Rechnung",
    "article": "die",
    "meaning": "Bill",
    "plural": "Die Rechnungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 189,
    "noun": "Szene",
    "article": "die",
    "meaning": "Scene",
    "plural": "Die Szenen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 190,
    "noun": "Land",
    "article": "das",
    "meaning": "Land",
    "plural": "Die Länder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 191,
    "noun": "Stern",
    "article": "der",
    "meaning": "Star",
    "plural": "Die Sterne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 192,
    "noun": "Vogel",
    "article": "der",
    "meaning": "Bird",
    "plural": "Die Vögel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 193,
    "noun": "Schlafzimmer",
    "article": "das",
    "meaning": "Bedroom",
    "plural": "Die Schlafzimmer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 194,
    "noun": "Onkel",
    "article": "der",
    "meaning": "Uncle",
    "plural": "Die Onkel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 195,
    "noun": "Art",
    "article": "die",
    "meaning": "Sort",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 196,
    "noun": "Gruppe",
    "article": "die",
    "meaning": "Group",
    "plural": "Die Gruppen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 197,
    "noun": "Wahrheit",
    "article": "die",
    "meaning": "Truth",
    "plural": "Die Wahrheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 198,
    "noun": "Schwierigkeit",
    "article": "die",
    "meaning": "Trouble",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 199,
    "noun": "Menschenmenge",
    "article": "die",
    "meaning": "Crowd",
    "plural": "Die Menschenmengen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 200,
    "noun": "Bahnhof",
    "article": "der",
    "meaning": "Station",
    "plural": "Die Bahnhöfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 201,
    "noun": "Träne",
    "article": "die",
    "meaning": "Tear",
    "plural": "Die Tränen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 202,
    "noun": "Klasse",
    "article": "die",
    "meaning": "Class",
    "plural": "Die Klassen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 203,
    "noun": "Meer",
    "article": "das",
    "meaning": "Sea",
    "plural": "Die Meere",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 204,
    "noun": "Tier",
    "article": "das",
    "meaning": "Animal",
    "plural": "Die Tiere",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 205,
    "noun": "Zentrum",
    "article": "das",
    "meaning": "Center",
    "plural": "Die Zentren",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 206,
    "noun": "Gefühl",
    "article": "das",
    "meaning": "Feeling",
    "plural": "Die Gefühle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 207,
    "noun": "Geschäft",
    "article": "das",
    "meaning": "Store",
    "plural": "Die Geschäfte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 208,
    "noun": "Berg",
    "article": "der",
    "meaning": "Mountain",
    "plural": "Die Berge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 209,
    "noun": "Nachrichten",
    "article": "die",
    "meaning": "News",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 210,
    "noun": "Schuh",
    "article": "der",
    "meaning": "Shoe",
    "plural": "Die Schuhe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 211,
    "noun": "Katze",
    "article": "die",
    "meaning": "Cat",
    "plural": "Die Katzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 212,
    "noun": "Bildschirm",
    "article": "der",
    "meaning": "Screen",
    "plural": "Die Bildschirme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 213,
    "noun": "Flasche",
    "article": "die",
    "meaning": "Bottle",
    "plural": "Die Flaschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 214,
    "noun": "Anruf",
    "article": "der",
    "meaning": "Call",
    "plural": "Die Anrufe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 215,
    "noun": "Wohnzimmer",
    "article": "das",
    "meaning": "Living",
    "plural": "Die Wohnzimmer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 216,
    "noun": "Wange",
    "article": "die",
    "meaning": "Cheek",
    "plural": "Die Wangen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 217,
    "noun": "Student",
    "article": "der",
    "meaning": "Student",
    "plural": "Die Studenten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 218,
    "noun": "Ball",
    "article": "der",
    "meaning": "Ball",
    "plural": "Die Bälle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 219,
    "noun": "Anblick",
    "article": "der",
    "meaning": "Sight",
    "plural": "Die Anblicke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 220,
    "noun": "Hügel",
    "article": "der",
    "meaning": "Hill",
    "plural": "Die Hügel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 221,
    "noun": "Unternehmen",
    "article": "das",
    "meaning": "Company",
    "plural": "Die Unternehmen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 222,
    "noun": "Kirche",
    "article": "die",
    "meaning": "Church",
    "plural": "Die Kirchen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 223,
    "noun": "Regen",
    "article": "der",
    "meaning": "Rain",
    "plural": "Die Regen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 224,
    "noun": "Anzug",
    "article": "der",
    "meaning": "Suit",
    "plural": "Die Anzüge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 225,
    "noun": "Eins",
    "article": "die",
    "meaning": "One",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 226,
    "noun": "Richtung",
    "article": "die",
    "meaning": "Direction",
    "plural": "Die Richtungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 227,
    "noun": "Wille",
    "article": "der",
    "meaning": "Will",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 228,
    "noun": "Hals",
    "article": "der",
    "meaning": "Throat",
    "plural": "Die Hälse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 229,
    "noun": "Mitte",
    "article": "die",
    "meaning": "Middle",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 230,
    "noun": "Antwort",
    "article": "die",
    "meaning": "Answer",
    "plural": "Die Antworten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 231,
    "noun": "Zeug",
    "article": "das",
    "meaning": "Stuff",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 232,
    "noun": "Krankenhaus",
    "article": "das",
    "meaning": "Hospital",
    "plural": "Die Krankenhäuser",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 233,
    "noun": "Kamera",
    "article": "die",
    "meaning": "Camera",
    "plural": "Die Kameras",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 234,
    "noun": "Kleid",
    "article": "das",
    "meaning": "Dress",
    "plural": "Die Kleider",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 235,
    "noun": "Karte",
    "article": "die",
    "meaning": "Card",
    "plural": "Die Karten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 236,
    "noun": "Hof",
    "article": "der",
    "meaning": "Yard",
    "plural": "Die Höfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 237,
    "noun": "Dunkelheit",
    "article": "die",
    "meaning": "Dark",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 238,
    "noun": "Scheiße",
    "article": "die",
    "meaning": "Shit",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 239,
    "noun": "Bild",
    "article": "das",
    "meaning": "Image",
    "plural": "Die Bilder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 240,
    "noun": "Maschine",
    "article": "die",
    "meaning": "Machine",
    "plural": "Die Maschinen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 241,
    "noun": "Entfernung",
    "article": "die",
    "meaning": "Distance",
    "plural": "Die Entfernungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 242,
    "noun": "Gebiet",
    "article": "das",
    "meaning": "Area",
    "plural": "Die Gebiete",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 243,
    "noun": "Erzähler",
    "article": "der",
    "meaning": "Narrator",
    "plural": "Die Erzähler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 244,
    "noun": "Eis",
    "article": "das",
    "meaning": "Ice",
    "plural": "Die Eis",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 245,
    "noun": "Schnee",
    "article": "der",
    "meaning": "Snow",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 246,
    "noun": "Notiz",
    "article": "die",
    "meaning": "Note",
    "plural": "Die Notizen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 247,
    "noun": "Spiegel",
    "article": "der",
    "meaning": "Mirror",
    "plural": "Die Spiegel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 248,
    "noun": "König",
    "article": "der",
    "meaning": "King",
    "plural": "Die Könige",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 249,
    "noun": "Angst",
    "article": "die",
    "meaning": "Fear",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 250,
    "noun": "Beamte",
    "article": "der",
    "meaning": "Officer",
    "plural": "Die Beamten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 251,
    "noun": "Loch",
    "article": "das",
    "meaning": "Hole",
    "plural": "Die Löcher",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 252,
    "noun": "Schuss",
    "article": "der",
    "meaning": "Shot",
    "plural": "Die Schüsse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 253,
    "noun": "Wächter",
    "article": "der",
    "meaning": "Guard",
    "plural": "Die Wächter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 254,
    "noun": "Gespräch",
    "article": "das",
    "meaning": "Conversation",
    "plural": "Die Gespräche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 255,
    "noun": "Boot",
    "article": "das",
    "meaning": "Boat",
    "plural": "Die Boote",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 256,
    "noun": "System",
    "article": "das",
    "meaning": "System",
    "plural": "Die Systeme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 257,
    "noun": "Sorge",
    "article": "die",
    "meaning": "Care",
    "plural": "Die Sorgen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 258,
    "noun": "Bit",
    "article": "das",
    "meaning": "Bit",
    "plural": "Die Bits",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 259,
    "noun": "Film",
    "article": "der",
    "meaning": "Movie",
    "plural": "Die Filme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 260,
    "noun": "Knochen",
    "article": "der",
    "meaning": "Bone",
    "plural": "Die Knochen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 261,
    "noun": "Seite",
    "article": "die",
    "meaning": "Page",
    "plural": "Die Seiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 262,
    "noun": "Kapitän",
    "article": "der",
    "meaning": "Captain",
    "plural": "Die Kapitäne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 263,
    "noun": "Tante",
    "article": "die",
    "meaning": "Aunt",
    "plural": "Die Tanten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 264,
    "noun": "Dunkelheit",
    "article": "die",
    "meaning": "Darkness",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 265,
    "noun": "Kontrolle",
    "article": "die",
    "meaning": "Control",
    "plural": "Die Kontrollen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 266,
    "noun": "Getränk",
    "article": "das",
    "meaning": "Drink",
    "plural": "Die Getränke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 267,
    "noun": "Hotel",
    "article": "das",
    "meaning": "Hotel",
    "plural": "Die Hotels",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 268,
    "noun": "Mantel",
    "article": "der",
    "meaning": "Coat",
    "plural": "Die Mäntel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 269,
    "noun": "Treppe",
    "article": "die",
    "meaning": "Stair",
    "plural": "Die Treppen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 270,
    "noun": "Bestellung",
    "article": "die",
    "meaning": "Order",
    "plural": "Die Bestellungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 271,
    "noun": "Rose",
    "article": "die",
    "meaning": "Rose",
    "plural": "Die Rosen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 272,
    "noun": "Miss",
    "article": "die",
    "meaning": "Miss",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 273,
    "noun": "Hut",
    "article": "der",
    "meaning": "Hat",
    "plural": "Die Hüte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 274,
    "noun": "Gold",
    "article": "das",
    "meaning": "Gold",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 275,
    "noun": "Zigarette",
    "article": "die",
    "meaning": "Cigarette",
    "plural": "Die Zigaretten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 276,
    "noun": "Wolke",
    "article": "die",
    "meaning": "Cloud",
    "plural": "Die Wolken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 277,
    "noun": "Aussicht",
    "article": "die",
    "meaning": "View",
    "plural": "Die Aussichten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 278,
    "noun": "Fahrer",
    "article": "der",
    "meaning": "Driver",
    "plural": "Die Fahrer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 279,
    "noun": "Tasse",
    "article": "die",
    "meaning": "Cup",
    "plural": "Die Tassen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 280,
    "noun": "Figur",
    "article": "die",
    "meaning": "Figure",
    "plural": "Die Figuren",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 281,
    "noun": "Ausdruck",
    "article": "der",
    "meaning": "Expression",
    "plural": "Die Ausdrücke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 282,
    "noun": "Weg",
    "article": "der",
    "meaning": "Path",
    "plural": "Die Wege",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 283,
    "noun": "Schlüssel",
    "article": "der",
    "meaning": "Key",
    "plural": "Die Schlüssel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 284,
    "noun": "Computer",
    "article": "der",
    "meaning": "Computer",
    "plural": "Die Computer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 285,
    "noun": "Blume",
    "article": "die",
    "meaning": "Flower",
    "plural": "Die Blumen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 286,
    "noun": "Ring",
    "article": "der",
    "meaning": "Ring",
    "plural": "Die Ringe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 287,
    "noun": "Badezimmer",
    "article": "das",
    "meaning": "Bathroom",
    "plural": "Die Badezimmer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 288,
    "noun": "Metall",
    "article": "das",
    "meaning": "Metal",
    "plural": "Die Metalle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 289,
    "noun": "Mond",
    "article": "der",
    "meaning": "Moon",
    "plural": "Die Monde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 290,
    "noun": "Lied",
    "article": "das",
    "meaning": "Song",
    "plural": "Die Lieder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 291,
    "noun": "Soldat",
    "article": "der",
    "meaning": "Soldier",
    "plural": "Die Soldaten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 292,
    "noun": "Radio",
    "article": "das",
    "meaning": "Radio",
    "plural": "Die Radios",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 293,
    "noun": "Geschichte",
    "article": "die",
    "meaning": "History",
    "plural": "Die Geschichten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 294,
    "noun": "Welle",
    "article": "die",
    "meaning": "Wave",
    "plural": "Die Wellen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 295,
    "noun": "Plan",
    "article": "der",
    "meaning": "Plan",
    "plural": "Die Pläne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 296,
    "noun": "College",
    "article": "das",
    "meaning": "College",
    "plural": "Die Colleges",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 297,
    "noun": "Fisch",
    "article": "der",
    "meaning": "Fish",
    "plural": "Die Fische",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 298,
    "noun": "Garten",
    "article": "der",
    "meaning": "Garden",
    "plural": "Die Gärten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 299,
    "noun": "Zug",
    "article": "der",
    "meaning": "Train",
    "plural": "Die Züge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 300,
    "noun": "Geschäft",
    "article": "das",
    "meaning": "Shop",
    "plural": "Die Geschäfte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 301,
    "noun": "Polizist",
    "article": "der",
    "meaning": "Cop",
    "plural": "Die Polizisten",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 302,
    "noun": "Kunst",
    "article": "die",
    "meaning": "Art",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 303,
    "noun": "Bier",
    "article": "das",
    "meaning": "Beer",
    "plural": "Die Biere",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 304,
    "noun": "Norden",
    "article": "der",
    "meaning": "North",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 305,
    "noun": "Insel",
    "article": "die",
    "meaning": "Island",
    "plural": "Die Inseln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 306,
    "noun": "Bus",
    "article": "der",
    "meaning": "Bus",
    "plural": "Die Busse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 307,
    "noun": "Geruch",
    "article": "der",
    "meaning": "Smell",
    "plural": "Die Gerüche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 308,
    "noun": "Geräusch",
    "article": "das",
    "meaning": "Noise",
    "plural": "Die Geräusche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 309,
    "noun": "Park",
    "article": "der",
    "meaning": "Mama Mama - 310. Park",
    "plural": "Die Parks",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 311,
    "noun": "Süden",
    "article": "der",
    "meaning": "South",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 312,
    "noun": "Paar",
    "article": "das",
    "meaning": "Pair",
    "plural": "Die Paare",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 313,
    "noun": "Herr",
    "article": "der",
    "meaning": "Lord",
    "plural": "Die Herren",
    "logic": "Semantic pattern: male persons are usually der."
  },
  {
    "rank": 314,
    "noun": "Teller",
    "article": "der",
    "meaning": "Plate",
    "plural": "Die Teller",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 315,
    "noun": "Jacke",
    "article": "die",
    "meaning": "Jacket",
    "plural": "Die Jacken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 316,
    "noun": "Hilfe",
    "article": "die",
    "meaning": "Help",
    "plural": "Die Hilfen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 317,
    "noun": "Papa",
    "article": "der",
    "meaning": "Daddy",
    "plural": "Die Papas",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 318,
    "noun": "Gras",
    "article": "das",
    "meaning": "Grass",
    "plural": "Die Gräser",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 319,
    "noun": "Dank",
    "article": "der",
    "meaning": "Thanks",
    "plural": "Die Danksagungen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 320,
    "noun": "Hitze",
    "article": "die",
    "meaning": "Heat",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 321,
    "noun": "Schlaf",
    "article": "der",
    "meaning": "Sleep",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 322,
    "noun": "Gehirn",
    "article": "das",
    "meaning": "Brain",
    "plural": "Die Gehirne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 323,
    "noun": "Service",
    "article": "der",
    "meaning": "Service",
    "plural": "Die Services",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 324,
    "noun": "Reise",
    "article": "die",
    "meaning": "Trip",
    "plural": "Die Reisen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 325,
    "noun": "Schlag",
    "article": "der",
    "meaning": "Beat",
    "plural": "Die Schläge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 326,
    "noun": "Messer",
    "article": "das",
    "meaning": "Knife",
    "plural": "Die Messer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 327,
    "noun": "Fleck",
    "article": "der",
    "meaning": "Spot",
    "plural": "Die Flecken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 328,
    "noun": "Nachricht",
    "article": "die",
    "meaning": "Message",
    "plural": "Die Nachrichten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 329,
    "noun": "Zeichen",
    "article": "das",
    "meaning": "Mark",
    "plural": "Die Zeichen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 330,
    "noun": "Lehrer",
    "article": "der",
    "meaning": "Teacher",
    "plural": "Die Lehrer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 331,
    "noun": "Blick",
    "article": "der",
    "meaning": "Gaze",
    "plural": "Die Blicke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 332,
    "noun": "Dorf",
    "article": "das",
    "meaning": "Village",
    "plural": "Die Dörfer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 333,
    "noun": "Winter",
    "article": "der",
    "meaning": "Winter",
    "plural": "Die Winter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 334,
    "noun": "Front",
    "article": "die",
    "meaning": "Front",
    "plural": "Die Fronten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 335,
    "noun": "Gesetz",
    "article": "das",
    "meaning": "Law",
    "plural": "Die Gesetze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 336,
    "noun": "Oberfläche",
    "article": "die",
    "meaning": "Surface",
    "plural": "Die Oberflächen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 337,
    "noun": "Bank",
    "article": "die",
    "meaning": "Bank",
    "plural": "Die Banken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 338,
    "noun": "Team",
    "article": "das",
    "meaning": "Team",
    "plural": "Die Teams",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 339,
    "noun": "Maximum",
    "article": "das",
    "meaning": "Maximum",
    "plural": "Die Maxima",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 340,
    "noun": "Position",
    "article": "die",
    "meaning": "Position",
    "plural": "Die Positionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 341,
    "noun": "Magen",
    "article": "der",
    "meaning": "Stomach",
    "plural": "Die Mägen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 342,
    "noun": "Wende",
    "article": "die",
    "meaning": "Turn",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 343,
    "noun": "Westen",
    "article": "der",
    "meaning": "West",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 344,
    "noun": "Mittagessen",
    "article": "das",
    "meaning": "Lunch",
    "plural": "Die Mittagessen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 345,
    "noun": "Veränderung",
    "article": "die",
    "meaning": "Change",
    "plural": "Die Veränderungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 346,
    "noun": "Lebewesen",
    "article": "das",
    "meaning": "Creature",
    "plural": "Die Lebewesen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 347,
    "noun": "Seele",
    "article": "die",
    "meaning": "Soul",
    "plural": "Die Seelen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 348,
    "noun": "Blatt",
    "article": "das",
    "meaning": "Leaf",
    "plural": "Die Blätter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 349,
    "noun": "Show",
    "article": "die",
    "meaning": "Show",
    "plural": "Die Shows",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 350,
    "noun": "Tor",
    "article": "das",
    "meaning": "Gate",
    "plural": "Die Tore",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 351,
    "noun": "Palme",
    "article": "die",
    "meaning": "Palm",
    "plural": "Die Palmen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 352,
    "noun": "Plastik",
    "article": "das",
    "meaning": "Plastic",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 353,
    "noun": "Kraft",
    "article": "die",
    "meaning": "Force",
    "plural": "Die Kräfte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 355,
    "noun": "Strand",
    "article": "der",
    "meaning": "Beach",
    "plural": "Die Strände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 356,
    "noun": "Präsident",
    "article": "der",
    "meaning": "President",
    "plural": "Die Präsidenten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 357,
    "noun": "Form",
    "article": "die",
    "meaning": "Shape",
    "plural": "Die Formen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 358,
    "noun": "Rauch",
    "article": "der",
    "meaning": "Smoke",
    "plural": "Die Rauch",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 359,
    "noun": "Rad",
    "article": "das",
    "meaning": "Wheel",
    "plural": "Die Räder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 360,
    "noun": "Silber",
    "article": "das",
    "meaning": "Silver",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 361,
    "noun": "Dach",
    "article": "das",
    "meaning": "Roof",
    "plural": "Die Dächer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 362,
    "noun": "Gewicht",
    "article": "das",
    "meaning": "Weight",
    "plural": "Die Gewichte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 363,
    "noun": "Zunge",
    "article": "die",
    "meaning": "Tongue",
    "plural": "Die Zungen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 364,
    "noun": "Tee",
    "article": "der",
    "meaning": "Tea",
    "plural": "Die Tees",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 365,
    "noun": "Strecke",
    "article": "die",
    "meaning": "Track",
    "plural": "Die Strecken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 366,
    "noun": "Winkel",
    "article": "der",
    "meaning": "Angle",
    "plural": "Die Winkel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 367,
    "noun": "Form",
    "article": "die",
    "meaning": "Form",
    "plural": "Die Formen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 368,
    "noun": "Ton",
    "article": "der",
    "meaning": "Tone",
    "plural": "Die Töne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 369,
    "noun": "Kreis",
    "article": "der",
    "meaning": "Circle",
    "plural": "Die Kreise",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 370,
    "noun": "Frühling",
    "article": "der",
    "meaning": "Spring",
    "plural": "Die Frühlinge",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 371,
    "noun": "Veranda",
    "article": "die",
    "meaning": "Porch",
    "plural": "Die Veranden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 372,
    "noun": "Blatt",
    "article": "das",
    "meaning": "Sheet",
    "plural": "Die Blätter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 373,
    "noun": "Mitglied",
    "article": "das",
    "meaning": "Member",
    "plural": "Die Mitglieder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 374,
    "noun": "Pool",
    "article": "der",
    "meaning": "Pool",
    "plural": "Die Pools",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 375,
    "noun": "Bedürfnis",
    "article": "das",
    "meaning": "Need",
    "plural": "Die Bedürfnisse",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 376,
    "noun": "Hoffnung",
    "article": "die",
    "meaning": "Hope",
    "plural": "Die Hoffnungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 377,
    "noun": "See",
    "article": "der",
    "meaning": "Lake",
    "plural": "Die Seen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 378,
    "noun": "Brust",
    "article": "die",
    "meaning": "Breast",
    "plural": "Die Brüste",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 379,
    "noun": "Überraschung",
    "article": "die",
    "meaning": "Surprise",
    "plural": "Die Überraschungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 380,
    "noun": "Interesse",
    "article": "das",
    "meaning": "Interest",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 381,
    "noun": "Boden",
    "article": "der",
    "meaning": "Bottom",
    "plural": "Die Böden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 382,
    "noun": "Geist",
    "article": "der",
    "meaning": "Spirit",
    "plural": "Die Geister",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 383,
    "noun": "Block",
    "article": "der",
    "meaning": "Block",
    "plural": "Die Blöcke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 384,
    "noun": "Sprache",
    "article": "die",
    "meaning": "Language",
    "plural": "Die Sprachen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 385,
    "noun": "Brücke",
    "article": "die",
    "meaning": "Bridge",
    "plural": "Die Brücken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 386,
    "noun": "Staub",
    "article": "der",
    "meaning": "Dust",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 387,
    "noun": "Zelle",
    "article": "die",
    "meaning": "Cell",
    "plural": "Die Zellen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 388,
    "noun": "Wein",
    "article": "der",
    "meaning": "Wine",
    "plural": "Die Weine",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 389,
    "noun": "Stiefel",
    "article": "der",
    "meaning": "Boot",
    "plural": "Die Stiefel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 390,
    "noun": "Wahl",
    "article": "die",
    "meaning": "Choice",
    "plural": "Die Wahlen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 391,
    "noun": "Reihe",
    "article": "die",
    "meaning": "Row",
    "plural": "Die Reihen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 392,
    "noun": "Gespräch",
    "article": "das",
    "meaning": "Talk",
    "plural": "Die Gespräche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 393,
    "noun": "Flugzeug",
    "article": "das",
    "meaning": "Plane",
    "plural": "Die Flugzeuge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 394,
    "noun": "Uhr",
    "article": "die",
    "meaning": "Watch",
    "plural": "Die Uhren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 395,
    "noun": "Information",
    "article": "die",
    "meaning": "Information",
    "plural": "Die Informationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 396,
    "noun": "Großmutter",
    "article": "die",
    "meaning": "Grandmother",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 397,
    "noun": "Flügel",
    "article": "der",
    "meaning": "Wing",
    "plural": "Die Flügel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 398,
    "noun": "Bob",
    "article": "der",
    "meaning": "Bob",
    "plural": "Die Bobs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 399,
    "noun": "Club",
    "article": "der",
    "meaning": "Club",
    "plural": "Die Clubs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 400,
    "noun": "Meister",
    "article": "der",
    "meaning": "Master",
    "plural": "Die Meister",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 401,
    "noun": "Gnade",
    "article": "die",
    "meaning": "Grace",
    "plural": "Die Gnaden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 402,
    "noun": "Wald",
    "article": "der",
    "meaning": "Forest",
    "plural": "Die Wälder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 403,
    "noun": "Größe",
    "article": "die",
    "meaning": "Size",
    "plural": "Die Größen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 404,
    "noun": "Satz",
    "article": "der",
    "meaning": "Set",
    "plural": "Die Sätze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 405,
    "noun": "Ehe",
    "article": "die",
    "meaning": "Marriage",
    "plural": "Die Ehen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 406,
    "noun": "Stirn",
    "article": "die",
    "meaning": "Forehead",
    "plural": "Die Stirnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 407,
    "noun": "Sturm",
    "article": "der",
    "meaning": "Storm",
    "plural": "Die Stürme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 408,
    "noun": "Durchgang",
    "article": "der",
    "meaning": "Doorway",
    "plural": "Die Durchgänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 409,
    "noun": "Situation",
    "article": "die",
    "meaning": "Situation",
    "plural": "Die Situationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 410,
    "noun": "Theke",
    "article": "die",
    "meaning": "Counter",
    "plural": "Die Theken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 411,
    "noun": "Nachbar",
    "article": "der",
    "meaning": "Neighbor",
    "plural": "Die Nachbarn",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 412,
    "noun": "Foto",
    "article": "das",
    "meaning": "Photo",
    "plural": "Die Fotos",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 413,
    "noun": "Bühne",
    "article": "die",
    "meaning": "Stage",
    "plural": "Die Bühnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 414,
    "noun": "Treffen",
    "article": "das",
    "meaning": "Meeting",
    "plural": "Die Treffen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 415,
    "noun": "Krankenschwester",
    "article": "die",
    "meaning": "Nurse",
    "plural": "Die Krankenschwestern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 416,
    "noun": "Sicherheit",
    "article": "die",
    "meaning": "Security",
    "plural": "Die Sicherheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 417,
    "noun": "Waffe",
    "article": "die",
    "meaning": "Weapon",
    "plural": "Die Waffen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 418,
    "noun": "Ereignis",
    "article": "das",
    "meaning": "Event",
    "plural": "Die Ereignisse",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 419,
    "noun": "Decke",
    "article": "die",
    "meaning": "Ceiling",
    "plural": "Die Decken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 420,
    "noun": "Motor",
    "article": "der",
    "meaning": "Engine",
    "plural": "Die Motoren",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 421,
    "noun": "Geschenk",
    "article": "das",
    "meaning": "Gift",
    "plural": "Die Geschenke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 422,
    "noun": "Restaurant",
    "article": "das",
    "meaning": "Restaurant",
    "plural": "Die Restaurants",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 423,
    "noun": "Brett",
    "article": "das",
    "meaning": "Board",
    "plural": "Die Bretter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 424,
    "noun": "Flur",
    "article": "der",
    "meaning": "Hallway",
    "plural": "Die Flure",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 425,
    "noun": "Armee",
    "article": "die",
    "meaning": "Army",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 426,
    "noun": "Aufwand",
    "article": "der",
    "meaning": "Effort",
    "plural": "Die Aufwände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 427,
    "noun": "Osten",
    "article": "der",
    "meaning": "East",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 428,
    "noun": "Agent",
    "article": "der",
    "meaning": "Agent",
    "plural": "Die Agenten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 429,
    "noun": "Zukunft",
    "article": "die",
    "meaning": "Future",
    "plural": "Die Zukunft",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 430,
    "noun": "Hose",
    "article": "die",
    "meaning": "Pant",
    "plural": "Die Hosen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 431,
    "noun": "Leder",
    "article": "das",
    "meaning": "Leather",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 432,
    "noun": "Flug",
    "article": "der",
    "meaning": "Flight",
    "plural": "Die Flüge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 433,
    "noun": "Sex",
    "article": "der",
    "meaning": "Sex",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 434,
    "noun": "Gericht",
    "article": "das",
    "meaning": "Court",
    "plural": "Die Gerichte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 435,
    "noun": "Kurs",
    "article": "der",
    "meaning": "Course",
    "plural": "Die Kurse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 436,
    "noun": "Schmutz",
    "article": "der",
    "meaning": "Dirt",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 437,
    "noun": "Ei",
    "article": "das",
    "meaning": "Egg",
    "plural": "Die Eier",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 438,
    "noun": "Kinn",
    "article": "das",
    "meaning": "Chin",
    "plural": "Die Kinne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 439,
    "noun": "Fremde",
    "article": "der",
    "meaning": "Stranger",
    "plural": "Die Fremden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 440,
    "noun": "Vergnügen",
    "article": "das",
    "meaning": "Pleasure",
    "plural": "Die Vergnügen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 441,
    "noun": "Detail",
    "article": "das",
    "meaning": "Detail",
    "plural": "Die Details",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 442,
    "noun": "Besatzung",
    "article": "die",
    "meaning": "Crew",
    "plural": "Die Besatzungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 443,
    "noun": "Herbst",
    "article": "der",
    "meaning": "Fall",
    "plural": "Die Fälle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 444,
    "noun": "Gast",
    "article": "der",
    "meaning": "Guest",
    "plural": "Die Gäste",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 445,
    "noun": "Erfahrung",
    "article": "die",
    "meaning": "Experience",
    "plural": "Die Erfahrungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 446,
    "noun": "Witz",
    "article": "der",
    "meaning": "Joke",
    "plural": "Die Witze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 447,
    "noun": "Sand",
    "article": "der",
    "meaning": "Sand",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 448,
    "noun": "Faust",
    "article": "die",
    "meaning": "Fist",
    "plural": "Die Fäuste",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 449,
    "noun": "Aktion",
    "article": "die",
    "meaning": "Action",
    "plural": "Die Aktionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 450,
    "noun": "Spaziergang",
    "article": "der",
    "meaning": "Walk",
    "plural": "Die Spaziergänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 451,
    "noun": "Hochzeit",
    "article": "die",
    "meaning": "Wedding",
    "plural": "Die Hochzeiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 452,
    "noun": "Geschäft",
    "article": "das",
    "meaning": "Deal",
    "plural": "Die Geschäfte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 453,
    "noun": "Natur",
    "article": "die",
    "meaning": "Nature",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 454,
    "noun": "Planet",
    "article": "der",
    "meaning": "Planet",
    "plural": "Die Planeten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 455,
    "noun": "Cousin",
    "article": "der",
    "meaning": "Cousin",
    "plural": "Die Cousins",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 456,
    "noun": "Bewegung",
    "article": "die",
    "meaning": "Movement",
    "plural": "Die Bewegungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 457,
    "noun": "Fleisch",
    "article": "das",
    "meaning": "Flesh",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 458,
    "noun": "Rekord",
    "article": "der",
    "meaning": "Record",
    "plural": "Die Rekorde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 459,
    "noun": "Lager",
    "article": "das",
    "meaning": "Camp",
    "plural": "Die Lager",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 460,
    "noun": "Zeitung",
    "article": "die",
    "meaning": "Newspaper",
    "plural": "Die Zeitungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 461,
    "noun": "Strahl",
    "article": "der",
    "meaning": "Ray",
    "plural": "Die Strahlen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 462,
    "noun": "Mensch",
    "article": "der",
    "meaning": "Human",
    "plural": "Die Menschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 463,
    "noun": "Couch",
    "article": "die",
    "meaning": "Couch",
    "plural": "Die Couches",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 464,
    "noun": "Bewegung",
    "article": "die",
    "meaning": "Motion",
    "plural": "Die Bewegungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 465,
    "noun": "Großvater",
    "article": "der",
    "meaning": "Grandfather",
    "plural": "Die Großväter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 466,
    "noun": "Foto",
    "article": "das",
    "meaning": "Photograph",
    "plural": "Die Fotos",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 467,
    "noun": "Geheimnis",
    "article": "das",
    "meaning": "Secret",
    "plural": "Die Geheimnisse",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 468,
    "noun": "Schönheit",
    "article": "die",
    "meaning": "Beauty",
    "plural": "Die Schönheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 469,
    "noun": "Anwesenheit",
    "article": "die",
    "meaning": "Presence",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 470,
    "noun": "Glocke",
    "article": "die",
    "meaning": "Bell",
    "plural": "Die Glocken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 471,
    "noun": "Volk",
    "article": "das",
    "meaning": "Folk",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 472,
    "noun": "Knopf",
    "article": "der",
    "meaning": "Button",
    "plural": "Die Knöpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 473,
    "noun": "Liste",
    "article": "die",
    "meaning": "List",
    "plural": "Die Listen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 474,
    "noun": "Level",
    "article": "das",
    "meaning": "Level",
    "plural": "Die Level",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 475,
    "noun": "Datum",
    "article": "das",
    "meaning": "Date",
    "plural": "Die Daten",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 476,
    "noun": "Fach",
    "article": "das",
    "meaning": "Subject",
    "plural": "Die Fächer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 477,
    "noun": "Unterschied",
    "article": "der",
    "meaning": "Difference",
    "plural": "Die Unterschiede",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 478,
    "noun": "Pause",
    "article": "die",
    "meaning": "Pause",
    "plural": "Die Pausen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 479,
    "noun": "Lieferwagen",
    "article": "der",
    "meaning": "Van",
    "plural": "Die Lieferwagen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 480,
    "noun": "Klinge",
    "article": "die",
    "meaning": "Blade",
    "plural": "Die Klingen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 481,
    "noun": "Fernsehen",
    "article": "das",
    "meaning": "Television",
    "plural": "Die Fernseher",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 482,
    "noun": "Abdeckung",
    "article": "die",
    "meaning": "Cover",
    "plural": "Die Abdeckungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 483,
    "noun": "Vergangenheit",
    "article": "die",
    "meaning": "Past",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 484,
    "noun": "Farm",
    "article": "die",
    "meaning": "Farm",
    "plural": "Die Farmen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 485,
    "noun": "Schoß",
    "article": "der",
    "meaning": "Lap",
    "plural": "Die Schoß",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 486,
    "noun": "Band",
    "article": "die",
    "meaning": "Band",
    "plural": "Die Bands",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 487,
    "noun": "Anwalt",
    "article": "der",
    "meaning": "Lawyer",
    "plural": "Die Anwälte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 488,
    "noun": "Magazin",
    "article": "das",
    "meaning": "Magazine",
    "plural": "Die Magazine",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 489,
    "noun": "Ast",
    "article": "der",
    "meaning": "Branch",
    "plural": "Die Äste",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 490,
    "noun": "Rahmen",
    "article": "der",
    "meaning": "Frame",
    "plural": "Die Rahmen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 491,
    "noun": "Deck",
    "article": "das",
    "meaning": "Deck",
    "plural": "Die Decks",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 492,
    "noun": "Wirkung",
    "article": "die",
    "meaning": "Effect",
    "plural": "Die Wirkungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 493,
    "noun": "Tanz",
    "article": "der",
    "meaning": "Dance",
    "plural": "Die Tänze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 494,
    "noun": "Vision",
    "article": "die",
    "meaning": "Vision",
    "plural": "Die Visionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 495,
    "noun": "Geist",
    "article": "das",
    "meaning": "Ghost",
    "plural": "Die Geister",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 496,
    "noun": "Hintern",
    "article": "der",
    "meaning": "Ass",
    "plural": "Die Hintern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 497,
    "noun": "Charakter",
    "article": "der",
    "meaning": "Character",
    "plural": "Die Charaktere",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 498,
    "noun": "Blick",
    "article": "der",
    "meaning": "Glance",
    "plural": "Die Blicke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 499,
    "noun": "Abschied",
    "article": "der",
    "meaning": "Goodbye",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 500,
    "noun": "Parken",
    "article": "das",
    "meaning": "Parking",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 501,
    "noun": "Frühstück",
    "article": "das",
    "meaning": "Breakfast",
    "plural": "Die Frühstücke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 502,
    "noun": "Geste",
    "article": "die",
    "meaning": "Gesture",
    "plural": "Die Gesten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 503,
    "noun": "Glück",
    "article": "das",
    "meaning": "Luck",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 504,
    "noun": "Decke",
    "article": "die",
    "meaning": "Blanket",
    "plural": "Die Decken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 505,
    "noun": "Gas",
    "article": "das",
    "meaning": "Gas",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 506,
    "noun": "Korridor",
    "article": "der",
    "meaning": "Corridor",
    "plural": "Die Korridore",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 507,
    "noun": "Professor",
    "article": "der",
    "meaning": "Professor",
    "plural": "Die Professoren",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 508,
    "noun": "Stück",
    "article": "das",
    "meaning": "Play",
    "plural": "Die Stücke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 509,
    "noun": "Fehler",
    "article": "der",
    "meaning": "Mistake",
    "plural": "Die Fehler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 510,
    "noun": "Universität",
    "article": "die",
    "meaning": "University",
    "plural": "Die Universitäten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 511,
    "noun": "Ozean",
    "article": "der",
    "meaning": "Ocean",
    "plural": "Die Ozeane",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 512,
    "noun": "Jahrhundert",
    "article": "das",
    "meaning": "Century",
    "plural": "Die Jahrhunderte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 513,
    "noun": "Honig",
    "article": "der",
    "meaning": "Honey",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 514,
    "noun": "Stapel",
    "article": "der",
    "meaning": "Pile",
    "plural": "Die Stapel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 515,
    "noun": "Schüssel",
    "article": "die",
    "meaning": "Bowl",
    "plural": "Die Schüsseln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 516,
    "noun": "Basis",
    "article": "die",
    "meaning": "Base",
    "plural": "Die Basen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 517,
    "noun": "Zaun",
    "article": "der",
    "meaning": "Fence",
    "plural": "Die Zäune",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 518,
    "noun": "Regel",
    "article": "die",
    "meaning": "Rule",
    "plural": "Die Regeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 519,
    "noun": "Lachen",
    "article": "das",
    "meaning": "Laughter",
    "plural": "-",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 520,
    "noun": "Ärger",
    "article": "der",
    "meaning": "Anger",
    "plural": "-",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 521,
    "noun": "Schweiß",
    "article": "der",
    "meaning": "Sweat",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 522,
    "noun": "Unfall",
    "article": "der",
    "meaning": "Accident",
    "plural": "Die Unfälle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 523,
    "noun": "Wetter",
    "article": "das",
    "meaning": "Weather",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 524,
    "noun": "Entscheidung",
    "article": "die",
    "meaning": "Decision",
    "plural": "Die Entscheidungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 525,
    "noun": "Engel",
    "article": "der",
    "meaning": "Angel",
    "plural": "Die Engel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 526,
    "noun": "Stärke",
    "article": "die",
    "meaning": "Strength",
    "plural": "Die Stärken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 527,
    "noun": "Huhn",
    "article": "das",
    "meaning": "Chicken",
    "plural": "Die Hühner",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 528,
    "noun": "Studium",
    "article": "das",
    "meaning": "Study",
    "plural": "Die Studien",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 529,
    "noun": "Band",
    "article": "das",
    "meaning": "Tape",
    "plural": "Die Bänder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 530,
    "noun": "Handgelenk",
    "article": "das",
    "meaning": "Wrist",
    "plural": "Die Handgelenke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 531,
    "noun": "Halt",
    "article": "der",
    "meaning": "Stop",
    "plural": "Die Halte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 532,
    "noun": "Hüfte",
    "article": "die",
    "meaning": "Hip",
    "plural": "Die Hüften",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 533,
    "noun": "Regierung",
    "article": "die",
    "meaning": "Government",
    "plural": "Die Regierungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 534,
    "noun": "Bauch",
    "article": "der",
    "meaning": "Belly",
    "plural": "Die Bäuche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 535,
    "noun": "Königin",
    "article": "die",
    "meaning": "Queen",
    "plural": "Die Königinnen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 536,
    "noun": "Bericht",
    "article": "der",
    "meaning": "Report",
    "plural": "Die Berichte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 537,
    "noun": "Schwanz",
    "article": "der",
    "meaning": "Tail",
    "plural": "Die Schwänze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 538,
    "noun": "Pflanze",
    "article": "die",
    "meaning": "Plant",
    "plural": "Die Pflanzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 539,
    "noun": "Flamme",
    "article": "die",
    "meaning": "Flame",
    "plural": "Die Flammen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 540,
    "noun": "Himmel",
    "article": "der",
    "meaning": "Heaven",
    "plural": "Die Himmel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 541,
    "noun": "Gürtel",
    "article": "der",
    "meaning": "Belt",
    "plural": "Die Gürtel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 542,
    "noun": "Nachbarschaft",
    "article": "die",
    "meaning": "Neighborhood",
    "plural": "Die Nachbarschaften",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 543,
    "noun": "Energie",
    "article": "die",
    "meaning": "Energy",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 544,
    "noun": "Grün",
    "article": "das",
    "meaning": "Green",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 545,
    "noun": "Viertel",
    "article": "das",
    "meaning": "Quarter",
    "plural": "Die Viertel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 546,
    "noun": "Feind",
    "article": "der",
    "meaning": "Enemy",
    "plural": "Die Feinde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 547,
    "noun": "Zug",
    "article": "der",
    "meaning": "Move",
    "plural": "Die Züge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 548,
    "noun": "Eingang",
    "article": "der",
    "meaning": "Entrance",
    "plural": "Die Eingänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 549,
    "noun": "Bibliothek",
    "article": "die",
    "meaning": "Library",
    "plural": "Die Bibliotheken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 550,
    "noun": "Schriftsteller",
    "article": "der",
    "meaning": "Writer",
    "plural": "Die Schriftsteller",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 551,
    "noun": "Frieden",
    "article": "der",
    "meaning": "Peace",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 552,
    "noun": "Berührung",
    "article": "die",
    "meaning": "Touch",
    "plural": "Die Berührungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 553,
    "noun": "Topf",
    "article": "der",
    "meaning": "Pot",
    "plural": "Die Töpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 554,
    "noun": "Art",
    "article": "die",
    "meaning": "Type",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 555,
    "noun": "Ursache",
    "article": "die",
    "meaning": "Cause",
    "plural": "Die Ursachen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 556,
    "noun": "Seil",
    "article": "das",
    "meaning": "Rope",
    "plural": "Die Seile",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 557,
    "noun": "Muskel",
    "article": "der",
    "meaning": "Muscle",
    "plural": "Die Muskeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 558,
    "noun": "Gemälde",
    "article": "das",
    "meaning": "Painting",
    "plural": "Die Gemälde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 559,
    "noun": "Vorhang",
    "article": "der",
    "meaning": "Curtain",
    "plural": "Die Vorhänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 560,
    "noun": "Mahlzeit",
    "article": "die",
    "meaning": "Meal",
    "plural": "Die Mahlzeiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 561,
    "noun": "Akt",
    "article": "der",
    "meaning": "Act",
    "plural": "Die Akte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 562,
    "noun": "Wolf",
    "article": "der",
    "meaning": "Wolf",
    "plural": "Die Wölfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 563,
    "noun": "Kabine",
    "article": "die",
    "meaning": "Cabin",
    "plural": "Die Kabinen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 564,
    "noun": "Gebühr",
    "article": "die",
    "meaning": "Charge",
    "plural": "Die Gebühren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 565,
    "noun": "Uhr",
    "article": "die",
    "meaning": "Clock",
    "plural": "Die Uhren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 566,
    "noun": "Passagier",
    "article": "der",
    "meaning": "Passenger",
    "plural": "Die Passagiere",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 567,
    "noun": "Kumpel",
    "article": "der",
    "meaning": "Buddy",
    "plural": "Die Kumpel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 568,
    "noun": "Medikament",
    "article": "das",
    "meaning": "Drug",
    "plural": "Die Medikamente",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 569,
    "noun": "Verwendung",
    "article": "die",
    "meaning": "Use",
    "plural": "Die Verwendungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 570,
    "noun": "Bank",
    "article": "die",
    "meaning": "Bench",
    "plural": "Die Bänke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 571,
    "noun": "Verkehr",
    "article": "der",
    "meaning": "Traffic",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 572,
    "noun": "Erleichterung",
    "article": "die",
    "meaning": "Relief",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 573,
    "noun": "Mütze",
    "article": "die",
    "meaning": "Cap",
    "plural": "Die Mützen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 574,
    "noun": "Pack",
    "article": "das",
    "meaning": "Pack",
    "plural": "Die Packs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 575,
    "noun": "Wochenende",
    "article": "das",
    "meaning": "Weekend",
    "plural": "Die Wochenenden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 576,
    "noun": "Stand",
    "article": "der",
    "meaning": "Stand",
    "plural": "Die Stände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 577,
    "noun": "Aufzug",
    "article": "der",
    "meaning": "Elevator",
    "plural": "Die Aufzüge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 578,
    "noun": "Geburtstag",
    "article": "der",
    "meaning": "Birthday",
    "plural": "Die Geburtstage",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 579,
    "noun": "Lilie",
    "article": "die",
    "meaning": "Lily",
    "plural": "Die Lilien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 580,
    "noun": "Eisen",
    "article": "das",
    "meaning": "Iron",
    "plural": "Die Eisen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 581,
    "noun": "Fleisch",
    "article": "das",
    "meaning": "Meat",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 582,
    "noun": "Augenbraue",
    "article": "die",
    "meaning": "Eyebrow",
    "plural": "Die Augenbrauen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 583,
    "noun": "Antwort",
    "article": "die",
    "meaning": "Response",
    "plural": "Die Antworten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 584,
    "noun": "Geschwindigkeit",
    "article": "die",
    "meaning": "Speed",
    "plural": "Die Geschwindigkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 585,
    "noun": "Zweck",
    "article": "der",
    "meaning": "Purpose",
    "plural": "Die Zwecke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 586,
    "noun": "Rock",
    "article": "der",
    "meaning": "Skirt",
    "plural": "Die Röcke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 587,
    "noun": "Quadrat",
    "article": "das",
    "meaning": "Square",
    "plural": "Die Quadrate",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 588,
    "noun": "Fahrt",
    "article": "die",
    "meaning": "Drive",
    "plural": "Die Fahrten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 589,
    "noun": "Artikel",
    "article": "der",
    "meaning": "Article",
    "plural": "Die Artikel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 590,
    "noun": "Englisch",
    "article": "das",
    "meaning": "English",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 591,
    "noun": "Turm",
    "article": "der",
    "meaning": "Tower",
    "plural": "Die Türme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 592,
    "noun": "Schlacht",
    "article": "die",
    "meaning": "Battle",
    "plural": "Die Schlachten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 593,
    "noun": "Film",
    "article": "der",
    "meaning": "Film",
    "plural": "Die Filme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 594,
    "noun": "Rennen",
    "article": "das",
    "meaning": "Race",
    "plural": "Die Rennen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 595,
    "noun": "Schock",
    "article": "der",
    "meaning": "Shock",
    "plural": "Die Schocks",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 596,
    "noun": "Sektion",
    "article": "die",
    "meaning": "Section",
    "plural": "Die Sektionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 597,
    "noun": "Art",
    "article": "die",
    "meaning": "Manner",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 598,
    "noun": "Schwert",
    "article": "das",
    "meaning": "Sword",
    "plural": "Die Schwerter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 599,
    "noun": "Stock",
    "article": "der",
    "meaning": "Stick",
    "plural": "Die Stöcke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 600,
    "noun": "Datei",
    "article": "die",
    "meaning": "File",
    "plural": "Die Dateien",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 601,
    "noun": "Brot",
    "article": "das",
    "meaning": "Bread",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 602,
    "noun": "Öl",
    "article": "das",
    "meaning": "Oil",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 603,
    "noun": "Kette",
    "article": "die",
    "meaning": "Chain",
    "plural": "Die Ketten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 604,
    "noun": "Abteilung",
    "article": "die",
    "meaning": "Department",
    "plural": "Die Abteilungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 605,
    "noun": "Projekt",
    "article": "das",
    "meaning": "Project",
    "plural": "Die Projekte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 606,
    "noun": "Mord",
    "article": "der",
    "meaning": "Murder",
    "plural": "Die Morde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 607,
    "noun": "Bär",
    "article": "der",
    "meaning": "Bear",
    "plural": "Die Bären",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 608,
    "noun": "Test",
    "article": "der",
    "meaning": "Test",
    "plural": "Die Tests",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 609,
    "noun": "Besuch",
    "article": "der",
    "meaning": "Visit",
    "plural": "Die Besuche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 610,
    "noun": "Milch",
    "article": "die",
    "meaning": "Milk",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 611,
    "noun": "Chef",
    "article": "der",
    "meaning": "Boss",
    "plural": "Die Chefs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 612,
    "noun": "Ellenbogen",
    "article": "der",
    "meaning": "Elbow",
    "plural": "Die Ellenbogen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 613,
    "noun": "Verlangen",
    "article": "das",
    "meaning": "Desire",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 614,
    "noun": "Patient",
    "article": "der",
    "meaning": "Patient",
    "plural": "Die Patienten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 615,
    "noun": "Grinsen",
    "article": "das",
    "meaning": "Grin",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 616,
    "noun": "Liebhaber",
    "article": "der",
    "meaning": "Lover",
    "plural": "Die Liebhaber",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 617,
    "noun": "Preis",
    "article": "der",
    "meaning": "Price",
    "plural": "Die Preise",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 618,
    "noun": "Karte",
    "article": "die",
    "meaning": "Map",
    "plural": "Die Karten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 619,
    "noun": "Wissen",
    "article": "das",
    "meaning": "Knowledge",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 620,
    "noun": "Anfang",
    "article": "der",
    "meaning": "Beginning",
    "plural": "Die Anfänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 621,
    "noun": "Kälte",
    "article": "die",
    "meaning": "Cold",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 622,
    "noun": "Schrank",
    "article": "der",
    "meaning": "Closet",
    "plural": "Die Schränke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 623,
    "noun": "Morgendämmerung",
    "article": "die",
    "meaning": "Dawn",
    "plural": "Die Morgendämmerungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 624,
    "noun": "Tempel",
    "article": "der",
    "meaning": "Temple",
    "plural": "Die Tempel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 625,
    "noun": "Freude",
    "article": "die",
    "meaning": "Joy",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 626,
    "noun": "Pflicht",
    "article": "die",
    "meaning": "Duty",
    "plural": "Die Pflichten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 627,
    "noun": "Übung",
    "article": "die",
    "meaning": "Practice",
    "plural": "Die Übungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 628,
    "noun": "Absatz",
    "article": "der",
    "meaning": "Heel",
    "plural": "Die Absätze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 629,
    "noun": "Tal",
    "article": "das",
    "meaning": "Valley",
    "plural": "Die Täler",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 630,
    "noun": "Kampf",
    "article": "der",
    "meaning": "Fight",
    "plural": "Die Kämpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 631,
    "noun": "Kabel",
    "article": "das",
    "meaning": "Wire",
    "plural": "Die Kabel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 632,
    "noun": "Jeans",
    "article": "die",
    "meaning": "Jeans",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 633,
    "noun": "Kuss",
    "article": "der",
    "meaning": "Kiss",
    "plural": "Die Küsse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 634,
    "noun": "Kiefer",
    "article": "der",
    "meaning": "Jaw",
    "plural": "Die Kiefer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 635,
    "noun": "Lauf",
    "article": "der",
    "meaning": "Run",
    "plural": "Die Läufe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 636,
    "noun": "Halten",
    "article": "das",
    "meaning": "Hold",
    "plural": "Die Halten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 637,
    "noun": "Beziehung",
    "article": "die",
    "meaning": "Relationship",
    "plural": "Die Beziehungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 638,
    "noun": "Objekt",
    "article": "das",
    "meaning": "Object",
    "plural": "Die Objekte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 639,
    "noun": "Angriff",
    "article": "der",
    "meaning": "Attack",
    "plural": "Die Angriffe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 640,
    "noun": "Gericht",
    "article": "das",
    "meaning": "Dish",
    "plural": "Die Gerichte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 641,
    "noun": "Autobahn",
    "article": "die",
    "meaning": "Highway",
    "plural": "Die Autobahnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 642,
    "noun": "Schatten",
    "article": "der",
    "meaning": "Shade",
    "plural": "Die Schatten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 643,
    "noun": "Verbrechen",
    "article": "das",
    "meaning": "Crime",
    "plural": "Die Verbrechen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 644,
    "noun": "Weiß",
    "article": "das",
    "meaning": "White",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 645,
    "noun": "Partner",
    "article": "der",
    "meaning": "Partner",
    "plural": "Die Partner",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 646,
    "noun": "Priester",
    "article": "der",
    "meaning": "Priest",
    "plural": "Die Priester",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 647,
    "noun": "Rasen",
    "article": "der",
    "meaning": "Lawn",
    "plural": "Die Rasen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 648,
    "noun": "Lachen",
    "article": "das",
    "meaning": "Laugh",
    "plural": "-",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 649,
    "noun": "Stamm",
    "article": "der",
    "meaning": "Trunk",
    "plural": "Die Stämme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 650,
    "noun": "Weinen",
    "article": "das",
    "meaning": "Cry",
    "plural": "Die Weinen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 651,
    "noun": "Programm",
    "article": "das",
    "meaning": "Program",
    "plural": "Die Programme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 652,
    "noun": "Fahrt",
    "article": "die",
    "meaning": "Ride",
    "plural": "Die Fahrten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 653,
    "noun": "Regal",
    "article": "das",
    "meaning": "Shelf",
    "plural": "Die Regale",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 654,
    "noun": "Herr",
    "article": "der",
    "meaning": "Gentleman",
    "plural": "Die Herren",
    "logic": "Semantic pattern: male persons are usually der."
  },
  {
    "rank": 655,
    "noun": "Wesen",
    "article": "das",
    "meaning": "Being",
    "plural": "Die Wesen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 656,
    "noun": "Stahl",
    "article": "der",
    "meaning": "Steel",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 657,
    "noun": "Bürgersteig",
    "article": "der",
    "meaning": "Sidewalk",
    "plural": "Die Bürgersteige",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 658,
    "noun": "Uniform",
    "article": "die",
    "meaning": "Uniform",
    "plural": "Die Uniformen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 659,
    "noun": "Muster",
    "article": "das",
    "meaning": "Pattern",
    "plural": "Die Muster",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 660,
    "noun": "Beweis",
    "article": "der",
    "meaning": "Evidence",
    "plural": "Die Beweise",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 661,
    "noun": "Spieler",
    "article": "der",
    "meaning": "Player",
    "plural": "Die Spieler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 662,
    "noun": "Roman",
    "article": "der",
    "meaning": "Novel",
    "plural": "Die Romane",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 663,
    "noun": "Kissen",
    "article": "das",
    "meaning": "Pillow",
    "plural": "Die Kissen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 664,
    "noun": "Lampe",
    "article": "die",
    "meaning": "Lamp",
    "plural": "Die Lampen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 665,
    "noun": "Schublade",
    "article": "die",
    "meaning": "Drawer",
    "plural": "Die Schubladen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 666,
    "noun": "Gefahr",
    "article": "die",
    "meaning": "Danger",
    "plural": "Die Gefahren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 667,
    "noun": "Detektiv",
    "article": "der",
    "meaning": "Detective",
    "plural": "Die Detektive",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 668,
    "noun": "Augenblick",
    "article": "der",
    "meaning": "Instant",
    "plural": "Die Augenblicke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 669,
    "noun": "Denken",
    "article": "das",
    "meaning": "Thinking",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 670,
    "noun": "Riss",
    "article": "der",
    "meaning": "Crack",
    "plural": "Die Risse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 671,
    "noun": "Gebet",
    "article": "das",
    "meaning": "Prayer",
    "plural": "Die Gebete",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 672,
    "noun": "Handtuch",
    "article": "das",
    "meaning": "Towel",
    "plural": "Die Handtücher",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 673,
    "noun": "Handschuh",
    "article": "der",
    "meaning": "Glove",
    "plural": "Die Handschuhe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 674,
    "noun": "Bucht",
    "article": "die",
    "meaning": "Bay",
    "plural": "Die Buchten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 675,
    "noun": "Publikum",
    "article": "das",
    "meaning": "Audience",
    "plural": "-",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 676,
    "noun": "Dose",
    "article": "die",
    "meaning": "Can",
    "plural": "Die Dosen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 677,
    "noun": "Zustand",
    "article": "der",
    "meaning": "Condition",
    "plural": "Die Zustände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 678,
    "noun": "Pfad",
    "article": "der",
    "meaning": "Trail",
    "plural": "Die Pfade",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 679,
    "noun": "Taille",
    "article": "die",
    "meaning": "Waist",
    "plural": "Die Taillen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 680,
    "noun": "Druck",
    "article": "der",
    "meaning": "Pressure",
    "plural": "Die Drücke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 681,
    "noun": "Telefon",
    "article": "das",
    "meaning": "Telephone",
    "plural": "Die Telefone",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 682,
    "noun": "Waschbecken",
    "article": "das",
    "meaning": "Sink",
    "plural": "Die Waschbecken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 683,
    "noun": "Rückkehr",
    "article": "die",
    "meaning": "Return",
    "plural": "Die Rückkehr",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 684,
    "noun": "Brise",
    "article": "die",
    "meaning": "Breeze",
    "plural": "Die Brisen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 685,
    "noun": "Geschmack",
    "article": "der",
    "meaning": "Taste",
    "plural": "Die Geschmäcker",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 686,
    "noun": "Fehler",
    "article": "der",
    "meaning": "Fault",
    "plural": "Die Fehler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 687,
    "noun": "Strom",
    "article": "der",
    "meaning": "Stream",
    "plural": "Die Ströme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 688,
    "noun": "Ergebnis",
    "article": "das",
    "meaning": "Result",
    "plural": "Die Ergebnisse",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 689,
    "noun": "Autor",
    "article": "der",
    "meaning": "Author",
    "plural": "Die Autoren",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 690,
    "noun": "Tipp",
    "article": "der",
    "meaning": "Tip",
    "plural": "Die Tipps",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 691,
    "noun": "Dusche",
    "article": "die",
    "meaning": "Shower",
    "plural": "Die Duschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 692,
    "noun": "Zehe",
    "article": "die",
    "meaning": "Toe",
    "plural": "Die Zehen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 693,
    "noun": "Jahreszeit",
    "article": "die",
    "meaning": "Season",
    "plural": "Die Jahreszeiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 694,
    "noun": "Hälfte",
    "article": "die",
    "meaning": "Half",
    "plural": "Die Hälften",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 695,
    "noun": "Narr",
    "article": "der",
    "meaning": "Fool",
    "plural": "Die Narren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 696,
    "noun": "Tunnel",
    "article": "der",
    "meaning": "Tunnel",
    "plural": "Die Tunnel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 697,
    "noun": "Kunde",
    "article": "der",
    "meaning": "Client",
    "plural": "Die Kunden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 698,
    "noun": "Garage",
    "article": "die",
    "meaning": "Garage",
    "plural": "Die Garagen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 699,
    "noun": "Mission",
    "article": "die",
    "meaning": "Mission",
    "plural": "Die Missionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 700,
    "noun": "Chef",
    "article": "der",
    "meaning": "Chief",
    "plural": "Die Chefs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 701,
    "noun": "Kugel",
    "article": "die",
    "meaning": "Bullet",
    "plural": "Die Kugeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 702,
    "noun": "Markt",
    "article": "der",
    "meaning": "Market",
    "plural": "Die Märkte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 703,
    "noun": "Verlust",
    "article": "der",
    "meaning": "Loss",
    "plural": "Die Verluste",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 704,
    "noun": "Serie",
    "article": "die",
    "meaning": "Series",
    "plural": "Die Serien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 705,
    "noun": "Stift",
    "article": "der",
    "meaning": "Pen",
    "plural": "Die Stifte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 706,
    "noun": "Begriff",
    "article": "der",
    "meaning": "Term",
    "plural": "Die Begriffe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 707,
    "noun": "Gedicht",
    "article": "das",
    "meaning": "Poem",
    "plural": "Die Gedichte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 708,
    "noun": "Prinz",
    "article": "der",
    "meaning": "Prince",
    "plural": "Die Prinzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 709,
    "noun": "Ton",
    "article": "der",
    "meaning": "Clay",
    "plural": "Die Tone",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 710,
    "noun": "Schloss",
    "article": "das",
    "meaning": "Lock",
    "plural": "Die Schlösser",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 711,
    "noun": "Realität",
    "article": "die",
    "meaning": "Reality",
    "plural": "Die Realitäten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 712,
    "noun": "Schlange",
    "article": "die",
    "meaning": "Snake",
    "plural": "Die Schlangen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 713,
    "noun": "Apfel",
    "article": "der",
    "meaning": "Apple",
    "plural": "Die Äpfel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 714,
    "noun": "Maske",
    "article": "die",
    "meaning": "Mask",
    "plural": "Die Masken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 715,
    "noun": "Kunde",
    "article": "der",
    "meaning": "Customer",
    "plural": "Die Kunden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 716,
    "noun": "Geburt",
    "article": "die",
    "meaning": "Birth",
    "plural": "Die Geburten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 717,
    "noun": "Pause",
    "article": "die",
    "meaning": "Break",
    "plural": "Die Pausen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 718,
    "noun": "Wunder",
    "article": "das",
    "meaning": "Wonder",
    "plural": "Die Wunder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 719,
    "noun": "Sonnenlicht",
    "article": "das",
    "meaning": "Sunlight",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 720,
    "noun": "Panzer",
    "article": "der",
    "meaning": "Tank",
    "plural": "Die Panzer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 721,
    "noun": "Personal",
    "article": "das",
    "meaning": "Staff",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 722,
    "noun": "Lüge",
    "article": "die",
    "meaning": "Lie",
    "plural": "Die Lügen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 723,
    "noun": "Glaube",
    "article": "der",
    "meaning": "Faith",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 724,
    "noun": "Ehre",
    "article": "die",
    "meaning": "Honor",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 725,
    "noun": "Sahne",
    "article": "die",
    "meaning": "Cream",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 726,
    "noun": "Grund",
    "article": "der",
    "meaning": "Sake",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 727,
    "noun": "Opfer",
    "article": "das",
    "meaning": "Victim",
    "plural": "Die Opfer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 728,
    "noun": "Möglichkeit",
    "article": "die",
    "meaning": "Possibility",
    "plural": "Die Möglichkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 729,
    "noun": "Kontakt",
    "article": "der",
    "meaning": "Contact",
    "plural": "Die Kontakte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 730,
    "noun": "Stimmung",
    "article": "die",
    "meaning": "Mood",
    "plural": "Die Stimmungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 731,
    "noun": "Daumen",
    "article": "der",
    "meaning": "Thumb",
    "plural": "Die Daumen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 732,
    "noun": "Lesen",
    "article": "das",
    "meaning": "Reading",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 733,
    "noun": "Spaß",
    "article": "der",
    "meaning": "Fun",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 734,
    "noun": "Kerze",
    "article": "die",
    "meaning": "Candle",
    "plural": "Die Kerzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 735,
    "noun": "Höhle",
    "article": "die",
    "meaning": "Cave",
    "plural": "Die Höhlen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 736,
    "noun": "Post",
    "article": "die",
    "meaning": "Post",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 737,
    "noun": "Gefängnis",
    "article": "das",
    "meaning": "Prison",
    "plural": "Die Gefängnisse",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 738,
    "noun": "Emotion",
    "article": "die",
    "meaning": "Emotion",
    "plural": "Die Emotionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 739,
    "noun": "Führer",
    "article": "der",
    "meaning": "Leader",
    "plural": "Die Führer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 740,
    "noun": "Abschluss",
    "article": "der",
    "meaning": "Degree",
    "plural": "Die Abschlüsse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 741,
    "noun": "Merkmal",
    "article": "das",
    "meaning": "Feature",
    "plural": "Die Merkmale",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 742,
    "noun": "Eintrittskarte",
    "article": "die",
    "meaning": "Ticket",
    "plural": "Die Eintrittskarten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 743,
    "noun": "Alien",
    "article": "das",
    "meaning": "Alien",
    "plural": "Die Aliens",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 744,
    "noun": "Lektion",
    "article": "die",
    "meaning": "Lesson",
    "plural": "Die Lektionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 745,
    "noun": "Wüste",
    "article": "die",
    "meaning": "Desert",
    "plural": "Die Wüsten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 746,
    "noun": "Schnitt",
    "article": "der",
    "meaning": "Cut",
    "plural": "Die Schnitte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 747,
    "noun": "Durcheinander",
    "article": "das",
    "meaning": "Mess",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 748,
    "noun": "Warnung",
    "article": "die",
    "meaning": "Warning",
    "plural": "Die Warnungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 749,
    "noun": "Märchen",
    "article": "das",
    "meaning": "Tale",
    "plural": "Die Märchen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 750,
    "noun": "Beerdigung",
    "article": "die",
    "meaning": "Funeral",
    "plural": "Die Beerdigungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 751,
    "noun": "Taxi",
    "article": "das",
    "meaning": "Cab",
    "plural": "Die Taxis",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 752,
    "noun": "Reporter",
    "article": "der",
    "meaning": "Reporter",
    "plural": "Die Reporter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 753,
    "noun": "Geschenk",
    "article": "das",
    "meaning": "Present",
    "plural": "Die Geschenke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 754,
    "noun": "Theater",
    "article": "das",
    "meaning": "Theater",
    "plural": "Die Theater",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 755,
    "noun": "Länge",
    "article": "die",
    "meaning": "Length",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 756,
    "noun": "Schlamm",
    "article": "der",
    "meaning": "Mud",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 757,
    "noun": "Wissenschaft",
    "article": "die",
    "meaning": "Science",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 758,
    "noun": "Tropfen",
    "article": "der",
    "meaning": "Drop",
    "plural": "Die Tropfen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 759,
    "noun": "Schnur",
    "article": "die",
    "meaning": "String",
    "plural": "Die Schnüre",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 760,
    "noun": "Rede",
    "article": "die",
    "meaning": "Speech",
    "plural": "Die Reden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 761,
    "noun": "Exemplar",
    "article": "das",
    "meaning": "Copy",
    "plural": "Die Exemplare",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 762,
    "noun": "Kuh",
    "article": "die",
    "meaning": "Cow",
    "plural": "Die Kühe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 763,
    "noun": "Arbeiter",
    "article": "der",
    "meaning": "Worker",
    "plural": "Die Arbeiter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 764,
    "noun": "Oberschenkel",
    "article": "der",
    "meaning": "Thigh",
    "plural": "Die Oberschenkel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 765,
    "noun": "Labor",
    "article": "das",
    "meaning": "Lab",
    "plural": "Die Labore",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 766,
    "noun": "Rolle",
    "article": "die",
    "meaning": "Roll",
    "plural": "Die Rollen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 767,
    "noun": "Frucht",
    "article": "die",
    "meaning": "Fruit",
    "plural": "Die Früchte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 768,
    "noun": "Patch",
    "article": "das",
    "meaning": "Patch",
    "plural": "Die Patches",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 769,
    "noun": "Seide",
    "article": "die",
    "meaning": "Silk",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 770,
    "noun": "Dollar",
    "article": "der",
    "meaning": "Buck",
    "plural": "Die Dollars",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 771,
    "noun": "Ziegel",
    "article": "der",
    "meaning": "Brick",
    "plural": "Die Ziegel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 772,
    "noun": "Gewehr",
    "article": "das",
    "meaning": "Rifle",
    "plural": "Die Gewehre",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 773,
    "noun": "Karriere",
    "article": "die",
    "meaning": "Career",
    "plural": "Die Karrieren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 774,
    "noun": "Ausgabe",
    "article": "die",
    "meaning": "Issue",
    "plural": "Die Ausgaben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 775,
    "noun": "Gelegenheit",
    "article": "die",
    "meaning": "Opportunity",
    "plural": "Die Gelegenheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 776,
    "noun": "Regisseur",
    "article": "der",
    "meaning": "Director",
    "plural": "Die Regisseure",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 777,
    "noun": "Monster",
    "article": "das",
    "meaning": "Monster",
    "plural": "Die Monster",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 778,
    "noun": "Fahrzeug",
    "article": "das",
    "meaning": "Vehicle",
    "plural": "Die Fahrzeuge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 779,
    "noun": "Gasse",
    "article": "die",
    "meaning": "Alley",
    "plural": "Die Gassen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 780,
    "noun": "Ärmel",
    "article": "der",
    "meaning": "Sleeve",
    "plural": "Die Ärmel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 781,
    "noun": "Grab",
    "article": "das",
    "meaning": "Grave",
    "plural": "Die Gräber",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 782,
    "noun": "Busch",
    "article": "der",
    "meaning": "Bush",
    "plural": "Die Büsche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 783,
    "noun": "Esszimmer",
    "article": "das",
    "meaning": "Dining",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 784,
    "noun": "Öffnung",
    "article": "die",
    "meaning": "Opening",
    "plural": "Die Öffnungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 785,
    "noun": "Zwilling",
    "article": "das",
    "meaning": "Twin",
    "plural": "Die Zwillinge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 786,
    "noun": "Scheune",
    "article": "die",
    "meaning": "Barn",
    "plural": "Die Scheunen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 787,
    "noun": "Pfund",
    "article": "das",
    "meaning": "Pound",
    "plural": "Die Pfunde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 788,
    "noun": "Seite",
    "article": "die",
    "meaning": "Site",
    "plural": "Die Seiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 789,
    "noun": "Blitz",
    "article": "der",
    "meaning": "Flash",
    "plural": "Die Blitze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 790,
    "noun": "Richter",
    "article": "der",
    "meaning": "Judge",
    "plural": "Die Richter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 791,
    "noun": "Masse",
    "article": "die",
    "meaning": "Mass",
    "plural": "Die Massen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 792,
    "noun": "Prozess",
    "article": "der",
    "meaning": "Process",
    "plural": "Die Prozesse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 793,
    "noun": "Krawatte",
    "article": "die",
    "meaning": "Tie",
    "plural": "Die Krawatten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 794,
    "noun": "Geldbörse",
    "article": "die",
    "meaning": "Purse",
    "plural": "Die Geldbörsen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 795,
    "noun": "Pfeife",
    "article": "die",
    "meaning": "Pipe",
    "plural": "Die Pfeifen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 796,
    "noun": "Drache",
    "article": "der",
    "meaning": "Dragon",
    "plural": "Die Drachen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 797,
    "noun": "Horizont",
    "article": "der",
    "meaning": "Horizon",
    "plural": "Die Horizonte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 798,
    "noun": "Tablett",
    "article": "das",
    "meaning": "Tray",
    "plural": "Die Tabletts",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 799,
    "noun": "Umschlag",
    "article": "der",
    "meaning": "Envelope",
    "plural": "Die Umschläge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 800,
    "noun": "Scheck",
    "article": "der",
    "meaning": "Check",
    "plural": "Die Schecks",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 801,
    "noun": "Erwachsene",
    "article": "der",
    "meaning": "Adult",
    "plural": "Die Erwachsenen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 802,
    "noun": "Notfall",
    "article": "der",
    "meaning": "Emergency",
    "plural": "Die Notfälle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 803,
    "noun": "Material",
    "article": "das",
    "meaning": "Material",
    "plural": "Die Materialien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 804,
    "noun": "Kindheit",
    "article": "die",
    "meaning": "Childhood",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 805,
    "noun": "Gewohnheit",
    "article": "die",
    "meaning": "Habit",
    "plural": "Die Gewohnheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 806,
    "noun": "Künstler",
    "article": "der",
    "meaning": "Artist",
    "plural": "Die Künstler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 807,
    "noun": "Adresse",
    "article": "die",
    "meaning": "Address",
    "plural": "Die Adressen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 808,
    "noun": "Duft",
    "article": "der",
    "meaning": "Scent",
    "plural": "Die Düfte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 809,
    "noun": "Universum",
    "article": "das",
    "meaning": "Universe",
    "plural": "Die Universen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 810,
    "noun": "Nicken",
    "article": "das",
    "meaning": "Nod",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 811,
    "noun": "Muschel",
    "article": "die",
    "meaning": "Shell",
    "plural": "Die Muscheln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 812,
    "noun": "Gemeinschaft",
    "article": "die",
    "meaning": "Community",
    "plural": "Die Gemeinschaften",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 813,
    "noun": "Start",
    "article": "der",
    "meaning": "Start",
    "plural": "Die Starts",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 814,
    "noun": "Wunde",
    "article": "die",
    "meaning": "Wound",
    "plural": "Die Wunden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 815,
    "noun": "Maus",
    "article": "die",
    "meaning": "Mouse",
    "plural": "Die Mäuse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 816,
    "noun": "Pilot",
    "article": "der",
    "meaning": "Pilot",
    "plural": "Die Piloten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 817,
    "noun": "Note",
    "article": "die",
    "meaning": "Grade",
    "plural": "Die Noten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 818,
    "noun": "Video",
    "article": "das",
    "meaning": "Video",
    "plural": "Die Videos",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 819,
    "noun": "Korb",
    "article": "der",
    "meaning": "Basket",
    "plural": "Die Körbe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 820,
    "noun": "Waggon",
    "article": "der",
    "meaning": "Wagon",
    "plural": "Die Waggons",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 821,
    "noun": "Versuch",
    "article": "der",
    "meaning": "Attempt",
    "plural": "Die Versuche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 822,
    "noun": "Sofa",
    "article": "das",
    "meaning": "Sofa",
    "plural": "Die Sofas",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 823,
    "noun": "Kuchen",
    "article": "der",
    "meaning": "Cake",
    "plural": "Die Kuchen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 824,
    "noun": "Kerl",
    "article": "der",
    "meaning": "Fellow",
    "plural": "Die Kerle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 825,
    "noun": "Angelegenheit",
    "article": "die",
    "meaning": "Affair",
    "plural": "Die Angelegenheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 826,
    "noun": "Küste",
    "article": "die",
    "meaning": "Shore",
    "plural": "Die Küsten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 827,
    "noun": "General",
    "article": "der",
    "meaning": "General",
    "plural": "Die Generäle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 828,
    "noun": "Wurzel",
    "article": "die",
    "meaning": "Root",
    "plural": "Die Wurzeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 829,
    "noun": "Umhang",
    "article": "der",
    "meaning": "Robe",
    "plural": "Die Umhänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 830,
    "noun": "Sorge",
    "article": "die",
    "meaning": "Concern",
    "plural": "Die Sorgen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 831,
    "noun": "Presse",
    "article": "die",
    "meaning": "Press",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 832,
    "noun": "Ratte",
    "article": "die",
    "meaning": "Rat",
    "plural": "Die Ratten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 833,
    "noun": "Gesellschaft",
    "article": "die",
    "meaning": "Society",
    "plural": "Die Gesellschaften",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 834,
    "noun": "Stil",
    "article": "der",
    "meaning": "Style",
    "plural": "Die Stile",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 835,
    "noun": "Bezirk",
    "article": "der",
    "meaning": "County",
    "plural": "Die Bezirke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 836,
    "noun": "Befehl",
    "article": "der",
    "meaning": "Command",
    "plural": "Die Befehle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 837,
    "noun": "Besucher",
    "article": "der",
    "meaning": "Visitor",
    "plural": "Die Besucher",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 838,
    "noun": "Modell",
    "article": "das",
    "meaning": "Model",
    "plural": "Die Modelle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 839,
    "noun": "Kammer",
    "article": "die",
    "meaning": "Chamber",
    "plural": "Die Kammern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 840,
    "noun": "Tier",
    "article": "das",
    "meaning": "Beast",
    "plural": "Die Tiere",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 841,
    "noun": "Strauß",
    "article": "der",
    "meaning": "Bunch",
    "plural": "Die Sträuße",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 842,
    "noun": "Hintergrund",
    "article": "der",
    "meaning": "Background",
    "plural": "Die Hintergründe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 843,
    "noun": "Einheit",
    "article": "die",
    "meaning": "Unit",
    "plural": "Die Einheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 844,
    "noun": "Möbel",
    "article": "das",
    "meaning": "Furniture",
    "plural": "Die Möbel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 845,
    "noun": "Nagel",
    "article": "der",
    "meaning": "Nail",
    "plural": "Die Nägel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 846,
    "noun": "Schrei",
    "article": "der",
    "meaning": "Scream",
    "plural": "Die Schreie",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 847,
    "noun": "Eigentum",
    "article": "das",
    "meaning": "Property",
    "plural": "-",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 848,
    "noun": "Ausrüstung",
    "article": "die",
    "meaning": "Equipment",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 849,
    "noun": "Auffahrt",
    "article": "die",
    "meaning": "Driveway",
    "plural": "Die Auffahrten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 850,
    "noun": "Griff",
    "article": "der",
    "meaning": "Grip",
    "plural": "Die Griffe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 851,
    "noun": "Röhre",
    "article": "die",
    "meaning": "Tube",
    "plural": "Die Röhren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 852,
    "noun": "Asche",
    "article": "die",
    "meaning": "Ash",
    "plural": "Die Aschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 853,
    "noun": "Ventilator",
    "article": "der",
    "meaning": "Fan",
    "plural": "Die Ventilatoren",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 854,
    "noun": "Meinung",
    "article": "die",
    "meaning": "Opinion",
    "plural": "Die Meinungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 855,
    "noun": "Daten",
    "article": "die",
    "meaning": "Data",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 856,
    "noun": "Verbindung",
    "article": "die",
    "meaning": "Connection",
    "plural": "Die Verbindungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 857,
    "noun": "Trick",
    "article": "der",
    "meaning": "Trick",
    "plural": "Die Tricks",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 858,
    "noun": "Geheimnis",
    "article": "das",
    "meaning": "Mystery",
    "plural": "Die Geheimnisse",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 859,
    "noun": "Periode",
    "article": "die",
    "meaning": "Period",
    "plural": "Die Perioden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 860,
    "noun": "Schrift",
    "article": "die",
    "meaning": "Writing",
    "plural": "Die Schriften",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 861,
    "noun": "Horror",
    "article": "der",
    "meaning": "Horror",
    "plural": "-",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 862,
    "noun": "Süßigkeiten",
    "article": "die",
    "meaning": "Candy",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 863,
    "noun": "Hündin",
    "article": "die",
    "meaning": "Bitch",
    "plural": "Die Hündinnen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 864,
    "noun": "Gesundheit",
    "article": "die",
    "meaning": "Health",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 865,
    "noun": "Manager",
    "article": "der",
    "meaning": "Manager",
    "plural": "Die Manager",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 866,
    "noun": "Sicherheit",
    "article": "die",
    "meaning": "Safety",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 867,
    "noun": "Höhe",
    "article": "die",
    "meaning": "Height",
    "plural": "Die Höhen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 868,
    "noun": "Aussehen",
    "article": "das",
    "meaning": "Appearance",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 869,
    "noun": "Seufzer",
    "article": "der",
    "meaning": "Sigh",
    "plural": "Die Seufzer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 870,
    "noun": "Mine",
    "article": "die",
    "meaning": "Mine",
    "plural": "Die Minen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 871,
    "noun": "Stoff",
    "article": "der",
    "meaning": "Cloth",
    "plural": "Die Stoffe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 872,
    "noun": "Reaktion",
    "article": "die",
    "meaning": "Reaction",
    "plural": "Die Reaktionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 873,
    "noun": "Quelle",
    "article": "die",
    "meaning": "Source",
    "plural": "Die Quellen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 874,
    "noun": "Selbst",
    "article": "das",
    "meaning": "Self",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 875,
    "noun": "Pistole",
    "article": "die",
    "meaning": "Pistol",
    "plural": "Die Pistolen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 876,
    "noun": "Flughafen",
    "article": "der",
    "meaning": "Airport",
    "plural": "Die Flughäfen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 877,
    "noun": "Held",
    "article": "der",
    "meaning": "Hero",
    "plural": "Die Helden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 878,
    "noun": "Versprechen",
    "article": "das",
    "meaning": "Promise",
    "plural": "Die Versprechen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 879,
    "noun": "Bogen",
    "article": "der",
    "meaning": "Bow",
    "plural": "Die Bögen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 880,
    "noun": "Zelt",
    "article": "das",
    "meaning": "Tent",
    "plural": "Die Zelte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 881,
    "noun": "Stand",
    "article": "der",
    "meaning": "Booth",
    "plural": "Die Stände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 882,
    "noun": "Bargeld",
    "article": "das",
    "meaning": "Cash",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 883,
    "noun": "Allee",
    "article": "die",
    "meaning": "Avenue",
    "plural": "Die Alleen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 884,
    "noun": "T-Shirt",
    "article": "das",
    "meaning": "TShirt",
    "plural": "Die T-Shirts",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 885,
    "noun": "Teppich",
    "article": "der",
    "meaning": "Carpet",
    "plural": "Die Teppiche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 886,
    "noun": "Keller",
    "article": "der",
    "meaning": "Basement",
    "plural": "Die Keller",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 887,
    "noun": "Freundin",
    "article": "die",
    "meaning": "Girlfriend",
    "plural": "Die Freundinnen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 888,
    "noun": "Bart",
    "article": "der",
    "meaning": "Beard",
    "plural": "Die Bärte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 889,
    "noun": "Augenbraue",
    "article": "die",
    "meaning": "Brow",
    "plural": "Die Augenbrauen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 890,
    "noun": "Bildschirm",
    "article": "der",
    "meaning": "Display",
    "plural": "Die Bildschirme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 891,
    "noun": "Signal",
    "article": "das",
    "meaning": "Signal",
    "plural": "Die Signale",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 892,
    "noun": "Diener",
    "article": "der",
    "meaning": "Servant",
    "plural": "Die Diener",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 893,
    "noun": "Flüstern",
    "article": "das",
    "meaning": "Whisper",
    "plural": "Die Flüster",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 894,
    "noun": "Zweifel",
    "article": "der",
    "meaning": "Doubt",
    "plural": "Die Zweifel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 895,
    "noun": "Konto",
    "article": "das",
    "meaning": "Account",
    "plural": "Die Konten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 896,
    "noun": "Magie",
    "article": "die",
    "meaning": "Magic",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 897,
    "noun": "Klumpen",
    "article": "der",
    "meaning": "Hank",
    "plural": "Die Klumpen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 898,
    "noun": "Glied",
    "article": "das",
    "meaning": "Limb",
    "plural": "Die Glieder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 899,
    "noun": "Bastard",
    "article": "der",
    "meaning": "Bastard",
    "plural": "Die Bastarde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 900,
    "noun": "Schädel",
    "article": "der",
    "meaning": "Skull",
    "plural": "Die Schädel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 901,
    "noun": "Satz",
    "article": "der",
    "meaning": "Sentence",
    "plural": "Die Sätze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 902,
    "noun": "Kragen",
    "article": "der",
    "meaning": "Collar",
    "plural": "Die Kragen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 903,
    "noun": "Horn",
    "article": "das",
    "meaning": "Horn",
    "plural": "Die Hörner",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 904,
    "noun": "Eiche",
    "article": "die",
    "meaning": "Oak",
    "plural": "Die Eichen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 905,
    "noun": "Knöchel",
    "article": "der",
    "meaning": "Ankle",
    "plural": "Die Knöchel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 906,
    "noun": "Puppe",
    "article": "die",
    "meaning": "Doll",
    "plural": "Die Puppen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 907,
    "noun": "Sandwich",
    "article": "das",
    "meaning": "Sandwich",
    "plural": "Die Sandwiches",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 908,
    "noun": "Rotkehlchen",
    "article": "der",
    "meaning": "Robin",
    "plural": "Die Rotkehlchen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 909,
    "noun": "Gerechtigkeit",
    "article": "die",
    "meaning": "Justice",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 910,
    "noun": "Stolz",
    "article": "der",
    "meaning": "Pride",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 911,
    "noun": "Jugend",
    "article": "die",
    "meaning": "Youth",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 912,
    "noun": "Sekretär",
    "article": "der",
    "meaning": "Secretary",
    "plural": "Die Sekretäre",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 913,
    "noun": "Forschung",
    "article": "die",
    "meaning": "Research",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 914,
    "noun": "Sport",
    "article": "der",
    "meaning": "Sport",
    "plural": "Die Sportarten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 915,
    "noun": "Aufgabe",
    "article": "die",
    "meaning": "Task",
    "plural": "Die Aufgaben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 916,
    "noun": "Stipendium",
    "article": "das",
    "meaning": "Grant",
    "plural": "Die Stipendien",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 917,
    "noun": "Sheriff",
    "article": "der",
    "meaning": "Sheriff",
    "plural": "Die Sheriffs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 918,
    "noun": "Mitternacht",
    "article": "die",
    "meaning": "Midnight",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 919,
    "noun": "Chip",
    "article": "der",
    "meaning": "Chip",
    "plural": "Die Chips",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 920,
    "noun": "Theorie",
    "article": "die",
    "meaning": "Theory",
    "plural": "Die Theorien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 921,
    "noun": "Alarm",
    "article": "der",
    "meaning": "Alarm",
    "plural": "Die Alarme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 922,
    "noun": "Sammlung",
    "article": "die",
    "meaning": "Collection",
    "plural": "Die Sammlungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 923,
    "noun": "Kreuz",
    "article": "das",
    "meaning": "Cross",
    "plural": "Die Kreuze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 924,
    "noun": "Kiefer",
    "article": "die",
    "meaning": "Pine",
    "plural": "Die Kiefern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 925,
    "noun": "Generation",
    "article": "die",
    "meaning": "Generation",
    "plural": "Die Generationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 926,
    "noun": "Autorität",
    "article": "die",
    "meaning": "Authority",
    "plural": "Die Autoritäten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 927,
    "noun": "Papa",
    "article": "der",
    "meaning": "Papa",
    "plural": "Die Papas",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 928,
    "noun": "Reise",
    "article": "die",
    "meaning": "Journey",
    "plural": "Die Reisen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 929,
    "noun": "Perle",
    "article": "die",
    "meaning": "Pearl",
    "plural": "Die Perlen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 930,
    "noun": "Toilette",
    "article": "die",
    "meaning": "Toilet",
    "plural": "Die Toiletten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 931,
    "noun": "Mörder",
    "article": "der",
    "meaning": "Killer",
    "plural": "Die Mörder",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 932,
    "noun": "Werkzeug",
    "article": "das",
    "meaning": "Tool",
    "plural": "Die Werkzeuge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 933,
    "noun": "Medizin",
    "article": "die",
    "meaning": "Medicine",
    "plural": "Die Medizinen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 934,
    "noun": "Zucker",
    "article": "der",
    "meaning": "Sugar",
    "plural": "-",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 935,
    "noun": "Prinzessin",
    "article": "die",
    "meaning": "Princess",
    "plural": "Die Prinzessinnen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 936,
    "noun": "Argument",
    "article": "das",
    "meaning": "Argument",
    "plural": "Die Argumente",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 937,
    "noun": "Klippe",
    "article": "die",
    "meaning": "Cliff",
    "plural": "Die Klippen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 938,
    "noun": "Wagen",
    "article": "der",
    "meaning": "Cart",
    "plural": "Die Wagen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 939,
    "noun": "Kristall",
    "article": "der",
    "meaning": "Crystal",
    "plural": "Die Kristalle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 940,
    "noun": "Bohne",
    "article": "die",
    "meaning": "Bean",
    "plural": "Die Bohnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 941,
    "noun": "Käfig",
    "article": "der",
    "meaning": "Cage",
    "plural": "Die Käfige",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 942,
    "noun": "Schokolade",
    "article": "die",
    "meaning": "Chocolate",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 943,
    "noun": "Küste",
    "article": "die",
    "meaning": "Coast",
    "plural": "Die Küsten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 944,
    "noun": "Jahrzehnt",
    "article": "das",
    "meaning": "Decade",
    "plural": "Die Jahrzehnte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 945,
    "noun": "Bedeutung",
    "article": "die",
    "meaning": "Meaning",
    "plural": "Die Bedeutungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 946,
    "noun": "Getriebe",
    "article": "das",
    "meaning": "Gear",
    "plural": "Die Getriebe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 947,
    "noun": "Koffer",
    "article": "der",
    "meaning": "Suitcase",
    "plural": "Die Koffer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 948,
    "noun": "Operation",
    "article": "die",
    "meaning": "Operation",
    "plural": "Die Operationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 949,
    "noun": "Atmen",
    "article": "das",
    "meaning": "Breathing",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 950,
    "noun": "Rolle",
    "article": "die",
    "meaning": "Role",
    "plural": "Die Rollen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 951,
    "noun": "Version",
    "article": "die",
    "meaning": "Version",
    "plural": "Die Versionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 952,
    "noun": "Gefangene",
    "article": "der",
    "meaning": "Prisoner",
    "plural": "Die Gefangenen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 953,
    "noun": "Spiel",
    "article": "das",
    "meaning": "Match",
    "plural": "Die Spiele",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 954,
    "noun": "Strahl",
    "article": "der",
    "meaning": "Beam",
    "plural": "Die Strahlen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 955,
    "noun": "Schloss",
    "article": "das",
    "meaning": "Castle",
    "plural": "Die Schlösser",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 956,
    "noun": "Rausch",
    "article": "der",
    "meaning": "Rush",
    "plural": "Die Räusche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 957,
    "noun": "Fahrspur",
    "article": "die",
    "meaning": "Lane",
    "plural": "Die Fahrspuren",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 958,
    "noun": "Kleidung",
    "article": "die",
    "meaning": "Clothing",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 959,
    "noun": "Pfahl",
    "article": "der",
    "meaning": "Pole",
    "plural": "Die Pfähle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 960,
    "noun": "Freiheit",
    "article": "die",
    "meaning": "Freedom",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 961,
    "noun": "Fähigkeit",
    "article": "die",
    "meaning": "Skill",
    "plural": "Die Fähigkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 962,
    "noun": "Leidenschaft",
    "article": "die",
    "meaning": "Passion",
    "plural": "Die Leidenschaften",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 963,
    "noun": "Aktivität",
    "article": "die",
    "meaning": "Activity",
    "plural": "Die Aktivitäten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 964,
    "noun": "Fick",
    "article": "der",
    "meaning": "Fuck",
    "plural": "Die Ficks",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 965,
    "noun": "Plattform",
    "article": "die",
    "meaning": "Platform",
    "plural": "Die Plattformen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 966,
    "noun": "Salz",
    "article": "das",
    "meaning": "Salt",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 967,
    "noun": "Fahrrad",
    "article": "das",
    "meaning": "Bike",
    "plural": "Die Fahrräder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 968,
    "noun": "Stapel",
    "article": "der",
    "meaning": "Stack",
    "plural": "Die Stapel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 969,
    "noun": "Begleiter",
    "article": "der",
    "meaning": "Companion",
    "plural": "Die Begleiter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 970,
    "noun": "Schicksal",
    "article": "das",
    "meaning": "Fate",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 971,
    "noun": "Wut",
    "article": "die",
    "meaning": "Rage",
    "plural": "Die Wut",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 972,
    "noun": "Versorgung",
    "article": "die",
    "meaning": "Supply",
    "plural": "Die Versorgungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 973,
    "noun": "Wal",
    "article": "der",
    "meaning": "Whale",
    "plural": "Die Wale",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 974,
    "noun": "Schwein",
    "article": "das",
    "meaning": "Pig",
    "plural": "Die Schweine",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 975,
    "noun": "Kaninchen",
    "article": "das",
    "meaning": "Rabbit",
    "plural": "Die Kaninchen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 976,
    "noun": "Gang",
    "article": "der",
    "meaning": "Aisle",
    "plural": "Die Gänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 977,
    "noun": "Monitor",
    "article": "der",
    "meaning": "Monitor",
    "plural": "Die Monitore",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 978,
    "noun": "Helm",
    "article": "der",
    "meaning": "Helmet",
    "plural": "Die Helme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 979,
    "noun": "Respekt",
    "article": "der",
    "meaning": "Respect",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 980,
    "noun": "Aufregung",
    "article": "die",
    "meaning": "Excitement",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 981,
    "noun": "Lobby",
    "article": "die",
    "meaning": "Lobby",
    "plural": "Die Lobbys",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 982,
    "noun": "Freund",
    "article": "der",
    "meaning": "Boyfriend",
    "plural": "Die Freunde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 983,
    "noun": "Pelz",
    "article": "der",
    "meaning": "Fur",
    "plural": "Die Felle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 984,
    "noun": "Bandbreite",
    "article": "die",
    "meaning": "Range",
    "plural": "Die Bandbreiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 985,
    "noun": "Schwanz",
    "article": "der",
    "meaning": "Dick",
    "plural": "Die Schwänze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 986,
    "noun": "Code",
    "article": "der",
    "meaning": "Code",
    "plural": "Die Codes",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 987,
    "noun": "Kapitel",
    "article": "das",
    "meaning": "Chapter",
    "plural": "Die Kapitel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 988,
    "noun": "Reflexion",
    "article": "die",
    "meaning": "Reflection",
    "plural": "Die Reflexionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 989,
    "noun": "Post",
    "article": "die",
    "meaning": "Mail",
    "plural": "Die Mails",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 990,
    "noun": "Fliege",
    "article": "die",
    "meaning": "Fly",
    "plural": "Die Fliegen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 991,
    "noun": "Schrank",
    "article": "der",
    "meaning": "Cabinet",
    "plural": "Die Schränke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 992,
    "noun": "Spielzeug",
    "article": "das",
    "meaning": "Toy",
    "plural": "Die Spielzeuge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 993,
    "noun": "Baseball",
    "article": "der",
    "meaning": "Baseball",
    "plural": "Die Baseballs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 994,
    "noun": "Innere",
    "article": "das",
    "meaning": "Inside",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 995,
    "noun": "Tempo",
    "article": "das",
    "meaning": "Pace",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 996,
    "noun": "Griff",
    "article": "der",
    "meaning": "Handle",
    "plural": "Die Griffe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 997,
    "noun": "Blei",
    "article": "das",
    "meaning": "Lead",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 998,
    "noun": "Menge",
    "article": "die",
    "meaning": "Amount",
    "plural": "Die Mengen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 999,
    "noun": "Nerv",
    "article": "der",
    "meaning": "Nerve",
    "plural": "Die Nerven",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1000,
    "noun": "Terror",
    "article": "der",
    "meaning": "Terror",
    "plural": "-",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1001,
    "noun": "Pullover",
    "article": "der",
    "meaning": "Sweater",
    "plural": "Die Pullover",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1002,
    "noun": "Qualität",
    "article": "die",
    "meaning": "Quality",
    "plural": "Die Qualitäten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1003,
    "noun": "Jäger",
    "article": "der",
    "meaning": "Hunter",
    "plural": "Die Jäger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1004,
    "noun": "Farbe",
    "article": "die",
    "meaning": "Paint",
    "plural": "Die Farben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1005,
    "noun": "Zerstörer",
    "article": "der",
    "meaning": "Buster",
    "plural": "Die Zerstörer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1006,
    "noun": "Baumwolle",
    "article": "die",
    "meaning": "Cotton",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1007,
    "noun": "Feldwebel",
    "article": "der",
    "meaning": "Sergeant",
    "plural": "Die Feldwebel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1008,
    "noun": "Kredit",
    "article": "der",
    "meaning": "Credit",
    "plural": "Die Kredite",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1009,
    "noun": "Schlag",
    "article": "der",
    "meaning": "Blow",
    "plural": "Die Schläge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1010,
    "noun": "Teufel",
    "article": "der",
    "meaning": "Devil",
    "plural": "Die Teufel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1011,
    "noun": "Bedrohung",
    "article": "die",
    "meaning": "Threat",
    "plural": "Die Bedrohungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1012,
    "noun": "Erfolg",
    "article": "der",
    "meaning": "Success",
    "plural": "Die Erfolge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1013,
    "noun": "Abend",
    "article": "der",
    "meaning": "Eve",
    "plural": "Die Abende",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1014,
    "noun": "Kabel",
    "article": "das",
    "meaning": "Cable",
    "plural": "Die Kabel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1015,
    "noun": "Pfanne",
    "article": "die",
    "meaning": "Pan",
    "plural": "Die Pfannen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1016,
    "noun": "Angestellte",
    "article": "der",
    "meaning": "Clerk",
    "plural": "Die Angestellten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1017,
    "noun": "Titel",
    "article": "der",
    "meaning": "Title",
    "plural": "Die Titel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1018,
    "noun": "Meter",
    "article": "der",
    "meaning": "Meter",
    "plural": "Die Meter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1019,
    "noun": "Schande",
    "article": "die",
    "meaning": "Shame",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1020,
    "noun": "Nadel",
    "article": "die",
    "meaning": "Needle",
    "plural": "Die Nadeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1021,
    "noun": "Lunge",
    "article": "die",
    "meaning": "Lung",
    "plural": "Die Lungen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1022,
    "noun": "Krieger",
    "article": "der",
    "meaning": "Warrior",
    "plural": "Die Krieger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1023,
    "noun": "Umstände",
    "article": "die",
    "meaning": "Circumstance",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1024,
    "noun": "Studio",
    "article": "das",
    "meaning": "Studio",
    "plural": "Die Studios",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1025,
    "noun": "Panik",
    "article": "die",
    "meaning": "Panic",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1026,
    "noun": "Mangel",
    "article": "der",
    "meaning": "Lack",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1027,
    "noun": "Bauer",
    "article": "der",
    "meaning": "Farmer",
    "plural": "Die Bauern",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1028,
    "noun": "Akzent",
    "article": "der",
    "meaning": "Accent",
    "plural": "Die Akzente",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1029,
    "noun": "Bombe",
    "article": "die",
    "meaning": "Bomb",
    "plural": "Die Bomben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1030,
    "noun": "Panel",
    "article": "das",
    "meaning": "Panel",
    "plural": "Die Panels",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1031,
    "noun": "Fähigkeit",
    "article": "die",
    "meaning": "Ability",
    "plural": "Die Fähigkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1032,
    "noun": "Glück",
    "article": "das",
    "meaning": "Fortune",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1033,
    "noun": "Sieger",
    "article": "der",
    "meaning": "Victor",
    "plural": "Die Sieger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1034,
    "noun": "Feder",
    "article": "die",
    "meaning": "Feather",
    "plural": "Die Federn",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1035,
    "noun": "Oma",
    "article": "die",
    "meaning": "Grandma",
    "plural": "Die Omas",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1036,
    "noun": "Leuchten",
    "article": "das",
    "meaning": "Glow",
    "plural": "Die Leuchten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1037,
    "noun": "Verhalten",
    "article": "das",
    "meaning": "Behavior",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1038,
    "noun": "Durchgang",
    "article": "der",
    "meaning": "Passage",
    "plural": "Die Durchgänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1039,
    "noun": "Sklave",
    "article": "der",
    "meaning": "Slave",
    "plural": "Die Sklaven",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1040,
    "noun": "Leutnant",
    "article": "der",
    "meaning": "Lieutenant",
    "plural": "Die Leutnants",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1041,
    "noun": "Fass",
    "article": "das",
    "meaning": "Barrel",
    "plural": "Die Fässer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1042,
    "noun": "Wärme",
    "article": "die",
    "meaning": "Warmth",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1043,
    "noun": "Eindruck",
    "article": "der",
    "meaning": "Impression",
    "plural": "Die Eindrücke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1044,
    "noun": "Maurer",
    "article": "der",
    "meaning": "Mason",
    "plural": "Die Maurer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1045,
    "noun": "Braut",
    "article": "die",
    "meaning": "Bride",
    "plural": "Die Bräute",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1046,
    "noun": "Paket",
    "article": "das",
    "meaning": "Package",
    "plural": "Die Pakete",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1047,
    "noun": "Nebel",
    "article": "der",
    "meaning": "Fog",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1048,
    "noun": "Gehen",
    "article": "das",
    "meaning": "Walking",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1049,
    "noun": "Gleichgewicht",
    "article": "das",
    "meaning": "Balance",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1050,
    "noun": "Socke",
    "article": "die",
    "meaning": "Sock",
    "plural": "Die Socken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1051,
    "noun": "Roboter",
    "article": "der",
    "meaning": "Robot",
    "plural": "Die Roboter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1052,
    "noun": "Kartoffel",
    "article": "die",
    "meaning": "Potato",
    "plural": "Die Kartoffeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1053,
    "noun": "Gegenstand",
    "article": "der",
    "meaning": "Item",
    "plural": "Die Gegenstände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1054,
    "noun": "Bad",
    "article": "das",
    "meaning": "Bath",
    "plural": "Die Bäder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1055,
    "noun": "Diamant",
    "article": "der",
    "meaning": "Diamond",
    "plural": "Die Diamanten",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1056,
    "noun": "Leiche",
    "article": "die",
    "meaning": "Corpse",
    "plural": "Die Leichen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1057,
    "noun": "Erklärung",
    "article": "die",
    "meaning": "Explanation",
    "plural": "Die Erklärungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1058,
    "noun": "Struktur",
    "article": "die",
    "meaning": "Structure",
    "plural": "Die Strukturen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1059,
    "noun": "Ausgang",
    "article": "der",
    "meaning": "Exit",
    "plural": "Die Ausgänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1060,
    "noun": "Kissen",
    "article": "das",
    "meaning": "Pad",
    "plural": "Die Kissen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1061,
    "noun": "Herd",
    "article": "der",
    "meaning": "Stove",
    "plural": "Die Herde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1062,
    "noun": "Blau",
    "article": "das",
    "meaning": "Blue",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1063,
    "noun": "Amerikaner",
    "article": "der",
    "meaning": "American",
    "plural": "Die Amerikaner",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1064,
    "noun": "Rubin",
    "article": "der",
    "meaning": "Ruby",
    "plural": "Die Rubine",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1065,
    "noun": "Blitz",
    "article": "das",
    "meaning": "Lightning",
    "plural": "Die Blitze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1066,
    "noun": "Grube",
    "article": "die",
    "meaning": "Pit",
    "plural": "Die Gruben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1067,
    "noun": "Oberst",
    "article": "der",
    "meaning": "Colonel",
    "plural": "Die Obersten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1068,
    "noun": "Hafen",
    "article": "der",
    "meaning": "Dock",
    "plural": "Die Häfen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1069,
    "noun": "Bach",
    "article": "der",
    "meaning": "Creek",
    "plural": "Die Bäche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1070,
    "noun": "Rat",
    "article": "der",
    "meaning": "Advice",
    "plural": "Die Ratschläge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1071,
    "noun": "Tourist",
    "article": "der",
    "meaning": "Tourist",
    "plural": "Die Touristen",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1072,
    "noun": "Trauer",
    "article": "die",
    "meaning": "Grief",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1073,
    "noun": "Verteidigung",
    "article": "die",
    "meaning": "Defense",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1074,
    "noun": "Biss",
    "article": "der",
    "meaning": "Bite",
    "plural": "Die Bisse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1075,
    "noun": "Museum",
    "article": "das",
    "meaning": "Museum",
    "plural": "Die Museen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1076,
    "noun": "Gefallen",
    "article": "der",
    "meaning": "Favor",
    "plural": "Die Gefallen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1077,
    "noun": "Abendessen",
    "article": "das",
    "meaning": "Supper",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1078,
    "noun": "Komfort",
    "article": "der",
    "meaning": "Comfort",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1079,
    "noun": "Dekan",
    "article": "der",
    "meaning": "Dean",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1080,
    "noun": "Wert",
    "article": "der",
    "meaning": "Value",
    "plural": "Die Werte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1081,
    "noun": "Marsch",
    "article": "der",
    "meaning": "March",
    "plural": "Die Märsche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1082,
    "noun": "Anwesen",
    "article": "das",
    "meaning": "Estate",
    "plural": "Die Anwesen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1083,
    "noun": "Dichter",
    "article": "der",
    "meaning": "Poet",
    "plural": "Die Dichter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1084,
    "noun": "Palast",
    "article": "der",
    "meaning": "Palace",
    "plural": "Die Paläste",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1085,
    "noun": "Suppe",
    "article": "die",
    "meaning": "Soup",
    "plural": "Die Suppen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1086,
    "noun": "Nation",
    "article": "die",
    "meaning": "Nation",
    "plural": "Die Nationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1087,
    "noun": "Glas",
    "article": "das",
    "meaning": "Jar",
    "plural": "Die Gläser",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1088,
    "noun": "Stand",
    "article": "der",
    "meaning": "Standing",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1089,
    "noun": "Sack",
    "article": "der",
    "meaning": "Sack",
    "plural": "Die Säcke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1090,
    "noun": "Dämon",
    "article": "der",
    "meaning": "Demon",
    "plural": "Die Dämonen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1091,
    "noun": "Konferenz",
    "article": "die",
    "meaning": "Conference",
    "plural": "Die Konferenzen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1092,
    "noun": "Saft",
    "article": "der",
    "meaning": "Juice",
    "plural": "Die Säfte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1093,
    "noun": "Verantwortung",
    "article": "die",
    "meaning": "Responsibility",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1094,
    "noun": "Bürste",
    "article": "die",
    "meaning": "Brush",
    "plural": "Die Bürsten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1095,
    "noun": "Route",
    "article": "die",
    "meaning": "Route",
    "plural": "Die Routen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1096,
    "noun": "Käse",
    "article": "der",
    "meaning": "Cheese",
    "plural": "Die Käse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1097,
    "noun": "Motorhaube",
    "article": "die",
    "meaning": "Hood",
    "plural": "Die Motorhauben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1098,
    "noun": "Ente",
    "article": "die",
    "meaning": "Duck",
    "plural": "Die Enten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1099,
    "noun": "Heilige",
    "article": "der",
    "meaning": "Saint",
    "plural": "Die Heiligen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1100,
    "noun": "Pass",
    "article": "der",
    "meaning": "Pass",
    "plural": "Die Pässe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1101,
    "noun": "Ziel",
    "article": "das",
    "meaning": "Target",
    "plural": "Die Ziele",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1102,
    "noun": "Orange",
    "article": "die",
    "meaning": "Orange",
    "plural": "Die Orangen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1103,
    "noun": "Kultur",
    "article": "die",
    "meaning": "Culture",
    "plural": "Die Kulturen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1104,
    "noun": "Tour",
    "article": "die",
    "meaning": "Tour",
    "plural": "Die Touren",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1105,
    "noun": "Kommandant",
    "article": "der",
    "meaning": "Commander",
    "plural": "Die Kommandanten",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1106,
    "noun": "Haken",
    "article": "der",
    "meaning": "Hook",
    "plural": "Die Haken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1107,
    "noun": "Nebel",
    "article": "der",
    "meaning": "Mist",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1108,
    "noun": "Training",
    "article": "das",
    "meaning": "Training",
    "plural": "Die Trainings",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1109,
    "noun": "Suche",
    "article": "die",
    "meaning": "Search",
    "plural": "Die Suchen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1110,
    "noun": "Münze",
    "article": "die",
    "meaning": "Coin",
    "plural": "Die Münzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1111,
    "noun": "Wunder",
    "article": "das",
    "meaning": "Miracle",
    "plural": "Die Wunder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1112,
    "noun": "Vorteil",
    "article": "der",
    "meaning": "Advantage",
    "plural": "Die Vorteile",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1113,
    "noun": "Austausch",
    "article": "der",
    "meaning": "Exchange",
    "plural": "Die Austausche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1114,
    "noun": "Fiktion",
    "article": "die",
    "meaning": "Fiction",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1115,
    "noun": "Teich",
    "article": "der",
    "meaning": "Pond",
    "plural": "Die Teiche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1116,
    "noun": "Assistent",
    "article": "der",
    "meaning": "Assistant",
    "plural": "Die Assistenten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1117,
    "noun": "Design",
    "article": "das",
    "meaning": "Design",
    "plural": "Die Designs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1118,
    "noun": "Angeln",
    "article": "das",
    "meaning": "Fishing",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1119,
    "noun": "Hang",
    "article": "der",
    "meaning": "Slope",
    "plural": "Die Hänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1120,
    "noun": "Graf",
    "article": "der",
    "meaning": "Earl",
    "plural": "Die Grafen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1121,
    "noun": "Kommentar",
    "article": "der",
    "meaning": "Comment",
    "plural": "Die Kommentare",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1122,
    "noun": "Kellner",
    "article": "der",
    "meaning": "Waiter",
    "plural": "Die Kellner",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1123,
    "noun": "Lebensmittel",
    "article": "der",
    "meaning": "Grocery",
    "plural": "Die Lebensmittel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1124,
    "noun": "Leiter",
    "article": "die",
    "meaning": "Ladder",
    "plural": "Die Leitern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1125,
    "noun": "Kurve",
    "article": "die",
    "meaning": "Curve",
    "plural": "Die Kurven",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1126,
    "noun": "Volumen",
    "article": "das",
    "meaning": "Volume",
    "plural": "Die Volumina",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1127,
    "noun": "Risiko",
    "article": "das",
    "meaning": "Risk",
    "plural": "Die Risiken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1128,
    "noun": "Albtraum",
    "article": "der",
    "meaning": "Nightmare",
    "plural": "Die Albträume",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1129,
    "noun": "Existenz",
    "article": "die",
    "meaning": "Existence",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1130,
    "noun": "Spur",
    "article": "die",
    "meaning": "Trace",
    "plural": "Die Spuren",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1131,
    "noun": "Krankheit",
    "article": "die",
    "meaning": "Disease",
    "plural": "Die Krankheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1132,
    "noun": "Unterstützung",
    "article": "die",
    "meaning": "Support",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1133,
    "noun": "Zeuge",
    "article": "der",
    "meaning": "Witness",
    "plural": "Die Zeugen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1134,
    "noun": "Bestand",
    "article": "der",
    "meaning": "Stock",
    "plural": "Die Bestände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1135,
    "noun": "Gerät",
    "article": "das",
    "meaning": "Device",
    "plural": "Die Geräte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1136,
    "noun": "Landschaft",
    "article": "die",
    "meaning": "Landscape",
    "plural": "Die Landschaften",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1137,
    "noun": "Feiertag",
    "article": "der",
    "meaning": "Holiday",
    "plural": "Die Feiertage",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1138,
    "noun": "Ass",
    "article": "das",
    "meaning": "Ace",
    "plural": "Die Asse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1139,
    "noun": "Klavier",
    "article": "das",
    "meaning": "Piano",
    "plural": "Die Klaviere",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1140,
    "noun": "Darm",
    "article": "der",
    "meaning": "Gut",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1141,
    "noun": "Talent",
    "article": "das",
    "meaning": "Talent",
    "plural": "Die Talente",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1142,
    "noun": "Fantasie",
    "article": "die",
    "meaning": "Imagination",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1143,
    "noun": "Schwarz",
    "article": "das",
    "meaning": "Black",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1144,
    "noun": "Rohrkolben",
    "article": "der",
    "meaning": "Reed",
    "plural": "Die Rohrkolben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1145,
    "noun": "Deckel",
    "article": "der",
    "meaning": "Lid",
    "plural": "Die Deckel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1146,
    "noun": "Hinweis",
    "article": "der",
    "meaning": "Hint",
    "plural": "Die Hinweise",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1147,
    "noun": "Spaziergänger",
    "article": "der",
    "meaning": "Walker",
    "plural": "Die Spaziergänger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1148,
    "noun": "Schaudern",
    "article": "das",
    "meaning": "Chill",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1149,
    "noun": "Prozess",
    "article": "der",
    "meaning": "Trial",
    "plural": "Die Prozesse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1150,
    "noun": "Interview",
    "article": "das",
    "meaning": "Interview",
    "plural": "Die Interviews",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1151,
    "noun": "Ansatz",
    "article": "der",
    "meaning": "Approach",
    "plural": "Die Ansätze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1152,
    "noun": "Narbe",
    "article": "die",
    "meaning": "Scar",
    "plural": "Die Narben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1153,
    "noun": "Mode",
    "article": "die",
    "meaning": "Fashion",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1154,
    "noun": "Kanal",
    "article": "der",
    "meaning": "Channel",
    "plural": "Die Kanäle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1155,
    "noun": "Fußabdruck",
    "article": "der",
    "meaning": "Footstep",
    "plural": "Die Fußabdrücke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1156,
    "noun": "Pick-up",
    "article": "der",
    "meaning": "Pickup",
    "plural": "Die Pick-ups",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1157,
    "noun": "Habicht",
    "article": "der",
    "meaning": "Hawk",
    "plural": "Die Habichte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1158,
    "noun": "Anhänger",
    "article": "der",
    "meaning": "Trailer",
    "plural": "Die Anhänger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1159,
    "noun": "Statue",
    "article": "die",
    "meaning": "Statue",
    "plural": "Die Statuen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1160,
    "noun": "Pille",
    "article": "die",
    "meaning": "Pill",
    "plural": "Die Pillen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1161,
    "noun": "Käfer",
    "article": "der",
    "meaning": "Bug",
    "plural": "Die Käfer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1162,
    "noun": "Eimer",
    "article": "der",
    "meaning": "Bucket",
    "plural": "Die Eimer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1163,
    "noun": "Urlaub",
    "article": "der",
    "meaning": "Vacation",
    "plural": "Die Urlaube",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1164,
    "noun": "Art",
    "article": "die",
    "meaning": "Species",
    "plural": "Die Arten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1165,
    "noun": "Säule",
    "article": "die",
    "meaning": "Column",
    "plural": "Die Säulen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1166,
    "noun": "Schaden",
    "article": "der",
    "meaning": "Damage",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1167,
    "noun": "Instrument",
    "article": "das",
    "meaning": "Instrument",
    "plural": "Die Instrumente",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1168,
    "noun": "Hafen",
    "article": "der",
    "meaning": "Port",
    "plural": "Die Häfen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1169,
    "noun": "Schicht",
    "article": "die",
    "meaning": "Layer",
    "plural": "Die Schichten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1170,
    "noun": "Streifen",
    "article": "der",
    "meaning": "Strip",
    "plural": "Die Streifen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1171,
    "noun": "Müll",
    "article": "der",
    "meaning": "Garbage",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1172,
    "noun": "Rippe",
    "article": "die",
    "meaning": "Rib",
    "plural": "Die Rippen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1173,
    "noun": "Notizbuch",
    "article": "das",
    "meaning": "Notebook",
    "plural": "Die Notizbücher",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1174,
    "noun": "Mais",
    "article": "der",
    "meaning": "Corn",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1175,
    "noun": "Angebot",
    "article": "das",
    "meaning": "Offer",
    "plural": "Die Angebote",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1176,
    "noun": "Zeichnung",
    "article": "die",
    "meaning": "Drawing",
    "plural": "Die Zeichnungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1177,
    "noun": "Aussage",
    "article": "die",
    "meaning": "Statement",
    "plural": "Die Aussagen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1178,
    "noun": "Intelligenz",
    "article": "die",
    "meaning": "Intelligence",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1179,
    "noun": "Entschuldigung",
    "article": "die",
    "meaning": "Excuse",
    "plural": "Die Entschuldigungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1180,
    "noun": "Landung",
    "article": "die",
    "meaning": "Landing",
    "plural": "Die Landungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1181,
    "noun": "Urheberrecht",
    "article": "das",
    "meaning": "Copyright",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1182,
    "noun": "Stange",
    "article": "die",
    "meaning": "Rod",
    "plural": "Die Stangen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1183,
    "noun": "Fantasie",
    "article": "die",
    "meaning": "Fantasy",
    "plural": "Die Fantasien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1184,
    "noun": "Neugierde",
    "article": "die",
    "meaning": "Curiosity",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1185,
    "noun": "Gewand",
    "article": "das",
    "meaning": "Gown",
    "plural": "Die Gewänder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1186,
    "noun": "Grenze",
    "article": "die",
    "meaning": "Border",
    "plural": "Die Grenzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1187,
    "noun": "Poesie",
    "article": "die",
    "meaning": "Poetry",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1188,
    "noun": "Firma",
    "article": "die",
    "meaning": "Firm",
    "plural": "Die Firmen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1189,
    "noun": "Anstieg",
    "article": "der",
    "meaning": "Rise",
    "plural": "Die Anstiege",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1190,
    "noun": "Handvoll",
    "article": "die",
    "meaning": "Handful",
    "plural": "Die Handvoll",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1191,
    "noun": "Porzellan",
    "article": "das",
    "meaning": "China",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1192,
    "noun": "Franzose",
    "article": "der",
    "meaning": "French",
    "plural": "Die Franzosen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1193,
    "noun": "Durchschnitt",
    "article": "der",
    "meaning": "Mean",
    "plural": "Die Durchschnitte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1194,
    "noun": "Reh",
    "article": "das",
    "meaning": "Deer",
    "plural": "Die Rehe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1195,
    "noun": "Druck",
    "article": "der",
    "meaning": "Print",
    "plural": "Die Drucke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1196,
    "noun": "Schiene",
    "article": "die",
    "meaning": "Rail",
    "plural": "Die Schienen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1197,
    "noun": "Tarif",
    "article": "der",
    "meaning": "Rate",
    "plural": "Die Tarife",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1198,
    "noun": "Mut",
    "article": "der",
    "meaning": "Courage",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1199,
    "noun": "Ankunft",
    "article": "die",
    "meaning": "Arrival",
    "plural": "Die Ankünfte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1200,
    "noun": "Wunsch",
    "article": "der",
    "meaning": "Wish",
    "plural": "Die Wünsche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1201,
    "noun": "Bergrücken",
    "article": "der",
    "meaning": "Ridge",
    "plural": "Die Bergrücken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1202,
    "noun": "Idiot",
    "article": "der",
    "meaning": "Idiot",
    "plural": "Die Idioten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1203,
    "noun": "Stier",
    "article": "der",
    "meaning": "Bull",
    "plural": "Die Stiere",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1204,
    "noun": "Samen",
    "article": "der",
    "meaning": "Seed",
    "plural": "Die Samen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1205,
    "noun": "Fortschritt",
    "article": "der",
    "meaning": "Progress",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1206,
    "noun": "Gefühl",
    "article": "das",
    "meaning": "Feel",
    "plural": "Die Gefühle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1207,
    "noun": "Bürger",
    "article": "der",
    "meaning": "Shorts Die kurze Hose Die kurze Hosen 1208. Citizen",
    "plural": "Die Bürger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1209,
    "noun": "Müll",
    "article": "der",
    "meaning": "Trash",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1210,
    "noun": "Baumstamm",
    "article": "der",
    "meaning": "Log",
    "plural": "Die Baumstämme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1211,
    "noun": "Geduld",
    "article": "die",
    "meaning": "Patience",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1212,
    "noun": "Fledermaus",
    "article": "die",
    "meaning": "Bat",
    "plural": "Die Fledermäuse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1213,
    "noun": "Fußball",
    "article": "der",
    "meaning": "Football",
    "plural": "Die Fußbälle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1214,
    "noun": "Routine",
    "article": "die",
    "meaning": "Routine",
    "plural": "Die Routinen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1215,
    "noun": "Explosion",
    "article": "die",
    "meaning": "Explosion",
    "plural": "Die Explosionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1216,
    "noun": "Inhalt",
    "article": "der",
    "meaning": "Content",
    "plural": "Die Inhalte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1217,
    "noun": "Wissenschaftler",
    "article": "der",
    "meaning": "Scientist",
    "plural": "Die Wissenschaftler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1218,
    "noun": "Versagen",
    "article": "das",
    "meaning": "Failure",
    "plural": "Die Versagen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1219,
    "noun": "Sünde",
    "article": "die",
    "meaning": "Sin",
    "plural": "Die Sünden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1220,
    "noun": "Hintern",
    "article": "der",
    "meaning": "Butt",
    "plural": "Die Hintern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1221,
    "noun": "Verwirrung",
    "article": "die",
    "meaning": "Confusion",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1222,
    "noun": "Verständnis",
    "article": "das",
    "meaning": "Understanding",
    "plural": "-",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1223,
    "noun": "Handel",
    "article": "der",
    "meaning": "Trade",
    "plural": "Die Handel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1224,
    "noun": "Kühlschrank",
    "article": "der",
    "meaning": "Refrigerator",
    "plural": "Die Kühlschränke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1225,
    "noun": "Herr",
    "article": "der",
    "meaning": "Mister",
    "plural": "Die Herren",
    "logic": "Semantic pattern: male persons are usually der."
  },
  {
    "rank": 1226,
    "noun": "Taschenlampe",
    "article": "die",
    "meaning": "Flashlight",
    "plural": "Die Taschenlampen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1227,
    "noun": "Netz",
    "article": "das",
    "meaning": "Net",
    "plural": "Die Netze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1228,
    "noun": "Matrose",
    "article": "der",
    "meaning": "Sailor",
    "plural": "Die Matrosen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1229,
    "noun": "Einstellung",
    "article": "die",
    "meaning": "Attitude",
    "plural": "Die Einstellungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1230,
    "noun": "Schuld",
    "article": "die",
    "meaning": "Guilt",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1231,
    "noun": "Weinen",
    "article": "das",
    "meaning": "Crying",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1232,
    "noun": "Schluck",
    "article": "der",
    "meaning": "Sip",
    "plural": "Die Schlucke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1233,
    "noun": "Reisen",
    "article": "das",
    "meaning": "Travel",
    "plural": "Die Reisen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1234,
    "noun": "Keks",
    "article": "der",
    "meaning": "Cookie",
    "plural": "Die Kekse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1235,
    "noun": "Flucht",
    "article": "die",
    "meaning": "Escape",
    "plural": "Die Fluchten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1236,
    "noun": "Anweisung",
    "article": "die",
    "meaning": "Instruction",
    "plural": "Die Anweisungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1237,
    "noun": "Stoff",
    "article": "der",
    "meaning": "Fabric",
    "plural": "Die Stoffe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1238,
    "noun": "Marmor",
    "article": "der",
    "meaning": "Marble",
    "plural": "Die Marmore",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1239,
    "noun": "Blick",
    "article": "der",
    "meaning": "Glimpse",
    "plural": "Die Blicke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1240,
    "noun": "Dämmerung",
    "article": "die",
    "meaning": "Dusk",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1241,
    "noun": "Hütte",
    "article": "die",
    "meaning": "Cottage",
    "plural": "Die Hütten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1242,
    "noun": "Affe",
    "article": "der",
    "meaning": "Monkey",
    "plural": "Die Affen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1243,
    "noun": "Make-up",
    "article": "das",
    "meaning": "Makeup",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1244,
    "noun": "Arzt",
    "article": "der",
    "meaning": "Doc",
    "plural": "Die Ärzte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1245,
    "noun": "Bluse",
    "article": "die",
    "meaning": "Blouse",
    "plural": "Die Blusen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1246,
    "noun": "Rhythmus",
    "article": "der",
    "meaning": "Rhythm",
    "plural": "Die Rhythmen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1247,
    "noun": "Dampf",
    "article": "der",
    "meaning": "Steam",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1248,
    "noun": "Phrase",
    "article": "die",
    "meaning": "Phrase",
    "plural": "Die Phrasen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1249,
    "noun": "Mutter",
    "article": "die",
    "meaning": "Nut",
    "plural": "Die Muttern",
    "logic": "Semantic pattern: female persons are usually die."
  },
  {
    "rank": 1250,
    "noun": "Bleistift",
    "article": "der",
    "meaning": "Pencil",
    "plural": "Die Bleistifte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1251,
    "noun": "Koch",
    "article": "der",
    "meaning": "Cook",
    "plural": "Die Köche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1252,
    "noun": "Flagge",
    "article": "die",
    "meaning": "Flag",
    "plural": "Die Flaggen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1253,
    "noun": "Trainer",
    "article": "der",
    "meaning": "Coach",
    "plural": "Die Trainer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1254,
    "noun": "Schwung",
    "article": "der",
    "meaning": "Swing",
    "plural": "Die Schwünge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1255,
    "noun": "Lautsprecher",
    "article": "der",
    "meaning": "Speaker",
    "plural": "Die Lautsprecher",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1256,
    "noun": "Bolzen",
    "article": "der",
    "meaning": "Bolt",
    "plural": "Die Bolzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1257,
    "noun": "Fett",
    "article": "das",
    "meaning": "Fat",
    "plural": "Die Fette",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1258,
    "noun": "Teppich",
    "article": "der",
    "meaning": "Rug",
    "plural": "Die Teppiche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1259,
    "noun": "Klopfen",
    "article": "das",
    "meaning": "Knock",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1260,
    "noun": "Zauber",
    "article": "der",
    "meaning": "Spell",
    "plural": "Die Zauber",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1261,
    "noun": "Taxi",
    "article": "das",
    "meaning": "Taxi",
    "plural": "Die Taxis",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1262,
    "noun": "Runde",
    "article": "die",
    "meaning": "Round",
    "plural": "Die Runden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1263,
    "noun": "Strohhalm",
    "article": "der",
    "meaning": "Straw",
    "plural": "Die Strohhalme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1264,
    "noun": "Luke",
    "article": "die",
    "meaning": "Hatch",
    "plural": "Die Luken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1265,
    "noun": "Gabel",
    "article": "die",
    "meaning": "Fork",
    "plural": "Die Gabeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1266,
    "noun": "Böse",
    "article": "das",
    "meaning": "Evil",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1267,
    "noun": "Dienstmädchen",
    "article": "die",
    "meaning": "Maid",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1268,
    "noun": "Verwandte",
    "article": "der",
    "meaning": "Relative",
    "plural": "Die Verwandten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1269,
    "noun": "Hexe",
    "article": "die",
    "meaning": "Witch",
    "plural": "Die Hexen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1270,
    "noun": "Innenhof",
    "article": "der",
    "meaning": "Courtyard",
    "plural": "Die Innenhöfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1271,
    "noun": "Sensation",
    "article": "die",
    "meaning": "Sensation",
    "plural": "Die Sensationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1272,
    "noun": "Blase",
    "article": "die",
    "meaning": "Bubble",
    "plural": "Die Blasen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1273,
    "noun": "Leser",
    "article": "der",
    "meaning": "Reader",
    "plural": "Die Leser",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1274,
    "noun": "Locke",
    "article": "die",
    "meaning": "Curl",
    "plural": "Die Locken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1275,
    "noun": "Kuchen",
    "article": "der",
    "meaning": "Pie",
    "plural": "Die Kuchen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1276,
    "noun": "Düsenflugzeug",
    "article": "das",
    "meaning": "Jet",
    "plural": "Die Düsenflugzeuge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1277,
    "noun": "Schicht",
    "article": "die",
    "meaning": "Shift",
    "plural": "Die Schichten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1278,
    "noun": "Union",
    "article": "die",
    "meaning": "Union",
    "plural": "Die Unionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1279,
    "noun": "Teenager",
    "article": "der",
    "meaning": "Teenager",
    "plural": "Die Teenager",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1280,
    "noun": "Ebene",
    "article": "die",
    "meaning": "Plain",
    "plural": "Die Ebenen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1281,
    "noun": "Kellnerin",
    "article": "die",
    "meaning": "Waitress",
    "plural": "Die Kellnerinnen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1282,
    "noun": "Antwort",
    "article": "die",
    "meaning": "Reply",
    "plural": "Die Antworten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1283,
    "noun": "Gerücht",
    "article": "das",
    "meaning": "Rumor",
    "plural": "Die Gerüchte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1284,
    "noun": "Schwerkraft",
    "article": "die",
    "meaning": "Gravity",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1285,
    "noun": "Schutz",
    "article": "das",
    "meaning": "Shelter",
    "plural": "Die Schutz",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1286,
    "noun": "Abenteuer",
    "article": "das",
    "meaning": "Adventure",
    "plural": "Die Abenteuer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1287,
    "noun": "Löwe",
    "article": "der",
    "meaning": "Lion",
    "plural": "Die Löwen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1288,
    "noun": "Wirbelsäule",
    "article": "die",
    "meaning": "Spine",
    "plural": "Die Wirbelsäulen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1289,
    "noun": "Vertrauen",
    "article": "das",
    "meaning": "Confidence",
    "plural": "Die Vertrauen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1290,
    "noun": "Tiefe",
    "article": "die",
    "meaning": "Depth",
    "plural": "Die Tiefen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1291,
    "noun": "Reichweite",
    "article": "die",
    "meaning": "Reach",
    "plural": "Die Reichweiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1292,
    "noun": "Hammer",
    "article": "der",
    "meaning": "Hammer",
    "plural": "Die Hämmer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1293,
    "noun": "Bibel",
    "article": "die",
    "meaning": "Bible",
    "plural": "Die Bibeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1294,
    "noun": "Vertrag",
    "article": "der",
    "meaning": "Contract",
    "plural": "Die Verträge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1295,
    "noun": "Brieftasche",
    "article": "die",
    "meaning": "Wallet",
    "plural": "Die Brieftaschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1296,
    "noun": "Dschungel",
    "article": "der",
    "meaning": "Jungle",
    "plural": "Die Dschungel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1297,
    "noun": "Fabrik",
    "article": "die",
    "meaning": "Factory",
    "plural": "Die Fabriken",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1298,
    "noun": "Indianer",
    "article": "der",
    "meaning": "Indian",
    "plural": "Die Indianer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1299,
    "noun": "Balkon",
    "article": "der",
    "meaning": "Balcony",
    "plural": "Die Balkone",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1300,
    "noun": "Reis",
    "article": "der",
    "meaning": "Rice",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1301,
    "noun": "Knoten",
    "article": "der",
    "meaning": "Knot",
    "plural": "Die Knoten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1302,
    "noun": "Kabel",
    "article": "das",
    "meaning": "Cord",
    "plural": "Die Kabel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1303,
    "noun": "Kollege",
    "article": "der",
    "meaning": "Colleague",
    "plural": "Die Kollegen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1304,
    "noun": "Absicht",
    "article": "die",
    "meaning": "Intention",
    "plural": "Die Absichten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1305,
    "noun": "Motel",
    "article": "das",
    "meaning": "Stare Der starren - 1306. Motel",
    "plural": "Die Motels",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1307,
    "noun": "Anwalt",
    "article": "der",
    "meaning": "Attorney",
    "plural": "Die Anwälte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1308,
    "noun": "Liebling",
    "article": "der",
    "meaning": "Darling",
    "plural": "Die Lieblinge",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1309,
    "noun": "Diskussion",
    "article": "die",
    "meaning": "Discussion",
    "plural": "Die Diskussionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1310,
    "noun": "Atmosphäre",
    "article": "die",
    "meaning": "Atmosphere",
    "plural": "Die Atmosphären",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1311,
    "noun": "Aufführung",
    "article": "die",
    "meaning": "Performance",
    "plural": "Die Aufführungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1312,
    "noun": "Spannung",
    "article": "die",
    "meaning": "Tension",
    "plural": "Die Spannungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1313,
    "noun": "Text",
    "article": "der",
    "meaning": "Text",
    "plural": "Die Texte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1314,
    "noun": "Strand",
    "article": "der",
    "meaning": "Strand",
    "plural": "Die Strände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1315,
    "noun": "Mittag",
    "article": "der",
    "meaning": "Noon",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1316,
    "noun": "Ader",
    "article": "die",
    "meaning": "Vein",
    "plural": "Die Adern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1317,
    "noun": "Experte",
    "article": "der",
    "meaning": "Expert",
    "plural": "Die Experten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1318,
    "noun": "Bande",
    "article": "die",
    "meaning": "Gang",
    "plural": "Die Banden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1319,
    "noun": "Polizist",
    "article": "der",
    "meaning": "Policeman",
    "plural": "Die Polizisten",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1320,
    "noun": "Krebs",
    "article": "der",
    "meaning": "Cancer",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1321,
    "noun": "Fuchs",
    "article": "der",
    "meaning": "Fox",
    "plural": "Die Füchse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1322,
    "noun": "Scheidung",
    "article": "die",
    "meaning": "Divorce",
    "plural": "Die Scheidungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1323,
    "noun": "Puls",
    "article": "der",
    "meaning": "Pulse",
    "plural": "Die Pulse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1324,
    "noun": "Abwesenheit",
    "article": "die",
    "meaning": "Absence",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1325,
    "noun": "Gewalt",
    "article": "die",
    "meaning": "Violence",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1326,
    "noun": "Humor",
    "article": "der",
    "meaning": "Humor",
    "plural": "-",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1327,
    "noun": "Hocker",
    "article": "der",
    "meaning": "Stool",
    "plural": "Die Hocker",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1328,
    "noun": "Kies",
    "article": "der",
    "meaning": "Gravel",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1329,
    "noun": "Schatz",
    "article": "der",
    "meaning": "Treasure",
    "plural": "Die Schätze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1330,
    "noun": "Butter",
    "article": "die",
    "meaning": "Butter",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1331,
    "noun": "Schalter",
    "article": "der",
    "meaning": "Switch",
    "plural": "Die Schalter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1332,
    "noun": "Zigarre",
    "article": "die",
    "meaning": "Cigar",
    "plural": "Die Zigarren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1333,
    "noun": "Leinwand",
    "article": "die",
    "meaning": "Canvas",
    "plural": "Die Leinwände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1334,
    "noun": "Glück",
    "article": "das",
    "meaning": "Happiness",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1335,
    "noun": "Führer",
    "article": "der",
    "meaning": "Guide",
    "plural": "Die Führer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1336,
    "noun": "Stecknadel",
    "article": "die",
    "meaning": "Pin",
    "plural": "Die Stecknadeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1337,
    "noun": "Schauspieler",
    "article": "der",
    "meaning": "Actor",
    "plural": "Die Schauspieler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1338,
    "noun": "Ganze",
    "article": "das",
    "meaning": "Whole",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1339,
    "noun": "Anordnung",
    "article": "die",
    "meaning": "Arrangement",
    "plural": "Die Anordnungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1340,
    "noun": "Braun",
    "article": "das",
    "meaning": "Brown",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1341,
    "noun": "Gastgeber",
    "article": "der",
    "meaning": "Host",
    "plural": "Die Gastgeber",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1342,
    "noun": "Band",
    "article": "das",
    "meaning": "Ribbon",
    "plural": "Die Bänder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1343,
    "noun": "Schal",
    "article": "der",
    "meaning": "Scarf",
    "plural": "Die Schals",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1344,
    "noun": "Skala",
    "article": "die",
    "meaning": "Scale",
    "plural": "Die Skalen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1345,
    "noun": "Beweis",
    "article": "der",
    "meaning": "Proof",
    "plural": "Die Beweise",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1346,
    "noun": "Pfeil",
    "article": "der",
    "meaning": "Arrow",
    "plural": "Die Pfeile",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1347,
    "noun": "Temperatur",
    "article": "die",
    "meaning": "Temperature",
    "plural": "Die Temperaturen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1348,
    "noun": "Technologie",
    "article": "die",
    "meaning": "Technology",
    "plural": "Die Technologien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1349,
    "noun": "Erlaubnis",
    "article": "die",
    "meaning": "Permission",
    "plural": "Die Erlaubnisse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1350,
    "noun": "Standort",
    "article": "der",
    "meaning": "Location",
    "plural": "Die Standorte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1351,
    "noun": "Klaue",
    "article": "die",
    "meaning": "Claw",
    "plural": "Die Klauen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1352,
    "noun": "Cowboy",
    "article": "der",
    "meaning": "Cowboy",
    "plural": "Die Cowboys",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1353,
    "noun": "Agentur",
    "article": "die",
    "meaning": "Agency",
    "plural": "Die Agenturen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1354,
    "noun": "Bau",
    "article": "der",
    "meaning": "Construction",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1355,
    "noun": "Jagd",
    "article": "die",
    "meaning": "Hunting",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1356,
    "noun": "Gemüse",
    "article": "das",
    "meaning": "Vegetable",
    "plural": "Die Gemüse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1357,
    "noun": "Konservendose",
    "article": "die",
    "meaning": "Tin",
    "plural": "Die Konservendosen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1358,
    "noun": "Hubschrauber",
    "article": "der",
    "meaning": "Helicopter",
    "plural": "Die Hubschrauber",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1359,
    "noun": "Falle",
    "article": "die",
    "meaning": "Trap",
    "plural": "Die Fallen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1360,
    "noun": "Schlag",
    "article": "der",
    "meaning": "Pat",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1361,
    "noun": "Lücke",
    "article": "die",
    "meaning": "Gap",
    "plural": "Die Lücken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1362,
    "noun": "Haustier",
    "article": "das",
    "meaning": "Pet",
    "plural": "Die Haustiere",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1363,
    "noun": "Bildung",
    "article": "das",
    "meaning": "Education",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1364,
    "noun": "Einkauf",
    "article": "die",
    "meaning": "Shopping",
    "plural": "Die Einkäufe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1365,
    "noun": "Schuppen",
    "article": "der",
    "meaning": "Shed",
    "plural": "Die Schuppen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1366,
    "noun": "Vereinbarung",
    "article": "die",
    "meaning": "Agreement",
    "plural": "Die Vereinbarungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1367,
    "noun": "Boden",
    "article": "der",
    "meaning": "Soil",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1368,
    "noun": "Herzog",
    "article": "der",
    "meaning": "Duke",
    "plural": "Die Herzog",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1369,
    "noun": "Schrotflinte",
    "article": "das",
    "meaning": "Shotgun",
    "plural": "Die Schrotflinten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1370,
    "noun": "Idee",
    "article": "die",
    "meaning": "Notion",
    "plural": "Die Ideen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1371,
    "noun": "Heck",
    "article": "das",
    "meaning": "Rear",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1372,
    "noun": "Zeremonie",
    "article": "die",
    "meaning": "Ceremony",
    "plural": "Die Zeremonien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1373,
    "noun": "Löffel",
    "article": "der",
    "meaning": "Spoon",
    "plural": "Die Löffel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1374,
    "noun": "Badewanne",
    "article": "die",
    "meaning": "Tub",
    "plural": "Die Badewannen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1375,
    "noun": "Hinweis",
    "article": "der",
    "meaning": "Clue",
    "plural": "Die Hinweise",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1376,
    "noun": "Iris",
    "article": "die",
    "meaning": "Iris",
    "plural": "Die Irisse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1377,
    "noun": "Vorfall",
    "article": "der",
    "meaning": "Incident",
    "plural": "Die Vorfälle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1378,
    "noun": "Zusammenstoß",
    "article": "der",
    "meaning": "Crash",
    "plural": "Die Zusammenstöße",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1379,
    "noun": "Journal",
    "article": "das",
    "meaning": "Journal",
    "plural": "Die Journale",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1380,
    "noun": "Zugriff",
    "article": "der",
    "meaning": "Access",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1381,
    "noun": "Messing",
    "article": "das",
    "meaning": "Brass",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1382,
    "noun": "Mama",
    "article": "die",
    "meaning": "Mommy",
    "plural": "Die Mamas",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1383,
    "noun": "Sidebar",
    "article": "die",
    "meaning": "Sidebar",
    "plural": "Die Sidebars",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1384,
    "noun": "Schaf",
    "article": "das",
    "meaning": "Sheep",
    "plural": "Die Schafe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1385,
    "noun": "Ingenieur",
    "article": "der",
    "meaning": "Engineer",
    "plural": "Die Ingenieure",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1386,
    "noun": "Rumpf",
    "article": "der",
    "meaning": "Hull",
    "plural": "Die Rümpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1387,
    "noun": "Geruch",
    "article": "der",
    "meaning": "Odor",
    "plural": "Die Gerüche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1388,
    "noun": "Termin",
    "article": "die",
    "meaning": "Appointment",
    "plural": "Die Termine",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1389,
    "noun": "Einladung",
    "article": "die",
    "meaning": "Invitation",
    "plural": "Die Einladungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1390,
    "noun": "Lumpen",
    "article": "das",
    "meaning": "Rag",
    "plural": "Die Lumpen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1391,
    "noun": "Gute",
    "article": "das",
    "meaning": "Good",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1392,
    "noun": "Typ",
    "article": "der",
    "meaning": "Dude",
    "plural": "Die Typen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1393,
    "noun": "Behandlung",
    "article": "die",
    "meaning": "Treatment",
    "plural": "Die Behandlungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1394,
    "noun": "Weisheit",
    "article": "die",
    "meaning": "Wisdom",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1395,
    "noun": "Preis",
    "article": "der",
    "meaning": "Prize",
    "plural": "Die Preise",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1396,
    "noun": "Element",
    "article": "das",
    "meaning": "Element",
    "plural": "Die Elemente",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1397,
    "noun": "Riese",
    "article": "der",
    "meaning": "Giant",
    "plural": "Die Riesen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1398,
    "noun": "Serviette",
    "article": "die",
    "meaning": "Napkin",
    "plural": "Die Servietten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1399,
    "noun": "Wäsche",
    "article": "die",
    "meaning": "Laundry",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1400,
    "noun": "Option",
    "article": "die",
    "meaning": "Option",
    "plural": "Die Optionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1401,
    "noun": "Regal",
    "article": "das",
    "meaning": "Rack",
    "plural": "Die Regale",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1402,
    "noun": "Anfrage",
    "article": "die",
    "meaning": "Request",
    "plural": "Die Anfragen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1403,
    "noun": "Gefängnis",
    "article": "das",
    "meaning": "Jail",
    "plural": "Die Gefängnisse",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1404,
    "noun": "Opa",
    "article": "der",
    "meaning": "Grandpa",
    "plural": "Die Opas",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1405,
    "noun": "Ranch",
    "article": "die",
    "meaning": "Ranch",
    "plural": "Die Ranches",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1406,
    "noun": "Punkt",
    "article": "der",
    "meaning": "Dot",
    "plural": "Die Punkte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1407,
    "noun": "Skript",
    "article": "das",
    "meaning": "Script",
    "plural": "Die Skripte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1408,
    "noun": "Einkaufszentrum",
    "article": "das",
    "meaning": "Mall",
    "plural": "Die Einkaufszentren",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1409,
    "noun": "Furt",
    "article": "die",
    "meaning": "Ford",
    "plural": "Die Furten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1410,
    "noun": "Übung",
    "article": "die",
    "meaning": "Exercise",
    "plural": "Die Übungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1411,
    "noun": "Witwe",
    "article": "die",
    "meaning": "Widow",
    "plural": "Die Witwen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1412,
    "noun": "Krähe",
    "article": "die",
    "meaning": "Crow",
    "plural": "Die Krähen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1413,
    "noun": "Faden",
    "article": "der",
    "meaning": "Thread",
    "plural": "Die Fäden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1414,
    "noun": "Selbstmord",
    "article": "der",
    "meaning": "Suicide",
    "plural": "Die Selbstmorde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1415,
    "noun": "Hinweis",
    "article": "das",
    "meaning": "Notice",
    "plural": "Die Hinweise",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1416,
    "noun": "Sonnenuntergang",
    "article": "der",
    "meaning": "Sunset",
    "plural": "Die Sonnenuntergänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1417,
    "noun": "Galerie",
    "article": "die",
    "meaning": "Gallery",
    "plural": "Die Galerien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1418,
    "noun": "Gefäß",
    "article": "das",
    "meaning": "Vessel",
    "plural": "Die Gefäße",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1419,
    "noun": "Donner",
    "article": "der",
    "meaning": "Thunder",
    "plural": "-",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1420,
    "noun": "Seife",
    "article": "die",
    "meaning": "Soap",
    "plural": "Die Seifen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1421,
    "noun": "Whisky",
    "article": "der",
    "meaning": "Whiskey",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1422,
    "noun": "Frau",
    "article": "die",
    "meaning": "Female",
    "plural": "Die Frauen",
    "logic": "Semantic pattern: female persons are usually die."
  },
  {
    "rank": 1423,
    "noun": "Bürgermeister",
    "article": "der",
    "meaning": "Mayor",
    "plural": "Die Bürgermeister",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1424,
    "noun": "Schlaganfall",
    "article": "der",
    "meaning": "Stroke",
    "plural": "Die Schlaganfälle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1425,
    "noun": "Klick",
    "article": "der",
    "meaning": "Click",
    "plural": "Die Klicks",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1426,
    "noun": "Ruf",
    "article": "der",
    "meaning": "Reputation",
    "plural": "Die Rufe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1427,
    "noun": "Müller",
    "article": "der",
    "meaning": "Miller",
    "plural": "Die Müller",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1428,
    "noun": "Rat",
    "article": "der",
    "meaning": "Council",
    "plural": "Die Räte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1429,
    "noun": "Zeitplan",
    "article": "der",
    "meaning": "Schedule",
    "plural": "Die Zeitpläne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1430,
    "noun": "Friedhof",
    "article": "der",
    "meaning": "Cemetery",
    "plural": "Die Friedhöfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1431,
    "noun": "Kampf",
    "article": "der",
    "meaning": "Struggle",
    "plural": "Die Kämpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1432,
    "noun": "Instinkt",
    "article": "der",
    "meaning": "Instinct",
    "plural": "Die Instinkte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1433,
    "noun": "Ruhe",
    "article": "die",
    "meaning": "Calm",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1434,
    "noun": "Mitarbeiter",
    "article": "der",
    "meaning": "Employee",
    "plural": "Die Mitarbeiter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1435,
    "noun": "Nest",
    "article": "das",
    "meaning": "Nest",
    "plural": "Die Nester",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1436,
    "noun": "Grenze",
    "article": "die",
    "meaning": "Limit",
    "plural": "Die Grenzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1437,
    "noun": "Deutsche",
    "article": "der",
    "meaning": "German",
    "plural": "Die Deutschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1438,
    "noun": "Mönch",
    "article": "der",
    "meaning": "Monk",
    "plural": "Die Mönche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1439,
    "noun": "Wurm",
    "article": "der",
    "meaning": "Worm",
    "plural": "Die Würmer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1440,
    "noun": "Dokument",
    "article": "das",
    "meaning": "Document",
    "plural": "Die Dokumente",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1441,
    "noun": "Trauer",
    "article": "die",
    "meaning": "Sadness",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1442,
    "noun": "Hut",
    "article": "der",
    "meaning": "Hut",
    "plural": "Die Hüte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1443,
    "noun": "Leben",
    "article": "das",
    "meaning": "Lifetime",
    "plural": "Die Leben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1444,
    "noun": "Tänzer",
    "article": "der",
    "meaning": "Dancer",
    "plural": "Die Tänzer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1445,
    "noun": "Versicherung",
    "article": "die",
    "meaning": "Insurance",
    "plural": "Die Versicherungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1446,
    "noun": "Schwierigkeit",
    "article": "die",
    "meaning": "Difficulty",
    "plural": "Die Schwierigkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1447,
    "noun": "Matratze",
    "article": "die",
    "meaning": "Mattress",
    "plural": "Die Matratzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1448,
    "noun": "Mann",
    "article": "der",
    "meaning": "Male",
    "plural": "Die Männer",
    "logic": "Semantic pattern: male persons are usually der."
  },
  {
    "rank": 1449,
    "noun": "Klinik",
    "article": "die",
    "meaning": "Clinic",
    "plural": "Die Kliniken",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1450,
    "noun": "Anzeige",
    "article": "die",
    "meaning": "Ad",
    "plural": "Die Anzeigen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1451,
    "noun": "Becher",
    "article": "der",
    "meaning": "Mug",
    "plural": "Die Becher",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1452,
    "noun": "Set",
    "article": "das",
    "meaning": "Kit",
    "plural": "Die Sets",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1453,
    "noun": "Kommunikation",
    "article": "die",
    "meaning": "Communication",
    "plural": "Die Kommunikationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1454,
    "noun": "Katastrophe",
    "article": "die",
    "meaning": "Disaster",
    "plural": "Die Katastrophen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1455,
    "noun": "Fliese",
    "article": "die",
    "meaning": "Tile",
    "plural": "Die Fliesen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1456,
    "noun": "Empfänger",
    "article": "der",
    "meaning": "Receiver",
    "plural": "Die Empfänger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1457,
    "noun": "Gebrüll",
    "article": "das",
    "meaning": "Roar",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1458,
    "noun": "Truppe",
    "article": "die",
    "meaning": "Troop",
    "plural": "Die Truppen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1459,
    "noun": "Sarg",
    "article": "der",
    "meaning": "Coffin",
    "plural": "Die Särge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1460,
    "noun": "Freundschaft",
    "article": "die",
    "meaning": "Friendship",
    "plural": "Die Freundschaften",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1461,
    "noun": "Untersuchung",
    "article": "die",
    "meaning": "Investigation",
    "plural": "Die Untersuchungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1462,
    "noun": "Verkauf",
    "article": "der",
    "meaning": "Sale",
    "plural": "Die Verkäufe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1463,
    "noun": "Tor",
    "article": "das",
    "meaning": "Goal",
    "plural": "Die Tore",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1464,
    "noun": "Krankenwagen",
    "article": "der",
    "meaning": "Ambulance",
    "plural": "Die Krankenwagen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1465,
    "noun": "Mondschein",
    "article": "das",
    "meaning": "Moonlight",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1466,
    "noun": "Station",
    "article": "die",
    "meaning": "Ward",
    "plural": "Die Stationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1467,
    "noun": "Hose",
    "article": "die",
    "meaning": "Trousers",
    "plural": "Die Hosen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1468,
    "noun": "Wolle",
    "article": "die",
    "meaning": "Wool",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1469,
    "noun": "Regenmantel",
    "article": "der",
    "meaning": "Mac",
    "plural": "Die Regenmäntel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1470,
    "noun": "Minister",
    "article": "der",
    "meaning": "Minister",
    "plural": "Die Minister",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1471,
    "noun": "Eintrag",
    "article": "der",
    "meaning": "Entry",
    "plural": "Die Einträge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1472,
    "noun": "Dieb",
    "article": "der",
    "meaning": "Thief",
    "plural": "Die Diebe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1473,
    "noun": "Aktenkoffer",
    "article": "der",
    "meaning": "Briefcase",
    "plural": "Die Aktentaschen",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1474,
    "noun": "Mitleid",
    "article": "das",
    "meaning": "Pity",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1475,
    "noun": "Fingerspitze",
    "article": "die",
    "meaning": "Fingertip",
    "plural": "Die Fingerspitzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1476,
    "noun": "Marine",
    "article": "die",
    "meaning": "Navy",
    "plural": "Die Marinen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1477,
    "noun": "Insekt",
    "article": "das",
    "meaning": "Insect",
    "plural": "Die Insekten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1478,
    "noun": "Samt",
    "article": "der",
    "meaning": "Velvet",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1479,
    "noun": "Biene",
    "article": "die",
    "meaning": "Bee",
    "plural": "Die Bienen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1480,
    "noun": "Stock",
    "article": "der",
    "meaning": "Cane",
    "plural": "Die Stöcke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1481,
    "noun": "Gen",
    "article": "das",
    "meaning": "Gene",
    "plural": "Die Gene",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1482,
    "noun": "Salat",
    "article": "der",
    "meaning": "Salad",
    "plural": "Die Salate",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1483,
    "noun": "Windschutzscheibe",
    "article": "die",
    "meaning": "Windshield",
    "plural": "Die Windschutzscheiben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1484,
    "noun": "Outfit",
    "article": "das",
    "meaning": "Outfit",
    "plural": "Die Outfits",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1485,
    "noun": "Shuttle",
    "article": "das",
    "meaning": "Shuttle",
    "plural": "Die Shuttle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1486,
    "noun": "Schrei",
    "article": "der",
    "meaning": "Shout",
    "plural": "Die Schreie",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1487,
    "noun": "Wut",
    "article": "die",
    "meaning": "Fury",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1488,
    "noun": "Herausforderung",
    "article": "die",
    "meaning": "Challenge",
    "plural": "Die Herausforderungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1489,
    "noun": "Zufriedenheit",
    "article": "die",
    "meaning": "Satisfaction",
    "plural": "-",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1490,
    "noun": "Motor",
    "article": "der",
    "meaning": "Motor",
    "plural": "Die Motoren",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1491,
    "noun": "Produkt",
    "article": "das",
    "meaning": "Product",
    "plural": "Die Produkte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1492,
    "noun": "Unkraut",
    "article": "das",
    "meaning": "Weed",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1493,
    "noun": "Stretch",
    "article": "der",
    "meaning": "Stretch",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1494,
    "noun": "Fitnessstudio",
    "article": "das",
    "meaning": "Gym",
    "plural": "Die Fitnessstudios",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1495,
    "noun": "Hauptstadt",
    "article": "die",
    "meaning": "Capital",
    "plural": "Die Hauptstädte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1496,
    "noun": "Rand",
    "article": "der",
    "meaning": "Rim",
    "plural": "Die Ränder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1497,
    "noun": "Pfote",
    "article": "die",
    "meaning": "Paw",
    "plural": "Die Pfoten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1498,
    "noun": "Fort",
    "article": "das",
    "meaning": "Fort",
    "plural": "Die Forts",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1499,
    "noun": "Kosten",
    "article": "die",
    "meaning": "Cost",
    "plural": "-",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1500,
    "noun": "Poster",
    "article": "das",
    "meaning": "Poster",
    "plural": "Die Poster",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1501,
    "noun": "Vampir",
    "article": "der",
    "meaning": "Vampire",
    "plural": "Die Vampire",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1502,
    "noun": "Schaft",
    "article": "der",
    "meaning": "Shaft",
    "plural": "Die Schäfte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1503,
    "noun": "Identität",
    "article": "die",
    "meaning": "Identity",
    "plural": "Die Identitäten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1504,
    "noun": "Gehweg",
    "article": "der",
    "meaning": "Pavement",
    "plural": "Die Gehwege",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1505,
    "noun": "Arschloch",
    "article": "das",
    "meaning": "Asshole",
    "plural": "Die Arschlöcher",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1506,
    "noun": "Band",
    "article": "das",
    "meaning": "Strap",
    "plural": "Die Bänder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1507,
    "noun": "Salon",
    "article": "der",
    "meaning": "Parlor",
    "plural": "Die Salons",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1508,
    "noun": "Hafen",
    "article": "der",
    "meaning": "Harbor",
    "plural": "Die Häfen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1509,
    "noun": "Beispiel",
    "article": "das",
    "meaning": "Example",
    "plural": "Die Beispiele",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1510,
    "noun": "Netz",
    "article": "das",
    "meaning": "Web",
    "plural": "Die Netze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1511,
    "noun": "Golf",
    "article": "der",
    "meaning": "Golf",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1512,
    "noun": "Mist",
    "article": "der",
    "meaning": "Crap",
    "plural": "(usually uncountable)",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1513,
    "noun": "Freude",
    "article": "die",
    "meaning": "Delight",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1514,
    "noun": "Steppdecke",
    "article": "die",
    "meaning": "Quilt",
    "plural": "Die Steppdecken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1515,
    "noun": "Steuer",
    "article": "die",
    "meaning": "Tax",
    "plural": "Die Steuern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1516,
    "noun": "Falte",
    "article": "die",
    "meaning": "Fold",
    "plural": "Die Falten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1517,
    "noun": "Porträt",
    "article": "das",
    "meaning": "Portrait",
    "plural": "Die Porträts",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1518,
    "noun": "Gewebe",
    "article": "das",
    "meaning": "Tissue",
    "plural": "Die Gewebe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1519,
    "noun": "Glaube",
    "article": "der",
    "meaning": "Belief",
    "plural": "Die Glauben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1520,
    "noun": "Kostüm",
    "article": "das",
    "meaning": "Costume",
    "plural": "Die Kostüme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1521,
    "noun": "Maß",
    "article": "das",
    "meaning": "Measure",
    "plural": "Die Maße",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1522,
    "noun": "Kutsche",
    "article": "die",
    "meaning": "Carriage",
    "plural": "Die Kutschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1523,
    "noun": "Gitarre",
    "article": "die",
    "meaning": "Guitar",
    "plural": "Die Gitarren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1524,
    "noun": "Ritter",
    "article": "der",
    "meaning": "Knight",
    "plural": "Die Ritter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1525,
    "noun": "Rang",
    "article": "der",
    "meaning": "Rank",
    "plural": "Die Ränge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1526,
    "noun": "Major",
    "article": "der",
    "meaning": "Major",
    "plural": "Die Majore",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1527,
    "noun": "Brunnen",
    "article": "der",
    "meaning": "Fountain",
    "plural": "Die Brunnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1528,
    "noun": "Stall",
    "article": "der",
    "meaning": "Stall",
    "plural": "Die Ställe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1529,
    "noun": "Ladung",
    "article": "die",
    "meaning": "Load",
    "plural": "Die Ladungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1530,
    "noun": "Funke",
    "article": "der",
    "meaning": "Spark",
    "plural": "Die Funken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1531,
    "noun": "Abfall",
    "article": "der",
    "meaning": "Waste",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1532,
    "noun": "Champagner",
    "article": "der",
    "meaning": "Champagne",
    "plural": "(usually uncountable)",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1533,
    "noun": "Bezirk",
    "article": "der",
    "meaning": "District",
    "plural": "Die Bezirke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1534,
    "noun": "Schutz",
    "article": "der",
    "meaning": "Protection",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1535,
    "noun": "Urteil",
    "article": "das",
    "meaning": "Judgment",
    "plural": "Die Urteile",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1536,
    "noun": "Mitgefühl",
    "article": "das",
    "meaning": "Sympathy",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1537,
    "noun": "Veilchen",
    "article": "das",
    "meaning": "Violet",
    "plural": "Die Veilchen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1538,
    "noun": "Aufprall",
    "article": "der",
    "meaning": "Impact",
    "plural": "Die Aufprälle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1539,
    "noun": "Enttäuschung",
    "article": "die",
    "meaning": "Disappointment",
    "plural": "Die Enttäuschungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1540,
    "noun": "Trinken",
    "article": "das",
    "meaning": "Drinking",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1541,
    "noun": "Bewusstsein",
    "article": "das",
    "meaning": "Consciousness",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1542,
    "noun": "Taschentuch",
    "article": "das",
    "meaning": "Handkerchief",
    "plural": "Die Taschentücher",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1543,
    "noun": "Tanzen",
    "article": "das",
    "meaning": "Dancing",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1544,
    "noun": "Parfüm",
    "article": "das",
    "meaning": "Perfume",
    "plural": "Die Parfüms",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1545,
    "noun": "Netzwerk",
    "article": "das",
    "meaning": "Network",
    "plural": "Die Netzwerke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1546,
    "noun": "Forderung",
    "article": "die",
    "meaning": "Claim",
    "plural": "Die Forderungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1547,
    "noun": "Nonne",
    "article": "die",
    "meaning": "Nun",
    "plural": "Die Nonnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1548,
    "noun": "Krone",
    "article": "die",
    "meaning": "Crown",
    "plural": "Die Kronen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1549,
    "noun": "Geländer",
    "article": "das",
    "meaning": "Railing",
    "plural": "Die Geländer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1550,
    "noun": "Lizenz",
    "article": "die",
    "meaning": "License",
    "plural": "Die Lizenzen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1551,
    "noun": "Gnade",
    "article": "die",
    "meaning": "Mercy",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1552,
    "noun": "Ballon",
    "article": "der",
    "meaning": "Balloon",
    "plural": "Die Ballons",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1553,
    "noun": "Chaos",
    "article": "das",
    "meaning": "Chaos",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1554,
    "noun": "Fieber",
    "article": "das",
    "meaning": "Fever",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1555,
    "noun": "Schließfach",
    "article": "der",
    "meaning": "Locker",
    "plural": "Die Schließfächer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1556,
    "noun": "Sitzung",
    "article": "die",
    "meaning": "Session",
    "plural": "Die Sitzungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1557,
    "noun": "Ausbruch",
    "article": "der",
    "meaning": "Burst",
    "plural": "Die Ausbrüche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1558,
    "noun": "Gipfel",
    "article": "der",
    "meaning": "Peak",
    "plural": "Die Gipfel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1559,
    "noun": "Trommel",
    "article": "die",
    "meaning": "Drum",
    "plural": "Die Trommeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1560,
    "noun": "Fokus",
    "article": "der",
    "meaning": "Focus",
    "plural": "Die Foki",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1561,
    "noun": "Frosch",
    "article": "der",
    "meaning": "Frog",
    "plural": "Die Frösche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1562,
    "noun": "Nutzen",
    "article": "der",
    "meaning": "Benefit",
    "plural": "Die Nutzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1563,
    "noun": "Bemerkung",
    "article": "die",
    "meaning": "Remark",
    "plural": "Die Bemerkungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1564,
    "noun": "Flut",
    "article": "die",
    "meaning": "Tide",
    "plural": "Die Fluten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1565,
    "noun": "Verdacht",
    "article": "der",
    "meaning": "Suspicion",
    "plural": "Die Verdächte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1566,
    "noun": "Jeep",
    "article": "der",
    "meaning": "Jeep",
    "plural": "Die Jeeps",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1567,
    "noun": "Sorge",
    "article": "die",
    "meaning": "Worry",
    "plural": "Die Sorgen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1568,
    "noun": "Literatur",
    "article": "die",
    "meaning": "Literature",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1569,
    "noun": "Bogenschütze",
    "article": "der",
    "meaning": "Archer",
    "plural": "Die Bogenschützen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1570,
    "noun": "Haushalt",
    "article": "der",
    "meaning": "Household",
    "plural": "Die Haushalte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1571,
    "noun": "Pulver",
    "article": "das",
    "meaning": "Powder",
    "plural": "Die Pulver",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1572,
    "noun": "Hirte",
    "article": "der",
    "meaning": "Shepherd",
    "plural": "Die Hirten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1573,
    "noun": "Linse",
    "article": "die",
    "meaning": "Lens",
    "plural": "Die Linsen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1574,
    "noun": "Favorit",
    "article": "der",
    "meaning": "Favorite",
    "plural": "Die Favoriten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1575,
    "noun": "Dame",
    "article": "die",
    "meaning": "Madame",
    "plural": "(no plural form)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1576,
    "noun": "Villa",
    "article": "die",
    "meaning": "Mansion",
    "plural": "Die Villen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1577,
    "noun": "Boom",
    "article": "der",
    "meaning": "Boom",
    "plural": "Die Booms",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1578,
    "noun": "Spitze",
    "article": "die",
    "meaning": "Lace",
    "plural": "Die Spitzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1579,
    "noun": "Bewertung",
    "article": "die",
    "meaning": "Review",
    "plural": "Die Bewertungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1580,
    "noun": "Empfang",
    "article": "der",
    "meaning": "Reception",
    "plural": "Die Empfänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1581,
    "noun": "Schrott",
    "article": "der",
    "meaning": "Scrap",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1582,
    "noun": "Perle",
    "article": "die",
    "meaning": "Bead",
    "plural": "Die Perlen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1583,
    "noun": "Blenden",
    "article": "das",
    "meaning": "Glare",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1584,
    "noun": "Fluss",
    "article": "der",
    "meaning": "Flow",
    "plural": "Die Flüsse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1585,
    "noun": "Café",
    "article": "das",
    "meaning": "Cafe",
    "plural": "Die Cafés",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1586,
    "noun": "Status",
    "article": "der",
    "meaning": "Status",
    "plural": "Die Stati",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1587,
    "noun": "Hämmern",
    "article": "das",
    "meaning": "Pounding",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1588,
    "noun": "Rakete",
    "article": "die",
    "meaning": "Rocket",
    "plural": "Die Raketen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1589,
    "noun": "Schlucht",
    "article": "die",
    "meaning": "Canyon",
    "plural": "Die Schluchten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1590,
    "noun": "Trauer",
    "article": "die",
    "meaning": "Sorrow",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1591,
    "noun": "Spinne",
    "article": "die",
    "meaning": "Spider",
    "plural": "Die Spinnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1592,
    "noun": "Explosion",
    "article": "die",
    "meaning": "Blast",
    "plural": "Die Explosionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1593,
    "noun": "Persönlichkeit",
    "article": "die",
    "meaning": "Personality",
    "plural": "Die Persönlichkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1594,
    "noun": "Campus",
    "article": "der",
    "meaning": "Campus",
    "plural": "Die Campi",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1595,
    "noun": "Fluch",
    "article": "der",
    "meaning": "Curse",
    "plural": "Die Flüche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1596,
    "noun": "Treppenhaus",
    "article": "das",
    "meaning": "Staircase",
    "plural": "Die Treppenhäuser",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1597,
    "noun": "Drang",
    "article": "der",
    "meaning": "Urge",
    "plural": "Die Dränge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1598,
    "noun": "Frustration",
    "article": "die",
    "meaning": "Frustration",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1599,
    "noun": "Pumpe",
    "article": "die",
    "meaning": "Pump",
    "plural": "Die Pumpen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1600,
    "noun": "Leichtigkeit",
    "article": "die",
    "meaning": "Ease",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1601,
    "noun": "Graf",
    "article": "der",
    "meaning": "Count",
    "plural": "Die Grafen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1602,
    "noun": "Lösung",
    "article": "die",
    "meaning": "Solution",
    "plural": "Die Lösungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1603,
    "noun": "Schmuck",
    "article": "der",
    "meaning": "Jewelry",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1604,
    "noun": "Sirene",
    "article": "die",
    "meaning": "Siren",
    "plural": "Die Sirenen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1605,
    "noun": "Hit",
    "article": "der",
    "meaning": "Hit",
    "plural": "Die Hits",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1606,
    "noun": "Tradition",
    "article": "die",
    "meaning": "Tradition",
    "plural": "Die Traditionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1607,
    "noun": "Bordstein",
    "article": "der",
    "meaning": "Curb",
    "plural": "Die Bordsteine",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1608,
    "noun": "Vielfalt",
    "article": "die",
    "meaning": "Variety",
    "plural": "Die Vielfalten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1609,
    "noun": "Pirat",
    "article": "der",
    "meaning": "Pirate",
    "plural": "Die Piraten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1610,
    "noun": "Beschreibung",
    "article": "die",
    "meaning": "Description",
    "plural": "Die Beschreibungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1611,
    "noun": "Liebling",
    "article": "der",
    "meaning": "Dear",
    "plural": "Die Lieblinge",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1612,
    "noun": "Angst",
    "article": "die",
    "meaning": "Anxiety",
    "plural": "Die Ängste",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1613,
    "noun": "Tonhöhe",
    "article": "die",
    "meaning": "Pitch",
    "plural": "Die Tonhöhen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1614,
    "noun": "Pizza",
    "article": "die",
    "meaning": "Pizza",
    "plural": "Die Pizzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1615,
    "noun": "Elefant",
    "article": "der",
    "meaning": "Elephant",
    "plural": "Die Elefanten",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1616,
    "noun": "Politik",
    "article": "die",
    "meaning": "Politics",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1617,
    "noun": "Tennis",
    "article": "das",
    "meaning": "Tennis",
    "plural": "(usually uncountable)",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1618,
    "noun": "Hunger",
    "article": "der",
    "meaning": "Hunger",
    "plural": "(usually uncountable)",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1619,
    "noun": "Genie",
    "article": "das",
    "meaning": "Genius",
    "plural": "Die Genies",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1620,
    "noun": "Ziege",
    "article": "die",
    "meaning": "Goat",
    "plural": "Die Ziegen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1621,
    "noun": "Sieg",
    "article": "der",
    "meaning": "Victory",
    "plural": "Die Siege",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1622,
    "noun": "Kombination",
    "article": "die",
    "meaning": "Combination",
    "plural": "Die Kombinationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1623,
    "noun": "Zugehörigkeit",
    "article": "die",
    "meaning": "Affiliation",
    "plural": "Die Zugehörigkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1624,
    "noun": "Mama",
    "article": "die",
    "meaning": "Momma",
    "plural": "Die Mamas",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1625,
    "noun": "Kap",
    "article": "das",
    "meaning": "Cape",
    "plural": "Die Kaps",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1626,
    "noun": "Scheinwerfer",
    "article": "der",
    "meaning": "Headlight",
    "plural": "Die Scheinwerfer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1627,
    "noun": "Gouverneur",
    "article": "der",
    "meaning": "Governor",
    "plural": "Die Gouverneure",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1628,
    "noun": "Sauerstoff",
    "article": "der",
    "meaning": "Oxygen",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1629,
    "noun": "Bischof",
    "article": "der",
    "meaning": "Bishop",
    "plural": "Die Bischöfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1630,
    "noun": "Bündel",
    "article": "das",
    "meaning": "Bundle",
    "plural": "Die Bündel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1631,
    "noun": "Entwicklung",
    "article": "die",
    "meaning": "Development",
    "plural": "Die Entwicklungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1632,
    "noun": "Fingernagel",
    "article": "der",
    "meaning": "Fingernail",
    "plural": "Die Fingernägel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1633,
    "noun": "Punktestand",
    "article": "der",
    "meaning": "Score",
    "plural": "Die Punktestände",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1634,
    "noun": "Kamerad",
    "article": "der",
    "meaning": "Mate",
    "plural": "Die Kameraden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1635,
    "noun": "Reiter",
    "article": "der",
    "meaning": "Rider",
    "plural": "Die Reiter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1636,
    "noun": "Umlaufbahn",
    "article": "die",
    "meaning": "Orbit",
    "plural": "Die Umlaufbahnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1637,
    "noun": "Rebe",
    "article": "die",
    "meaning": "Vine",
    "plural": "Die Reben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1638,
    "noun": "Suite",
    "article": "die",
    "meaning": "Suite",
    "plural": "Die Suiten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1639,
    "noun": "Barkeeper",
    "article": "der",
    "meaning": "Bartender",
    "plural": "Die Barkeeper",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1640,
    "noun": "Cola",
    "article": "die",
    "meaning": "Coke",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1641,
    "noun": "Melodie",
    "article": "die",
    "meaning": "Tune",
    "plural": "Die Melodien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1642,
    "noun": "Ruhm",
    "article": "der",
    "meaning": "Glory",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1643,
    "noun": "Rabbi",
    "article": "der",
    "meaning": "Rabbi",
    "plural": "(plural form is Rabbiner)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1644,
    "noun": "Operation",
    "article": "die",
    "meaning": "Surgery",
    "plural": "Die Operationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1645,
    "noun": "Rindvieh",
    "article": "das",
    "meaning": "Cattle",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1646,
    "noun": "Ritual",
    "article": "das",
    "meaning": "Ritual",
    "plural": "Die Rituale",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1647,
    "noun": "Gruß",
    "article": "der",
    "meaning": "Greeting",
    "plural": "Die Grüße",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1648,
    "noun": "Scheibe",
    "article": "die",
    "meaning": "Slice",
    "plural": "Die Scheiben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1649,
    "noun": "Homer",
    "article": "der",
    "meaning": "Homer",
    "plural": "Die Homers",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1650,
    "noun": "Kamin",
    "article": "der",
    "meaning": "Fireplace",
    "plural": "Die Kamine",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1651,
    "noun": "Trikot",
    "article": "das",
    "meaning": "Jersey",
    "plural": "Die Trikots",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1652,
    "noun": "Medien",
    "article": "die",
    "meaning": "Media",
    "plural": "(plural noun)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1653,
    "noun": "Knall",
    "article": "der",
    "meaning": "Pop",
    "plural": "Die Knalle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1654,
    "noun": "Ladung",
    "article": "die",
    "meaning": "Cargo",
    "plural": "Die Ladungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1655,
    "noun": "Herberge",
    "article": "die",
    "meaning": "Inn",
    "plural": "Die Herbergen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1656,
    "noun": "Stellvertreter",
    "article": "der",
    "meaning": "Deputy",
    "plural": "Die Stellvertreter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1657,
    "noun": "Verzweiflung",
    "article": "die",
    "meaning": "Despair",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1658,
    "noun": "Gebiet",
    "article": "das",
    "meaning": "Territory",
    "plural": "Die Gebiete",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1659,
    "noun": "Schlag",
    "article": "der",
    "meaning": "Punch",
    "plural": "Die Schläge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1660,
    "noun": "Jazz",
    "article": "der",
    "meaning": "Jazz",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1661,
    "noun": "Umarmung",
    "article": "die",
    "meaning": "Hug",
    "plural": "Die Umarmungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1662,
    "noun": "Pfeife",
    "article": "die",
    "meaning": "Whistle",
    "plural": "Die Pfeifen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1663,
    "noun": "Menschheit",
    "article": "die",
    "meaning": "Humanity",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1664,
    "noun": "Handwerk",
    "article": "das",
    "meaning": "Craft",
    "plural": "Die Handwerke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1665,
    "noun": "Tageslicht",
    "article": "das",
    "meaning": "Daylight",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1666,
    "noun": "Wert",
    "article": "der",
    "meaning": "Worth",
    "plural": "Die Werte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1667,
    "noun": "Einlage",
    "article": "die",
    "meaning": "Slip",
    "plural": "Die Einlagen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1668,
    "noun": "Rüstung",
    "article": "die",
    "meaning": "Armor",
    "plural": "Die Rüstungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1669,
    "noun": "Rucksack",
    "article": "der",
    "meaning": "Backpack",
    "plural": "Die Rucksäcke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1670,
    "noun": "Vorschlag",
    "article": "der",
    "meaning": "Suggestion",
    "plural": "Die Vorschläge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1671,
    "noun": "Höhle",
    "article": "die",
    "meaning": "Den",
    "plural": "Die Höhlen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1672,
    "noun": "Symbol",
    "article": "das",
    "meaning": "Symbol",
    "plural": "Die Symbole",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1673,
    "noun": "Kolonie",
    "article": "die",
    "meaning": "Colony",
    "plural": "Die Kolonien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1674,
    "noun": "Schluss",
    "article": "der",
    "meaning": "Conclusion",
    "plural": "Die Schlüsse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1675,
    "noun": "Nasenloch",
    "article": "das",
    "meaning": "Nostril",
    "plural": "Die Nasenlöcher",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1676,
    "noun": "Speer",
    "article": "der",
    "meaning": "Spear",
    "plural": "Die Speere",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1677,
    "noun": "Impuls",
    "article": "der",
    "meaning": "Impulse",
    "plural": "Die Impulse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1678,
    "noun": "Tomate",
    "article": "die",
    "meaning": "Tomato",
    "plural": "Die Tomaten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1679,
    "noun": "Kalb",
    "article": "das",
    "meaning": "Calf",
    "plural": "Die Kälber",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1680,
    "noun": "Herbst",
    "article": "der",
    "meaning": "Autumn",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1681,
    "noun": "Entdeckung",
    "article": "die",
    "meaning": "Discovery",
    "plural": "Die Entdeckungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1682,
    "noun": "Klassenzimmer",
    "article": "das",
    "meaning": "Classroom",
    "plural": "Die Klassenzimmer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1683,
    "noun": "Lieferung",
    "article": "die",
    "meaning": "Delivery",
    "plural": "Die Lieferungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1684,
    "noun": "Spray",
    "article": "das",
    "meaning": "Spray",
    "plural": "Die Sprays",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1685,
    "noun": "Flüssigkeit",
    "article": "die",
    "meaning": "Liquid",
    "plural": "Die Flüssigkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1686,
    "noun": "Treibstoff",
    "article": "der",
    "meaning": "Fuel",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1687,
    "noun": "Unterwäsche",
    "article": "die",
    "meaning": "Underwear",
    "plural": "(no plural form)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1688,
    "noun": "Kuppel",
    "article": "die",
    "meaning": "Dome",
    "plural": "Die Kuppeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1689,
    "noun": "Bevölkerung",
    "article": "die",
    "meaning": "Population",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1690,
    "noun": "Zuneigung",
    "article": "die",
    "meaning": "Affection",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1691,
    "noun": "Religion",
    "article": "die",
    "meaning": "Religion",
    "plural": "Die Religionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1692,
    "noun": "Sänger",
    "article": "der",
    "meaning": "Singer",
    "plural": "Die Sängerinnen",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1693,
    "noun": "Bedienstete",
    "article": "der",
    "meaning": "Attendant",
    "plural": "Die Bediensteten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1694,
    "noun": "Illusion",
    "article": "die",
    "meaning": "Illusion",
    "plural": "Die Illusionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1695,
    "noun": "Link",
    "article": "der",
    "meaning": "Link",
    "plural": "Die Links",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1696,
    "noun": "Lounge",
    "article": "die",
    "meaning": "Lounge",
    "plural": "Die Lounges",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1697,
    "noun": "Innere",
    "article": "das",
    "meaning": "Interior",
    "plural": "Die Innenräume",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1698,
    "noun": "Achselzucken",
    "article": "das",
    "meaning": "Shrug",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1699,
    "noun": "Zone",
    "article": "die",
    "meaning": "Zone",
    "plural": "Die Zonen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1700,
    "noun": "Standard",
    "article": "der",
    "meaning": "Standard",
    "plural": "Die Standards",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1701,
    "noun": "Kohle",
    "article": "die",
    "meaning": "Coal",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1702,
    "noun": "Jagd",
    "article": "die",
    "meaning": "Chase",
    "plural": "Die Jagden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1703,
    "noun": "Kloß",
    "article": "der",
    "meaning": "Lump",
    "plural": "Die Klöße",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1704,
    "noun": "Charme",
    "article": "der",
    "meaning": "Charm",
    "plural": "Die Charmes",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1705,
    "noun": "Legende",
    "article": "die",
    "meaning": "Legend",
    "plural": "Die Legenden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1706,
    "noun": "Konsequenz",
    "article": "die",
    "meaning": "Consequence",
    "plural": "Die Konsequenzen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1707,
    "noun": "Beobachtung",
    "article": "die",
    "meaning": "Observation",
    "plural": "Die Beobachtungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1708,
    "noun": "Fahrrad",
    "article": "das",
    "meaning": "Bicycle",
    "plural": "Die Fahrräder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1709,
    "noun": "Schaden",
    "article": "der",
    "meaning": "Harm",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1710,
    "noun": "Lohn",
    "article": "der",
    "meaning": "Pay",
    "plural": "Die Löhne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1711,
    "noun": "Aussicht",
    "article": "die",
    "meaning": "Prospect",
    "plural": "Die Aussichten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1712,
    "noun": "U-Bahn",
    "article": "die",
    "meaning": "Subway",
    "plural": "Die U-Bahnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1713,
    "noun": "Muster",
    "article": "das",
    "meaning": "Sample",
    "plural": "Die Muster",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1714,
    "noun": "Kirsche",
    "article": "die",
    "meaning": "Cherry",
    "plural": "Die Kirschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1715,
    "noun": "Händler",
    "article": "der",
    "meaning": "Dealer",
    "plural": "Die Händler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1716,
    "noun": "Aufgabe",
    "article": "die",
    "meaning": "Assignment",
    "plural": "Die Aufgaben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1717,
    "noun": "Eile",
    "article": "die",
    "meaning": "Hurry",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1718,
    "noun": "Geliebte",
    "article": "die",
    "meaning": "Mistress",
    "plural": "Die Geliebten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1719,
    "noun": "Hügel",
    "article": "der",
    "meaning": "Mound",
    "plural": "Die Hügel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1720,
    "noun": "Unsinn",
    "article": "der",
    "meaning": "Nonsense",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1721,
    "noun": "Ausschuss",
    "article": "der",
    "meaning": "Committee",
    "plural": "Die Ausschüsse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1722,
    "noun": "Echo",
    "article": "das",
    "meaning": "Echo",
    "plural": "Die Echos",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1723,
    "noun": "Nachgiebigkeit",
    "article": "der",
    "meaning": "Slack",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1724,
    "noun": "Decker",
    "article": "die",
    "meaning": "Decker",
    "plural": "(plural noun)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1725,
    "noun": "Lager",
    "article": "das",
    "meaning": "Warehouse",
    "plural": "Die Lager",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1726,
    "noun": "Kampf",
    "article": "der",
    "meaning": "Bout",
    "plural": "Die Kämpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1727,
    "noun": "Toast",
    "article": "der",
    "meaning": "Toast",
    "plural": "Die Toasts",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1728,
    "noun": "Einrichtung",
    "article": "die",
    "meaning": "Facility",
    "plural": "Die Einrichtungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1729,
    "noun": "Basketball",
    "article": "der",
    "meaning": "Basketball",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1730,
    "noun": "Schnurrbart",
    "article": "der",
    "meaning": "Mustache",
    "plural": "Die Schnurrbärte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1731,
    "noun": "Senator",
    "article": "der",
    "meaning": "Senator",
    "plural": "Die Senatoren",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1732,
    "noun": "Aktie",
    "article": "die",
    "meaning": "Share",
    "plural": "Die Aktien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1733,
    "noun": "Augenlid",
    "article": "das",
    "meaning": "Eyelid",
    "plural": "Die Augenlider",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1734,
    "noun": "Begeisterung",
    "article": "die",
    "meaning": "Enthusiasm",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1735,
    "noun": "Stück",
    "article": "das",
    "meaning": "Chunk",
    "plural": "Die Stücke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1736,
    "noun": "Schildkröte",
    "article": "die",
    "meaning": "Turtle",
    "plural": "Die Schildkröten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1737,
    "noun": "Alkohol",
    "article": "der",
    "meaning": "Alcohol",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1738,
    "noun": "Kaugummi",
    "article": "der",
    "meaning": "Gum",
    "plural": "Die Kaugummis",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1739,
    "noun": "Truthahn",
    "article": "der",
    "meaning": "Turkey",
    "plural": "Die Truthähne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1740,
    "noun": "Prediger",
    "article": "der",
    "meaning": "Preacher",
    "plural": "Die Prediger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1741,
    "noun": "Besitz",
    "article": "der",
    "meaning": "Possession",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1742,
    "noun": "Sackkarre",
    "article": "die",
    "meaning": "Dolly",
    "plural": "Die Sackkarren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1743,
    "noun": "Leinen",
    "article": "das",
    "meaning": "Linen",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1744,
    "noun": "Entschuldigung",
    "article": "die",
    "meaning": "Apology",
    "plural": "Die Entschuldigungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1745,
    "noun": "Vortrag",
    "article": "der",
    "meaning": "Lecture",
    "plural": "Die Vorträge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1746,
    "noun": "Fels",
    "article": "der",
    "meaning": "Boulder",
    "plural": "Die Felsen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1747,
    "noun": "Haufen",
    "article": "der",
    "meaning": "Heap",
    "plural": "Die Haufen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1748,
    "noun": "Fotograf",
    "article": "der",
    "meaning": "Photographer",
    "plural": "Die Fotografen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1749,
    "noun": "Bremse",
    "article": "die",
    "meaning": "Brake",
    "plural": "Die Bremsen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1750,
    "noun": "Nachfrage",
    "article": "die",
    "meaning": "Demand",
    "plural": "Die Nachfragen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1751,
    "noun": "Schürze",
    "article": "die",
    "meaning": "Apron",
    "plural": "Die Schürzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1752,
    "noun": "Umhang",
    "article": "der",
    "meaning": "Cloak",
    "plural": "Die Umhänge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1753,
    "noun": "Jury",
    "article": "die",
    "meaning": "Jury",
    "plural": "Die Jurys",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1754,
    "noun": "Anhörung",
    "article": "die",
    "meaning": "Hearing",
    "plural": "Die Anhörungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1755,
    "noun": "Grau",
    "article": "das",
    "meaning": "Gray",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1756,
    "noun": "Kiste",
    "article": "die",
    "meaning": "Crate",
    "plural": "Die Kisten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1757,
    "noun": "Methode",
    "article": "die",
    "meaning": "Method",
    "plural": "Die Methoden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1758,
    "noun": "Referenz",
    "article": "die",
    "meaning": "Reference",
    "plural": "Die Referenzen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1759,
    "noun": "Ekel",
    "article": "der",
    "meaning": "Disgust",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1760,
    "noun": "Schnaps",
    "article": "der",
    "meaning": "Liquor",
    "plural": "Die Schnäpse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1761,
    "noun": "Lippenstift",
    "article": "der",
    "meaning": "Lipstick",
    "plural": "Die Lippenstifte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1762,
    "noun": "Kern",
    "article": "der",
    "meaning": "Core",
    "plural": "Die Kerne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1763,
    "noun": "Individuum",
    "article": "das",
    "meaning": "Individual",
    "plural": "Die Individuen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1764,
    "noun": "Container",
    "article": "der",
    "meaning": "Container",
    "plural": "Die Container",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1765,
    "noun": "Hure",
    "article": "die",
    "meaning": "Whore",
    "plural": "Die Huren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1766,
    "noun": "Kleinkind",
    "article": "das",
    "meaning": "Infant",
    "plural": "Die Kleinkinder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1767,
    "noun": "Sonnenbrille",
    "article": "die",
    "meaning": "Sunglasses",
    "plural": "Die Sonnenbrillen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1768,
    "noun": "Hose",
    "article": "die",
    "meaning": "Hose",
    "plural": "Die Hosen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1769,
    "noun": "Konzert",
    "article": "das",
    "meaning": "Concert",
    "plural": "Die Konzerte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1770,
    "noun": "Unsinn",
    "article": "der",
    "meaning": "Bullshit",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1771,
    "noun": "Eisenbahn",
    "article": "die",
    "meaning": "Railroad",
    "plural": "Die Eisenbahnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1772,
    "noun": "Parade",
    "article": "die",
    "meaning": "Parade",
    "plural": "Die Paraden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1773,
    "noun": "Abteil",
    "article": "das",
    "meaning": "Compartment",
    "plural": "Die Abteile",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1774,
    "noun": "Bewohner",
    "article": "der",
    "meaning": "Resident",
    "plural": "Die Bewohner",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1775,
    "noun": "Ofen",
    "article": "der",
    "meaning": "Oven",
    "plural": "Die Öfen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1776,
    "noun": "Techniker",
    "article": "der",
    "meaning": "Technician",
    "plural": "Die Techniker",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1777,
    "noun": "Verfahren",
    "article": "das",
    "meaning": "Procedure",
    "plural": "Die Verfahren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1778,
    "noun": "Kämpfer",
    "article": "der",
    "meaning": "Fighter",
    "plural": "Die Kämpfer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1779,
    "noun": "Korn",
    "article": "das",
    "meaning": "Grain",
    "plural": "Die Körner",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1780,
    "noun": "Picknick",
    "article": "das",
    "meaning": "Picnic",
    "plural": "Die Picknicks",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1781,
    "noun": "Stamm",
    "article": "der",
    "meaning": "Tribe",
    "plural": "Die Stämme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1782,
    "noun": "Knospe",
    "article": "die",
    "meaning": "Bud",
    "plural": "Die Knospen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1783,
    "noun": "Wiese",
    "article": "die",
    "meaning": "Meadow",
    "plural": "Die Wiesen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1784,
    "noun": "Öffentlichkeit",
    "article": "die",
    "meaning": "Public",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1785,
    "noun": "Gift",
    "article": "das",
    "meaning": "Poison",
    "plural": "Die Gifte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1786,
    "noun": "Büffel",
    "article": "der",
    "meaning": "Buffalo",
    "plural": "Die Büffel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1787,
    "noun": "Region",
    "article": "die",
    "meaning": "Region",
    "plural": "Die Regionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1788,
    "noun": "Produktion",
    "article": "die",
    "meaning": "Production",
    "plural": "Die Produktionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1789,
    "noun": "Laufen",
    "article": "das",
    "meaning": "Running",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1790,
    "noun": "Schleife",
    "article": "die",
    "meaning": "Loop",
    "plural": "Die Schleifen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1791,
    "noun": "Schlafen",
    "article": "das",
    "meaning": "Sleeping",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1792,
    "noun": "Limonade",
    "article": "die",
    "meaning": "Soda",
    "plural": "Die Limonaden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1793,
    "noun": "Eule",
    "article": "die",
    "meaning": "Owl",
    "plural": "Die Eulen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1794,
    "noun": "Menü",
    "article": "das",
    "meaning": "Menu",
    "plural": "Die Menüs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1795,
    "noun": "Tritt",
    "article": "der",
    "meaning": "Kick",
    "plural": "Die Tritte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1796,
    "noun": "Ruin",
    "article": "der",
    "meaning": "Ruin",
    "plural": "Die Ruinen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1797,
    "noun": "Rampe",
    "article": "die",
    "meaning": "Ramp",
    "plural": "Die Rampen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1798,
    "noun": "Streif",
    "article": "die",
    "meaning": "Streak",
    "plural": "Die Streifen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1799,
    "noun": "Unterarm",
    "article": "der",
    "meaning": "Forearm",
    "plural": "Die Unterarme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1800,
    "noun": "Büro",
    "article": "das",
    "meaning": "Bureau",
    "plural": "Die Büros",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1801,
    "noun": "Gelenk",
    "article": "das",
    "meaning": "Knuckle",
    "plural": "Die Gelenke",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1802,
    "noun": "Gans",
    "article": "die",
    "meaning": "Goose",
    "plural": "Die Gänse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1803,
    "noun": "Fortschritt",
    "article": "der",
    "meaning": "Advance",
    "plural": "Die Fortschritte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1804,
    "noun": "Fee",
    "article": "die",
    "meaning": "Fairy",
    "plural": "Die Feen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1805,
    "noun": "Krankheit",
    "article": "die",
    "meaning": "Illness",
    "plural": "Die Krankheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1806,
    "noun": "Kommando",
    "article": "das",
    "meaning": "Squad",
    "plural": "Die Kommandos",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1807,
    "noun": "Beamte",
    "article": "der",
    "meaning": "Official",
    "plural": "Die Beamten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1808,
    "noun": "Marke",
    "article": "die",
    "meaning": "Brand",
    "plural": "Die Marken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1809,
    "noun": "Organ",
    "article": "das",
    "meaning": "Organ",
    "plural": "Die Organe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1810,
    "noun": "Schmetterling",
    "article": "der",
    "meaning": "Butterfly",
    "plural": "Die Schmetterlinge",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1811,
    "noun": "Imperium",
    "article": "das",
    "meaning": "Empire",
    "plural": "Die Reiche",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1812,
    "noun": "Profil",
    "article": "das",
    "meaning": "Profile",
    "plural": "Die Profile",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1813,
    "noun": "Freiheit",
    "article": "die",
    "meaning": "Liberty",
    "plural": "Die Freiheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1814,
    "noun": "Unglaube",
    "article": "der",
    "meaning": "Disbelief",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1815,
    "noun": "Hain",
    "article": "der",
    "meaning": "Grove",
    "plural": "Die Haine",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1816,
    "noun": "Schild",
    "article": "der",
    "meaning": "Shield",
    "plural": "Die Schilde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1817,
    "noun": "Sattel",
    "article": "der",
    "meaning": "Saddle",
    "plural": "Die Sättel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1818,
    "noun": "Chancen",
    "article": "die",
    "meaning": "Odds",
    "plural": "(plural noun)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1819,
    "noun": "Cluster",
    "article": "der",
    "meaning": "Cluster",
    "plural": "Die Cluster",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1820,
    "noun": "Satellit",
    "article": "der",
    "meaning": "Satellite",
    "plural": "Die Satelliten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1821,
    "noun": "Auslöser",
    "article": "der",
    "meaning": "Trigger",
    "plural": "Die Auslöser",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1822,
    "noun": "Welpe",
    "article": "der",
    "meaning": "Puppy",
    "plural": "Die Welpen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1823,
    "noun": "Warten",
    "article": "das",
    "meaning": "Waiting",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1824,
    "noun": "Glühbirne",
    "article": "die",
    "meaning": "Bulb",
    "plural": "Die Glühbirnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1825,
    "noun": "Kommode",
    "article": "die",
    "meaning": "Dresser",
    "plural": "Die Kommoden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1826,
    "noun": "Patrouille",
    "article": "die",
    "meaning": "Patrol",
    "plural": "Die Patrouillen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1827,
    "noun": "Adler",
    "article": "der",
    "meaning": "Eagle",
    "plural": "Die Adler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1828,
    "noun": "Privatsphäre",
    "article": "die",
    "meaning": "Privacy",
    "plural": "(no plural form)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1829,
    "noun": "Flüssigkeit",
    "article": "die",
    "meaning": "Fluid",
    "plural": "Die Flüssigkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1830,
    "noun": "Herde",
    "article": "die",
    "meaning": "Herd",
    "plural": "(plural noun)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1831,
    "noun": "Kopfschmerzen",
    "article": "die",
    "meaning": "Headache",
    "plural": "(plural noun)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1832,
    "noun": "Unterhaltung",
    "article": "die",
    "meaning": "Amusement",
    "plural": "Die Unterhaltungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1833,
    "noun": "Rollstuhl",
    "article": "der",
    "meaning": "Wheelchair",
    "plural": "Die Rollstühle",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1834,
    "noun": "Politik",
    "article": "die",
    "meaning": "Policy",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1835,
    "noun": "Schönheit",
    "article": "die",
    "meaning": "Belle",
    "plural": "Die Schönheiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1836,
    "noun": "Tabak",
    "article": "der",
    "meaning": "Tobacco",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1837,
    "noun": "Einstellung",
    "article": "die",
    "meaning": "Setting",
    "plural": "Die Einstellungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1838,
    "noun": "Tattoo",
    "article": "das",
    "meaning": "Tattoo",
    "plural": "Die Tattoos",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1839,
    "noun": "Belastung",
    "article": "die",
    "meaning": "Burden",
    "plural": "Die Belastungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1840,
    "noun": "Händler",
    "article": "der",
    "meaning": "Merchant",
    "plural": "Die Händler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1841,
    "noun": "Rutsche",
    "article": "die",
    "meaning": "Slide",
    "plural": "Die Rutschen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1842,
    "noun": "Fleck",
    "article": "der",
    "meaning": "Stain",
    "plural": "Die Flecken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1843,
    "noun": "Essen",
    "article": "das",
    "meaning": "Eating",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1844,
    "noun": "Bindung",
    "article": "die",
    "meaning": "Bond",
    "plural": "Die Bindungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1845,
    "noun": "Schwimmen",
    "article": "das",
    "meaning": "Swimming",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1846,
    "noun": "Stiftung",
    "article": "die",
    "meaning": "Foundation",
    "plural": "Die Stiftungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1847,
    "noun": "Verletzung",
    "article": "die",
    "meaning": "Injury",
    "plural": "Die Verletzungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1848,
    "noun": "Liga",
    "article": "die",
    "meaning": "League",
    "plural": "Die Ligen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1849,
    "noun": "Batterie",
    "article": "die",
    "meaning": "Battery",
    "plural": "Die Batterien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1850,
    "noun": "Regenschirm",
    "article": "der",
    "meaning": "Umbrella",
    "plural": "Die Regenschirme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1851,
    "noun": "Kaiser",
    "article": "der",
    "meaning": "Emperor",
    "plural": "Die Kaiser",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1852,
    "noun": "Pier",
    "article": "der",
    "meaning": "Pier",
    "plural": "Die Piers",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1853,
    "noun": "Wasserhahn",
    "article": "der",
    "meaning": "Tap",
    "plural": "Die Wasserhähne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1854,
    "noun": "Witz",
    "article": "das",
    "meaning": "Wit",
    "plural": "Die Witze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1855,
    "noun": "Cutter",
    "article": "der",
    "meaning": "Cutter",
    "plural": "Die Cutter",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1856,
    "noun": "Dachboden",
    "article": "der",
    "meaning": "Attic",
    "plural": "Die Dachböden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1857,
    "noun": "Tiger",
    "article": "der",
    "meaning": "Tiger",
    "plural": "Die Tiger",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1858,
    "noun": "Freund",
    "article": "der",
    "meaning": "Pal",
    "plural": "Die Freunde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1859,
    "noun": "Vorfahr",
    "article": "der",
    "meaning": "Ancestor",
    "plural": "Die Vorfahren",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1860,
    "noun": "Konzentration",
    "article": "die",
    "meaning": "Concentration",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1861,
    "noun": "Berg",
    "article": "der",
    "meaning": "Mount",
    "plural": "Die Berge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1862,
    "noun": "Kosten",
    "article": "die",
    "meaning": "Expense",
    "plural": "(plural noun)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1863,
    "noun": "Segen",
    "article": "der",
    "meaning": "Blessing",
    "plural": "Die Segen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1864,
    "noun": "Urlaub",
    "article": "der",
    "meaning": "Leave",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1865,
    "noun": "Vorsprung",
    "article": "der",
    "meaning": "Ledge",
    "plural": "Die Vorsprünge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1866,
    "noun": "Fackel",
    "article": "die",
    "meaning": "Torch",
    "plural": "Die Fackeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1867,
    "noun": "Tinte",
    "article": "die",
    "meaning": "Ink",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1868,
    "noun": "Handlung",
    "article": "die",
    "meaning": "Plot",
    "plural": "Die Handlungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1869,
    "noun": "Miete",
    "article": "die",
    "meaning": "Rent",
    "plural": "Die Mieten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1870,
    "noun": "Maultier",
    "article": "die",
    "meaning": "Mule",
    "plural": "Die Maultiere",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1871,
    "noun": "Bogen",
    "article": "der",
    "meaning": "Arch",
    "plural": "Die Bögen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1872,
    "noun": "Umwelt",
    "article": "die",
    "meaning": "Environment",
    "plural": "Die Umwelten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1873,
    "noun": "Stirnrunzeln",
    "article": "die",
    "meaning": "Frown",
    "plural": "(plural noun)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1874,
    "noun": "Inspektor",
    "article": "der",
    "meaning": "Inspector",
    "plural": "Die Inspektoren",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1875,
    "noun": "Mitte",
    "article": "die",
    "meaning": "Midst",
    "plural": "Die Mitte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1876,
    "noun": "Peinlichkeit",
    "article": "die",
    "meaning": "Embarrassment",
    "plural": "Die Peinlichkeiten",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1877,
    "noun": "Beschwerde",
    "article": "die",
    "meaning": "Complaint",
    "plural": "Die Beschwerden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1878,
    "noun": "Portion",
    "article": "die",
    "meaning": "Portion",
    "plural": "Die Portionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1879,
    "noun": "Wegwerfen",
    "article": "die",
    "meaning": "Chuck",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1880,
    "noun": "Lichtung",
    "article": "die",
    "meaning": "Clearing",
    "plural": "Die Lichtungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1881,
    "noun": "Krise",
    "article": "die",
    "meaning": "Crisis",
    "plural": "Die Krisen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1882,
    "noun": "Halskette",
    "article": "die",
    "meaning": "Necklace",
    "plural": "Die Halsketten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1883,
    "noun": "Laterne",
    "article": "die",
    "meaning": "Lantern",
    "plural": "Die Laternen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1884,
    "noun": "Reichtum",
    "article": "der",
    "meaning": "Wealth",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1885,
    "noun": "Mörder",
    "article": "der",
    "meaning": "Murderer",
    "plural": "Die Mörder",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1886,
    "noun": "Zivilisation",
    "article": "die",
    "meaning": "Civilization",
    "plural": "Die Zivilisationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1887,
    "noun": "Konzept",
    "article": "das",
    "meaning": "Concept",
    "plural": "Die Konzepte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1888,
    "noun": "Lamm",
    "article": "das",
    "meaning": "Lamb",
    "plural": "Die Lämmer",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1889,
    "noun": "Schritt",
    "article": "die",
    "meaning": "Stride",
    "plural": "Die Schritte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1890,
    "noun": "Manschette",
    "article": "das",
    "meaning": "Cuff",
    "plural": "Die Manschetten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1891,
    "noun": "Jungfrau",
    "article": "die",
    "meaning": "Virgin",
    "plural": "Die Jungfrauen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1892,
    "noun": "Eichhörnchen",
    "article": "das",
    "meaning": "Squirrel",
    "plural": "Die Eichhörnchen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1893,
    "noun": "Baby",
    "article": "das",
    "meaning": "Babe",
    "plural": "Die Babys",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1894,
    "noun": "Star",
    "article": "der",
    "meaning": "Starling",
    "plural": "Die Stare",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1895,
    "noun": "Depression",
    "article": "die",
    "meaning": "Depression",
    "plural": "Die Depressionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1896,
    "noun": "Lagerung",
    "article": "die",
    "meaning": "Storage",
    "plural": "Die Lagerungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1897,
    "noun": "Altar",
    "article": "der",
    "meaning": "Altar",
    "plural": "Die Altäre",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1898,
    "noun": "Tragödie",
    "article": "die",
    "meaning": "Tragedy",
    "plural": "Die Tragödien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1899,
    "noun": "Ressource",
    "article": "die",
    "meaning": "Resource",
    "plural": "Die Ressourcen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1900,
    "noun": "Reisende",
    "article": "der",
    "meaning": "Traveler",
    "plural": "Die Reisenden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1901,
    "noun": "Vertrauen",
    "article": "das",
    "meaning": "Trust",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1902,
    "noun": "Bogen",
    "article": "der",
    "meaning": "Arc",
    "plural": "Die Bögen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1903,
    "noun": "Königreich",
    "article": "das",
    "meaning": "Kingdom",
    "plural": "Die Königreiche",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1904,
    "noun": "Juwel",
    "article": "das",
    "meaning": "Jewel",
    "plural": "Die Juwelen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1905,
    "noun": "Musiker",
    "article": "der",
    "meaning": "Musician",
    "plural": "Die Musiker",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1906,
    "noun": "Flugzeug",
    "article": "das",
    "meaning": "Airplane",
    "plural": "Die Flugzeuge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1907,
    "noun": "Müll",
    "article": "der",
    "meaning": "Junk",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1908,
    "noun": "Sonnenschein",
    "article": "der",
    "meaning": "Sunshine",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1909,
    "noun": "Junge",
    "article": "der",
    "meaning": "Lad",
    "plural": "Die Jungen",
    "logic": "Semantic pattern: male persons are usually der."
  },
  {
    "rank": 1910,
    "noun": "Elf",
    "article": "der",
    "meaning": "Elf",
    "plural": "Die Elfen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1911,
    "noun": "Protest",
    "article": "der",
    "meaning": "Protest",
    "plural": "Die Proteste",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1912,
    "noun": "Jagd",
    "article": "die",
    "meaning": "Hunt",
    "plural": "Die Jagden",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1913,
    "noun": "Geschäftsführer",
    "article": "der",
    "meaning": "Executive",
    "plural": "Die Geschäftsführer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1914,
    "noun": "Tagebuch",
    "article": "das",
    "meaning": "Diary",
    "plural": "Die Tagebücher",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1915,
    "noun": "Aspekt",
    "article": "der",
    "meaning": "Aspect",
    "plural": "Die Aspekte",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1916,
    "noun": "Zifferblatt",
    "article": "das",
    "meaning": "Dial",
    "plural": "Die Zifferblätter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1917,
    "noun": "Pantoffel",
    "article": "der",
    "meaning": "Slipper",
    "plural": "Die Pantoffel",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1918,
    "noun": "Schauspielerin",
    "article": "die",
    "meaning": "Actress",
    "plural": "Die Schauspielerinnen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1919,
    "noun": "Schießen",
    "article": "das",
    "meaning": "Shooting",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1920,
    "noun": "Ohrring",
    "article": "der",
    "meaning": "Earring",
    "plural": "Die Ohrringe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1921,
    "noun": "Ameise",
    "article": "die",
    "meaning": "Ant",
    "plural": "Die Ameisen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1922,
    "noun": "Brötchen",
    "article": "das",
    "meaning": "Patty",
    "plural": "Die Brötchen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1923,
    "noun": "Sauce",
    "article": "die",
    "meaning": "Sauce",
    "plural": "Die Saucen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1924,
    "noun": "Rakete",
    "article": "die",
    "meaning": "Missile",
    "plural": "Die Raketen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1925,
    "noun": "Intensität",
    "article": "die",
    "meaning": "Intensity",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1926,
    "noun": "Graben",
    "article": "der",
    "meaning": "Ditch",
    "plural": "Die Gräben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1927,
    "noun": "Gänseblümchen",
    "article": "das",
    "meaning": "Daisy",
    "plural": "Die Gänseblümchen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1928,
    "noun": "Kapelle",
    "article": "die",
    "meaning": "Chapel",
    "plural": "Die Kapellen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1929,
    "noun": "Sumpf",
    "article": "das",
    "meaning": "Swamp",
    "plural": "Die Sümpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1930,
    "noun": "Beziehung",
    "article": "die",
    "meaning": "Relation",
    "plural": "Die Beziehungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1931,
    "noun": "Vermutung",
    "article": "die",
    "meaning": "Guess",
    "plural": "Die Vermutungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1932,
    "noun": "Kran",
    "article": "der",
    "meaning": "Crane",
    "plural": "Die Kräne",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1933,
    "noun": "Aufeinandertreffen",
    "article": "das",
    "meaning": "Encounter",
    "plural": "Die Aufeinandertreffen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1934,
    "noun": "Abfolge",
    "article": "die",
    "meaning": "Sequence",
    "plural": "Die Abfolgen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1935,
    "noun": "Fragment",
    "article": "das",
    "meaning": "Fragment",
    "plural": "Die Fragmente",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1936,
    "noun": "Ausarbeitung",
    "article": "die",
    "meaning": "Draft",
    "plural": "Die Ausarbeitungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1937,
    "noun": "Speiselokal",
    "article": "das",
    "meaning": "Diner",
    "plural": "Die Speiselokale",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1938,
    "noun": "Funktion",
    "article": "die",
    "meaning": "Function",
    "plural": "Die Funktionen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1939,
    "noun": "Organisation",
    "article": "die",
    "meaning": "Organization",
    "plural": "Die Organisationen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1940,
    "noun": "Skelett",
    "article": "das",
    "meaning": "Skeleton",
    "plural": "Die Skelette",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1941,
    "noun": "Elend",
    "article": "das",
    "meaning": "Misery",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1942,
    "noun": "Kraut",
    "article": "das",
    "meaning": "Herb",
    "plural": "Die Kräuter",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1943,
    "noun": "Stumpf",
    "article": "der",
    "meaning": "Stump",
    "plural": "Die Stümpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1944,
    "noun": "Einsatz",
    "article": "der",
    "meaning": "Stake",
    "plural": "Die Einsätze",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1945,
    "noun": "Puff",
    "article": "das",
    "meaning": "Puff",
    "plural": "Die Puffs",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1946,
    "noun": "Schaffung",
    "article": "die",
    "meaning": "Creation",
    "plural": "Die Schaffungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1947,
    "noun": "Erwachen",
    "article": "das",
    "meaning": "Wake",
    "plural": "Die Erwachen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1948,
    "noun": "Zauberer",
    "article": "der",
    "meaning": "Wizard",
    "plural": "Die Zauberer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1949,
    "noun": "Matte",
    "article": "das",
    "meaning": "Mat",
    "plural": "Die Matten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1950,
    "noun": "Dichtung",
    "article": "die",
    "meaning": "Seal",
    "plural": "Die Dichtungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1951,
    "noun": "Dämmerung",
    "article": "die",
    "meaning": "Twilight",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1952,
    "noun": "Grunzen",
    "article": "das",
    "meaning": "Grunt",
    "plural": "Die Grunzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1953,
    "noun": "Bestrafung",
    "article": "die",
    "meaning": "Punishment",
    "plural": "Die Bestrafungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1954,
    "noun": "Clan",
    "article": "der",
    "meaning": "Clan",
    "plural": "Die Clans",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1955,
    "noun": "Kupfer",
    "article": "das",
    "meaning": "Copper",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1956,
    "noun": "Schutt",
    "article": "der",
    "meaning": "Debris",
    "plural": "(no plural form)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1957,
    "noun": "Maler",
    "article": "der",
    "meaning": "Painter",
    "plural": "Die Maler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1958,
    "noun": "Lenkung",
    "article": "die",
    "meaning": "Steering",
    "plural": "Die Lenkungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1959,
    "noun": "Mathematik",
    "article": "die",
    "meaning": "Math",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1960,
    "noun": "Anerkennung",
    "article": "die",
    "meaning": "Recognition",
    "plural": "(usually uncountable)",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1961,
    "noun": "Gemüt",
    "article": "der",
    "meaning": "Temper",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1962,
    "noun": "Bedauern",
    "article": "das",
    "meaning": "Regret",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1963,
    "noun": "Ziel",
    "article": "das",
    "meaning": "Destination",
    "plural": "Die Ziele",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1964,
    "noun": "Mühle",
    "article": "die",
    "meaning": "Mill",
    "plural": "Die Mühlen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1965,
    "noun": "Fehler",
    "article": "der",
    "meaning": "Error",
    "plural": "Die Fehler",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1966,
    "noun": "Romanze",
    "article": "die",
    "meaning": "Romance",
    "plural": "Die Romanzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1967,
    "noun": "Thema",
    "article": "das",
    "meaning": "Topic",
    "plural": "Die Themen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1968,
    "noun": "Terrasse",
    "article": "die",
    "meaning": "Patio",
    "plural": "Die Terrassen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1969,
    "noun": "Schaufel",
    "article": "die",
    "meaning": "Shovel",
    "plural": "Die Schaufeln",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1970,
    "noun": "Schlafanzug",
    "article": "der",
    "meaning": "Pajamas",
    "plural": "Die Schlafanzüge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1971,
    "noun": "E-Mail",
    "article": "die",
    "meaning": "EMail",
    "plural": "Die E-Mails",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1972,
    "noun": "Taube",
    "article": "die",
    "meaning": "Pigeon",
    "plural": "Die Tauben",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1973,
    "noun": "Dinosaurier",
    "article": "der",
    "meaning": "Dinosaur",
    "plural": "Die Dinosaurier",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1974,
    "noun": "Industrie",
    "article": "die",
    "meaning": "Industry",
    "plural": "Die Industrien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1975,
    "noun": "Operator",
    "article": "der",
    "meaning": "Operator",
    "plural": "Die Operatoren",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1976,
    "noun": "Aufzug",
    "article": "der",
    "meaning": "Lift",
    "plural": "Die Aufzüge",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1977,
    "noun": "Berater",
    "article": "der",
    "meaning": "Counselor",
    "plural": "Die Berater",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1978,
    "noun": "Treffen",
    "article": "das",
    "meaning": "Gathering",
    "plural": "Die Treffen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1979,
    "noun": "Prinzip",
    "article": "das",
    "meaning": "Principle",
    "plural": "Die Prinzipien",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1980,
    "noun": "Drama",
    "article": "das",
    "meaning": "Drama",
    "plural": "Die Dramen",
    "logic": "Neuter pattern: nouns with this ending are often das."
  },
  {
    "rank": 1981,
    "noun": "Küken",
    "article": "das",
    "meaning": "Chick",
    "plural": "Die Küken",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1982,
    "noun": "Diagramm",
    "article": "das",
    "meaning": "Chart",
    "plural": "Die Diagramme",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1983,
    "noun": "Kampagne",
    "article": "die",
    "meaning": "Campaign",
    "plural": "Die Kampagnen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1984,
    "noun": "Lorbeer",
    "article": "der",
    "meaning": "Laurel",
    "plural": "Die Lorbeeren",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1985,
    "noun": "Steak",
    "article": "das",
    "meaning": "Steak",
    "plural": "Die Steaks",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1986,
    "noun": "Verbrecher",
    "article": "der",
    "meaning": "Criminal",
    "plural": "Die Verbrecher",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1987,
    "noun": "Globus",
    "article": "der",
    "meaning": "Globe",
    "plural": "Die Globen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1988,
    "noun": "Bluterguss",
    "article": "der",
    "meaning": "Bruise",
    "plural": "Die Blutergüsse",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1989,
    "noun": "Knopf",
    "article": "der",
    "meaning": "Knob",
    "plural": "Die Knöpfe",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1990,
    "noun": "Mord",
    "article": "der",
    "meaning": "Killing",
    "plural": "Die Morde",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1991,
    "noun": "Liebste",
    "article": "die",
    "meaning": "Sweetheart",
    "plural": "Die Liebsten",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1992,
    "noun": "Oper",
    "article": "die",
    "meaning": "Opera",
    "plural": "Die Opern",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1993,
    "noun": "Frost",
    "article": "der",
    "meaning": "Frost",
    "plural": "(no plural form)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1994,
    "noun": "Brustwarze",
    "article": "die",
    "meaning": "Nipple",
    "plural": "Die Brustwarzen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1995,
    "noun": "Pfarrer",
    "article": "der",
    "meaning": "Reverend",
    "plural": "Die Pfarrer",
    "logic": "Masculine pattern: nouns with this ending are often der."
  },
  {
    "rank": 1996,
    "noun": "Dunst",
    "article": "der",
    "meaning": "Haze",
    "plural": "(usually uncountable)",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1997,
    "noun": "Überschwemmung",
    "article": "die",
    "meaning": "Flood",
    "plural": "Die Überschwemmungen",
    "logic": "Feminine pattern: nouns with this ending are often die."
  },
  {
    "rank": 1998,
    "noun": "Lied",
    "article": "das",
    "meaning": "Carol",
    "plural": "Die Lieder",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 1999,
    "noun": "Schwäche",
    "article": "die",
    "meaning": "Weakness",
    "plural": "Die Schwächen",
    "logic": "No simple reliable rule here. Best to memorize this article."
  },
  {
    "rank": 2000,
    "noun": "Kochen",
    "article": "das",
    "meaning": "Cooking",
    "plural": "(usually uncountable)",
    "logic": "Neuter pattern: nouns with this ending are often das."
  }
];
