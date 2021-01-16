/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const breakTrack = track => {
    if (track.size === nums.length) {
      result.push([...track]);
      return;
    }

    for (const choose of nums) {
      if (!track.has(choose)) {
        track.add(choose);
        breakTrack(track);
        track.delete(choose);
      }
    }
  }

  breakTrack(new Set());
  return result;
};
// @lc code=end

