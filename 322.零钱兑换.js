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
  const result = [0];
  for (let i = 1; i <= amount; i++) {
    let num = Infinity;
    for (const coin of coins) {
      const coinNum = (result[i - coin] ?? -1) + 1;
      if (coinNum > 0 && num > coinNum) {
        num = coinNum;
      }
    }

    result[i] = num === Infinity ? -1 : num;
  }

  console.log(result);
  return result[amount];
};
// @lc code=end