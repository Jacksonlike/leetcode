/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  const sortedPoints = points.sort((a, b) => {
    return a[1] - b[1];
  });

  let min = 0;
  let kill = -Infinity;
  for (const point of sortedPoints) {
    if (kill < point[0]) {
      min++;
      kill = point[1];
    }
  }

  return min;
};
// @lc code=end

console.log(findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]));

