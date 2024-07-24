import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];
  res.render("index.ejs", {
    adjective: randomAdj,
    noun: randomNoun,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  "spider", "wolf", "iron", "captain", "steel", "shadow", "ghost", "phantom", "dark", "night",
  "light", "white", "black", "red", "blue", "green", "gold", "silver", "bronze", "crimson",
  "scarlet", "emerald", "ruby", "sapphire", "topaz", "opal", "diamond", "pearl", "onyx",
  "jade", "amethyst", "turquoise", "copper", "platinum", "zinc", "lead", "titanium", "nickel",
  "mercury", "uranium", "thorium", "lithium", "beryllium", "boron", "carbon", "nitrogen",
  "oxygen", "fluorine", "neon", "sodium", "magnesium", "aluminum", "silicon", "phosphorus",
  "sulfur", "chlorine", "argon", "potassium", "calcium", "scandium", "titanium", "vanadium",
  "chromium", "manganese", "iron", "cobalt", "nickel", "copper", "zinc", "gallium", "germanium",
  "arsenic", "selenium", "bromine", "krypton", "rubidium", "strontium", "yttrium", "zirconium",
  "niobium", "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver", "cadmium",
  "indium", "tin", "antimony", "tellurium", "iodine", "xenon", "cesium", "barium", "lanthanum",
  "cerium", "praseodymium", "neodymium", "promethium", "samarium", "europium", "gadolinium",
  "terbium", "dysprosium", "holmium", "erbium", "thulium", "ytterbium", "lutetium", "hafnium",
  "tantalum", "tungsten", "rhenium", "osmium", "iridium", "platinum", "gold", "mercury",
  "thallium", "lead", "bismuth", "polonium", "astatine", "radon", "francium", "radium",
  "actinium", "thorium", "protactinium", "uranium", "neptunium", "plutonium", "americium",
  "curium", "berkelium", "californium", "einsteinium", "fermium", "mendelevium", "nobelium",
  "lawrencium", "rutherfordium", "dubnium", "seaborgium", "bohrium", "hassium", "meitnerium",
  "darmstadtium", "roentgenium", "copernicium", "nihonium", "flerovium", "moscovium", "livermorium",
  "tennessine", "oganesson", "solar", "lunar", "stellar", "cosmic", "galactic", "universal",
  "celestial", "astral", "interstellar", "space", "nebula", "quasar", "pulsar", "comet",
  "asteroid", "meteor", "planet", "star", "sun", "moon", "earth", "mars", "jupiter", "saturn",
  "uranus", "neptune", "pluto", "mercury", "venus", "terra", "gaia", "hyper", "mega", "ultra",
  "super", "turbo", "quantum", "atomic", "nuclear", "particle", "photon", "neutrino", "electron",
  "proton", "neutron", "meson", "boson", "quark", "gluon", "tachyon", "graviton", "lepton",
  "muon", "tau", "sigma", "omega", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta",
  "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigma", "tau",
  "upsilon", "phi", "chi", "psi", "omega", "arc", "fire", "water", "earth", "air", "wind", "light",
  "darkness", "shadow", "spirit", "soul", "mind", "body", "heart", "blood", "bone", "flesh", "muscle",
  "skin", "nerve", "cell", "tissue", "organ", "system", "energy", "force", "power", "strength",
  "speed", "agility", "stamina", "endurance", "resilience", "toughness", "durability", "invulnerability",
  "intelligence", "wisdom", "knowledge", "understanding", "insight", "foresight", "perception",
  "awareness", "consciousness", "sensitivity", "reflexes", "reaction", "instinct", "intuition",
  "emotion", "feeling", "thought", "memory", "imagination", "creativity", "inspiration", "motivation",
  "ambition", "drive", "passion", "zeal", "enthusiasm", "determination", "willpower", "resolve",
  "courage", "bravery", "boldness", "fearlessness", "gallantry", "valor", "daring", "audacity",
  "confidence", "self-assurance", "self-confidence", "self-reliance", "self-esteem", "self-worth",
  "self-respect", "self-discipline", "self-control", "self-mastery", "self-improvement", "self-development",
  "self-actualization", "self-realization", "self-awareness", "self-knowledge", "self-understanding",
  "self-acceptance", "self-love", "self-compassion", "self-care", "self-help", "self-support",
  "self-encouragement", "self-belief", "self-trust", "self-honesty", "self-integrity", "self-dedication",
  "self-devotion", "self-commitment", "self-sacrifice", "selflessness", "altruism", "empathy",
  "compassion", "kindness", "generosity", "charity", "benevolence", "philanthropy", "humanity",
  "service", "duty", "responsibility", "accountability", "obligation", "loyalty", "faithfulness",
  "trustworthiness", "reliability", "dependability", "consistency", "honesty", "integrity", "sincerity",
  "truthfulness", "authenticity", "genuineness", "realness", "openness", "transparency", "clarity",
  "simplicity", "purity", "innocence", "virtue", "righteousness", "goodness", "morality", "ethics",
  "justice", "fairness", "equity", "impartiality", "neutrality", "objectivity", "balance", "harmony",
  "order", "peace", "tranquility", "calm", "serenity", "contentment", "satisfaction", "happiness",
  "joy", "bliss", "delight", "pleasure", "ecstasy", "euphoria", "rapture", "enthusiasm", "excitement",
  "thrill", "adventure", "exploration", "discovery", "innovation", "creativity", "imagination",
  "fantasy", "wonder", "awe", "curiosity", "interest", "engagement", "involvement", "participation",
  "commitment", "dedication", "devotion", "passion", "zeal", "fervor", "ardor", "intensity", "vigor",
  "energy", "power", "force", "strength", "might", "potency", "capacity", "ability", "capability",
  "competence", "skill", "talent", "aptitude", "proficiency", "expertise", "mastery", "brilliance",
  "genius", "ingenuity", "cleverness", "craftiness", "cunning", "shrewdness", "astuteness", "sharpness",
  "keenness", "acuity", "acumen", "discernment", "perceptiveness", "insight", "wisdom", "sagacity",
  "judgment", "prudence", "caution", "carefulness", "thoughtfulness", "mindfulness", "awareness",
  "attentiveness", "alertness", "vigilance", "watchfulness", "observance", "receptiveness",
  "responsiveness", "adaptability", "flexibility", "versatility", "agility", "mobility", "fluidity",
  "grace", "elegance", "style", "charm", "charisma", "appeal", "attraction", "magnetism", "fascination",
  "allure", "enticement", "seduction", "temptation", "provocation", "stimulation", "exhilaration",
  "invigoration", "inspiration", "motivation", "encouragement", "empowerment", "upliftment", "edification",
  "enlightenment", "illumination", "clarity", "understanding", "comprehension", "grasp", "awareness",
  "consciousness", "perception", "insight", "foresight", "hindsight", "intuition", "instinct", "feeling",
  "sense", "sensitivity", "empathy", "sympathy", "compassion", "kindness", "gentleness", "tenderness",
  "affection", "love", "devotion", "loyalty", "faithfulness", "trustworthiness", "honesty", "integrity",
  "sincerity", "truthfulness", "authenticity", "genuineness", "realness", "openness", "transparency",
  "clarity", "simplicity", "purity", "innocence", "virtue", "righteousness", "goodness", "morality",
  "ethics", "justice", "fairness", "equity", "impartiality", "neutrality", "objectivity", "balance",
  "harmony", "order", "peace", "tranquility", "calm", "serenity", "contentment", "satisfaction",
  "happiness", "joy", "bliss", "delight", "pleasure", "ecstasy", "euphoria", "rapture", "enthusiasm",
  "excitement", "thrill", "adventure", "exploration", "discovery", "innovation", "creativity",
  "imagination", "fantasy", "wonder", "awe", "curiosity", "interest", "engagement", "involvement",
  "participation", "commitment", "dedication", "devotion", "passion", "zeal", "fervor", "ardor",
  "intensity", "vigor", "energy", "power", "force", "strength", "might", "potency", "capacity",
  "ability", "capability", "competence", "skill", "talent", "aptitude", "proficiency", "expertise",
  "mastery", "brilliance", "genius", "ingenuity", "cleverness", "craftiness", "cunning", "shrewdness",
  "astuteness", "sharpness", "keenness", "acuity", "acumen", "discernment", "perceptiveness",
  "insight", "wisdom", "sagacity", "judgment", "prudence", "caution", "carefulness", "thoughtfulness",
  "mindfulness", "awareness", "attentiveness", "alertness", "vigilance", "watchfulness", "observance",
  "receptiveness", "responsiveness", "adaptability", "flexibility", "versatility", "agility", "mobility",
  "fluidity", "grace", "elegance", "style", "charm", "charisma", "appeal", "attraction", "magnetism",
  "fascination", "allure", "enticement", "seduction", "temptation", "provocation", "stimulation",
  "exhilaration", "invigoration", "inspiration", "motivation", "encouragement", "empowerment", "upliftment",
  "edification", "enlightenment", "illumination", "clarity", "understanding", "comprehension", "grasp",
  "awareness", "consciousness", "perception", "insight", "foresight", "hindsight", "intuition", "instinct",
  "feeling", "sense", "sensitivity", "empathy", "sympathy", "compassion", "kindness", "gentleness",
  "tenderness", "affection", "love", "devotion", "loyalty", "faithfulness", "trustworthiness", "honesty",
  "integrity", "sincerity", "truthfulness", "authenticity", "genuineness", "realness", "openness",
  "transparency", "clarity", "simplicity", "purity", "innocence", "virtue", "righteousness", "goodness",
  "morality", "ethics", "justice", "fairness", "equity", "impartiality", "neutrality",
];

const noun = [
  "man", "woman", "girl", "kid", "warrior", "guardian", "hero", "shadow", "phantom", "knight",
  "tiger", "dragon", "eagle", "hawk", "panther", "serpent", "lion", "wolf", "cheetah", "falcon",
  "scorpion", "viper", "bat", "raven", "crow", "puma", "cougar", "lynx", "jaguar", "leopard",
  "griffin", "phoenix", "unicorn", "wizard", "witch", "sorcerer", "sorceress", "mage", "archer",
  "assassin", "thief", "ninja", "samurai", "ronin", "ronin", "samurai", "warlock", "sage", "prophet",
  "cyborg", "robot", "android", "alien", "extraterrestrial", "martian", "vulcan", "kryptonian",
  "giant", "titan", "colossus", "beast", "monster", "mutant", "genius", "detective", "inventor",
  "scientist", "engineer", "pilot", "commander", "soldier", "marine", "agent", "spy", "operative",
  "mercenary", "gladiator", "champion", "warlord", "conqueror", "emperor", "king", "queen", "prince",
  "princess", "duke", "duchess", "count", "countess", "baron", "baroness", "knight", "squire", "page",
  "villain", "nemesis", "foe", "adversary", "antagonist", "enemy", "traitor", "rebel", "renegade",
  "outlaw", "bandit", "pirate", "buccaneer", "corsair", "raider", "marauder", "scoundrel", "rogue",
  "vigilante", "avenger", "punisher", "protector", "defender", "savior", "rescuer", "champion",
  "liberator", "crusader", "paladin", "enforcer", "warden", "marshal", "sheriff", "deputy", "officer",
  "sergeant", "captain", "lieutenant", "major", "colonel", "general", "admiral", "commander",
  "chief", "director", "supervisor", "overseer", "inspector", "watcher", "observer", "monitor",
  "regulator", "controller", "arbitrator", "mediator", "negotiator", "diplomat", "ambassador",
  "envoy", "emissary", "representative", "delegate", "consul", "attaché", "liaison", "mediator",
  "facilitator", "coordinator", "leader", "head", "chief", "president", "governor", "mayor", "councilor",
  "legislator", "senator", "congressman", "congresswoman", "parliamentarian", "statesman",
  "diplomat", "ambassador", "envoy", "agent", "spy", "operative", "infiltrator", "saboteur", "hacker",
  "cryptographer", "codebreaker", "analyst", "strategist", "tactician", "planner", "architect",
  "designer", "builder", "creator", "inventor", "innovator", "visionary", "dreamer", "thinker",
  "philosopher", "theorist", "scholar", "intellectual", "academic", "professor", "teacher",
  "instructor", "educator", "mentor", "guide", "coach", "trainer", "advisor", "consultant",
  "counselor", "therapist", "psychologist", "psychiatrist", "doctor", "physician", "surgeon",
  "nurse", "medic", "healer", "curer", "shaman", "mystic", "sage", "oracle", "prophet", "seer",
  "visionary", "soothsayer", "diviner", "medium", "clairvoyant", "telepath", "empath", "psychic"
];