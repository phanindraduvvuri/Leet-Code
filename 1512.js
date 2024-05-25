/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let n = nums.length;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < j && nums[i] == nums[j]) cnt++;
    }
  }

  return cnt;
};

/* ========================================================================== */
/* Running the program with test cases */

let testCases = [
  [1, 2, 3, 1, 1, 3],
  [1, 1, 1, 1],
  [1, 2, 3],
];

testCases.forEach((testCase) => console.log(numIdenticalPairs(testCase)));
