/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  
  let min = prices[0];
  let max = prices[0];
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > result) {
      result = Math.max(prices[i] - min, result);
      max = Math.max(max, prices[i]);
    }
    min = Math.min(min, prices[i]);
  }

  return result;
};
// @lc code=end

