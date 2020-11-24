# 数据结构-链表（LinkedList）
三五七言

> 不要让数据结构成为天花板

[相关代码地址](https://github.com/ThreeFiveSevenWords/Hatch/tree/main)
<a name="5goKo"></a>
## 概念
链表是一个线性结构，同时也是一个天然的递归结构。链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大。
<a name="Sy3O9"></a>
### 用途
更快的插入和删除，因为只需要操作插入删除位置相邻元素即可，如果在线性表中，操作中间位置的元素后，后续的元素位置都需要调整。javascript中的应用例如原型链。

<a name="nPLW4"></a>
### 基本属性

- `element`当前节点的值
- `next`下一个节点
<a name="z0D8v"></a>
### 基本方法

- `insert(item, newitem)`在item后面插入一个新元素newitem<br />插入一个元素，需要将item元素节点的`next`指向新元素，新元素的`next`指向item元素的后继元素。<br />
- `remove(pos)`从队头删除一个元素<br />删除一个节点时，需要将其前驱节点的`next`指向其后继节点即可。<br />
- `find(element)`查询值为element的节点位置<br />
- `findpre(element)`查询值为element的节点的前一个节点<br />
- `display()`显示整个链表
<a name="AhzkQ"></a>
## 链表的基本特性实现一个`LinkedList`类
```javascript
/**
 * 基本属性
 * element当前节点的值
 * next下一个节点
 * 基本方法
 * insert(item, newitem)在item后面插入一个新元素newitem插入一个元素，需要将item元素节点的next指向新元素，新元素的next指向item元素的后继元素。
 * remove(pos)从队头删除一个元素删除一个节点时，需要将其前驱节点的next指向其后继节点即可。
 * find(element)查询值为element的节点位置
 * findpre(element)查询值为element的节点的前一个节点
 * display()显示整个链表
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  //定义头节点element属性为'head'，next也指向null
  constructor() {
    this.head = new Node('head')
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
      itemNode.next = newNode
    }
  }
  //删除元素
  remove(item) {
    let preNode = this.findPre(item)
    if (preNode !== null) {
      preNode.next = preNode.next.next
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
  //是否为空表
  isEmpty() {
    return this.head.next === null
  }

  //寻找元素前一个节点
  findPre(item) {
    let node = this.head
    let preNode = null
    while (node !== null && node.element !== item) {
      preNode = node
      node = node.next
    }
    return preNode
  }

  //展示链表
  display() {
    let result = 'head'
    let node = this.head.next
    while (node !== null) {
      result += '-->' + node.element
      node = node.next
    }
    return result
  }
}
module.exports = LinkedList
//测试插入方法
// let link = new LinkedList();
// link.insert('head',1);
// link.insert('head',2);
// link.insert(2,3);
// let fresult = link.display();
// console.log(fresult)
// // //测试删除方法
// link.remove(2);
// link.remove(3);
// let fresult2 = link.display();
// console.log(fresult2)
```
<a name="TblLX"></a>
## 双向链表`TwoWayLinkedList`
特征：<br />每一个实例会记录前驱节点和后继节点，双向链表比单链表增加了反向遍历的能力，并且由于所查找节点的属性中包含了前驱和后继节点的信息，故插入节点和删除节点时使用同一个搜索方法即可
```javascript
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
```
<a name="mtHgE"></a>
## 循环链表`CircularLinkedList`
特征：<br />循环链表的特点是尾节点的next指针指向了头节点
```javascript
/**
 *以LinkedList类为参考基准，实现一个循环链表CircularLinkedList类 
 循环链表的特点是尾节点的next指针指向了头节点
 * 
 */
//节点
class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

//循环链表
class CircularLinkedList{
    //定义头节点element属性为'head'，next也指向null
    constructor(){
        this.head = new Node('head');
        this.head.next = this.head;
        this.activeNode = null;
        this.count = 0;
    }

    /**
     * 增加节点
     * 在item节点之后增加newItem
     */
    insert(item, newItem){
        let itemNode = this.find(item);
        let newNode;
            newNode = new Node(newItem);
            newNode.next = itemNode.next;
            itemNode.next = newNode;
            this.count++;
    }

    //是否为空表
    isEmpty(){
        return this.head.next === this.head;
    }
    
    //查找item元素的位置
    find(item){
        let node = this.head;
        while(node.element !== item){
            node = node.next;
        }
        return node;
    }

    //删除元素
    remove(item){
        let preNode = this.findPre(item);
        if(preNode !== null){
            preNode.next = preNode.next.next;
            this.count--;
        }
    }

    //寻找元素前一个节点
    findPre(item){
        let node = this.head;
        let preNode = null;
        while(node.element !== item){
            preNode = node;
            node = node.next;
        }
        return preNode;
    }

    //展示链表
    display(){
        let result ='head';
        let node = this.head.next;
        while(node.element !== 'head'){
            result += '-->' + node.element;
            node = node.next;
        }
        return result;
    }

    //设置激活节点
    setActive(item){
        let itemNode = this.find(item);
        if (itemNode !== null && itemNode !== this.head) {
             this.activeNode = itemNode;
        } else {
            return '节点不存在';
        }
    }

    //测试循环指向
    testCircle(){
        let result ='head';
        let times = 1;
        let node = this.head.next;
        while(times < 3){
            result += '-->' + node.element;
            node = node.next;
            if (node.element  === 'head') {
                times += 1;
            }
        }
        return result;
    }
}
module.exports = CircularLinkedList;
//测试插入方法
/*let link = new CircularLinkedList();
link.insert('head',1);
link.insert('head',2);
link.insert('head',3);
//let fresult = link.display();
let fresult = link.testCircle();
console.log(fresult)
//测试删除方法
link.remove(2);
link.remove(3);
//let fresult2 = link.display();
let fresult2 = link.testCircle();
console.log(fresult2)
*/
```
<a name="v5HS1"></a>
## 算法题练习
传说在公元1世纪犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的40个同胞被罗马士兵包围，犹太士兵决定宁可自杀也不做俘虏，于是商量出一个自杀方案。他们围成一个圈，从一个人开始，数到第三个人事将第三个人杀死，然后再数，直到杀光所有人，约瑟夫和另一个人决定不参加这个疯狂的游戏，他们快速地计算出两个位置，站在那里得以幸存。写一段将n个人围成一圈，并且第m个人会被杀掉，计算一圈中哪两个人最后会存活，使用循环链表解决该问题。
```javascript
/**
 * 传说在公元1世纪犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的40个同胞被罗马士兵包围，犹太士兵决定宁可自杀也不做俘虏，于是商量出一个自杀方案。他们围成一个圈，从一个人开始，数到第三个人事将第三个人杀死，然后再数，直到杀光所有人，约瑟夫和另一个人决定不参加这个疯狂的游戏，他们快速地计算出两个位置，站在那里得以幸存。写一段将n个人围成一圈，并且第m个人会被杀掉，计算一圈中哪两个人最后会存货，使用循环链表解决该问题
 */
const CircularLinkedList = require('./circularlinkedList');
let link = new CircularLinkedList();
//装入1-40个号码
init();
//开始报数
start();


//初始化
function init() {
    for(let i = 40;i; i--){
        link.insert('head',i);
    }
}

function start() {
    //设置1号节点为激活
    link.setActive(1);
    let index = 1;
    while(link.count > 2){
        if(index % 3 === 0){
            link.remove(link.activeNode.element);
            console.log('自杀士兵编号：',link.activeNode.element);
            console.log('当前队列:',link.display());
        }
        link.activeNode = link.activeNode.next === link.head ? link.head.next : link.activeNode.next;
        index++;
    }
}
```
