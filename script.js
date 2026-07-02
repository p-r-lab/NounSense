let currentWord;
let score = 0;
let total = 0;
let usedWords = [];

const endings = [
  "ung",
  "heit",
  "keit",
  "schaft",
  "tion",
  "nis",
  "chen",
  "lein",
  "er",
  "el",
  "en",
  "e"
];

let groups = [];
let currentGroupIndex = 0;

function setMode(mode) {
  const practiceMode = document.getElementById("practiceMode");
  const groupMode = document.getElementById("groupMode");

  if (mode === "practice") {
    practiceMode.classList.remove("hidden");
    groupMode.classList.add("hidden");
  } else {
    practiceMode.classList.add("hidden");
    groupMode.classList.remove("hidden");

    if (groups.length === 0) {
      buildGroups();
    }

    showGroup();
  }
}

function nextWord() {
  document.getElementById("result").textContent = "";
  document.getElementById("meaning").textContent = "";
  document.getElementById("rule").textContent = "";

  if (usedWords.length === words.length) {
    usedWords = [];
  }

  const unusedWords = words.filter(word => !usedWords.includes(word.noun));
  currentWord = unusedWords[Math.floor(Math.random() * unusedWords.length)];

  usedWords.push(currentWord.noun);

  document.getElementById("noun").textContent = currentWord.noun;
}


function checkAnswer(selectedArticle) {
  const result = document.getElementById("result");
  const meaning = document.getElementById("meaning");
  const rule = document.getElementById("rule");

  result.className = "";

  total++;

    if (selectedArticle === currentWord.article) {
        score++;
    result.textContent = "✅ Correct!";
    result.classList.add("correct");
  } else {
    result.textContent = `❌ Wrong. It is ${currentWord.article} ${currentWord.noun}`;
    result.classList.add("wrong");
  }

  document.getElementById("score").textContent = `${score}/${total}`;

  meaning.textContent = `Meaning: ${currentWord.meaning || "No meaning available"}`;

  if (currentWord.plural) {
    meaning.textContent += ` | Plural: ${currentWord.plural}`;
  }

  
  const logic = getLogic(currentWord);

    if (logic) {
        rule.textContent = `Article logic: ${logic}`;
    } else {
        rule.textContent = "";
    }
}




function getLogic(word) {
  const noun = word.noun.toLowerCase();

  const endingRules = [
    { ending: "ung", article: "die", gender: "feminine" },
    { ending: "heit", article: "die", gender: "feminine" },
    { ending: "keit", article: "die", gender: "feminine" },
    { ending: "schaft", article: "die", gender: "feminine" },
    { ending: "tion", article: "die", gender: "feminine" },
    { ending: "ur", article: "die", gender: "feminine" },

    { ending: "chen", article: "das", gender: "neuter" },
    { ending: "lein", article: "das", gender: "neuter" },
    { ending: "ment", article: "das", gender: "neuter" },
    { ending: "um", article: "das", gender: "neuter" },

    { ending: "er", article: "der", gender: "masculine" },
    { ending: "ling", article: "der", gender: "masculine" },
    { ending: "ismus", article: "der", gender: "masculine" }
  ];

  const matchedRule = endingRules.find(rule => noun.endsWith(rule.ending));

  if (!matchedRule) { return ""; }

  if (matchedRule.article === word.article) {
    return `Nouns ending with -${matchedRule.ending} are usually ${matchedRule.gender}.`;
  }

  return `This word is an exception. Even though many nouns ending with -${matchedRule.ending} are usually ${matchedRule.gender}, this word is ${word.article}.`;
}

function buildGroups() {
  groups = [];

  endings.forEach(ending => {
    ["der", "die", "das"].forEach(article => {
      const matchedWords = words.filter(word =>
        word.article === article &&
        word.noun.toLowerCase().endsWith(ending)
      );

      if (matchedWords.length >= 3) {
        groups.push({
          article: article,
          ending: ending,
          words: matchedWords
        });
      }
    });
  });
}

function showGroup() {
  if (groups.length === 0) {
    document.getElementById("groupTitle").textContent = "No groups found";
    document.getElementById("groupWords").innerHTML = "";
    return;
  }

  const group = groups[currentGroupIndex];

  document.getElementById("groupTitle").textContent =
    `${group.article} words ending in -${group.ending}`;

  const selectedWords = group.words.slice(0, 8);

  document.getElementById("groupWords").innerHTML = selectedWords.map(word => `
    <div class="group-word">
      <strong>${word.article} ${word.noun}</strong><br>
      ${word.meaning || "No meaning available"}
    </div>
  `).join("");
}

function nextGroup() {
  currentGroupIndex++;

  if (currentGroupIndex >= groups.length) {
    currentGroupIndex = 0;
  }

  showGroup();
}

nextWord();