/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const len = nums.length;
  if (len <= 0) {
    return len;
  }

  let l = 0;
  let r = len - 1;

  while (r >= l) {
    const mid = Math.floor((l + r) / 2);
    const val = nums[mid];
    if (target === val) {
      return mid;
    }
    if (target > val) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
};
// @lc code=end

console.log(searchInsert([1, 3, 5, 6], 4));
