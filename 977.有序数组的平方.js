/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const len = nums.length;
  if (len <= 0) {
    return [];
  }

  let left = 0;
  let right = len - 1;
  const result = [];
  while (right >= left) {
    const a = nums[left];
    const b = nums[right];
    if (a + b < 0) {
      result.push(Math.pow(a, 2));
      left++;
    } else {
      result.push(Math.pow(b, 2));
      right--;
    }
  }

  return result.reverse();
};
// @lc code=end

console.log(sortedSquares([-4,-1,0,3,10]));