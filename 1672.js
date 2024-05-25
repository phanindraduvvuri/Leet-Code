/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    maxWealth = Math.max(
      maxWealth,
      accounts[i].reduce((a, b) => a + b)
    );
  }

  return maxWealth;
};

let testCases = [
  [
    [1, 2, 3],
    [3, 2, 1],
  ],
  [
    [1, 5],
    [7, 3],
    [3, 5],
  ],
  [
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ],
];

testCases.forEach((testCase) => console.log(maximumWealth(testCase)));
