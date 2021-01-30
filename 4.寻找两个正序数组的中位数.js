/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

const { addListener } = require('process');

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;

  let i = 0;
  let j = 0;

  let result = [Infinity, Infinity];
  for (let x = Math.floor((m + n) / 2) + 1; x > 0; x--) {
    const a = nums1[i] ?? Infinity;
    const b = nums2[j] ?? Infinity;
    result[0] = result[1];
    if (a < b) {
      result[1] = a;
      i++;
    } else {
      result[1] = b;
      j++;
    }
  }

  let ans = result[1];
  if ((m + n) % 2 === 0) {
    ans = (result[0] + result[1]) / 2;
  }

  return ans;
};
// @lc code=end

console.log(findMedianSortedArrays([0,0,0], [0]));
