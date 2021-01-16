/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (r > l) {
    const m = Math.floor((r + l) / 2);
    if (nums[l] <= nums[m] && nums[m] < nums[r]) {
      break;
    }
    if (nums[m] >= nums[l]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return nums[l];
};
// @lc code=end

console.log(findMin([2]));
