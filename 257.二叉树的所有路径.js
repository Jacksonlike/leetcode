/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  function breakTrack(chosen, node) {
    if (!node.left && !node.right) {
      result.push(chosen.join('->'));
      return;
    }

    if (node.left) {
      chosen.push(node.left.val);
      breakTrack(chosen, node.left);
      chosen.pop();
    }
    if (node.right) {
      chosen.push(node.right.val);
      breakTrack(chosen, node.right);
      chosen.pop();
    }
  }

  breakTrack([root.val], root);
  return result;
};
// @lc code=end

