const STORAGE_KEY = "qcinema2026Schedule";

const SCREENINGS_PER_PAGE = 4;
let currentScreeningsPage = 1;
const SHORTS_SET_RUNTIME = 95;


const MOVIE_DETAILS = {
  1: {
    poster: "poster/9-temples.jpg",
    letterboxd: "https://letterboxd.com/film/9-temples-to-heaven/",
  },
  2: {
    poster: "poster/girl.jpg",
    letterboxd: "https://letterboxd.com/film/a-girl-unknown/",
  },
  3: {
    poster: "poster/ella.jpg",
    letterboxd:
      "https://letterboxd.com/film/ella-arcangel-ballad-of-tooth-and-claw/",
  },
  4: {
    poster: "poster/hearing.jpg",
    letterboxd: "https://letterboxd.com/film/hearing-2026/",
  },
  5: {
    poster: "poster/fujiko.jpg",
    letterboxd: "https://letterboxd.com/film/fujiko-2026/",
  },
  6: {
    poster: "poster/fruit.jpg",
    letterboxd: "https://letterboxd.com/film/fruit-gathering/",
  },
  7: {
    poster: "poster/giants.jpg",
    letterboxd: "https://letterboxd.com/film/the-burning-giants/",
  },
  8: {
    poster: "poster/world.jpg",
    letterboxd: "https://letterboxd.com/film/the-world-before/",
  },
  9: {
    poster: "poster/angh.jpg",
    letterboxd: "https://letterboxd.com/film/angh-2026/",
  },
  10: {
    poster: "poster/baby.jpg",
    letterboxd: "https://letterboxd.com/film/baby-jackfruit-baby-guava/",
  },
  11: {
    poster: "poster/fictions.jpg",
    letterboxd: "https://letterboxd.com/film/beach-fictions/",
  },
  12: {
    poster: "poster/furies.jpg",
    letterboxd: "https://letterboxd.com/film/furies-2026/",
  },
  13: {
    poster: "poster/gradiva.jpg",
    letterboxd: "https://letterboxd.com/film/la-gradiva/",
  },
  14: {
    poster: "poster/sad.jpg",
    letterboxd: "https://letterboxd.com/film/sad-girlz/",
  },
  15: {
    poster: "poster/color.jpg",
    letterboxd: "https://letterboxd.com/film/the-color-of-the-sun-2026/",
  },
  16: {
    poster: "poster/aliens.jpg",
    letterboxd: "https://letterboxd.com/film/we-are-aliens-2026/",
  },
  17: {
    poster: "poster/big.jpg",
    letterboxd: "https://letterboxd.com/film/big-little-things-2026/",
  },
  18: {
    poster: "poster/flesh.jpg",
    letterboxd: "https://letterboxd.com/film/flesh-fuel/",
  },
  19: {
    poster: "poster/rarely.jpg",
    letterboxd: "https://letterboxd.com/film/i-rarely-wake-up-dreaming/",
  },
  20: {
    poster: "poster/jim.jpg",
    letterboxd: "https://letterboxd.com/film/jim-queen/",
  },
  21: {
    poster: "poster/trouble.jpg",
    letterboxd: "https://letterboxd.com/film/little-trouble-girls/",
  },
  22: {
    poster: "poster/lovers.jpg",
    letterboxd: "https://letterboxd.com/film/lovers-in-the-blue-night/",
  },
  23: {
    poster: "poster/teenage.jpg",
    letterboxd:
      "https://letterboxd.com/film/teenage-sex-and-death-at-camp-miasma/",
  },
  24: {
    poster: "poster/riverbank.jpg",
    letterboxd: "https://letterboxd.com/film/the-riverbank-2026/",
  },
  25: {
    poster: "poster/arrested.jpg",
    letterboxd: "https://letterboxd.com/film/arrested-memory/",
  },
  26: {
    poster: "poster/chrono.jpg",
    letterboxd: "https://letterboxd.com/film/chronovisor/",
  },
  27: {
    poster: "poster/paris.jpg",
    letterboxd: "https://letterboxd.com/film/i-love-paris/",
  },
  28: {
    poster: "poster/moonglow.jpg",
    letterboxd: "https://letterboxd.com/film/moonglow-2026/",
  },
  29: {
    poster: "poster/unknown.jpg",
    letterboxd: "https://letterboxd.com/film/the-unknown-2026/",
  },
  30: {
    poster: "poster/11.jpg",
    letterboxd: "https://letterboxd.com/film/11-2026/",
  },
  31: {
    poster: "poster/film.jpg",
    letterboxd: "https://letterboxd.com/film/you-are-the-film/",
  },
  32: {
    poster: "poster/club.jpg",
    letterboxd: "https://letterboxd.com/film/club-kid/",
  },
  33: {
    poster: "poster/fuck.jpg",
    letterboxd: "https://letterboxd.com/film/fucktoys/",
  },
  34: {
    poster: "poster/inch.jpg",
    letterboxd:
      "https://letterboxd.com/film/i-grew-an-inch-when-my-father-died/",
  },
  35: {
    poster: "poster/ibuku.jpg",
    letterboxd: "https://letterboxd.com/film/ibuku/",
  },
  36: {
    poster: "poster/look.jpg",
    letterboxd: "https://letterboxd.com/film/look-back-2026/",
  },
  37: {
    poster: "poster/remotes.jpg",
    letterboxd: "https://letterboxd.com/film/the-remotes/",
  },
  38: {
    poster: "poster/tiger.jpg",
    letterboxd: "https://letterboxd.com/film/the-tigers-2025/",
  },
  39: {
    poster: "poster/amores.jpg",
    letterboxd: "https://letterboxd.com/film/amores-perros/",
  },
  40: {
    poster: "poster/west.jpg",
    letterboxd: "https://letterboxd.com/film/batang-west-side/",
  },
  41: {
    poster: "poster/hesis.jpg",
    letterboxd: "https://letterboxd.com/film/jesus-is-dead/",
  },
  42: {
    poster: "poster/possession.jpg",
    letterboxd: "https://letterboxd.com/film/possession/",
  },
  43: {
    poster: "poster/jaguar.jpg",
    letterboxd: "https://letterboxd.com/film/jaguar/",
  },
  44: {
    poster: "poster/perfect.jpg",
    letterboxd: "https://letterboxd.com/film/perfect-blue/",
  },
  45: {
    poster: "poster/sister.jpg",
    letterboxd: "https://letterboxd.com/film/sister-stella-l/",
  },
  46: {
    poster: "poster/bomba.jpg",
    letterboxd: "https://letterboxd.com/film/bomba-bernal/",
  },
  47: {
    poster: "poster/deserve.jpg",
    letterboxd:
      "https://letterboxd.com/film/i-deserve-a-lover-whose-every-rise-sets-fiery/",
  },
  48: {
    poster: "poster/moon.jpg",
    letterboxd: "https://letterboxd.com/film/to-the-moon-and-back-2026/",
  },
  49: {
    poster: "poster/illusion.jpg",
    letterboxd:
      "https://letterboxd.com/film/the-illusion-of-an-everlasting-summer/",
  },
  50: {
    poster: "poster/union.jpg",
    letterboxd: "https://letterboxd.com/film/union-town/",
  },
  51: {
    poster: "poster/thuy.jpg",
    letterboxd: "https://letterboxd.com/film/and-if-thuy-didnt-exist/",
  },
  52: {
    poster: "",
    letterboxd: "https://letterboxd.com/film/body-works/",
  },
  53: {
    poster: "poster/desire.jpg",
    letterboxd: "https://letterboxd.com/film/is-this-desire/",
  },
  54: {
    poster: "poster/said.jpg",
    letterboxd: "https://letterboxd.com/film/she-said-2026/",
  },
  55: {
    poster: "poster/through.jpg",
    letterboxd: "https://letterboxd.com/film/through-the-cracks-2026/",
  },
  56: {
    poster: "poster/bleat.jpg",
    letterboxd: "https://letterboxd.com/film/bleat-2025/",
  },
  57: {
    poster: "poster/fruit-2.jpg",
    letterboxd: "https://letterboxd.com/film/fruit-2025/",
  },
  58: {
    poster: "poster/shirley.jpg",
    letterboxd: "https://letterboxd.com/film/run-shirley-run/",
  },
  59: {
    poster: "poster/bovine.jpg",
    letterboxd: "https://letterboxd.com/film/the-bovine-comedy/",
  },
  60: {
    poster: "poster/snail.jpg",
    letterboxd: "https://letterboxd.com/film/the-dream-is-a-snail/",
  },
  61: {
    poster: "poster/lola.jpg",
    letterboxd: "https://letterboxd.com/film/gorgeous-grandmother/",
  },
  62: {
    poster: "poster/kanimo.jpg",
    letterboxd: "https://letterboxd.com/film/maanaa-kanimo/",
  },
  63: {
    poster: "poster/nandito.jpg",
    letterboxd: "https://letterboxd.com/film/sanay-nandito-ka/",
  },
  64: {
    poster: "poster/4ply.jpg",
    letterboxd: "https://letterboxd.com/film/the-4ply-clandestine-system/",
  },
  65: {
    poster: "poster/ghost.jpg",
    letterboxd: "https://letterboxd.com/film/a-ghost-can-only-howl/",
  },
  66: {
    poster: "poster/golden.jpg",
    letterboxd: "https://letterboxd.com/film/golden-island-2026/",
  },
  67: {
    poster: "poster/incident.jpg",
    letterboxd: "https://letterboxd.com/film/incident-on-the-mountain/",
  },
  68: {
    poster: "poster/obscura.jpg",
    letterboxd: "https://letterboxd.com/film/obscura-2026/",
  },
  69: {
    poster: "poster/monsters.jpg",
    letterboxd: "https://letterboxd.com/film/they-made-monsters/",
  },
  70: {
    poster: "poster/winter.jpg",
    letterboxd: "https://letterboxd.com/film/a-long-winter-2026/",
  },
  71: {
    poster: "poster/fatherland.jpg",
    letterboxd: "https://letterboxd.com/film/fatherland-2026/",
  },
  72: {
    poster: "poster/fjord.jpg",
    letterboxd: "https://letterboxd.com/film/fjord-2026/",
  },
  73: {
    poster: "poster/makikiraan.jpg",
    letterboxd: "https://letterboxd.com/film/let-us-through-dear-ancestors/",
  },
  74: {
    poster: "poster/nowhere.jpg",
    letterboxd: "https://letterboxd.com/film/nowhere-to-lay-my-eyes/",
  },
  75: {
    poster: "poster/beloved.jpg",
    letterboxd: "https://letterboxd.com/film/nowhere-to-lay-my-eyes/",
  },
  76: {
    poster: "poster/diary.jpg",
    letterboxd: "https://letterboxd.com/film/the-diary-of-a-chambermaid-2026/",
  },
  77: {
    poster: "poster/vintage.jpg",
    letterboxd: "https://letterboxd.com/film/vintage-violence/",
  }
};

