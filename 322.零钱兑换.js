/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const result = Array.from({ length: amount + 1 }, (_, i) => i === 0 ? 0 : Infinity);

  for (const coin of coins) {
    result[coin] = 1;
    for (let i = coin; i <= amount; i++) {
      result[i] = Math.min(result[i - coin] + 1, result[i]);
    }
  }

  // console.log(result);
  return result[amount] === Infinity ? -1 : result[amount];
};
// @lc code=end

console.log(coinChange([2,5,10,1], 27));
