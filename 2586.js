/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  return words.slice(left, right + 1).filter((word) => checkVowelString(word))
    .length;
};

/**
 * @param {string} word
 * @return {boolean}
 */
var checkVowelString = function (word) {
  let firstChar = word[0],
    lastChar = word[word.length - 1];

  let vowels = ["a", "e", "i", "o", "u"];

  return vowels.includes(firstChar) && vowels.includes(lastChar);
};

let testCases = [
  [["are", "amy", "u"], 0, 2],
  [["hey", "aeo", "mu", "ooo", "artro"], 1, 4],
  [["ce", "ai"], 1, 1],
];

testCases.forEach((testCase) =>
  console.log(vowelStrings(testCase[0], testCase[1], testCase[2]))
);
