/*
 * @lc app=leetcode.cn id=1653 lang=javascript
 *
 * [1653] 使字符串平衡的最少删除次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  // 当前数据保留
  let stepKeep = 0;
  // 当前数据删除
  let stepAway = 1;

  for (let i = 1; i < s.length; i++) {
    const c = s[i];
    const b = s[i - 1];

    if (c === b) {
      stepAway += 1;
    } else if (c === 'a') {
      const temp = stepKeep;
      stepKeep = stepAway;
      stepAway = temp + 1;
    } else {
      const temp = stepKeep;
      stepKeep = Math.min(stepKeep, stepAway);
      stepAway = temp + 1;
    }
    // console.log(`(${i})${c}`, stepKeep, stepAway);
  }

  return Math.min(stepAway, stepKeep);
};
// @lc code=end

console.log(minimumDeletions('aababbab'));
