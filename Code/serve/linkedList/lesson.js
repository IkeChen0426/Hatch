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