/*
 * @lc app=leetcode.cn id=955 lang=javascript
 *
 * [955] 删列造序 II
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

  let equalRows = Array.from({ length: A.length - 1 }, (_, i) => i + 1);
  const columns = A[0].length;
  let result = 0;
  for (let i = 0; i < columns; i++) {
    if (equalRows.length === 0) {
      break;
    }
    let temp = [];

    for (let j = 0; j < equalRows.length; j++) {
      const index = equalRows[j];
      const el = A[index][i];
      const lastEl = A[index - 1][i];
      if (el < lastEl) {
        result++;
        temp = equalRows;
        break;
      }
      if (el === lastEl) {
        temp.push(index);
      }
    }
    equalRows = temp;
  }

  return result;
};
// @lc code=end

console.log(minDeletionSize(['abx', 'agz', 'bgc', 'bfc']));
