/* #!/usr/bin/env node

'use strict';
console.log('1');
console.log('windows', globalThis === global) */

/* const a = []
for(let i = 1; i <= 10; i++) {
  a.push(i);
}
console.log('findLast', a.findLast(el => el < 6));
console.log('findLastIndex', a.findLastIndex(el => el < 6));

console.log('a', a)
console.log('with', a.with(0, 2))
console.log('a', a) */


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

