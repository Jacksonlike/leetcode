/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let result = [Infinity, 0];
  for (const layer of triangle) {
    const temp = [Infinity];
    for (let i = 0; i < layer.length; i++) {
      let distance = Math.min(result[i], result[i + 1]);
      temp.push(distance + layer[i]);
    }
    temp.push(Infinity);
    result = temp;
  }

  return Math.min(...result);
};
// @lc code=end

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));

