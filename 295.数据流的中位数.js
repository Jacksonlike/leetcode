/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */

class Heap {
  constructor(max) {
    this.max = !!max;
    this.data = [];
  }

  len() {
    return this.data.length;
  }

  push(item) {
    this.data.push(item);
    let index = this.data.length - 1;
    while (index > 0) {
      const fatherIndex = Math.ceil(index / 2) - 1;
      if (
        (this.max && this.data[fatherIndex] >= this.data[index])
        || (!this.max && this.data[fatherIndex] <= this.data[index])
      ) {
        break;
      }
      this.swap(index, fatherIndex);
      index = fatherIndex;
    }
  }

  pop() {
    const len = this.data.length - 1;
    if (len < 0) {
      return undefined;
    }

    this.swap(0, len);
    const result = this.data.pop();

    let start = 0;
    while (true) {
      const left = 2 * start + 1;
      const right = left + 1;
      let changePos = start;
      if (left < len && (
        (this.max && this.data[left] > this.data[changePos])
        || (!this.max && this.data[left] < this.data[changePos])
      )) {
        changePos = left;
      }
      if (right < len && (
        (this.max && this.data[right] > this.data[changePos])
        || (!this.max && this.data[right] < this.data[changePos])
      )) {
        changePos = right;
      }

      if (start === changePos) {
        break;
      }

      this.swap(start, changePos);
      start = changePos;
    }

    return result;
  }

  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  build(list) {
    for (const item of list) {
      this.push(item);
    }
    return this;
  }

  print() {
    console.log(this.data);
  }

  findLimit() {
    return this.data[0];
  }
}


var MedianFinder = function () {
  this.left = new Heap(true);
  this.right = new Heap(false);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (num > this.left.findLimit()) {
    this.right.push(num);
  } else {
    this.left.push(num);
  }
  
  const leftLen = this.left.len();
  const rightLen = this.right.len();
  if (leftLen < rightLen) {
    this.left.push(this.right.pop());
  } else if (rightLen + 1 < leftLen) {
    this.right.push(this.left.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let median = this.left.findLimit();
  if (this.left.len() === this.right.len()) {
    const rightLimit = this.right.findLimit()
    median = (median + rightLimit) / 2;
  }

  return median;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

const test = MedianFinder();
test.addNum(1)
test.addNum(2)
console.log(test.findMedian());
