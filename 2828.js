/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  return words.map((word) => word[0]).reduce((a, b) => a + b) == s;
};

/* ========================================================================== */
/* Running the program with test cases */
let testCases = [
  [["alice", "bob", "charlie"], "abc"],
  [["an", "apple"], "a"],
  [["never", "gonna", "give", "up", "on", "you"], "ngguoy"],
];

for (let i = 0; i < testCases.length; i++) {
  console.log(isAcronym(testCases[i][0], testCases[i][1]));
}
