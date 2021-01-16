/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let pre = 0;
  for (const num of nums) {
    pre = Math.max(num, pre + num);
    max = Math.max(pre, max);
  }

  return max;
};
// @lc code=end