const PROGRAM_COLORS = {
  "Asian Next Wave": "#4779B8",
  "New Horizons": "#D79B37",
  RainbowQC: "#C65A83",
  "Before Midnight": "#7956A5",
  QCSelects: "#408D78",
  Rediscovery: "#A66B45",
  "Dokyu Days": "#65717F",
  "QCShorts International": "#D45D45",
  "Screen International": "#659A45",
};

const SHORTS_PROGRAM_COLORS = {
  "Program 1: Rotten Work": "#D45D45",
  "Program 2: A Little Blasphemy Never Hurt Anyone": "#4779B8",
  "Program 3: All Mothers Were Once Girls": "#7956A5",
  "Program 4: The Mountains Always Asks For More": "#408D78",
};

const filmRows = [
  [
    1,
    "Asian Next Wave",
    "9 Temples to Heaven",
    "Sompot Chidgasornpongse",
    "",
    140,
    [
      ["SM Fairview", "2026-11-18", "13:30"],
      ["SM Fairview", "2026-11-18", "20:00"],
    ],
  ],
  [
    2,
    "Asian Next Wave",
    "A Girl Unknown",
    "Zou Jing",
    "",
    125,
    [
      ["Gateway", "2026-11-17", "15:30"],
      ["Fisher Box Office", "2026-11-19", "10:00"],
      ["Gateway", "2026-11-22", "20:00"],
    ],
  ],
  [
    3,
    "Asian Next Wave",
    "Ella Archangel: Awit ng Pangil at Kuko",
    "Mervin Malonzo",
    "",
    90,
    [
      ["Trinoma", "2026-11-19", "20:00"],
      ["Gateway", "2026-11-22", "18:00"],
    ],
  ],
  [
    4,
    "Asian Next Wave",
    "Hearing",
    "Lê Bảo",
    "",
    128,
    [
      ["Trinoma", "2026-11-15", "15:30"],
      ["Trinoma", "2026-11-20", "19:30"],
    ],
  ],
  [
    5,
    "Asian Next Wave",
    "Fujiko",
    "Taichi Kimura",
    "",
    95,
    [
      ["Gateway", "2026-11-13", "21:00"],
      ["Robinsons Galleria", "2026-11-15", "16:00"],
      ["Fisher Box Office", "2026-11-17", "21:00"],
      ["Gateway", "2026-11-19", "15:30"],
    ],
  ],
  [
    6,
    "Asian Next Wave",
    "Fruit Gathering",
    "Aung Phyoe",
    "",
    97,
    [
      ["Gateway", "2026-11-16", "20:00"],
      ["Trinoma", "2026-11-19", "21:00"],
      ["Fisher Box Office", "2026-11-22", "19:30"],
    ],
  ],
  [
    7,
    "Asian Next Wave",
    "The Burning Giants",
    "Phuttiphong Aroonpheng",
    "",
    114,
    [
      ["Gateway", "2026-11-13", "18:00"],
      ["Robinsons Galleria", "2026-11-18", "17:30"],
      ["Trinoma", "2026-11-19", "14:00"],
    ],
  ],
  [
    8,
    "Asian Next Wave",
    "The World Before",
    "Yoon Da-bi",
    "",
    115,
    [
      ["Robinsons Galleria", "2026-11-13", "16:00"],
      ["Robinsons Galleria", "2026-11-15", "17:30"],
      ["Trinoma", "2026-11-17", "13:30"],
      ["SM Fairview", "2026-11-17", "17:30"],
    ],
  ],

  [
    9,
    "New Horizons",
    "Angh",
    "Theja Rio",
    "",
    104,
    [
      ["Gateway", "2026-11-17", "11:30"],
      ["Gateway", "2026-11-21", "17:30"],
      ["Gateway", "2026-11-21", "20:00"],
      ["Fisher Box Office", "2026-11-22", "20:00"],
    ],
  ],
  [
    10,
    "New Horizons",
    "Baby Jackfruit Baby Guava",
    "Nông Nhật Quang",
    "",
    105,
    [
      ["Trinoma", "2026-11-17", "17:30"],
      ["Fisher Box Office", "2026-11-18", "11:30"],
      ["Trinoma", "2026-11-22", "10:00"],
    ],
  ],
  [
    11,
    "New Horizons",
    "Beach Fictions",
    "Lim Ha-yeon",
    "",
    145,
    [
      ["Robinsons Galleria", "2026-11-13", "14:00"],
      ["Fisher Box Office", "2026-11-15", "16:00"],
      ["Robinsons Galleria", "2026-11-17", "19:30"],
      ["Robinsons Galleria", "2026-11-19", "10:00"],
    ],
  ],
  [
    12,
    "New Horizons",
    "Furies",
    "Rami Kodeih",
    "",
    133,
    [
      ["Fisher Box Office", "2026-11-14", "17:30"],
      ["Fisher Box Office", "2026-11-16", "13:30"],
      ["Trinoma", "2026-11-16", "20:00"],
    ],
  ],
  [
    13,
    "New Horizons",
    "La Gradiva",
    "Marine Atlan",
    "",
    145,
    [
      ["Fisher Box Office", "2026-11-15", "17:30"],
      ["Fisher Box Office", "2026-11-18", "14:00"],
    ],
  ],
  [
    14,
    "New Horizons",
    "Sad Girlz",
    "Fernanda Tovar",
    "",
    90,
    [
      ["SM Fairview", "2026-11-13", "11:30"],
      ["Robinsons Galleria", "2026-11-13", "18:00"],
      ["Robinsons Galleria", "2026-11-16", "11:30"],
      ["Fisher Box Office", "2026-11-22", "14:00"],
    ],
  ],
  [
    15,
    "New Horizons",
    "The Color of the Sun",
    "Xavier Tera",
    "",
    111,
    [
      ["Gateway", "2026-11-14", "15:30"],
      ["SM Fairview", "2026-11-15", "13:30"],
    ],
  ],
  [
    16,
    "New Horizons",
    "We Are Aliens",
    "Kohei Kadowaki",
    "",
    117,
    [
      ["Fisher Box Office", "2026-11-13", "18:00"],
      ["Robinsons Galleria", "2026-11-17", "18:00"],
      ["Trinoma", "2026-11-17", "19:30"],
    ],
  ],

  [
    17,
    "RainbowQC",
    "Big Little Things",
    "Michelle Zhou",
    "",
    109,
    [
      ["Fisher Box Office", "2026-11-19", "18:00"],
      ["SM Fairview", "2026-11-19", "20:00"],
      ["Robinsons Galleria", "2026-11-21", "16:00"],
    ],
  ],
  [
    18,
    "RainbowQC",
    "Flesh and Fuel",
    "Pierre Le Gall",
    "",
    91,
    [
      ["Gateway", "2026-11-14", "14:00"],
      ["Gateway", "2026-11-16", "10:00"],
      ["Fisher Box Office", "2026-11-18", "14:00"],
      ["Robinsons Galleria", "2026-11-19", "15:30"],
    ],
  ],
  [
    19,
    "RainbowQC",
    "I Rarely Wake Up Dreaming",
    "Isabelle Stever",
    "",
    100,
    [
      ["Trinoma", "2026-11-16", "12:00"],
      ["SM Fairview", "2026-11-20", "21:00"],
    ],
  ],
  [
    20,
    "RainbowQC",
    "Jim Queen",
    "Marco Nguyen & Nicolas Athané",
    "",
    85,
    [
      ["Robinsons Galleria", "2026-11-20", "13:30"],
      ["SM Fairview", "2026-11-21", "19:30"],
      ["SM Fairview", "2026-11-22", "13:30"],
    ],
  ],
  [
    21,
    "RainbowQC",
    "Little Trouble Girls",
    "Urška Djukić",
    "",
    90,
    [
      ["Robinsons Galleria", "2026-11-13", "14:00"],
      ["Trinoma", "2026-11-15", "10:00"],
      ["Gateway", "2026-11-16", "13:30"],
    ],
  ],
  [
    22,
    "RainbowQC",
    "Lovers in the Blue Night",
    "Anuparna Roy",
    "",
    107,
    [
      ["Trinoma", "2026-11-13", "14:00"],
      ["Gateway", "2026-11-17", "10:00"],
      ["Trinoma", "2026-11-18", "10:00"],
      ["Trinoma", "2026-11-21", "10:00"],
    ],
  ],
  [
    23,
    "RainbowQC",
    "Teenage Sex and Death at Camp Miasma",
    "Jane Schoenbrun",
    "",
    112,
    [
      ["Fisher Box Office", "2026-11-15", "18:00"],
      ["Robinsons Galleria", "2026-11-22", "19:30"],
    ],
  ],
  [
    24,
    "RainbowQC",
    "The Riverback",
    "Matheus Farias & Enock Carvalho",
    "",
    117,
    [
      ["Gateway", "2026-11-15", "19:30"],
      ["SM Fairview", "2026-11-18", "14:00"],
      ["Gateway", "2026-11-19", "10:00"],
      ["Robinsons Galleria", "2026-11-20", "19:30"],
    ],
  ],

  [
    25,
    "Before Midnight",
    "Arrested Memory",
    "SABU",
    "",
    100,
    [
      ["SM Fairview", "2026-11-14", "13:30"],
      ["Gateway", "2026-11-16", "19:30"],
      ["Trinoma", "2026-11-22", "15:30"],
    ],
  ],
  [
    26,
    "Before Midnight",
    "Chronovisor",
    "Kevin Walker & Jack Auen",
    "",
    99,
    [
      ["Robinsons Galleria", "2026-11-15", "19:30"],
      ["SM Fairview", "2026-11-19", "13:30"],
      ["Fisher Box Office", "2026-11-20", "17:30"],
    ],
  ],
  [
    27,
    "Before Midnight",
    "I Love Paris",
    "Nicky Murphy",
    "",
    120,
    [
      ["SM Fairview", "2026-11-13", "16:00"],
      ["Trinoma", "2026-11-13", "17:30"],
      ["Gateway", "2026-11-20", "12:00"],
      ["Gateway", "2026-11-21", "13:30"],
    ],
  ],
  [
    28,
    "Before Midnight",
    "Moonglow",
    "Isabel Sandoval",
    "",
    108,
    [
      ["Gateway", "2026-11-14", "21:00"],
      ["Gateway", "2026-11-21", "17:30"],
    ],
  ],
  [
    29,
    "Before Midnight",
    "The Unknown",
    "Arthur Harari",
    "",
    140,
    [
      ["Robinsons Galleria", "2026-11-17", "15:30"],
      ["Trinoma", "2026-11-20", "10:00"],
    ],
  ],

  [
    30,
    "QCSelects",
    "11",
    "Bebe Go",
    "",
    61,
    [
      ["Fisher Box Office", "2026-11-13", "16:00"],
      ["Trinoma", "2026-11-17", "20:00"],
      ["Trinoma", "2026-11-22", "17:30"],
    ],
  ],
  [
    31,
    "QCSelects",
    "You Are The Film",
    "Makoto Ueda",
    "",
    68,
    [
      ["Fisher Box Office", "2026-11-14", "17:30"],
      ["Gateway", "2026-11-17", "11:30"],
      ["Robinsons Galleria", "2026-11-20", "17:30"],
      ["Trinoma", "2026-11-22", "17:30"],
    ],
  ],
  [
    32,
    "QCSelects",
    "Club Kid",
    "Jordan Firstman",
    "",
    126,
    [
      ["Fisher Box Office", "2026-11-14", "19:30"],
      ["Fisher Box Office", "2026-11-18", "13:30"],
      ["Gateway", "2026-11-19", "13:30"],
    ],
  ],
  [
    33,
    "QCSelects",
    "Fucktoys",
    "Annapurna Sriram",
    "",
    106,
    [
      ["Trinoma", "2026-11-14", "13:30"],
      ["Gateway", "2026-11-18", "14:00"],
    ],
  ],
  [
    34,
    "QCSelects",
    "i grew an inch when my father died",
    "P.R. Patindol",
    "",
    74,
    [
      ["Fisher Box Office", "2026-11-15", "18:00"],
      ["Gateway", "2026-11-16", "11:30"],
      ["Gateway", "2026-11-17", "19:30"],
      ["Fisher Box Office", "2026-11-22", "17:30"],
    ],
  ],
  [
    35,
    "QCSelects",
    "Ibuku",
    "Eddie Cahyono",
    "",
    95,
    [
      ["Fisher Box Office", "2026-11-14", "15:30"],
      ["Gateway", "2026-11-16", "11:30"],
      ["Trinoma", "2026-11-16", "19:30"],
    ],
  ],
  [
    36,
    "QCSelects",
    "Look Back",
    "Hirokazu Kore-eda",
    "",
    100,
    [
      ["SM Fairview", "2026-11-16", "17:30"],
      ["SM Fairview", "2026-11-17", "15:30"],
    ],
  ],
  [
    37,
    "QCSelects",
    "The Remotes",
    "John Torres",
    "",
    153,
    [
      ["Gateway", "2026-11-14", "15:30"],
      ["SM Fairview", "2026-11-16", "10:00"],
    ],
  ],
  [
    38,
    "QCSelects",
    "The Tigers",
    "Alberto Rodríguez",
    "",
    109,
    [
      ["Trinoma", "2026-11-13", "15:30"],
      ["Fisher Box Office", "2026-11-13", "20:00"],
      ["SM Fairview", "2026-11-19", "12:00"],
    ],
  ],

  [
    39,
    "Rediscovery",
    "Amores Perros",
    "Alejandro González Iñárritu",
    "",
    154,
    [
      ["SM Fairview", "2026-11-15", "19:30"],
      ["Fisher Box Office", "2026-11-16", "14:00"],
      ["Gateway", "2026-11-16", "18:00"],
      ["Fisher Box Office", "2026-11-22", "10:00"],
    ],
  ],
  [
    40,
    "Rediscovery",
    "Batang West Side",
    "Lav Diaz",
    "",
    301,
    [
      ["Trinoma", "2026-11-13", "21:00"],
      ["Gateway", "2026-11-18", "21:00"],
      ["Trinoma", "2026-11-21", "16:00"],
      ["Gateway", "2026-11-22", "13:30"],
    ],
  ],
  [
    41,
    "Rediscovery",
    "Patay Na Si Hesus",
    "Victor Villanueva",
    "",
    90,
    [
      ["Trinoma", "2026-11-13", "14:00"],
      ["Trinoma", "2026-11-17", "18:00"],
    ],
  ],
  [
    42,
    "Rediscovery",
    "Possession",
    "Andrzej Żuławski",
    "",
    124,
    [
      ["Trinoma", "2026-11-18", "11:30"],
      ["SM Fairview", "2026-11-20", "14:00"],
      ["Trinoma", "2026-11-21", "20:00"],
      ["Trinoma", "2026-11-22", "14:00"],
    ],
  ],
  [
    43,
    "Rediscovery",
    "Jaguar",
    "Lino Brocka",
    "",
    100,
    [
      ["Robinsons Galleria", "2026-11-13", "14:00"],
      ["Fisher Box Office", "2026-11-13", "20:00"],
      ["Robinsons Galleria", "2026-11-17", "20:00"],
      ["Fisher Box Office", "2026-11-18", "10:00"],
    ],
  ],
  [
    44,
    "Rediscovery",
    "Perfect Blue",
    "Satoshi Kon",
    "",
    81,
    [
      ["Fisher Box Office", "2026-11-14", "11:30"],
      ["Gateway", "2026-11-16", "21:00"],
      ["Robinsons Galleria", "2026-11-19", "21:00"],
      ["Fisher Box Office", "2026-11-20", "16:00"],
    ],
  ],
  [
    45,
    "Rediscovery",
    "Sister Stella L.",
    "Mike de Leon",
    "",
    103,
    [
      ["Gateway", "2026-11-18", "19:30"],
      ["Fisher Box Office", "2026-11-20", "20:00"],
      ["Gateway", "2026-11-21", "10:00"],
    ],
  ],

  [
    46,
    "Dokyu Days",
    "Bomba Bernal",
    "Khavn",
    "",
    69,
    [
      ["SM Fairview", "2026-11-13", "18:00"],
      ["SM Fairview", "2026-11-16", "13:30"],
      ["Trinoma", "2026-11-16", "15:30"],
      ["Trinoma", "2026-11-19", "13:30"],
    ],
  ],
  [
    47,
    "Dokyu Days",
    "I Deserve A Lover Whose Every Rise Sets Fiery Dooms Raging Across the Sky",
    "Mani Haghighi",
    "",
    76,
    [
      ["Gateway", "2026-11-15", "18:00"],
      ["SM Fairview", "2026-11-18", "16:00"],
      ["SM Fairview", "2026-11-21", "13:30"],
    ],
  ],
  [
    48,
    "Dokyu Days",
    "To the Moon and Back",
    "Elisa Gómez Álvarez",
    "",
    85,
    [
      ["Fisher Box Office", "2026-11-19", "11:30"],
      ["SM Fairview", "2026-11-21", "20:00"],
      ["Robinsons Galleria", "2026-11-22", "20:00"],
    ],
  ],
  [
    49,
    "Dokyu Days",
    "The Illusion of an Everlasting Summer",
    "Alessandra Sanguinetti",
    "",
    94,
    [
      ["Trinoma", "2026-11-15", "10:00"],
      ["SM Fairview", "2026-11-20", "21:00"],
      ["SM Fairview", "2026-11-22", "18:00"],
      ["Fisher Box Office", "2026-11-22", "21:00"],
    ],
  ],
  [
    50,
    "Dokyu Days",
    "Union Town",
    "Barbara Kopple",
    "",
    106,
    [
      ["Robinsons Galleria", "2026-11-15", "10:00"],
      ["Trinoma", "2026-11-19", "12:00"],
    ],
  ],

  [
    51,
    "QCShorts International",
    "And if Thuy Didn't Exist",
    "Carlo Francisco Manatad",
    "Program 1: Rotten Work",
    16,
    [
      ["Robinsons Galleria", "2026-11-16", "15:30"],
      ["SM Fairview", "2026-11-17", "13:30"],
      ["Gateway", "2026-11-17", "16:00"],
    ],
  ],
  [
    52,
    "QCShorts International",
    "Body Works",
    "Maki Makilan",
    "Program 1: Rotten Work",
    90,
    [
      ["Robinsons Galleria", "2026-11-16", "15:30"],
      ["SM Fairview", "2026-11-17", "13:30"],
      ["Gateway", "2026-11-17", "16:00"],
    ],
  ],
  [
    53,
    "QCShorts International",
    "Is This Desire?",
    "Apa Agbayani",
    "Program 1: Rotten Work",
    16,
    [
      ["Robinsons Galleria", "2026-11-16", "15:30"],
      ["SM Fairview", "2026-11-17", "13:30"],
      ["Gateway", "2026-11-17", "16:00"],
    ],
  ],
  [
    54,
    "QCShorts International",
    "She Said",
    "Ivan Tan",
    "Program 1: Rotten Work",
    21,
    [
      ["Robinsons Galleria", "2026-11-16", "15:30"],
      ["SM Fairview", "2026-11-17", "13:30"],
      ["Gateway", "2026-11-17", "16:00"],
    ],
  ],
  [
    55,
    "QCShorts International",
    "Through the Cracks",
    "Lê Hoàng",
    "Program 1: Rotten Work",
    14,
    [
      ["Robinsons Galleria", "2026-11-16", "15:30"],
      ["SM Fairview", "2026-11-17", "13:30"],
      ["Gateway", "2026-11-17", "16:00"],
    ],
  ],

  [
    56,
    "QCShorts International",
    "Bleat!",
    "Ananth Subramaniam",
    "Program 2: A Little Blasphemy Never Hurt Anyone",
    15,
    [
      ["Robinsons Galleria", "2026-11-17", "11:30"],
      ["Robinsons Galleria", "2026-11-19", "10:00"],
      ["Robinsons Galleria", "2026-11-22", "11:30"],
    ],
  ],
  [
    57,
    "QCShorts International",
    "Fruit",
    "Jen Nee Lim",
    "Program 2: A Little Blasphemy Never Hurt Anyone",
    90,
    [
      ["Robinsons Galleria", "2026-11-17", "11:30"],
      ["Robinsons Galleria", "2026-11-19", "10:00"],
      ["Robinsons Galleria", "2026-11-22", "11:30"],
    ],
  ],
  [
    58,
    "QCShorts International",
    "Run Shirley Run!",
    "Rodiell Veloso",
    "Program 2: A Little Blasphemy Never Hurt Anyone",
    90,
    [
      ["Robinsons Galleria", "2026-11-17", "11:30"],
      ["Robinsons Galleria", "2026-11-19", "10:00"],
      ["Robinsons Galleria", "2026-11-22", "11:30"],
    ],
  ],
  [
    59,
    "QCShorts International",
    "The Bovine Comedy",
    "Ratchapoom Boonbunchachoke",
    "Program 2: A Little Blasphemy Never Hurt Anyone",
    90,
    [
      ["Robinsons Galleria", "2026-11-17", "11:30"],
      ["Robinsons Galleria", "2026-11-19", "10:00"],
      ["Robinsons Galleria", "2026-11-22", "11:30"],
    ],
  ],
  [
    60,
    "QCShorts International",
    "The Dream is a Snail",
    "Thien An Nguyen",
    "Program 2: A Little Blasphemy Never Hurt Anyone",
    90,
    [
      ["Robinsons Galleria", "2026-11-17", "11:30"],
      ["Robinsons Galleria", "2026-11-19", "10:00"],
      ["Robinsons Galleria", "2026-11-22", "11:30"],
    ],
  ],

  [
    61,
    "QCShorts International",
    "Gandang Lola",
    "Kylechandler Bigay",
    "Program 3: All Mothers Were Once Girls",
    90,
    [
      ["Fisher Box Office", "2026-11-13", "14:00"],
      ["Gateway", "2026-11-19", "13:30"],
      ["Robinsons Galleria", "2026-11-22", "19:30"],
    ],
  ],
  [
    62,
    "QCShorts International",
    "Maanaa Kanimo",
    "Toni Cañete",
    "Program 3: All Mothers Were Once Girls",
    90,
    [
      ["Fisher Box Office", "2026-11-13", "14:00"],
      ["Gateway", "2026-11-19", "13:30"],
      ["Robinsons Galleria", "2026-11-22", "19:30"],
    ],
  ],
  [
    63,
    "QCShorts International",
    "Sana’y Nandito Ka",
    "Clister Santos",
    "Program 3: All Mothers Were Once Girls",
    90,
    [
      ["Fisher Box Office", "2026-11-13", "14:00"],
      ["Gateway", "2026-11-19", "13:30"],
      ["Robinsons Galleria", "2026-11-22", "19:30"],
    ],
  ],
  [
    64,
    "QCShorts International",
    "The 4Ply Clandestine System",
    "Natalie Sin",
    "Program 3: All Mothers Were Once Girls",
    90,
    [
      ["Fisher Box Office", "2026-11-13", "14:00"],
      ["Gateway", "2026-11-19", "13:30"],
      ["Robinsons Galleria", "2026-11-22", "19:30"],
    ],
  ],

  [
    65,
    "QCShorts International",
    "Agsangit Laeng Ti Al-alia",
    "Carla Pulido Ocampo",
    "Program 4: The Mountains Always Asks For More",
    90,
    [
      ["Fisher Box Office", "2026-11-14", "13:30"],
      ["Fisher Box Office", "2026-11-19", "19:30"],
      ["Robinsons Galleria", "2026-11-19", "21:00"],
    ],
  ],
  [
    66,
    "QCShorts International",
    "Golden Island",
    "Arief Budiman",
    "Program 4: The Mountains Always Asks For More",
    90,
    [
      ["Fisher Box Office", "2026-11-14", "13:30"],
      ["Fisher Box Office", "2026-11-19", "19:30"],
      ["Robinsons Galleria", "2026-11-19", "21:00"],
    ],
  ],
  [
    67,
    "QCShorts International",
    "Incident on the Mountain",
    "Savunthara Seng",
    "Program 4: The Mountains Always Asks For More",
    90,
    [
      ["Fisher Box Office", "2026-11-14", "13:30"],
      ["Fisher Box Office", "2026-11-19", "19:30"],
      ["Robinsons Galleria", "2026-11-19", "21:00"],
    ],
  ],
  [
    68,
    "QCShorts International",
    "Obscura",
    "Timoteus Anggawan Kusno",
    "Program 4: The Mountains Always Asks For More",
    90,
    [
      ["Fisher Box Office", "2026-11-14", "13:30"],
      ["Fisher Box Office", "2026-11-19", "19:30"],
      ["Robinsons Galleria", "2026-11-19", "21:00"],
    ],
  ],
  [
    69,
    "QCShorts International",
    "They Made Monsters",
    "Jaime Morados",
    "Program 4: The Mountains Always Asks For More",
    90,
    [
      ["Fisher Box Office", "2026-11-14", "13:30"],
      ["Fisher Box Office", "2026-11-19", "19:30"],
      ["Robinsons Galleria", "2026-11-19", "21:00"],
    ],
  ],

  [
    70,
    "Screen International",
    "A Long Winter",
    "Andrew Haigh",
    "",
    118,
    [
      ["Robinsons Galleria", "2026-11-17", "15:30"],
      ["Robinsons Galleria", "2026-11-18", "17:30"],
      ["Fisher Box Office", "2026-11-20", "18:00"],
      ["Robinsons Galleria", "2026-11-20", "19:30"],
    ],
  ],
  [
    71,
    "Screen International",
    "Fatherland",
    "Paweł Pawlikowski",
    "",
    82,
    [
      ["Robinsons Galleria", "2026-11-13", "21:00"],
      ["Robinsons Galleria", "2026-11-14", "10:00"],
      ["SM Fairview", "2026-11-15", "13:30"],
      ["SM Fairview", "2026-11-17", "14:00"],
    ],
  ],
  [
    72,
    "Screen International",
    "Fjord",
    "Cristian Mungiu",
    "",
    146,
    [
      ["Gateway", "2026-11-15", "13:30"],
      ["Robinsons Galleria", "2026-11-19", "16:00"],
      ["Gateway", "2026-11-22", "11:30"],
    ],
  ],
  [
    73,
    "Screen International",
    "Makikiraan Po",
    "Lav Diaz",
    "",
    151,
    [
      ["Robinsons Galleria", "2026-11-18", "11:30"],
      ["Robinsons Galleria", "2026-11-19", "10:00"],
      ["Fisher Box Office", "2026-11-20", "13:30"],
      ["Trinoma", "2026-11-21", "21:00"],
    ],
  ],
  [
    74,
    "Screen International",
    "Nowhere to Lay My Eyes",
    "Hong Sang-soo",
    "",
    72,
    [
      ["Gateway", "2026-11-14", "18:00"],
      ["Robinsons Galleria", "2026-11-18", "12:00"],
      ["Fisher Box Office", "2026-11-21", "10:00"],
    ],
  ],
  [
    75,
    "Screen International",
    "The Beloved",
    "Rodrigo Sorogoyen",
    "",
    136,
    [
      ["Fisher Box Office", "2026-11-15", "10:00"],
      ["Robinsons Galleria", "2026-11-19", "18:00"],
      ["Trinoma", "2026-11-19", "18:00"],
      ["Fisher Box Office", "2026-11-20", "13:30"],
    ],
  ],
  [
    76,
    "Screen International",
    "The Diary of A Chambermaid",
    "Radu Jude",
    "",
    94,
    [
      ["SM Fairview", "2026-11-13", "10:00"],
      ["Trinoma", "2026-11-14", "19:30"],
      ["Trinoma", "2026-11-19", "10:00"],
      ["Gateway", "2026-11-22", "15:30"],
    ],
  ],
  [
    77,
    "Screen International",
    "Vintage Violence",
    "Eugene Kotlyarenko",
    "",
    105,
    [
      ["Trinoma", "2026-11-13", "19:30"],
      ["Gateway", "2026-11-19", "13:30"],
      ["Trinoma", "2026-11-19", "19:30"],
      ["Trinoma", "2026-11-21", "15:30"],
    ],
  ],
];

