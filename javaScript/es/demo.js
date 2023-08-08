#!/usr/bin/env node

'use strict';
console.log('1');
console.log('windows', globalThis === global)

/* const a = []
for(let i = 1; i <= 10; i++) {
  a.push(i);
}
console.log('findLast', a.findLast(el => el < 6));
console.log('findLastIndex', a.findLastIndex(el => el < 6));

console.log('a', a)
console.log('with', a.with(0, 2))
console.log('a', a)


const delay = (value, ms) => new Promise((resolve, reject) => setTimeout(() => resolve(value), ms));
const promises = [
  delay('a', 3000),
  delay('b', 2000),
  delay('c', 4000),
];

Promise.any(promises)
  .then(res => console.log(res)) // b
  .catch(err => console.error(err.name, err.message, err.errors)) // 全部失败时返回：AggregateError All promises were rejected [ 'a', 'b', 'c' ]


 */

//  #!/usr/bin/env node

// #!D:/Program Files/nodejs node



