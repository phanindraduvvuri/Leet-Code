/**
 * @param {string} str
 * @returns {boolean}
 */
let isAlphaNumeric = function (str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

/**
 *
 * @param {string} s
 * @returns {string[]}
 */
var createPalindromString = function (s) {
  let palindromString = [];

  for (let i = 0; i < s.length; i++) {
    if (isAlphaNumeric(s[i])) palindromString.push(s[i].toLowerCase());
  }

  return palindromString;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let palindromString = createPalindromString(s);

  return palindromString.join("") == palindromString.reverse().join("");
};

/* Running the program with test cases */
let testCases = ["A man, a plan, a canal: Panama", "race a car", " ", "0P"];

testCases.forEach((testCase) => console.log(isPalindrome(testCase)));