const movies = filmRows.map(
  ([
    id,
    category,
    title,
    director,
    program,
    runtime,
    slots,
    poster,
    letterboxd,
  ]) => ({
    id,
    category,
    title,
    director,
    program,
    runtime,
    color: program ? SHORTS_PROGRAM_COLORS[program] : PROGRAM_COLORS[category],
    schedule: slots.map(([cinema, date, time]) => ({
      cinema,
      date,
      time,
    })),
    poster: MOVIE_DETAILS[id]?.poster || "",
    letterboxd: MOVIE_DETAILS[id]?.letterboxd || "",
  }),
);

/* =========================================
   DOM ELEMENTS
========================================= */

const $ = (id) => document.getElementById(id);

const moviesGrid = $("moviesGrid");
const movieSelect = $("movieSelect");
const scheduleSelect = $("scheduleSelect");
const filmSearch = $("filmSearch");

const runtimeInput = $("runtimeInput");
const availabilityDisplay = $("availabilityDisplay");
const endDisplay = $("endDisplay");
const addScreeningButton = $("addScreeningButton");

const conflictWarning = document.createElement("div");

conflictWarning.className = "conflict-inline-warning";
conflictWarning.setAttribute("role", "status");
conflictWarning.setAttribute("aria-live", "polite");
conflictWarning.textContent = "";

