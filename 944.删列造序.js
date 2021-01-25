/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  const rows = A.length;
  if (rows < 2) {
    return 0;
  }

  let result = 0;
  const columns = A[0].length;

  for (let i = 0; i < columns; i++) {
    let c = A[0][i];
    for (let j = 1; j < rows; j++) {
      if (A[j][i] < c) {
        result++;
        break;
      }

      c = A[j][i];
    }
  }

  return result;
};
// @lc code=end

console.log(minDeletionSize(['zyx', 'wvu', 'tsr']));
