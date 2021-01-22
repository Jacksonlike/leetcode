/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  const mergeTwoLists = (l1, l2) => {
    const head = new ListNode(-1);
  
    let now = head;
    while (l1 && l2) {
      if (l1.val > l2.val) {
        now.next = l2;
        l2 = l2.next;
      } else {
        now.next = l1;
        l1 = l1.next;      
      }
  
      now = now.next;
    }
  
    if (l1 !== null) now.next = l1;
    if (l2 !== null) now.next = l2;
  
    return head.next;
  }

  let len = 0;
  for (let n = head; n !== null; n = n.next) {
    len++;
  }

  const dummyHead = new ListNode(0, head);
  for (let subLength = 1; subLength < len; subLength <<= 1) {
    let start = dummyHead;
    let curr = dummyHead.next;
    while (curr) {
      let head1 = curr;
      for (let i = 1; i < subLength && curr; i++) {
        curr = curr.next;
      }

      let head2 = null;
      if (curr) {
        head2 = curr.next;
        curr.next = null;
      }

      curr = head2;
      for (let i = 1; i < subLength && curr; i++) {
        curr = curr.next;
      }

      let next = null;
      if (curr) {
        next = curr.next;
        curr.next = null;
      }

      start.next = mergeTwoLists(head1, head2);
      while (start.next) {
        start = start.next;
      }
      curr = next;
    }
  }

  return dummyHead.next;
};
// @lc code=end

