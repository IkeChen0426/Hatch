/**
 * 队列基本方法

enqueue()在队尾插入一个元素
dequeue()从队头删除一个元素
getHeader()获取队头的元素
getTail()获取队尾的元素
getLength()获取队列的长度
isEmpty()判断队列是否为空队列
 */
class Queue {
  constructor() {
    this.queue = []
  }
  // 入队
  enqueue(item) {
    this.queue.push(item)
  }

  //出队
  dequeue() {
    return this.queue.shift()
  }

  //获取队头
  getHeader() {
    return this.queue[0]
  }

  //获取队尾数据
  getTail() {
    return this.queue[this.queue.length - 1]
  }
  getLength() {
    return this.queue.length
  }
  //判断空
  isEmpty() {
    return this.queue.length === 0
  }
}

module.exports = Queue
