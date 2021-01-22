/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const len = s.length;
  if (len <= 1) {
    return 0;
  }

  const isPalindrome = [];
  for (let i = len - 1; i >= 0; i--) {
    isPalindrome[i] = [];
    isPalindrome[i][i] = true;
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        if (i === j - 1) {
          isPalindrome[i][j] = true;
        } else {
          isPalindrome[i][j] = isPalindrome[i + 1][j - 1];
        }
      } else {
        isPalindrome[i][j] = false;
      }
    }
  }

  // console.log(isPalindrome);

  const dp = [0];
  dp[-1] = -1;
  for (let i = 1; i < len; i++) {
    const ans = [dp[i - 1] + 1];
    for (let j = i - 1; j >= 0; j--) {
      if (isPalindrome[j][i]) {
        ans.push(1 + dp[j - 1]);
      }
    }

    dp[i] = Math.min(...ans);
  }

  // console.log(dp);
  return dp[len - 1];
};
// @lc code=end

console.log(minCut('aab'));
