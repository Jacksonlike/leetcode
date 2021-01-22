/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const len = s.length;
  if (len < 2) {
    return len;
  }
  
  let max = 0;
  let dp = [];
  for (let j = 0; j < s.length; j++) {
    const temp = [];
    temp[j] = 1;
    dp[j] = 0;
    for (let i = j - 1; i >= 0; i--) {
      if (s[j] === s[i]) {
        temp[i] = dp[i + 1] + 2;
      } else {
        temp[i] = Math.max(dp[i], temp[i + 1]);
      }
      max = Math.max(temp[i], max);
    }
    dp = temp;
  }
  
  return max;
};
// @lc code=end

