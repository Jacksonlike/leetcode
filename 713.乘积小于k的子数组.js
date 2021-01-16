/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  const len = nums.length;
  if (len <= 0 || k <= 1) {
    return 0;
  }
  let result = 0;
  let left = right = 0;
  let product = 1;
  while (right < len) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    right = left > right ? left : right;
    result += right - left + 1;
    right++;
  }
  return result;
};
// @lc code=end

