/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    if (s.indexOf(t.charAt(i)) == -1) return t.charAt(i);
  }
};

let testCases = [
  ["abcd", "abcde"],
  ["", "y"],
];

testCases.forEach((testCase) =>
  console.log(findTheDifference(testCase[0], testCase[1]))
);
