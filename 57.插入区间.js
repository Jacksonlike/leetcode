/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let flag = false;
  for (const interval of intervals) {
    if (flag) {
      result.push(interval);
      continue;
    }

    if (interval[1] < newInterval[0]) {
      result.push(interval);
      continue;
    }

    if (interval[0] > newInterval[1]) {
      flag = true;
      result.push(newInterval);
      result.push(interval);
      continue;
    }

    newInterval[0] = Math.min(interval[0], newInterval[0]);
    newInterval[1] = Math.max(interval[1], newInterval[1]);
  }

  if (!flag) {
    result.push(newInterval);
  }

  return result;
};
// @lc code=end

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
