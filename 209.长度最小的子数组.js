/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (nums.length <= 0) {
    return 0;
  }

  let start = 0, end = 0;
  let sum = 0;
  let result = Infinity;

  for (let i = 0; i < nums.length; i++) {
    end = i;
    sum += nums[end];
    if (sum >= s) {
      while (sum - nums[start] >= s) {
        sum -= nums[start];
        start++;
      }
      result = Math.min(result, end - start + 1);
    }
  }

  return result === Infinity ? 0 : result;
};
// @lc code=end

