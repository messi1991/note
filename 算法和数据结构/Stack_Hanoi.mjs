/*
 * @Author: your name
 * @Date: 2021-10-17 23:16:41
 * @LastEditTime: 2021-10-17 23:18:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/算法和数据结构/Stack_Hanoi.js
 */
/**
 * 汉诺塔
 */
import Stack from "./Stack.mjs";
const stackA = new Stack(),
      stackB = new Stack(),
      stackC = new Stack();

console.group("StackHanoi");

const hanoi = (num) => {
  let i = num;
  while(i -- > 0) {
    stackA.push(i);
  }
  console.log("stackA", stackA.toString());
  console.log("stackB", stackB.toString());
  console.log("stackC", stackC.toString());
  while(stackC.size() < num) {
    stackB.push(stackA.pop());
    stackC.push(stackA.pop());
    stackB.push(stackA.pop());
  }
}

hanoi(5);


console.log("stackA", stackA.toString());
console.log("stackB", stackB.toString());
console.log("stackC", stackC.toString());


console.groupEnd("StackHanoi");