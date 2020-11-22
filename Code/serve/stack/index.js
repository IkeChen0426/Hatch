var unitTrans = require('./unitTrans')
var recursion = require('./recursion')
var isPalindrome = require('./palindrome')

console.log('第二题：二进制转化--' + unitTrans(12, 2))
console.log('第三题：十进制阶乘--' + recursion(10))
//测试
let testSuite = ['asss','bbacd','sas','abcba'];
testSuite.map(function (item, index) {
    console.log('第四题：判断回文字符串--' + isPalindrome(item));
})
