/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let inputString = s.trim();
  let n = inputString.length - 1;
  let wordLength = 0;

  while (n >= 0) {
    if (inputString.charAt(n) == " ") break;

    wordLength++;
    n--;
  }

  return wordLength;
};

const input = "  Hello World  ";
const res = lengthOfLastWord(input);

console.log(res);
