/**
 * 2、编写一个函数recursion(num),num为一个10进制数字，要求输出num!的结果
 * 进制转换
 * @param  {number} num    带转换的数字
 * @return {number}        转换后的结果
 */
var Stack = require('./stack')
function recursion(num) {
  let stack = new Stack()
  let result = 1
  while (num) {
    stack.push(num--)
  }
  while (!stack.isEmpty()) {
    result *= stack.pop()
  }
  return result
}
module.exports = recursion
