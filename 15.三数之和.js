/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNum = nums.sort((a,b) => a -b);
  let result = [];

  const right = sortedNum.length - 1;
  for (let left = 0; left < sortedNum.length; left++) {
    if (sortedNum[left] > 0) {
      return result;
    }

    if (sortedNum[left] === sortedNum[left-1]) {
      continue;
    }

    let l = left + 1;
    let r = right;
    while (r > l) {
      const calc = sortedNum[l] + sortedNum[r] + sortedNum[left];
      if (calc > 0) {
        r -= 1;
      } else if (calc < 0) {
        l += 1;
      } else {
        result.push([sortedNum[l], sortedNum[r], sortedNum[left]]);
        while (r > l && sortedNum[l] === sortedNum[l+1]) {
          l++;
        }
        while (r > l && sortedNum[r] === sortedNum[r+1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }

  return result;
};
// @lc code=end

console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]));
