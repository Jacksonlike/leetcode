/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.minStack = [Infinity];
  this.stack = [];
  this.length = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  this.minStack.push(Math.min(this.minStack[this.length], x));
  this.length += 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.length <= 0) {
    return;
  }
  this.length -= 1;
  this.minStack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.length];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack);

console.log(minStack.getMin(), "11111111");
console.log(minStack);
console.log(minStack.pop(), "222222222");
console.log(minStack);
console.log(minStack.top(), "3333333333");
console.log(minStack);
console.log(minStack.getMin(), "4444444444");
console.log(minStack);
