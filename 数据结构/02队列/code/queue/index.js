/**

const dancingQueue = require('./dancingQueue')
const priorityQueue = require('./priorityQueue')
let testSuite = 'M-mali1 F-flip F-tomas M-Gone F-test M-test2 M-test3'
dancingQueue(testSuite)
 */
const PriorityQueue = require('./priorityQueue')
let p = new PriorityQueue()
let testSuite = [
  { value: 123, priority: 3 },
  { value: 2, priority: 1 },
  { value: 'tomas', priority: 2 }
]
testSuite.map(item => p.enqueue(item))
console.log(p.dequeue())
