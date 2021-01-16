/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
  // i 表示当前第几天
  // j 表示买入了几次
  // k = 0 空闲状态，1 表示持有状态
  // 所有状态都是当日交易结束后的状态
  const dp = [[[0, -Infinity], [0, -Infinity], [0, -Infinity]]];
  for (let i = 1; i <= prices.length; i++) {
    const dailyDp = [];
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        dailyDp[j] = [0, -Infinity];
      } else {
        dailyDp[j] = [
          Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i - 1]),
          Math.max(dp[i - 1][j - 1][0] - prices[i - 1], dp[i - 1][j][1]),
        ];
      }
    }
    dp[i] = dailyDp;
  }

  return Math.max(0, dp[prices.length][1][0], dp[prices.length][2][0]);
};
// @lc code=end

console.log(maxProfit([3,3,5,0,0,3,1,4]));
