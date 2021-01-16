/*
 * @lc app=leetcode.cn id=1144 lang=javascript
 *
 * [1144] 递减元素使数组呈锯齿状
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  const len = nums.length;
  if (len < 2) {
    return 0;
  }

  function breakTrack(choose, index, bigger, initial) {
    if (index === len) {
      return initial;
    }

    let item = nums[index];
    index++;
    if (bigger) {
      if (item <= choose) {
        initial += (choose - item + 1);
      }
      return breakTrack(item, index, false, initial);
    } else {
      if (item >= choose) {
        initial += (item - choose + 1);
        item = choose - 1;
      }
      return breakTrack(item, index, true, initial);
    }
  }

  return Math.min(
    breakTrack(nums[0], 1, true, 0),
    breakTrack(nums[0], 1, false, 0),
  )
};
// @lc code=end

