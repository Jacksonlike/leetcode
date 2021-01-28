/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  for (let target = 1; target <= n; target *= 2) {
    if (target === n) {
      return true;
    }
  }

  return false;
};
// @lc code=end

