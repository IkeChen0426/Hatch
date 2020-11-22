/**
 * 2、编写一个函数unitTrans(num, unit),num为一个10进制数字，unit要转换的进制数，求转换结果。
 * 进制转换
 * @param  {number} num    带转换的数字
 * @param  {number} unit 需要转换到的进制数
 * @return {number}        转换后的结果
 */
var Stack = require('./stack')
function unitTrans(num, unit) {
  let stack = new Stack()
  let bit
  let result = ''
  while (num) {
    bit = num % unit
    stack.push(bit)
    num = (num - bit) / unit
  }
  while (!stack.isEmpty()) {
    result += stack.pop()
  }
  return result
}

module.exports = unitTrans;
