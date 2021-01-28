/*
 * @lc app=leetcode.cn id=1027 lang=javascript
 *
 * [1027] 最长等差数列
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function (A) {
  const len = A.length;
  if (len <= 2) {
    return len;
  }

  const dp = [new Map()];
  let result = 2;
  for (let i = 1; i < len; i++) {
    dp[i] = new Map();
    for (let j = 0; j < i; j++) {
      const diff = A[i] - A[j];
      if (dp[j][diff]) {
        dp[i][diff] = dp[j][diff] + 1;
        result = Math.max(dp[i][diff], result);
      } else {
        dp[i][diff] = 2;
      }
    }
  }

  return result;
};
// @lc code=end

console.log(longestArithSeqLength([3, 6, 9, 12]));
