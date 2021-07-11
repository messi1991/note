/*
 * @Author: your name
 * @Date: 2021-07-11 22:54:37
 * @LastEditTime: 2021-07-11 22:55:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /notes/node/b.js
 */

console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');