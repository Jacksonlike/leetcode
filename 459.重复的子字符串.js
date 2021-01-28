/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const len = s.length;
  if (len <= 1) {
    return false;
  }

  for (let i = 0; i < len / 2; i++) {
    if (len % (1 + i) !== 0) continue;

    let start = 0;
    for (let j = i + 1; j < len; j++) {
      if (s[j] !== s[start]) {
        break;
      }

      if (j === len - 1) {
        return true;
      }

      start = start === i ? 0 : start + 1;
    }
  }

  return false;
};
// @lc code=end

console.log(repeatedSubstringPattern('aba'));
