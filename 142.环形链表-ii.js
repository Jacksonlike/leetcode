/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let start = end = head;

  while (end && end.next) {
    start = start.next;
    end = end.next.next;

    if (start === end) {
      start = head;
      while (start !== end) {
        start = start.next;
        end = end.next;
      }

      return start;
    }

  }
  return null;
};
// @lc code=end

