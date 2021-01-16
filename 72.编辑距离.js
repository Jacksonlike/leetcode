/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const result = [];
  result[0] = Array.from({ length: word2.length + 1 }, (_, i) => i);
  for (let i = 1; i <= word1.length; i++) {
    result[i] = [i]
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        result[i][j] = result[i - 1][j - 1];
      } else {
        result[i][j] = Math.min(
          result[i - 1][j - 1],
          result[i - 1][j],
          result[i][j - 1],
        ) + 1;
      }
    }
  }

  return result[word1.length][word2.length];
};
// @lc code=end

