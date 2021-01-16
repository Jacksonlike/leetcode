/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return nums[0] || 0;
  }

  let max = nums[0];
  let min = nums[0];
  let result = nums[0];
  for (let i = 1; i < len; i++) {
    const num = nums[i];
    const tempMax = max * num;
    const tempMin = min * num;
    max = Math.max(tempMax, num, tempMin);
    min = Math.min(tempMax, num, tempMin);
    result = Math.max(max, result);
  }

  return result;
};
// @lc code=end

console.log(maxProduct([-4, -3, -2]));
