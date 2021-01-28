/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const cache = new Map();
  const mix = (num) => {
    const t = parseInt(num);
    let result = '';
    let carry = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
      const r = parseInt(num1[i]) * t + carry;
      result = `${r % 10}${result}`;
      carry = Math.floor(r / 10);
    }


    return `${carry}${result}`;
  };

  const add = (origin, plus, index) => {
    let result = '';
    let carry = 0;
    let oLen = origin.length;
    let pLen = plus.length;

    for (let i = 1; i <= oLen || i <= pLen + index; i++) {
      const r =
        (parseInt(origin[oLen - i]) || 0) +
        (parseInt(plus[pLen - i + index]) || 0) +
        carry;
      result = `${r % 10}${result}`;
      carry = Math.floor(r / 10);
    }

    return result;
  };

  return (
    num2
      .split('')
      .reverse()
      .reduce((pre, cur, i) => {
        let res = cache.get(cur);
        if (!res) {
          res = mix(cur);
          cache.set(cur, res);
        }
        // console.log(pre, res, i, cur);
        return add(pre, res, i);
      }, '0')
      .replace(/^0*/, '') || '0'
  );
};
// @lc code=end

console.log(multiply('9', '9'));
