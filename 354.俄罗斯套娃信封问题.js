/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if (envelopes.length <= 1) {
    return envelopes.length;
  }

  const sortedEnvelopes = envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0]; 
    }
  }).map(item => item[1]);

  const result = [1];
  let max = 1;
  for (let i = 1; i < sortedEnvelopes.length; i++) {
    result[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (sortedEnvelopes[i] > sortedEnvelopes[j]) {
        result[i] = Math.max(result[j] + 1, result[i]);
      }
    }

    max = Math.max(max, result[i]);
  }

  return max;
};

// @lc code=end

console.log(maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1]]));
