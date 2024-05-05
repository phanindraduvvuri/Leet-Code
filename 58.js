/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let words = s.trim().split(" ");
  return words[words.length - 1].length;
};

const input = "  Hello World  ";
const res = lengthOfLastWord(input);

console.log(res);
