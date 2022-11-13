export const a = 1;
export const c = {c: 1}
export function b() {
  console.log('b')
  console.log('a', a)
  c.c = 2
  console.log('c', c)
}
export default {}