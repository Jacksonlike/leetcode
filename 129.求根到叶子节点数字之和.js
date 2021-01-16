/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) {
    return 0;
  }

  let result = 0;
  function breakTrack(sum, node) {
    if (!node.left && !node.right) {
      result += sum;
      return;
    }
    const oldSum = sum;

    if (node.left) {
      sum = oldSum * 10 + node.left.val;
      breakTrack(sum, node.left);
    }
    if (node.right) {
      sum = oldSum * 10 + node.right.val;
      breakTrack(sum, node.right);
    }
  }

  breakTrack(root.val, root);
  return result;
};
// @lc code=end

