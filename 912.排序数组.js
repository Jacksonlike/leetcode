/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const swap = (a, b) => {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  };

  const sort = (start, end) => {
    if (end >= start) {
      return;
    }
    const t = nums[start];
    let base = start;

    for (let i = start + 1; i <= end; i++) {
      if (nums[i] < t) {
        swap(base, base + 1);
        if (base + 1 !== i) {
          swap(base, i);
        }
        base++;
      }
    }

    sort(start, base - 1);
    sort(base + 1, end);
  };

  sort(0, nums.length - 1);
  return nums;
};
// @lc code=end

console.log(sortArray([0, 3, 5, 7, 1, 3, 4]));
