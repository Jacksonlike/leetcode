/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const result = [];

  const len = S.length;
  const breakTrack = (chosen, index) => {
    const start = index;
    while (index < len) {
      if (S[index] > '9') {
        break;
      }
      index++;
    }
    if (index === len) {
      result.push(`${chosen}${S.slice(start, index)}`);
      return;
    }
    
    index++;
    breakTrack(`${chosen}${S.slice(start, index).toLowerCase()}`, index);
    breakTrack(`${chosen}${S.slice(start, index).toUpperCase()}`, index);
  }


  breakTrack('', 0);
  return result;
};
// @lc code=end

console.log(letterCasePermutation('a1b2'));
