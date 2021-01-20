/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length <= 0 || matrix[0].length <= 0) {
    return [];
  }
  
  let m = matrix.length;
  let n = matrix[0].length;
  const result = [];
  while (m > 0 && n > 0) {
    const x = (matrix.length - m) / 2;
    const y = (matrix[0].length - n) / 2;

    for (let i = x; i < x + n; i++) {
      result.push(matrix[y][i]);
    }

    for (let j = y + 1; j < y + m; j += 1) {
      result.push(matrix[j][x + n - 1]);
    }

    if (m > 1) {
      for (let i = x + n - 2; i >= x; i--) {
        result.push(matrix[y + m - 1][i]);
      }
    }
    if (n > 1) {
      for (let j = y + m - 2; j > y; j -= 1) {
        result.push(matrix[j][x]);
      }
    }
    m -= 2;
    n -= 2;
  }

  return result;
};
// @lc code=end

console.log(spiralOrder([[1],[2],[3],[5]]));