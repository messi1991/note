/*
 * @Author: your name
 * @Date: 2021-07-15 14:16:50
 * @LastEditTime: 2021-07-15 14:17:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \notes\typescript\index.ts
 */
interface Response<T> {
  code: number;
  data: T,
  message?: string
}

/* const a:Response<string[]> = {
  code: 0,
  data: ['11']
}

console.log(a) */