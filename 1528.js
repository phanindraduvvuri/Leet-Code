/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let returnStringArray = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    returnStringArray[indices[i]] = s.charAt(i);
  }

  return returnStringArray.join("");
};

/* ========================================================================== */
/* Running the program with test cases */
let testCases = [
  ["codeleet", [4, 5, 6, 7, 0, 2, 1, 3]],
  ["abc", [0, 1, 2]],
];

testCases.forEach((testCase) =>
  console.log(restoreString(testCase[0], testCase[1]))
);
