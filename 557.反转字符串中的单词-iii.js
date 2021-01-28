/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .reduce((pre, cur) => `${pre} ${cur.split('').reverse().join('')}`, '')
    .trimStart();
};
// @lc code=end
