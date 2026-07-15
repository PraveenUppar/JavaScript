let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

// ============================================
// STEP 1: Count how many times "literally" appears in storyWords,
// using .filter() to build an array of just the matches, then check
// its .length.
// ============================================
const unnecessaryWordCount = storyWords.filter(
  (word) => word === unnecessaryWord,
).length;

console.log(
  `The word "${unnecessaryWord}" appears ${unnecessaryWordCount} times.`,
);

// ============================================
// STEP 2: Remove all instances of "literally" from storyWords using
// .filter(), since it's an unnecessary/overused word.
// ============================================
storyWords = storyWords.filter((word) => word !== unnecessaryWord);

// ============================================
// STEP 3: Fix the misspelled word "beautifull" -> "beautiful" using
// .map() to transform each matching word while leaving others alone.
// ============================================
storyWords = storyWords.map((word) =>
  word === misspelledWord ? "beautiful" : word,
);

// ============================================
// STEP 4: Censor the bad word "freaking" by replacing it with asterisks
// matching its length, using .map().
// ============================================
storyWords = storyWords.map((word) =>
  word === badWord ? "*".repeat(word.length) : word,
);

// ============================================
// STEP 5: Join storyWords back into a single string, restoring the
// spaces that were removed by the original .split(' ').
// ============================================
const filteredStory = storyWords.join(" ");

// ============================================
// STEP 6: Print the cleaned-up story.
// ============================================
console.log(filteredStory);
