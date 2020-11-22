/**
 * 栈的抽象
 * 1、根据栈的特性实现一个Stack类
 */
class Stack {
  constructor() {
    this.stack = []
  }
  // 入栈
  push(item) {
    return this.stack.push(item)
  }
  // 出栈
  pop() {
    return this.stack.pop()
  }
  // 取栈顶元素
  peek() {
    return this.stack[this.getCount() - 1]
  }
  // 获取栈容量
  getCount() {
    return this.stack.length
  }
  // 判断是空栈
  isEmpty() {
    return this.getCount() === 0
  }
}

module.exports = Stack;