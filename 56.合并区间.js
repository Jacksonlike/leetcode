/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 0) {
    return [];
  }
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let area = sortedIntervals[0];
  for (const item of sortedIntervals) {
    if (item[0] <= area[1]) {
      area[1] = Math.max(item[1], area[1]);
    } else {
      result.push(area);
      area = item;
    }
  }

  result.push(area);
  return result;
};
// @lc code=end

console.log(merge([[8, 11],[1, 3], [2, 6], [8, 10], [15, 18]]));

