/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len <= 1) {
    return s;
  }

  const fill0 = Array.from({ length: len }, _ => 0);
  const result = [];
  let max = 0;
  let startIndex = 0;
  for (let i = len - 1; i >= 0; i--) {
    result[i] = [...fill0];
    for (let j = i; j < len; j++) {
      if (s[i] !== s[j]) {
        continue;
      }

      const temp = j - i;
      if (temp === 0) {
        result[i][j] = 1;        
      } else if (temp === 1) {
        result[i][j] = 2;
      } else {
        if (result[i+1][j-1] > 0) {
          result[i][j] = result[i + 1][j - 1] + 2;
        }
      }

      if (result[i][j] > max) {
        startIndex = i;
        max = result[i][j];
      }
    }
  }
  console.log(result, max, startIndex);
  return s.substr(startIndex, max);
};
// @lc code=end
console.log(longestPalindrome("a"));
