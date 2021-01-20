/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n <= 0) {
    return [];
  }
  
  let width = n;
  let count = 0;
  const matrix = Array.from({ length: n }, _ => []);
  while (width > 0 && width > 0) {
    const x = (n - width) / 2;

    for (let i = x; i < x + width; i++) {
      matrix[x][i] = ++count;
    }

    for (let j = x + 1; j < x + width; j++) {
      matrix[j][x + width - 1] = ++count;
    }

    if (width > 1) {
      for (let i = x + width - 2; i >= x; i--) {
        matrix[x + width - 1][i] = ++count;
      }
      for (let j = x + width - 2; j > x; j--) {
        matrix[j][x] = ++count;
      }
    }
    
    width -= 2;
  }

  return matrix;
};
// @lc code=end

