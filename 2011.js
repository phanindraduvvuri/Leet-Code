/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let num = 0;
  let operation;

  for (let i = 0; i < operations.length; i++) {
    operation = operations[i];

    if (operation == "--X" || operation == "X--") num--;
    else num++;
  }

  return num;
};

let testCases = [
  ["--X", "X++", "X++"],
  ["++X", "++X", "X++"],
  ["X++", "++X", "--X", "X--"],
];

testCases.forEach((testCase) =>
  console.log(finalValueAfterOperations(testCase))
);
