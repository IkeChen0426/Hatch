/**
 * 一个算数表达式中有{},(),[]三种括号，编写一个函数，接受一个算数表达式作为参数，如果括号完全匹配则返回true,否则返回括号缺失的位置
 * 思路：按字符逐个解析表达式，遇到左括号即将其压入栈中，遇到右括号就从栈顶弹出一个元素，查看两者是否匹配，若匹配则继续，若不匹配则返回位置。需要注意的是，如果所有括号均配，则栈的最终状态需要为空。
 *
 */
const Stack = require('./stack')
function bracketShouldAt(str) {
  let symbolMap = {
    '{': -1,
    '}': 1,
    '(': -2,
    ')': 2,
    '[': -3,
    ']': 3
  }
  let stack = new Stack()
  let strArr = str.split('')
  let result = -1
  for (let i = 0; i < strArr.length; i++) {
    if (symbolMap[strArr[i]] < 0) {
      stack.push(strArr[i])
    } else {
      if (symbolMap[strArr[i]] > 0 && symbolMap[stack.pop()] + symbolMap[strArr[i]] !== 0) {
        result = i
        break
      }
    }
  }
  if (!stack.isEmpty()) {
    result = strArr.length
  }
  return result === -1 ? 'Right Pairs' : result
}

module.exports = bracketShouldAt