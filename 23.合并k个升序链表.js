/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length <= 1) {
    return lists[0] || null;
  }

  const merge = (a, b) => {
    if (!a) return b;
    if (!b) return a;
    
    let result = a;
    if (a.val > b.val) {
      result = b;
      b = b.next;
    } else {
      a = a.next;
    }

    let start = result;
    while (a && b) {
      if (a.val > b.val) {
        start.next = b;
        b = b.next;
      } else {
        start.next = a;
        a = a.next;
      }
      start = start.next;
    }

    if (a) start.next = a;
    if (b) start.next = b;

    return result;
  }
  
  let result = lists;
  while (result.length > 1) {
    let temp = [];
    for (let i = 0; i < result.length / 2; i++) {
      if (2 * i + 1 >= result.length) {
        temp.push(result[2 * i]);
      } else {
        temp.push(merge(result[2 * i], result[2 * i + 1]));
      }
    }
    result = temp;
  }
  return result[0];
};
// @lc code=end

console.log(mergeKLists([null, null, null, null, null]));

