/**
 * 4、编写一个函数palindrome(str),str是一个字符串,如果它是一个回文字符串，则返回true，否则返回false
 * 数组reverse()
 * 进制转换
 * @param  {string} str    判断的字符串
 * @return {boolean}
 */
var Stack = require('./stack')
function palindrome(str) {
  let stack = new Stack()
  let strArr = str.split('')
  let result = ''
  for (let i = 0; i < strArr.length; i++) {
    stack.push(strArr[i])
  }

  while (!stack.isEmpty()) {
    result += stack.pop()
  }
  return result === str
}
module.exports = palindrome
