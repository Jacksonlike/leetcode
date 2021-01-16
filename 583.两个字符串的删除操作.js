/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // if (word1.length <= 0 || word2.length <= 0) {
  //   return 0;
  // }
  const result = [];
  result[0] = Array.from({ length: word1.length + 1 }, (_, i) => i);
  for (let i = 1; i <= word2.length; i++) {
    result[i] = [i];
    for (let j = 1; j <= word1.length; j++) {      
      if (word2[i - 1] === word1[j - 1]) {
        result[i][j] = result[i - 1][j - 1];
      } else {
        result[i][j] = Math.min(result[i - 1][j], result[i][j - 1]) + 1;
      }
    }    
  }
  
  return result[word2.length][word1.length]
};
// @lc code=end
console.log(minDistance("", "a"));
