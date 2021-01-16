/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  // i 表示当前第几天
  // j 表示买入了几次
  // k = 0 空闲状态，1 表示持有状态
  // 所有状态都是当日交易结束后的状态
  let max = 0;
  const dp = [Array.from({length: k + 1}, _ => [0, -Infinity])];
  for (let i = 1; i <= prices.length; i++) {
    const dailyDp = [];
    for (let j = 0; j <= k; j++) {
      if (j === 0) {
        dailyDp[j] = [0, -Infinity];
      } else {
        dailyDp[j] = [
          Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i - 1]),
          Math.max(dp[i - 1][j - 1][0] - prices[i - 1], dp[i - 1][j][1]),
        ];
      }

      max = Math.max(dailyDp[j][0], max);
    }
    dp[i] = dailyDp;
  }

  return max;
};
// @lc code=end

console.log(maxProfit(2, [3,2,6,5,0,3]));

