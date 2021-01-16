/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 0 --> 当天结束时为空闲状态
  // 1 --> 当天结束时为冷冻状态
  // 2 --> 当天结束时为持有状态
  let max = 0;
  let yesterdayDp = [0, -Infinity, -Infinity];
  let todayDp = [];
  for (let i = 0; i < prices.length; i++) {
    todayDp = [
      Math.max(yesterdayDp[1], yesterdayDp[0]),
      yesterdayDp[2] + prices[i],
      Math.max(yesterdayDp[0] - prices[i], yesterdayDp[2]),
    ];

    // console.log(todayDp);
    max = Math.max(max, todayDp[0], todayDp[1]);
    yesterdayDp = todayDp;
  }

  return max;
};
// @lc code=end

console.log(maxProfit([1, 2, 4]));
