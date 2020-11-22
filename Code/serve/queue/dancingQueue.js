/**
 * 编写一个函数dancingQueue(str),str中记录着前来参加舞会的人的性别，以空格分割，函数中需要实现将前来跳舞的人按性别分成两队，每当舞池中有空位时，男队和女队的排在最前面的人组成舞伴进入，如果某一队为空时，需要返回对应的消息。
 * @param  {stting} str    带转换的数字
 * @return {number}        转换后的结果
 */

const Queue = require('./queue')

function dancingQueue(str) {
  var dancers = str.split(/\s+/)
  var fqueue = new Queue()
  var mqueue = new Queue()
  //入队
  for (let i = 0; i < dancers.length; i++) {
    if (dancers[i][0] === 'M') {
      mqueue.enqueue(dancers[i])
    } else {
      fqueue.enqueue(dancers[i])
    }
  }
  //模拟出队
  while (!mqueue.isEmpty() && !fqueue.isEmpty()) {
    console.log(mqueue.dequeue(), '+', fqueue.dequeue())
  }
  mqueue.isEmpty() ? console.log('NO Male') : console.log('No Female')
}

module.exports = dancingQueue
