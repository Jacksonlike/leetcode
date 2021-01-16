/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const len = matrix.length;
  if (len <= 0) {
    return 0;
  }

  let result = matrix[0];

  for (let i = 1; i < len; i++) {
    let temp = [];
    const element = matrix[i];    
    let start = 0;
    for (let j = 0; j < len && j < k; j++) {
      for (; start < result.length && result[start] < element[j]; start++) {
        temp.push(result[start]);
      }

      temp.push(element[j]);
    }


    result = [...temp, ...result.slice(start)];
  }

  return result[k - 1];
};
// @lc code=end

console.log(kthSmallest( [
  [ 1 ]
], 1));
