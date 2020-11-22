/**
 * 盒子里从上到下放有不定数量的【红色】，【白色】，【黄色】三种糖果，编写一个程序，可以使用一个或多个栈，在保证原糖果顺序不变的情况下，取出所有的【黄色】糖果。
 * 思路：只用一个额外的栈即可，将【红色】【白色】糖果压入新栈，将黄色糖果移除，当糖果盒为空后，再从新的糖果栈中逐个弹出元素重新放回糖果盒的栈即可。
 *
 */
const Stack = require('./stack')
function removeYellow(sugarStack) {
  console.log(sugarStack.stack.join('-'))
  let stack2 = new Stack()
  let sugar
  //黄色丢掉，其余放入另一个栈
  while (!sugarStack.isEmpty()) {
    sugar = sugarStack.pop()
    if (sugar !== 'yellow') {
      stack2.push(sugar)
    } else {
      stack2.push('<yellow>')
    }
  }
  //放回原来的栈
  while (!stack2.isEmpty()) {
    sugarStack.push(stack2.pop())
  }
  return sugarStack.stack
}

module.exports = removeYellow
