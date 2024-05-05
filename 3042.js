/**
 *
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
let isPrefixAndSuffix = function (str1, str2) {
  if (str1.length > str2.length) return false;

  // Is str1 a prefix of str2
  if (str2.substring(0, str1.length) != str1) return false;

  // Is str1 a suffix of str2
  if (str2.substring(str2.length - str1.length) != str1) return false;

  return true;
};

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i < j && isPrefixAndSuffix(words[i], words[j])) count++;
    }
  }

  return count;
};

let testCases = [
  ["a", "aba", "ababa", "aa"],
  ["pa", "papa", "ma", "mama"],
  ["abab", "ab"],
];

let res = testCases.map((testCase) => countPrefixSuffixPairs(testCase));

console.log(res);
