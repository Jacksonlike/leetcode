/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let result = 0;
  for (let ret = x; ret > 0; ret = Math.floor(ret / 10)) {
    result = (ret % 10) + 10 * result;
  }

  return result === x;
};
// @lc code=end
