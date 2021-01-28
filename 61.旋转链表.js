/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return null;
  }
  const rightPoint = (target) => {
    let step = 0;
    let start = head;
    for (; start.next && step < target; step++) {
      start = start.next;
    }

    if (step === target) {
      return start;
    }
    
    return rightPoint(target % (step + 1));
  };

  let right = rightPoint(k);
  let left = head;
  if (right === head) {
    return head;
  }

  while (right.next) {
    left = left.next;
    right = right.next;
  }

  const result = left.next;
  right.next = head;
  left.next = null;

  return result;
};
// @lc code=end

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

print(rotateRight(createList([1, 2, 3]), 4));
