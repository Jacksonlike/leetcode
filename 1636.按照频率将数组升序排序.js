/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const cache = new Map();
  for (const num of nums) {
    cache[num] = (cache[num] || 0) + 1;
  }

  return nums.sort((a, b) =>
    cache[a] === cache[b] ? b - a : cache[a] - cache[b]);
};
// @lc code=end

