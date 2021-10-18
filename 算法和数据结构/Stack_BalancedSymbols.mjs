/*
 * @Author: your name
 * @Date: 2021-10-17 23:14:50
 * @LastEditTime: 2021-10-17 23:16:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github/算法和数据结构/Stact_BalancedSymbols.js
 */
/**
 * 括号平衡
 */
import Stack from "./Stack.mjs";

const balancedSymbols = (str) => {
  const stack = new Stack();
  let index = 0;
  while(index < str.length) {
    let _subStr = str[index];
    if(_subStr === '(') {
      stack.push(_subStr);
    } else {
      if(stack.isEmpty()) return false;
      stack.pop();
    }
    index++;
  }

  if(stack.isEmpty()) return true;
  return false
}



/**
 * test
 */

console.group("stack_balancedSymbols");
console.log('((())', balancedSymbols('((())'));

console.log('((())))', balancedSymbols('((())))'));

console.log('((()))', balancedSymbols('((()))')); 
console.log('(()())', balancedSymbols('(()())'));  
console.log('(()()', balancedSymbols('(()()'));  


console.groupEnd("stack_balancedSymbols")
