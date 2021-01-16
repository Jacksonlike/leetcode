/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  const sortedIntervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  const result = [];
  let max = 0;
  for (let i = 0; i < sortedIntervals.length; i++) {
    result[i] = 1;
    for (let j = 0; j < i; j++) {
      if (sortedIntervals[i][0] < sortedIntervals[j][1]) {
        continue;
      }
      result[i] = Math.max(result[j] + 1, result[i]);
    }
    
    max = Math.max(max, result[i]);
  }

  // console.log(result);
  return intervals.length - max;
};
// @lc code=end

console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2], [1, 3], [2, 3], [3, 4], [1, 3]]));
