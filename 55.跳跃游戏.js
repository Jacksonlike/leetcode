/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const len = nums.length;
  if (len <= 1) {
    return true;
  }

  const result = [true];
  for (let i = 0; i < len; i++) {
    if (!result[i]) {
      continue;
    }

    for (let j = 1; j <= nums[i]; j++) {
      if (i + j === len - 1) {
        return true;
      }
      if (i + j >= len) {
        break;
      }
      result[i + j] = true;
    }
  }

  return false;
};
// @lc code=end

console.log(canJump([2,3,1,1,4]));
