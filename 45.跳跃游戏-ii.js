/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // const len = nums.length;
  // if (len <= 1) {
  //   return 0;
  // }

  // const result = [];
  // for (let i = len - 2; i >= 0; i--) {
  //   result[i] = Infinity;
  //   for (let j = 1; j <= nums[i]; j++) {
  //     const index = i + j;
  //     if (index < len - 1) {
  //       result[i] = Math.min(result[index] + 1, result[i]);
  //     } else if (index === len - 1) {
  //       result[i] = 1;
  //     } else {
  //       break;
  //     }
  //   }
  // }

  // return result[0];
  const len = nums.length;
  let end = 0, farthest = 0;
  let jumps = 0;
  for (let i = 0; i < len - 1; i++) {
    farthest = Math.max(nums[i] + i, farthest);
    if (end == i) {
      jumps++;
      end = farthest;
    }
  }
  return jumps;
};
// @lc code=end

console.log(jump([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0]));
