/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const window = new Set();
  let start = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (window.has(s[i])) {
      while (s[start] !== s[i]) {
        window.delete(s[start]);
        start++;
      }
      start++;
    }

    window.add(s[i]);
    result = Math.max(result, i - start + 1);
  }

  return result;
};
// @lc code=end

