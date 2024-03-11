/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let comb_arr = "";
  let i = 0,
    j = 0;

  while (i < word1.length && j < word2.length) {
    comb_arr = comb_arr.concat(word1[i]);
    comb_arr = comb_arr.concat(word2[j]);

    i++;
    j++;
  }

  while (i < word1.length) {
    comb_arr = comb_arr.concat(word1[i]);
    i++;
  }

  while (j < word2.length) {
    comb_arr = comb_arr.concat(word2[j]);
    j++;
  }

  return comb_arr;
};

let word1 = "abc";
let word2 = "pqr";

let res = mergeAlternately(word1, word2);

console.log(res);
