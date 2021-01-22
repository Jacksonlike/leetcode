/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (s.length < 1) {
    return [];
  }

  const dp = [[s[0]]];

  for (let i = 1; i < s.length; i++) {
    const c = s[i];
    const len = dp.length;
    for (let j = 0; j < len; j++) {
      const element = dp[j];
      const lastIndex = element.length - 1;
      if (element[lastIndex] === c) {
        const newSubPalindromic = element.slice(0, lastIndex);
        newSubPalindromic.push(`${c}${c}`);
        dp.push(newSubPalindromic);
      }

      if (lastIndex - 1 >= 0 && element[lastIndex - 1] === c) {
        const newSubPalindromic = element.slice(0, lastIndex - 1);
        newSubPalindromic.push(`${c}${element[lastIndex]}${c}`);
        dp.push(newSubPalindromic);
      }

      element.push(c);
    }
  }

  return dp;
};
// @lc code=end

console.log(partition('aab'));