if (addScreeningButton && addScreeningButton.parentNode) {
  addScreeningButton.parentNode.insertBefore(
    conflictWarning,
    addScreeningButton,
  );
}

const screeningForm = $("screeningForm");
const screeningsList = $("screeningsList");
const calendar = $("calendar");
const clearBtn = $("clearBtn");

const programLegend = $("programLegend");
const showAllPrograms = $("Asian Next Wave");
const saveCalendarBtn = $("saveCalendarBtn");

/* =========================================
   STATE
========================================= */

let activeCategory = "Asian Next Wave";

let scheduledScreenings = loadSavedScreenings();

/* =========================================
   SAFE STORAGE
========================================= */

function loadSavedScreenings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    return Array.isArray(saved)
      ? saved.filter(
          (item) =>
            item &&
            item.id != null &&
            item.movieId != null &&
            item.date &&
            item.cinema &&
            item.start,
        )
      : [];
  } catch (error) {
    console.error("Unable to load saved screenings:", error);
    return [];
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scheduledScreenings));
  } catch (error) {
    console.error("Unable to save screenings:", error);

    alert(
      "Unable to save your schedule. " +
        "Your browser storage may be full or unavailable.",
    );
  }
}

const syncCalendarBtn = document.getElementById("syncCalendarBtn");
const exportAllCalendarBtn = document.getElementById("exportAllCalendarBtn");

