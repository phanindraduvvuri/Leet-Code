/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let n = digits.length;

  digits[n - 1] += 1;
  for (let i = n - 1; i >= 1; i--) {
    if (digits[i] == 10) {
      digits[i] = 0;
      digits[i - 1] += 1;
    }
  }

  if (digits[0] == 10) {
    digits[0] = 0;
    digits.unshift(1);
  }

  return digits;
};

/* ========================================================================== */
/* Running the program with test cases */
let testCases = [[1, 2, 3], [4, 3, 2, 1], [9], [1, 9], [9, 9], [9, 9, 9], [0]];

testCases.forEach((testCase) => console.log(plusOne(testCase)));
