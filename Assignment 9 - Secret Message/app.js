let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// ============================================
// STEP 1: Separate the actual quote from the citation. The quote is
// the first 19 words (indices 0-18); everything after that
// (-2015, Chris Pine, Learn JavaScript) is citation info.
// ============================================
const quoteWords = secretMessage.slice(0, 19);
const citationWords = secretMessage.slice(19);

// ============================================
// STEP 2: Join the quote words into a readable sentence.
// ============================================
const quote = quoteWords.join(" ");

// ============================================
// STEP 3: Clean up the citation. Currently it's
// ["-2015,", "Chris", "Pine,", "Learn", "JavaScript"] which reads
// awkwardly. Use splice to pull the year out of its current position
// and move it to the end, so the citation reads naturally as
// "Chris Pine, Learn JavaScript, 2015".
// ============================================
const citationCopy = [...citationWords];

// remove "-2015," from the front, keep track of it
const yearRaw = citationCopy.splice(0, 1)[0]; // "-2015,"

// clean up the year string: strip the leading "-" and trailing ","
const year = yearRaw.replace("-", "").replace(",", "");

// add the cleaned year to the end of the remaining citation words
citationCopy.push(`${year}`);

const citation = citationCopy.join(" ").replace("Pine,", "Pine,") + "";
// join into "Chris Pine, Learn JavaScript 2015"

// ============================================
// STEP 4: Combine the quote and citation into the final secret message.
// ============================================
const finalMessage = `"${quote}" - ${citation}`;

console.log(finalMessage);
