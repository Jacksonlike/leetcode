/*
 * @lc app=leetcode.cn id=480 lang=javascript
 *
 * [480] 滑动窗口中位数
 */

class Heap {
  constructor(list) {
    if (list && list.length > 0) {
      this.heapContainer = list;
      this.heapify();
    } else {
      this.heapContainer = [];
    }
  }

  readTop() {
    return this.heapContainer[0];
  }

  len() {
    return this.heapContainer.length;
  }

  push(item) {
    this.heapContainer.push(item);
    this.heapifyUp(this.len() - 1);
  }

  pop() {
    const len = this.len();
    if (len === 0) {
      return null;
    }

    if (len === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown(0);      
    return item;
  }

  isCorrectOrder(father, son) {
    throw new Error('xxx');
  }

  heapify() {
    for (let i = this.len() - 1; i > 0; i--) {
      const father = this.fatherIndex(i);
      if (!this.isCorrectOrder(father, i)) {
        this.swap(i, father);
      }
    }
  }

  heapifyUp(start) {
    while (start > 0) {
      const father = this.fatherIndex(start);
      if (this.isCorrectOrder(father, start)) {
        return;
      }

      this.swap(start, father);
      start = father;
    }
  }

  heapifyDown(start) {
    const len = this.len();
    while (true) {
      let abovePos = start;
      const left = this.leftSonIndex(start);
      const right = this.rightSonIndex(start);
      if (left < len && !this.isCorrectOrder(abovePos, left)) {
        abovePos = left;
      }
      if (right < len && !this.isCorrectOrder(abovePos, right)) {
        abovePos = right;
      }
      if (abovePos === start) {
        return;
      }

      this.swap(start, abovePos);
      start = abovePos;
    }
  }

  fatherIndex(i) {
    return Math.ceil(i / 2) - 1;
  }

  leftSonIndex(i) {
    return 2 * i + 1;
  }

  rightSonIndex(i) {
    return 2 * (i + 1);
  }

  swap(i, j) {
    const temp = this.heapContainer[i];
    this.heapContainer[i] = this.heapContainer[j];
    this.heapContainer[j] = temp;
  }

  print() {
    console.log(this.heapContainer);
  }
}

class MinHeap extends Heap {
  isCorrectOrder(father, son) {
    return this.heapContainer[father] <= this.heapContainer[son];
  }
}

class MaxHeap extends Heap {
  isCorrectOrder(father, son) {
    return this.heapContainer[father] >= this.heapContainer[son];
  }
}


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  if (k <= 1) {
    return nums;
  }

  let left = 0;
  let right = 0;
  const result = [];
  const deleteMap = new Map();
  const leftHeap = new MaxHeap();
  const rightHeap = new MinHeap();

  function setMedian() {
    const leftMax = leftHeap.readTop();
    const rightMin = rightHeap.readTop();
    if ((k & 1) === 0) {
      result.push((leftMax + rightMin) / 2);
    } else {
      result.push(leftMax);
    }
  }

  function balanceHeap() {
    while (right > left) {
      right--;
      left++;
      leftHeap.push(rightHeap.pop());
    }
    while (left > right + 1) {
      right++;
      left--;
      rightHeap.push(leftHeap.pop());
    }
    while (deleteMap[leftHeap.readTop()] > 0) {
      deleteMap[leftHeap.readTop()]--;
      leftHeap.pop();
    }
    while (deleteMap[rightHeap.readTop()] > 0) {
      deleteMap[rightHeap.readTop()]--;
      rightHeap.pop();
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (left <= 0 || item <= leftHeap.readTop()) {
      left++;
      leftHeap.push(item);
    } else {
      right++;
      rightHeap.push(item);
    }

    if (i >= k) {
      const dItem = nums[i - k];
      deleteMap[dItem] = (deleteMap[dItem] || 0) + 1;
      if (dItem <= leftHeap.readTop()) {
        left--;
      } else {
        right--;
      }
    }

    balanceHeap();
    if (i >= k - 1) {
      setMedian();
    }
  }
  return result;
};
// @lc code=end

console.log(medianSlidingWindow([6,5,9,5,4,9,1,7,5,5], 4));
