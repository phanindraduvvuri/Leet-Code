/**
 * @param {string} openBracket
 * @param {string} closingBracket
 * @return {boolean}
 */
let isValidBracketPair = (openBracket, closingBracket) => {
  if (openBracket == "(" && closingBracket == ")") return true;

  if (openBracket == "[" && closingBracket == "]") return true;

  if (openBracket == "{" && closingBracket == "}") return true;

  return false;
};

/**
 * @param {string} bracket
 * @return {boolean}
 */
let isOpenBracket = (bracket) => {
  return bracket == "(" || bracket == "[" || bracket == "{";
};

/**
 * @param {string} bracket
 * @returns {boolean}
 */
let isClosingBracket = (bracket) => {
  return bracket == ")" || bracket == "]" || bracket == "}";
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (isOpenBracket(s[i])) stack.push(s[i]);
    else if (isClosingBracket(s[i])) {
      var openBracket = stack.pop();
      var closingBracket = s[i];

      if (!isValidBracketPair(openBracket, closingBracket)) return false;
    }
  }

  return stack.length > 0 ? false : true;
};

let testCases = ["()", "()[]{}", "(]", "{[(]}", "(", "((("];

testCases.forEach((testCase) => console.log(isValid(testCase)));
