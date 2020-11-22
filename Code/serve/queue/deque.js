/**
 * 队列基本方法
 * 双向队列
 */
class Deque{
  constructor(){
      this.queue = [];
  }

  //头部入队
  unshift(item){
      this.queue.splice(0,0,item);
  }

  //头部出队
  shift(){
      let item;
      if(!this.isEmpty()){
          item = this.queue[0];
          this.queue.splice(0,1);
      }
      return item;
  }

  //尾部入队
  push(item){
      this.queue[this.queue.length] = item;
  }

  //尾部出队
  pop(){
      let item;
      if(!this.isEmpty()){
          item = this.queue[this.queue.length - 1];
          this.queue.splice(this.queue.length - 1,1);
      }
      return item;
  }

  //获取队头元素
  getHeader(){
      return this.queue[0];
  }

  //获取队尾元素
  getTail(){
      return this.queue[this.queue.length - 1];
  }

  //获取长度
  getLength(){
      return this.queue.length;
  }

  //判断是否为空
  isEmpty(){
      return this.queue.length === 0;
  }
}


module.exports = Deque
