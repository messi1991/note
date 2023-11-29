/* #!/usr/bin/env node

'use strict';
console.log('1');
console.log('windows', globalThis === global) */

/* const a = []
for(let i = 1; i <= 10; i++) {
  a.push(i);
}
console.log('findLast', a.findLast());
console.log('findLastIndex', a.findLastIndex(el => el < 6)); */




/* let arr = [1, 2, 3, 4]
let result = arr.toReversed()
console.log(result) // [4, 3, 2, 1]
console.log(arr)  // [1, 2, 3, 4]

let arr = [1, 2, 3, 4]
let result = arr.toSorted((a, b) => {
    return b - a
})
console.log(result) // [4, 3, 2, 1]
console.log(arr) // [1, 2, 3, 4]

let arr = [1, 2, 3, 4]
let result = arr.toSpliced(1, 2, 'a', 'b')
console.log(result) // [1, 'a', 'b', 4]
console.log(arr) // [1, 2, 3, 4]

let arr = [1, 2, 3, 4]
let result = arr.with(1, 'a')
console.log(result) // [1, 'a', 3, 4]
console.log(arr) // [1, 2, 3, 4] */

/* const w = new WeakMap()
const key = Symbol('WeakMapKey')

w.set(key, 'Vue')
let result = w.get(key)
console.log(key, result) // Vue */

/* class Foo {
  #p = 1;
  #m() {
    console.log('hello');
  }
}

class Bar extends Foo {
  constructor() {
    super();
    console.log(this.#p); // 报错
    this.#m(); // 报错
  }
} */


/* const delay = (value, ms, isError) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('setTimeout', value)
    if(isError) {
      reject(new Error(`reject ${value}`))
    }
    resolve(value)
  }, ms);
});

const promises = [
  delay('a', 2000),
  delay('b', 3000, true),
  delay('c', 4000),
]; */

/* Promise.any(promises)
  .then(res => console.log('Promise.any', res))
  .catch(err => console.error(err.name, err.message, err.errors)) */

/* Promise.race(promises)
  .then(res => console.log('Promise.race', res))
  .catch(err => console.error(err.name, err.message, err.errors)) */


/* Promise.allSettled(promises)
  .then(res => console.log('Promise.allSettled', res))
  .catch(err => console.error(err.name, err.message, err.errors)) */

/* Promise.all(promises)
  .then(res => console.log('Promise.all', res))
  .catch(err => console.error(err.name, err.message, err.errors)) */


/* class Person {
  #name="gao"
  getName() {
    return this.#name
  }
}

const a = new Person()

console.log(a.getName())
console.log(a.#name) */



/* var obj = Object.create(null)

console.log(obj.hasOwnProperty('a'))
console.log(Object.hasOwn(obj, 'a')) */

/* const obj = { name: 'Tom', age: 18 }

console.log('Object.values', Object.values(obj))
console.log('Object.keys', Object.keys(obj))

const objArr = Object.entries(obj)
console.log('Object.entries', objArr)
for (const [key, value] of objArr) {
  console.log(key, value);
}
 */


/* function add(a, b,) {
  console.log(a, b)
  return a + b;
 }
 add(1, 2,) */

/*  const regexp = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
 const result = regexp.exec('2023-01-01');
 console.log(result.groups); // { year: '2023', month: '01', day: '01' } */
