/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]];
  
  for (const num of nums) {
    let len = result.length;
    for (let i = 0; i < len; i++) {
      const item = [...result[i], num];
      result.push(item);
    }
  }
  return result;
};
// @lc code=end

