/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var checkCharInWord = function (word, char) {
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == char) return true;
  }

  return false;
};

var findWordsContaining = function (words, x) {
  let indexArray = [];

  for (let i = 0; i < words.length; i++) {
    if (checkCharInWord(words[i], x)) indexArray.push(i);
  }

  return indexArray;
};

/* Running the program with test cases */
let words = ["abc", "bcd", "aaaa", "cbc"],
  x = "z";

let res = findWordsContaining(words, x);

console.log(res);
