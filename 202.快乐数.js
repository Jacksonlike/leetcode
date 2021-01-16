/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  function getSum(data) {
    let result = 0;
    while (data > 0) {
      const mod = data % 10;
      data = (data - mod) / 10;
      result += mod ** 2;
    }

    return result;
  }

  const has = new Set();
  while (!has.has(n)) {
    has.add(n);
    n = getSum(n);
    if (n === 1) {
      return true;
    }
  }

  return false;
};
// @lc code=end

console.log(isHappy(19));
