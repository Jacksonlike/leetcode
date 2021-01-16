/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (m === n) {
    return head;
  }
  let now = head;
  let begin = null;
  let temp = end = null;
  for (let pos = 1; ; pos++) {
    if (pos < m) {
      if (pos + 1 === m) {
        begin = now;
      }
      now = now.next;
      continue;
    }

    temp = now.next;
    if (pos === n) {
      now.next = end;
      if (begin) {
        begin.next.next = temp;
        begin.next = now;
      } else {
        head.next = temp;
        head = now;
      }
      return head;
    }

    now.next = end;
    end = now;
    now = temp;
  }
};

function createNode(val, next) {
  return {
    val,
    next: next || null
  }
}

function createList(nums) {
  const head = createNode(nums[0]);
  let now = head;
  for (let i = 1; i < nums.length; i++) {
    now.next = createNode(nums[i]);
    now = now.next;
  }
  return head;
}

function print(head) {
  let str = '';
  while (head !== null) {
    str += `${head.val} -> `;
    head = head.next;
  }

  str += 'null';
  console.log(str);
}

print(reverseBetween(createList([1, 2, 3, 4, 5]), 3, 4));