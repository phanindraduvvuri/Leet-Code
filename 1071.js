/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let gcd = "";
  let base = str1.length > str2.length ? str2 : str1;

  while (!(str1.length % base.length == 0 && str2.length % base.length == 0)) {}

  return gcd;
};

let str1 = "ABABAB",
  str2 = "ABAB";
let res;

res = gcdOfStrings(str1, str2);
console.log(res);
