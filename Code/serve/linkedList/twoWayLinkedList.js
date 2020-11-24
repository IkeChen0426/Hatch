/**
 *实现一个双向链表TwoWayLinkedList类。
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.pre = null
  }
}

class TwoWayLinkedList {
  constructor() {
    this.head = new Node('head')
  }
  //是否为空表
  isEmpty() {
    return this.head.next === null
  }
  /**
   * 增加节点
   * 在item节点之后增加newItem
   */
  insert(item, newItem) {
    let itemNode = this.find(item)
    let newNode
    if (itemNode !== null) {
      newNode = new Node(newItem)
      newNode.next = itemNode.next
      //暂时忽略尾节点null的处理
      if (itemNode.next) {
        itemNode.next.pre = newNode
      }
      itemNode.next = newNode
      newNode.pre = itemNode
    }
  }

  //查找item元素的位置
  find(item) {
    let node = this.head
    while (node !== null && node.element !== item) {
      node = node.next
    }
    return node
    }
        //删除元素
        remove(item){
            let itemNode = this.find(item);
            if(itemNode !== null){
                itemNode.pre.next = itemNode.next;
                itemNode.next.pre = itemNode.pre;
            }
    }
        //展示链表
        display(){
            let result ='head';
            let node = this.head.next;
            while(node !== null){
                result += '-->' + node.element;
                node = node.next;
            }
            return result;
        }
}
module.exports = TwoWayLinkedList

//测试插入方法
let link = new TwoWayLinkedList();
link.insert('head',1);
link.insert('head',2);
link.insert('head',3);
let fresult = link.display();
console.log(fresult)
//测试删除方法
link.remove(2);
link.remove(3);
let fresult2 = link.display();
console.log(fresult2)