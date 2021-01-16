/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  const result = [1];
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        result[i] = Math.max(result[i], result[j] + 1);
      }
    }
    max = Math.max(max, result[i]);
  }

  return max;
};
// @lc code=end

console.log(lengthOfLIS([4,10,4,3,8,9]));
