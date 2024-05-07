/**
 * @param {string} detail
 * @returns {string}
 */
var getAge = function (detail) {
  return detail.substring(11, 13);
};

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  return details.map((detail) => getAge(detail)).filter((age) => age > 60)
    .length;
};

let testCases = [
  ["7868190130M7522", "5303914400F9211", "9273338290F4010"],
  ["1313579440F2036", "2921522980M5644"],
];

testCases.forEach((testCase) => console.log(countSeniors(testCase)));
