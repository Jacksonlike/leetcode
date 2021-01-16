/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    nums[i] = 0;
    if (element !== 0) {
      nums[start] = element;
      start++;
    }
  }
};
// @lc code=end

