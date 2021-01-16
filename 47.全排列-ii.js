/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = [];
  const breakTrack = (track, rest) => {
    if (rest.length === 0) {
      result.push([...track]);
      return;
    }
    
    let lastChoose = undefined;
    for (let i = 0; i < rest.length; i++) {
    if (rest[i] === lastChoose) {
        continue;        
      }

      lastChoose = rest[i];
      track.push(lastChoose);
      rest.splice(i, 1);
      breakTrack(track, rest);
      track.pop(lastChoose);
      rest.splice(i, 0, lastChoose);
    }
  }

  breakTrack([], nums.sort());
  return result;
};
// @lc code=end
