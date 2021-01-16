/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  if (text1.length <= 0 || text2.length <= 0) {
    return 0;
  }
  
  const result = [];
  result[0] = Array.from({length: text2.length + 1}, _ => 0);

  for (let i = 1; i <= text1.length; i++) {
    result[i] = [0];
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i-1] === text2[j-1]) {
        result[i][j] = result[i - 1][j - 1] + 1;
      } else {
        result[i][j] = Math.max(result[i][j - 1], result[i - 1][j]);
      }
    }
  }

  return result[text1.length][text2.length];
};
// @lc code=end

console.log(longestCommonSubsequence("abcba", "abcbcba"));