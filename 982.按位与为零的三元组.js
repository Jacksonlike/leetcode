/*
 * @lc app=leetcode.cn id=982 lang=javascript
 *
 * [982] 按位与为零的三元组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var countTriplets = function(A) {
  let result = 0;
  const mem = new Map();
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      const temp = A[i] & A[j];
      if (!mem.has(temp)) {
        let num = 0;
        for (let k = 0; k < A.length; k++) {
          if ((temp & A[k]) == 0) num++;
        }
        mem[temp] = num;
      }
      result += mem[temp];
    }
  }
  return result;
};
// @lc code=end

