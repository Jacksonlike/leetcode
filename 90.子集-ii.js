/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const sortedNum = nums.sort();
  const result = [[]];
  const indexMap = new Map();

  for (const num of sortedNum) {
    const index = indexMap[num] || 0;
    const len = result.length;
    indexMap[num] = len;

    for (let i = index; i < len; i++) {
      const element = [...result[i], num];
      result.push(element);
    }
  }

  return result;
};
// @lc code=end

console.log(subsetsWithDup([4, 4, 4, 1, 4]));

