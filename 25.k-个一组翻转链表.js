/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function (head, k) {
  if (k < 2) {
    return head;
  }

  let start = null;
  let end = head;
  let len = 1;
  while (end != null) {
    if (len < k) {
      end = end.next;
      len++;
      continue;
    }

    len = 1;
    end = end.next;
    let intervalEnd = end;
    let temp = newStart = start ? start.next : head;
    
    while (temp !== end) {
      let intervalBegin = temp;
      temp = intervalBegin.next;
      intervalBegin.next = intervalEnd;
      intervalEnd = intervalBegin;
    }

    if (start) {
      start.next = intervalEnd;
    } else {
      head = intervalEnd;
    }

    start = newStart;
  }

  return head;
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

print(reverseKGroup(createList([1, 2, 3, 4, 5]), 2));
