/*
 * @lc app=leetcode.cn id=1493 lang=javascript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0;
  let result = 0;
  let lastZero = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      continue;
    }

    if (lastZero === -1) {
      lastZero = i;
      continue;
    }

    result = Math.max(i - start - 1, result);
    start = lastZero + 1;
    lastZero = i;
  }
  
  let endResult = nums.length - start - 1;
  result = Math.max(result, endResult);
  return result;
};
// @lc code=end

console.log(longestSubarray([1, 1, 0, 1]));

