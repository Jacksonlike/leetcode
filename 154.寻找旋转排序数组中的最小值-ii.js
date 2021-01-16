/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (r > l) {
    const m = Math.floor((r + l) / 2);
    const lVal = nums[l];
    const rVal = nums[r];
    const mVal = nums[m];
    
    if (mVal > rVal) {
      l = m + 1;
    } else if (lVal === mVal && mVal === rVal) {
      r--;
    } else {
      r = m;
    }
  }
  return nums[l];
};
// @lc code=end

console.log(findMin([2,2,0,2,2,2,2,2]));
console.log(findMin([5,6,0,2,2,2,3,4]));
console.log(findMin([1,2,2,2,2,3,4]));
console.log(findMin([2,2,2,2]));
console.log(findMin([2]));

