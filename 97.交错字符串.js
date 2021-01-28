/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const len1 = s1.length;
  const len2 = s2.length;
  const len3 = s3.length;

  if (len3 !== len1 + len2) {
    return false;
  }

  const breakTrack = (p1, p2, p3) => {
    if (p3 === len3) {
      return true;
    }

    if (p1 < len1 && s1[p1] === s3[p3]) {
      if (breakTrack(p1 + 1, p2, p3 + 1)) {
        return true;
      }
    }

    if (p2 < len2 && s2[p2] === s3[p3]) {
      if (breakTrack(p1, p2 + 1, p3 + 1)) {
        return true;
      }
    }

    return false;
  };

  return breakTrack(0, 0, 0);
};
// @lc code=end

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
