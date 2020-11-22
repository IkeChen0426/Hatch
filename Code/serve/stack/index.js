const Stack = require('./stack')
var unitTrans = require('./unitTrans')
var recursion = require('./recursion')
var isPalindrome = require('./palindrome')
var bracketShouldAt = require('./practice01')
var removeYellow = require('./practice02')

console.log('第二题：二进制转化--' + unitTrans(12, 2))
console.log('第三题：十进制阶乘--' + recursion(10))
//测试
let testSuite = ['asss', 'bbacd', 'sas', 'abcba']
testSuite.map(function (item, index) {
  console.log('第四题：判断回文字符串--' + isPalindrome(item))
})

// 判断括号是否缺失
let testSuite_bracketShouldAt = [
  '2.3 + (23/12 + 3.14159) * 0.24',
  '2.3 + [(23/12 + 3.14159) * 0.24]'
]
testSuite_bracketShouldAt.map(function (item, index) {
  console.log('练习题一：判断括号缺失--' + bracketShouldAt(item))
})

//测试
let testSuite_practice02 = new Stack()
let sugarMap = {
  0: 'red',
  1: 'white',
  2: 'yellow'
}

//生成测试用例
for (let i = 0; i < 100; i++) {
    testSuite_practice02.push(sugarMap[Math.floor(Math.random() * 3)])
}

let result = removeYellow(testSuite_practice02)
console.log(result.join('-'))
