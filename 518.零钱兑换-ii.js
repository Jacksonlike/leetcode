/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {

  const dp = Array.from({ length: amount + 1 }, _ => 0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i - coin >= 0) {
        dp[i] = dp[i] + dp[i - coin];
      }
    }
  }

  return dp[amount];
};
// @lc code=end

console.log(change(10, [10]));

