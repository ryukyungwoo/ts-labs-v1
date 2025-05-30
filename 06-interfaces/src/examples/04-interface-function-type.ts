// 함수 타입 정의 (함수 시그니처)

interface Add {
  (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;
const result = add(3, 4); // 7

function compute(a: number, b: number, op: Add): number {
  return op(a, b);
}
console.log(compute(5, 6, add)); // 11
