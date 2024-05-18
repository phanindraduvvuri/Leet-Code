/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  let res = [];
  words.map((word) => res.push(...word.split(separator)));

  return res.filter((word) => word.length > 0);
};

/* ========================================================================== */
/* Running the program with test cases */
let testCases = [
  [["one.two.three", "four.five", "six"], "."],
  [["$easy$", "$problem$"], "$"],
  [["|||"], "|"],
];

for (let i = 0; i < testCases.length; i++) {
  console.log(splitWordsBySeparator(testCases[i][0], testCases[i][1]));
}
