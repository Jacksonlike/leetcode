/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  const sum = nums.reduce((pre, cur) => pre + Math.abs(cur), 0);
  const len = 2 * sum + 1
  let result = Array.from({ length: 2 * sum + 1 }, _ => 0);
  result[nums[0] + sum] += 1;
  result[-nums[0] + sum] += 1;

  if (S > sum || S < -sum) {
    return 0;
  }
  
  for (let j = 1; j < nums.length; j++) {
    // console.log(result);
    const num = nums[j];
    const temp = Array.from({ length: 2 * sum + 1 }, _ => 0);
    for (let i = 0; i < len; i++) {
      const element = result[i];
      if (element > 0) {
        temp[i - num] += element;
        temp[i + num] += element;
      }
    }
    result = temp;
  }

  return result[S + sum];
};
// @lc code=end

console.log(findTargetSumWays([0,0,1], 1));
