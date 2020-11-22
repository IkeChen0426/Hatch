/**
 * 实现一个PriorityQueue类，实现优先队列的功能，优先队列的元素带有权重，权重越高（一般认为数字越小权重越高）的越早出队。
 * 思路:找出最小权重和下标，splice 出队列
 */

const Queue = require('./queue')

class PriorityQueue extends Queue {
  dequeue() {
    let length = this.getLength()
    let index = 0
    let basePriority
    let dequeueItem
    if (!this.isEmpty()) {
      basePriority = this.queue[0].priority
    }
    for (let i = 1; i < length; i++) {
      if (this.queue[i].priority < basePriority) {
        index = i
        basePriority = this.queue[i].priority
      }
    }
    dequeueItem = this.queue[index]
    this.queue.splice(index, 1)
    return dequeueItem
  }
}
module.exports = PriorityQueue
