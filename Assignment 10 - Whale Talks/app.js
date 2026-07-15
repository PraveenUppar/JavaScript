// Whale Talk Translator

// ============================================
// STEP 1: Store the phrase to translate.
// ============================================
const phrase = "turpentine and turtles";

// ============================================
// STEP 2: Loop through the phrase character by character, and build up
// a string containing only the vowels (a, e, i, o, u — no "y",
// no consonants, no spaces).
// ============================================
let vowelsOnly = "";

for (let i = 0; i < phrase.length; i++) {
  const char = phrase[i];

  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    vowelsOnly += char;
  }
}

// ============================================
// STEP 3: Loop through vowelsOnly and build the whale translation.
// Rules:
// - Every vowel gets uppercased (whale talk is sung loudly!)
// - "u" and "e" are extra long, so they get doubled
// - All other vowels (a, i, o) appear once, uppercased
// ============================================
let whaleTalk = "";

for (let i = 0; i < vowelsOnly.length; i++) {
  const vowel = vowelsOnly[i];

  if (vowel === "u" || vowel === "e") {
    whaleTalk += vowel.toUpperCase() + vowel.toUpperCase();
  } else {
    whaleTalk += vowel.toUpperCase();
  }
}

// ============================================
// STEP 4: Print the result.
// ============================================
console.log(whaleTalk);
