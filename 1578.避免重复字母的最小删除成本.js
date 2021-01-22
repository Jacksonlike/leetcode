/*
 * @lc app=leetcode.cn id=1578 lang=javascript
 *
 * [1578] 避免重复字母的最小删除成本
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (s, cost) {
  let result = 0;

  for (let i = 0; i < s.length; ) {
    const c = s[i];
    let sum = cost[i];
    let all = [cost[i]];
    for (i += 1; i < s.length && c === s[i]; i++) {
      sum += cost[i];
      all.push(cost[i]);
    }

    if (all.length > 1) {
      result = result + sum - Math.max(...all);
    }
  }

  return result;
};
// @lc code=end
