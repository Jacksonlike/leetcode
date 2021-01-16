/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0;
  }

  let depth = 0;
  const list = [root];
  while (list.length > 0) {
    let length = list.length
    depth += 1;
    for (let i = 0; i < length; i++) {      
      const node = list.shift();
      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) {
        list.push(node.left);
      }
      if (node.right) {
        list.push(node.right);
      }
    }
  }

  return depth;
};
// @lc code=end