// Replace this with your actual scheduled-screenings array.
function getScheduledScreenings() {
  return scheduledScreenings;
}

if (syncCalendarBtn) {
  syncCalendarBtn.addEventListener("click", () => {
    const screenings = getScheduledScreenings();

    if (screenings.length === 0) {
      alert("Please add screenings to your schedule first.");
      return;
    }

    // Export the scheduled events as a calendar file.
    exportAllScreeningsToCalendar(screenings);
  });
}

if (exportAllCalendarBtn) {
  exportAllCalendarBtn.addEventListener("click", () => {
    const screenings = getScheduledScreenings();

    if (screenings.length === 0) {
      alert("No screenings available to export.");
      return;
    }

    exportAllScreeningsToCalendar(screenings);
  });
}

/* =========================================
   GENERAL HELPERS
========================================= */

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

function getMovie(id) {
  return movies.find((movie) => String(movie.id) === String(id)) || null;
}

function formatTime(time) {
  if (!time || !/^\d{2}:\d{2}$/.test(time)) {
    return "—";
  }

  const [hour, minute] = time.split(":").map(Number);

  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function formatDate(date) {
  if (!date) return "Date not set";

  const parsedDate = new Date(`${date}T12:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function endTime(start, runtime) {
  if (!start || !Number.isFinite(Number(runtime))) {
    return "—";
  }

  const [hour, minute] = start.split(":").map(Number);

  const totalMinutes = hour * 60 + minute + Number(runtime);

  const endHour = Math.floor(totalMinutes / 60) % 24;
  const endMinute = totalMinutes % 60;

  return formatTime(
    `${String(endHour).padStart(2, "0")}:` +
      `${String(endMinute).padStart(2, "0")}`,
  );
}

/* =========================================
   CATEGORIES
========================================= */

const categories = [...new Set(movies.map((movie) => movie.category))];

/* =========================================
   MOVIE SELECTOR
========================================= */

let customFilmDropdown = null;
let selectedShortsProgram = "";

function populateMovieSelect() {
  if (!movieSelect) return;

  const previousValue = movieSelect.value;

  const featureFilms = movies.filter((movie) => !movie.program);

  const categories = [...new Set(featureFilms.map((movie) => movie.category))];

  const shortsPrograms = [
    ...new Set(
      movies.filter((movie) => movie.program).map((movie) => movie.program),
    ),
  ];

  // Keep the original select for the existing scheduler logic.
  movieSelect.innerHTML = `
        <option value="">Select Film or Shorts Program</option>
        ${movies
          .map(
            (movie) => `
            <option value="${escapeHtml(movie.id)}">
                ${escapeHtml(movie.title)}
            </option>
        `,
          )
          .join("")}
    `;

  movieSelect.classList.add("native-select-hidden");

  // Create the custom dropdown once.
  if (!customFilmDropdown) {
    customFilmDropdown = document.createElement("div");
    customFilmDropdown.className = "film-dropdown";

    movieSelect.parentNode.insertBefore(customFilmDropdown, movieSelect);
  }

  const optionsHTML = categories
    .map((category) => {
      const color = PROGRAM_COLORS[category] || "#777777";

      const categoryFilms = featureFilms.filter(
        (movie) => movie.category === category,
      );

      return `
            <div class="film-dropdown-heading">
                <span
                    class="film-dropdown-dot"
                    style="background:${escapeHtml(color)}"
                ></span>
                <span>${escapeHtml(category)}</span>
            </div>

            ${categoryFilms
              .map(
                (movie) => `
                <button
                    type="button"
                    class="film-dropdown-option"
                    data-film-id="${escapeHtml(movie.id)}"
                >
                    ${escapeHtml(movie.title)}
                </button>
            `,
              )
              .join("")}
        `;
    })
    .join("");

  const shortsHTML = shortsPrograms
    .map((program) => {
      const color = SHORTS_PROGRAM_COLORS[program] || "#777777";

      return `
            <div class="film-dropdown-heading">
                <span
                    class="film-dropdown-dot"
                    style="background:${escapeHtml(color)}"
                ></span>
                <span>Shorts Program</span>
            </div>

            <button
                type="button"
                class="film-dropdown-option program-option"
                data-shorts-program="${escapeHtml(program)}"
            >
                ${escapeHtml(program)}
            </button>
        `;
    })
    .join("");

  customFilmDropdown.innerHTML = `
        <button
            type="button"
            class="film-dropdown-trigger"
            aria-expanded="false"
        >
            <span class="dropdown-current">
                Select Film or Shorts Program
            </span>
            <svg
                class="film-dropdown-chevron"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
            >
                <path d="m6 9 6 6 6-6"></path>
            </svg>
        </button>

        <div class="film-dropdown-menu" hidden>
            ${optionsHTML}
            ${shortsHTML}
        </div>
    `;

  const trigger = customFilmDropdown.querySelector(".film-dropdown-trigger");

  const currentLabel = customFilmDropdown.querySelector(".dropdown-current");

  const menu = customFilmDropdown.querySelector(".film-dropdown-menu");

  function closeMenu() {
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  }

  function updateSelectedLabel() {
    const selectedFilm = movies.find(
      (movie) => String(movie.id) === String(movieSelect.value),
    );

    if (selectedShortsProgram) {
      currentLabel.textContent = selectedShortsProgram;
    } else if (selectedFilm) {
      currentLabel.textContent = selectedFilm.title;
    } else {
      currentLabel.textContent = "Select Film or Shorts Program";
    }

    customFilmDropdown
      .querySelectorAll(".film-dropdown-option")
      .forEach((option) => {
        const isFilm = option.dataset.filmId != null;
        const isProgram = option.dataset.shortsProgram != null;

        const selected =
          (isFilm &&
            !selectedShortsProgram &&
            option.dataset.filmId === String(movieSelect.value)) ||
          (isProgram && option.dataset.shortsProgram === selectedShortsProgram);

        option.classList.toggle("selected", selected);
        option.setAttribute("aria-pressed", String(selected));
      });
  }

  trigger.addEventListener("click", () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    trigger.setAttribute("aria-expanded", String(opening));
  });

  customFilmDropdown.querySelectorAll("[data-film-id]").forEach((option) => {
    option.addEventListener("click", () => {
      selectedShortsProgram = "";
      movieSelect.value = option.dataset.filmId;

      updateSelectedLabel();
      closeMenu();

      movieSelect.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

  customFilmDropdown
    .querySelectorAll("[data-shorts-program]")
    .forEach((option) => {
      option.addEventListener("click", () => {
        const program = option.dataset.shortsProgram;

        const firstShort = movies.find((movie) => movie.program === program);

        if (!firstShort) return;

        selectedShortsProgram = program;
        movieSelect.value = String(firstShort.id);

        updateSelectedLabel();
        closeMenu();

        movieSelect.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });

  document.addEventListener("click", (event) => {
    if (!customFilmDropdown.contains(event.target)) {
      closeMenu();
    }
  });

  // Restore a previous feature-film selection if possible.
  if (
    previousValue &&
    movies.some((movie) => String(movie.id) === previousValue)
  ) {
    movieSelect.value = previousValue;
  }

  updateSelectedLabel();
}

function getSelectedMovie() {
  if (!movieSelect || !movieSelect.value) {
    return null;
  }

  const value = movieSelect.value;

  // Regular feature film
  if (value.startsWith("film:")) {
    const id = value.slice(5);
    return getMovie(id);
  }

  // Shorts program selection
  if (value.startsWith("program:")) {
    const program = value.slice(8);

    return movies.find((movie) => movie.program === program) || null;
  }

  // Backward compatibility for numeric IDs
  return getMovie(value);
}

function getSelectedSlot() {
  const movie = getSelectedMovie();

  if (!movie || !scheduleSelect || scheduleSelect.value === "") {
    return null;
  }

  const index = Number(scheduleSelect.value);

  if (!Number.isInteger(index) || index < 0) {
    return null;
  }

  return movie.schedule?.[index] || null;
}

/* =========================================
   SCREENING OPTIONS
========================================= */

function updateScheduleOptions() {
  if (!movieSelect || !scheduleSelect) return;

  const movie = getSelectedMovie();

  scheduleSelect.innerHTML = "";
  scheduleSelect.disabled = true;

  if (!movie) {
    scheduleSelect.innerHTML = `
            <option value="">Select a film first</option>
        `;

    if (runtimeInput) {
      runtimeInput.value = DEFAULT_RUNTIME;
    }

    updateFormStatus();
    renderMovies();
    return;
  }

  if (runtimeInput) {
    runtimeInput.value = selectedShortsProgram
      ? SHORTS_SET_RUNTIME
      : movie.runtime || DEFAULT_RUNTIME;
  }

  const screenings = Array.isArray(movie.schedule) ? movie.schedule : [];

  if (screenings.length === 0) {
    scheduleSelect.innerHTML = `
            <option value="">No screenings available</option>
        `;

    updateFormStatus();
    renderMovies();
    return;
  }

  scheduleSelect.innerHTML = `
        <option value="">Select a screening</option>
        ${screenings
          .map(
            (slot, index) => `
            <option value="${index}">
                ${escapeHtml(formatDate(slot.date))}
                · ${escapeHtml(slot.cinema)}
                · ${escapeHtml(formatTime(slot.time))}
            </option>
        `,
          )
          .join("")}
    `;

  scheduleSelect.disabled = false;

  updateFormStatus();
  renderMovies();
}

/* =========================================
   MOVIE SEARCH AND CARDS
========================================= */

function renderMovies() {
  if (!moviesGrid) return;

  const search = (filmSearch?.value || "").trim().toLowerCase();
  const selectedMovie = getSelectedMovie();

  const filteredMovies = movies.filter((movie) => {
    const categoryMatches = movie.category === activeCategory;

    const searchMatches = [
      movie.title,
      movie.director,
      movie.category,
      movie.program,
    ].some((value) =>
      String(value || "")
        .toLowerCase()
        .includes(search),
    );

    const categoryHasPrograms = movies.some(
      (movie) => movie.category === activeCategory && movie.program,
    );

    const programMatches = !categoryHasPrograms
      ? true
      : activeProgram !== null &&
        String(movie.program || "").trim() === activeProgram;

    return categoryMatches && searchMatches && programMatches;
  });

  if (filteredMovies.length === 0) {
    const hasPrograms = movies.some(
      (movie) => movie.category === activeCategory && movie.program,
    );

    moviesGrid.innerHTML = `
    <div class="empty-state">
      ${
        hasPrograms && !activeProgram
          ? ""
          : ""
      }
    </div>
  `;
    return;
  }

  // Group films by program, preserving their original order.
  const groupedMovies = filteredMovies.reduce((groups, movie) => {
    const program = String(movie.program).trim();

    if (!groups[program]) {
      groups[program] = [];
    }

    groups[program].push(movie);
    return groups;
  }, {});

  // Render each program with its own heading and numbered film cards.
  moviesGrid.innerHTML = Object.entries(groupedMovies)
    .map(([program, programMovies]) => {
      const filmCards = programMovies
        .map((movie, index) => {
          const selected =
            selectedMovie && String(selectedMovie.id) === String(movie.id);

          const posterHTML = movie.poster
            ? `
              <img
                class="movie-poster"
                src="${escapeHtml(movie.poster)}"
                alt="Poster for ${escapeHtml(movie.title)}"
                loading="lazy"
                onerror="this.onerror=null;this.src='poster/default.png'"
              >
            `
            : `
              <img
                class="movie-poster"
                src="poster/default.png"
                alt="No poster available"
                loading="lazy"
              >
            `;

          const letterboxdHTML = movie.letterboxd
            ? `
              <a
                class="letterboxd-link"
                href="${escapeHtml(movie.letterboxd)}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ${escapeHtml(movie.title)} on Letterboxd"
                title="View on Letterboxd"
              >
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <circle cx="13" cy="20" r="9" fill="#ff8000"/>
                  <circle cx="20" cy="20" r="9" fill="#00c030"/>
                  <circle cx="27" cy="20" r="9" fill="#40bcf4"/>
                </svg>
              </a>
            `
            : `
              <span
                class="letterboxd-link unavailable"
                title="Add this film's Letterboxd URL"
                aria-label="Letterboxd link not added"
              >
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <circle cx="13" cy="20" r="9" fill="#ff8000"/>
                  <circle cx="20" cy="20" r="9" fill="#00c030"/>
                  <circle cx="27" cy="20" r="9" fill="#40bcf4"/>
                </svg>
              </span>
            `;

          return `
            <div class="numbered-movie">
              <span class="movie-number">${index + 1}</span>

              <article
                class="movie-card compact-movie
                  ${selected ? "film-selected" : ""}"
                style="--program-color:${escapeHtml(movie.color || "#777")}"
              >
                <span class="movie-color"></span>

                <button
                  type="button"
                  class="movie-card-select"
                  data-movie-id="${escapeHtml(movie.id)}"
                  aria-pressed="${Boolean(selected)}"
                >
                  <span class="movie-poster-wrap">
                    ${posterHTML}
                  </span>

                  <span class="compact-film-main">
                    <span class="movie-title">
                      ${escapeHtml(movie.title)}
                    </span>

                    <span class="movie-director-name">
                      ${escapeHtml(movie.director || "")}
                    </span>
                  </span>
                </button>

                ${letterboxdHTML}
              </article>
            </div>
          `;
        })
        .join("");

      return `
        <section class="program-section">
          <h2 class="program-title">
            ${escapeHtml(program)}
          </h2>

          <div class="program-movies-grid">
            ${filmCards}
          </div>
        </section>
      `;
    })
    .join("");

  // Preserve the existing movie selection behavior.
  moviesGrid.querySelectorAll("[data-movie-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.movieId;

      if (!getMovie(id)) return;

      movieSelect.value = String(id);
      updateScheduleOptions();

      movieSelect.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });
  });
}


const programDropdown = document.getElementById("programDropdown");

let activeProgram = null;
let openProgramCategory = null;


function showProgramDropdown(category) {
  if (!programDropdown) return;

  const programs = [
    ...new Set(
      movies
        .filter(movie =>
          movie.category === category && movie.program
        )
        .map(movie => String(movie.program).trim())
    )
  ];

  // Close the dropdown if the same category is clicked again.
  if (
    openProgramCategory === category &&
    programDropdown.classList.contains("visible")
  ) {
    programDropdown.classList.remove("visible");
    openProgramCategory = null;
    activeProgram = null;
    renderMovies();
    return;
  }

  openProgramCategory = category;
  activeProgram = null;

  // Find the programs belonging to this category.
  if (programs.length === 0) {
    programDropdown.innerHTML = "";
    programDropdown.classList.remove("visible");
    renderMovies();
    return;
  }

  // Build the dropdown menu.
  programDropdown.innerHTML = programs.map(program => {
    const count = movies.filter(movie =>
      movie.category === category &&
      String(movie.program || "").trim() === program
    ).length;

    return `
      <button
        type="button"
        data-program="${escapeHtml(program)}"
      >
        <span>${escapeHtml(program)}</span>
        <span class="program-count">${count}</span>
      </button>
    `;
  }).join("");

  // Find the exact category button that was clicked.
  const categoryButton = [
    ...document.querySelectorAll("[data-category]")
  ].find(button => button.dataset.category === category);

  if (categoryButton) {
    // Position the dropdown relative to the category button.
    const buttonRect = categoryButton.getBoundingClientRect();

    programDropdown.style.position = "fixed";
    programDropdown.style.top = `${buttonRect.bottom + 8}px`;
    programDropdown.style.left = `${buttonRect.left}px`;

    // Keep the dropdown inside the viewport horizontally.
    requestAnimationFrame(() => {
      const menuRect = programDropdown.getBoundingClientRect();
      const margin = 8;

      if (menuRect.right > window.innerWidth - margin) {
        programDropdown.style.left =
          `${Math.max(margin, window.innerWidth - menuRect.width - margin)}px`;
      }

      if (menuRect.left < margin) {
        programDropdown.style.left = `${margin}px`;
      }
    });
  }

  // Show the menu.
  programDropdown.classList.add("visible");

  renderMovies();
}


// Use event delegation for category and program clicks.
document.addEventListener("click", event => {
  const categoryButton = event.target.closest("[data-category]");

  if (categoryButton) {
    // Let your existing category handler update activeCategory first.
    const category = categoryButton.dataset.category;

    if (category === activeCategory) {
      showProgramDropdown(category);
    }
    return;
  }

  const programButton = event.target.closest(
    "#programDropdown [data-program]"
  );

  if (programButton) {
    activeProgram = programButton.dataset.program;

    programDropdown.querySelectorAll("[data-program]")
      .forEach(button => {
        button.classList.toggle("active", button === programButton);
      });

    renderMovies();
  }
});


/* Close the program dropdown when clicking outside */
document.addEventListener("click", event => {
  if (!programDropdown || !programDropdown.classList.contains("visible")) {
    return;
  }

  const clickedCategory = event.target.closest("[data-category]");
  const clickedDropdown = event.target.closest("#programDropdown");

  if (!clickedCategory && !clickedDropdown) {
    programDropdown.classList.remove("visible");
    openProgramCategory = null;
  }
});

/* Close when the mouse leaves the dropdown and category button */
let dropdownCloseTimer;

function scheduleDropdownClose() {
  dropdownCloseTimer = setTimeout(() => {
    programDropdown.classList.remove("visible");
    openProgramCategory = null;
  }, 250);
}

function cancelDropdownClose() {
  clearTimeout(dropdownCloseTimer);
}

programDropdown.addEventListener("mouseenter", cancelDropdownClose);
programDropdown.addEventListener("mouseleave", scheduleDropdownClose);

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("mouseenter", cancelDropdownClose);
  button.addEventListener("mouseleave", scheduleDropdownClose);
});

/* Close immediately after selecting a program */
programDropdown.addEventListener("click", event => {
  const programButton = event.target.closest("[data-program]");
  if (!programButton) return;

  clearTimeout(dropdownCloseTimer);

  programDropdown.classList.remove("visible");
  openProgramCategory = null;
});



/* =========================================
   PROGRAM LEGEND
========================================= */

function renderLegend() {
  if (!programLegend) return;

  programLegend.innerHTML = categories
    .map((category) => {
      const categoryMovies = movies.filter(
        (movie) => movie.category === category,
      );

      const color = categoryMovies[0]?.color || "#777";

      return `
            <button
                type="button"
                class="legend-chip
                    ${activeCategory === category ? "selected" : ""}"
                data-category="${escapeHtml(category)}"
            >
                <span
                    class="legend-dot"
                    style="background:${escapeHtml(color)}"
                ></span>

                <span>${escapeHtml(category)}</span>

                <small>${categoryMovies.length}</small>
            </button>
        `;
    })
    .join("");

  programLegend.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;

      showAllPrograms?.classList.remove("active");

      renderLegend();
      renderMovies();
    });
  });
}

/* =========================================
   FORM STATUS
   Only ONE updateFormStatus() function.
========================================= */

function updateFormStatus() {
  const movie = getSelectedMovie();
  const slot = getSelectedSlot();
  const runtime = Number(runtimeInput?.value);

  // Update estimated end time.
  if (endDisplay) {
    endDisplay.textContent =
      slot && runtime > 0 ? endTime(slot.time, runtime) : "—";
  }

  // Check whether the form has all required information.
  const ready = Boolean(
    movie &&
    slot &&
    slot.date &&
    slot.cinema &&
    slot.time &&
    Number.isFinite(runtime) &&
    runtime >= 1 &&
    runtime <= 600,
  );

  // Check for conflicts BEFORE the user clicks Add to Itinerary.
  let conflictMessage = "";

  if (ready) {
    const candidate = {
      id: "__candidate__",
      movieId: movie.id,
      program: selectedShortsProgram || "",
      date: slot.date,
      cinema: slot.cinema,
      start: slot.time,
      runtime: runtime,
    };

    if (hasConflict(candidate)) {
      conflictMessage =
        "This screening overlaps " +
        "with another screening at the same cinema. " +
        "Please check the screening time and runtime.";
    }
  }

  // Show or hide the inline red warning.
  if (conflictWarning) {
    conflictWarning.textContent = conflictMessage;

    conflictWarning.classList.toggle("visible", Boolean(conflictMessage));
  }

  // Enable Add when the form is valid, even if there's a conflict.
  if (addScreeningButton) {
    addScreeningButton.disabled = !ready;
  }

  // Update the availability message.
  if (!availabilityDisplay) return;

  if (!movie) {
    availabilityDisplay.textContent =
      "Choose a film to view its available screenings.";
    return;
  }

  if (!movie.schedule || movie.schedule.length === 0) {
    availabilityDisplay.textContent =
      "No screening schedule is available for this film.";
    return;
  }

  if (!slot) {
    availabilityDisplay.textContent =
      "Select an available screening from the dropdown.";
    return;
  }

  availabilityDisplay.textContent =
    `${movie.category}` +
    `${movie.program ? " · " + movie.program : ""}` +
    ` — ${formatDate(slot.date)}` +
    ` · ${slot.cinema}` +
    ` · ${formatTime(slot.time)}`;
}

/* =========================================
   CONFLICT DETECTION
========================================= */

function getScreeningInterval(screening) {
  const [hour, minute] = screening.start.split(":").map(Number);

  const start = hour * 60 + minute;

  return {
    start,
    end: start + Number(screening.runtime),
  };
}

function hasConflict(candidate, ignoredId = null) {
  const candidateInterval = getScreeningInterval(candidate);

  return scheduledScreenings.some((existing) => {
    if (ignoredId !== null && String(existing.id) === String(ignoredId)) {
      return false;
    }

    if (existing.date !== candidate.date) {
      return false;
    }

    const sameCinema =
      String(existing.cinema).trim().toLowerCase() ===
      String(candidate.cinema).trim().toLowerCase();

    if (!sameCinema) return false;

    const existingInterval = getScreeningInterval(existing);

    return (
      candidateInterval.start < existingInterval.end &&
      candidateInterval.end > existingInterval.start
    );
  });
}

/* =========================================
   ADD SCREENING
========================================= */

function addScreening(event) {
  event.preventDefault();

  const movie = getSelectedMovie();
  const slot = getSelectedSlot();
  const runtime = Number(runtimeInput?.value);

  if (
    !movie ||
    !slot ||
    !slot.date ||
    !slot.cinema ||
    !slot.time ||
    !Number.isFinite(runtime) ||
    runtime < 1 ||
    runtime > 600
  ) {
    updateFormStatus();
    return;
  }

  const screening = {
    id: Date.now(),
    movieId: movie.id,
    program: selectedShortsProgram || "",
    date: slot.date,
    cinema: slot.cinema,
    start: slot.time,
    runtime,
  };

  scheduledScreenings.push(screening);

  save();

  renderScreenings();
  renderCalendar();

  // Keep the selected film so another screening can be added.
  if (scheduleSelect) {
    scheduleSelect.value = "";
  }

  updateFormStatus();
}

/* =========================================
   SCREENING LIST
========================================= */

function renderScreenings() {
  if (!screeningsList) return;

  const sorted = [...scheduledScreenings].sort((a, b) =>
    `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`),
  );

  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / SCREENINGS_PER_PAGE));

  // Keep the current page within the valid range.
  currentScreeningsPage = Math.min(
    Math.max(1, currentScreeningsPage),
    totalPages,
  );

  if (total === 0) {
    screeningsList.innerHTML = `
            <div class="empty-state">NO SCREENINGS YET</div>
        `;
    return;
  }

  const startIndex = (currentScreeningsPage - 1) * SCREENINGS_PER_PAGE;

  const pageItems = sorted.slice(startIndex, startIndex + SCREENINGS_PER_PAGE);

  const rowsHTML = pageItems
    .map((screening) => {
      const movie = getMovie(screening.movieId);

      if (!movie) return "";

      const conflict = hasConflict(screening, screening.id);
      const displayTitle = screening.program || movie.title;

      return `
            <div class="screening-row">
                <div class="screening-film">
                    <i style="background:${escapeHtml(movie.color || "#777")}"></i>

                    <strong>${escapeHtml(displayTitle)}</strong>

                    <small>${escapeHtml(movie.category)}</small>

                    ${
                      conflict
                        ? `
                        <small class="conflict-warning">
                            ⚠ Check for overlapping screenings
                        </small>
                    `
                        : ""
                    }
                </div>

                <div>${escapeHtml(screening.date)}</div>

                <div>${escapeHtml(screening.cinema)}</div>

                <div class="screening-time">
                    ${escapeHtml(formatTime(screening.start))}

                    <small>
                        Ends ${escapeHtml(
                          endTime(screening.start, screening.runtime),
                        )}
                    </small>
                </div>

                <button
                    type="button"
                    class="remove-screening"
                    data-remove-id="${escapeHtml(screening.id)}"
                    aria-label="Remove ${escapeHtml(displayTitle)}"
                >×</button>
            </div>
        `;
    })
    .join("");

  const firstItem = startIndex + 1;
  const lastItem = Math.min(startIndex + SCREENINGS_PER_PAGE, total);

  screeningsList.innerHTML = `
        ${rowsHTML}

        <div class="screenings-pagination">
            <span>
                SHOWING ${firstItem}–${lastItem} OF ${total}
            </span>

            <div class="pagination-controls">
                <button
                    type="button"
                    class="pagination-button"
                    data-page-action="prev"
                    ${currentScreeningsPage === 1 ? "disabled" : ""}
                >
                    PREV
                </button>

                ${Array.from({ length: totalPages }, (_, i) => i + 1)
                  .map(
                    (page) => `
                    <button
                        type="button"
                        class="pagination-button ${
                          page === currentScreeningsPage ? "active" : ""
                        }"
                        data-page="${page}"
                        aria-current="${
                          page === currentScreeningsPage ? "page" : "false"
                        }"
                    >${page}</button>
                `,
                  )
                  .join("")}

                <button
                    type="button"
                    class="pagination-button"
                    data-page-action="next"
                    ${currentScreeningsPage === totalPages ? "disabled" : ""}
                >
                    NEXT
                </button>
            </div>
        </div>
    `;

  // Remove screening.
  screeningsList.querySelectorAll("[data-remove-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.removeId;

      scheduledScreenings = scheduledScreenings.filter(
        (screening) => String(screening.id) !== String(id),
      );

      save();

      renderScreenings();
      renderCalendar();
    });
  });

  // Previous / next page.
  screeningsList
    .querySelector('[data-page-action="prev"]')
    ?.addEventListener("click", () => {
      if (currentScreeningsPage > 1) {
        currentScreeningsPage--;
        renderScreenings();
      }
    });

  screeningsList
    .querySelector('[data-page-action="next"]')
    ?.addEventListener("click", () => {
      if (currentScreeningsPage < totalPages) {
        currentScreeningsPage++;
        renderScreenings();
      }
    });

  // Direct page selection.
  screeningsList.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      currentScreeningsPage = Number(button.dataset.page);
      renderScreenings();
    });
  });
}

/* =========================================
   CALENDAR
========================================= */

function renderCalendar() {
  if (!calendar) return;

  if (scheduledScreenings.length === 0) {
    calendar.innerHTML = `
            <div class="calendar-empty">
                Your schedule will appear here once you add screenings.
            </div>
        `;
    return;
  }

  const dates = [
    ...new Set(scheduledScreenings.map((screening) => screening.date)),
  ].sort();

  calendar.innerHTML = dates
    .map((date) => {
      const dayScreenings = scheduledScreenings
        .filter((screening) => screening.date === date)
        .sort((a, b) => a.start.localeCompare(b.start));

      return `
            <section class="calendar-day">
                <header>
                    <strong>${escapeHtml(formatDate(date))}</strong>

                    <span>
                        ${dayScreenings.length}
                        screening${dayScreenings.length === 1 ? "" : "s"}
                    </span>
                </header>

                <div class="calendar-day-films">
                    ${dayScreenings
                      .map((screening) => {
                        const movie = getMovie(screening.movieId);

                        if (!movie) return "";

                        const conflict = hasConflict(screening, screening.id);

                        return `
                            <article
                                class="calendar-film"
                                style="--program-color:${escapeHtml(movie.color || "#777")}"
                            >
                                <time>
                                    ${escapeHtml(formatTime(screening.start))}
                                </time>

                                <div>
                                    <strong>
    ${escapeHtml(screening.program || movie.title)}
</strong>

                                    <small>
                                        ${escapeHtml(screening.cinema)}
                                        · Ends
                                        ${escapeHtml(
                                          endTime(
                                            screening.start,
                                            screening.runtime,
                                          ),
                                        )}
                                    </small>

                                    ${
                                      conflict
                                        ? `
                                        <small class="conflict-warning">
                                            ⚠ Possible scheduling conflict
                                        </small>
                                    `
                                        : ""
                                    }
                                </div>
                            </article>
                        `;
                      })
                      .join("")}
                </div>
            </section>
        `;
    })
    .join("");
}


/* =========================================
   QCINEMA 2026 — ADD TO CALENDAR
   Supports individual events and bulk export
========================================= */

// Convert a date and time into an ICS-compatible timestamp.
// Expected date: YYYY-MM-DD
// Expected time: HH:MM (24-hour format)
function toICSDateTime(date, time) {
  const cleanDate = String(date).replace(/-/g, "");
  const cleanTime = String(time).replace(/:/g, "");

  return `${cleanDate}T${cleanTime}00`;
}

// Escape text for the ICS file format.
function escapeICS(value = "") {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

// Create a calendar event.
function createICSEvent({
  title,
  date,
  startTime,
  endTime,
  location = "QCinema 2026",
  description = "Added using the QCinema 2026 Scheduler."
}) {
  if (!title || !date || !startTime || !endTime) {
    console.warn("Skipping event: missing title, date, or time.", {
      title, date, startTime, endTime
    });
    return "";
  }

  const now = new Date();
  const stamp = now.toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

  const start = toICSDateTime(date, startTime);
  let end = toICSDateTime(date, endTime);

  // If the screening ends after midnight, move the end
  // time to the following day.
  if (endTime < startTime) {
    const nextDay = new Date(`${date}T12:00:00`);
    nextDay.setDate(nextDay.getDate() + 1);

    const nextDate = [
      nextDay.getFullYear(),
      String(nextDay.getMonth() + 1).padStart(2, "0"),
      String(nextDay.getDate()).padStart(2, "0")
    ].join("-");

    end = toICSDateTime(nextDate, endTime);
  }

  return [
    "BEGIN:VEVENT",
    `UID:${crypto.randomUUID()}@qcinema-scheduler`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeICS(title)}`,
    `LOCATION:${escapeICS(location)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    "END:VEVENT"
  ].join("\r\n");
}

// Download one or more events as an .ics calendar file.
function downloadICS(events, filename = "qcinema-2026-schedule.ics") {
  const validEvents = events.filter(Boolean);

  if (!validEvents.length) {
    alert("No valid screenings found to export.");
    return;
  }

  const calendarContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//QCinema 2026 Scheduler//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...validEvents,
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([calendarContent], {
    type: "text/calendar;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Export a single screening.
function addScreeningToCalendar(screening) {
  const event = createICSEvent(screening);

  if (event) {
    downloadICS([event], "qcinema-screening.ics");
  }
}

// Export all screenings.
function exportAllScreeningsToCalendar(screenings) {
  const events = screenings.map(createICSEvent);
  downloadICS(events, "qcinema-2026-all-screenings.ics");
}


/* =========================================
   CLEAR SCHEDULE
========================================= */

function clearSchedule() {
  if (scheduledScreenings.length === 0) return;

  const confirmed = confirm(
    "Clear all screenings from your personal schedule?",
  );

  if (!confirmed) return;

  scheduledScreenings = [];

  save();

  renderScreenings();
  renderCalendar();
}

/* =========================================
   EXPORT CALENDAR AS IMAGE
========================================= */

async function saveCalendarAsImage() {
  if (!scheduledScreenings.length) {
    alert("Add at least one screening before saving your calendar.");
    return;
  }

  if (typeof html2canvas !== "function") {
    alert(
      "The image export library could not load. " +
        "Check your internet connection.",
    );
    return;
  }

  if (!calendar || !saveCalendarBtn) return;

  saveCalendarBtn.disabled = true;
  saveCalendarBtn.textContent = "Preparing image…";

  try {
    const canvas = await html2canvas(calendar, {
      backgroundColor: "#f4f4f0",
      scale: 2,
      useCORS: true,
    });

    const link = document.createElement("a");

    link.download = "qcinema-2026-my-schedule.png";
    link.href = canvas.toDataURL("image/png");

    link.click();
  } catch (error) {
    console.error("Calendar image export failed:", error);

    alert("Unable to save the calendar image. Please try again.");
  } finally {
    saveCalendarBtn.disabled = false;
    saveCalendarBtn.textContent = "Save as image";
  }
}

/* =========================================
   INITIALIZATION
========================================= */

function initializeScheduler() {
  // Ensure the movie data is available.
  if (!Array.isArray(movies) || movies.length === 0) {
    console.error(
      "No movies found. Define the movies array before this script.",
    );

    if (moviesGrid) {
      moviesGrid.innerHTML = `
                <div class="empty-state">
                    NO FILMS AVAILABLE
                </div>
            `;
    }

    return;
  }

  // Populate and render the interface.
  populateMovieSelect();
  renderLegend();
  renderMovies();
  renderScreenings();
  renderCalendar();
  updateFormStatus();

  // Select a movie from the dropdown.
  movieSelect?.addEventListener("change", () => {
    updateScheduleOptions();
    updateFormStatus();
  });

  // Show or clear the warning when a screening is selected.
  scheduleSelect?.addEventListener("change", () => {
    updateFormStatus();
  });

  // Recheck conflicts whenever the runtime changes.
  runtimeInput?.addEventListener("input", () => {
    updateFormStatus();
  });

  // Search movies.
  filmSearch?.addEventListener("input", () => {
    renderMovies();
  });

  // Runtime changes affect the end time.
  runtimeInput?.addEventListener("input", () => {
    updateFormStatus();
  });

  runtimeInput?.addEventListener("change", () => {
    updateFormStatus();
  });

  // Show all categories.
  showAllPrograms?.addEventListener("click", () => {
    activeCategory = "Asian Next Wave";

    showAllPrograms.classList.add("active");

    renderLegend();
    renderMovies();
  });

  // Form submission.
  screeningForm?.addEventListener("submit", addScreening);

  // Clear all screenings.
  clearBtn?.addEventListener("click", clearSchedule);

  // Save calendar image.
  saveCalendarBtn?.addEventListener("click", saveCalendarAsImage);

  console.log(`QCinema Scheduler initialized: ${movies.length} films loaded.`);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeScheduler);
} else {
  initializeScheduler();
}
