/*
 * @lc app=leetcode.cn id=712 lang=javascript
 *
 * [712] 两个字符串的最小ASCII删除和
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (word1, word2) {
  const s1 = word1.split("").map(v => v.charCodeAt());
  const s2 = word2.split("").map(v => v.charCodeAt());
  
  const result = [];
  result[0] = [0];

  for (let i = 0; i <= s2.length; i++) {
    if (i !== 0) {
      result[i] = [s2[i - 1] + result[i - 1][0]];
    }
    for (let j = 1; j <= s1.length; j++) {
      if (i === 0) {
        result[0][j] = result[0][j - 1] + s1[j - 1];
        continue;
      }
      if (s2[i - 1] === s1[j - 1]) {
        result[i][j] = result[i - 1][j - 1];
      } else {
        result[i][j] = Math.min(
          result[i - 1][j] + s2[i - 1],
          result[i][j - 1] + s1[j - 1],
        );
      }
    }    
  }
  
  // console.log(result);
  return result[s2.length][s1.length]
};
// @lc code=end

console.log(minimumDeleteSum("a", "at"));