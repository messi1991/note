/*
 * @Author: your name
 * @Date: 2021-07-11 22:54:42
 * @LastEditTime: 2021-07-11 22:55:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /notes/node/c.js
 */

console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);