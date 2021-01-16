/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((pre, current) => pre + current, 0);
  if (sum % 2 !== 0) {
    return false;
  }

  const bagSize = sum / 2;
  // 剩余背包容量的可能性
  let bagSizeReachable = [bagSize];
  
  for (const num of nums) {
    const nowBagSizeReachable = new Set(bagSizeReachable);
    for (const item of bagSizeReachable) {
      const newBagSize = item - num;
      if (newBagSize > 0) {
        nowBagSizeReachable.add(newBagSize);
      }
      if (newBagSize === 0) {
        return true;
      }
    }
    bagSizeReachable = nowBagSizeReachable;
  }

  return false;
};
// @lc code=end
console.log(canPartition([3,3,3,4,5]));
