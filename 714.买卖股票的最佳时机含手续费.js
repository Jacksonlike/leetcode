/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  // 0 --> 当天结束时为空闲状态
  // 1 --> 当天结束时为持有状态  

  let yesterdayDp = [0, -Infinity];
  let max = 0;
  for (let i = 1; i <= prices.length; i++) {
    const todayDp = [
      Math.max(yesterdayDp[0], yesterdayDp[1] + prices[i - 1] - fee),
      Math.max(yesterdayDp[0] - prices[i - 1], yesterdayDp[1]),
    ];

    max = Math.max(max, todayDp[0]);
    yesterdayDp = todayDp
  }

  return max;
};
// @lc code=end

