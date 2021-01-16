/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const singleLine = Array.from({ length: n }, () => '.');

  const result = [];
  let level = 0;
  const breakTrack = (chosen, cannotChoose) => {
    if (level === n) {
      const way = chosen.map(item => {
        const temp = [...singleLine];
        temp[item] = 'Q';
        return temp.join('');
      })
      result.push(way);
      return;
    }

    level++;
    for (let index = 0; index < n; index++) {
      const num = index + (level - 1)*n;
      if (cannotChoose.has(num)) {
        continue;
      }
      
      const temp = [...cannotChoose];
      
      chosen.push(index);
      for (let i = level; i < n; i++) {
        const lineCenter = i * n + index
        cannotChoose.add(lineCenter);
        if (index - i + level > 0) {
          cannotChoose.add(lineCenter - i + level - 1);
        }
        if (index + i - level < n-1) {
          cannotChoose.add(lineCenter + i - level + 1);
        }
      }

      breakTrack(chosen, cannotChoose);

      cannotChoose = new Set(temp);
      chosen.pop(index);
    } 
    level--;
  }
  breakTrack([], new Set());
  return result;
};
// @lc code=end

console.log(solveNQueens(4));

