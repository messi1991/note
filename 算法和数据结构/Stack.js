/*
 * @Author: your name
 * @Date: 2021-10-17 22:31:29
 * @LastEditTime: 2021-10-17 23:13:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/算法和数据结构/Stack.js
 */
/**
 * push
 * pop
 * peek
 * isEmpty
 * clear
 * size
 */
const items = new WeakMap();
class Stack {
  constructor (){
    items.set(this, []);
  }
  push (el) {
    const _arr = items.get(this);
    _arr.push(el);
  }
  pop () {
    const _arr = items.get(this),
          _el = _arr.pop();
    return _el;
  }
  peek () {
    const _arr = items.get(this);
    return _arr[_arr.length - 1];
    
  }
  isEmpty () {
    const _arr = items.get(this);
    return _arr.length === 0;

  }
  clear () {
    items.set(this, []);
  }
  size () {
    return items.get(this).length;
  }
}





/**
 * test
 */
const stack = new Stack();
console.log('stack.isEmpty() => ', stack.isEmpty()); // outputs true

stack.push(5);
stack.push(8);


console.log('stack.peek() => ', stack.peek()); // outputs 8

stack.push(11);

console.log('stack.size() after push 11 => ', stack.size()); // outputs 3
console.log('stack.isEmpty() => ', stack.isEmpty()); // outputs false

stack.push(15);

stack.pop();
stack.pop();

console.log('stack.size() after push 15 and pop twice => ', stack.size()); // outputs 2