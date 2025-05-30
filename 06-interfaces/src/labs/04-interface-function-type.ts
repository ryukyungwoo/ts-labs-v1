// [문제]
// 두 숫자를 더하는 함수 타입을 인터페이스로 선언하고,
// add 변수에 할당하라.
// 아래의 compute 함수는 세 번째 매개변수로 "두 수를 받아 숫자를 반환"하는 함수만 허용해야 한다.

const add = (a, b) => a + b;

function compute(a, b, op) {
  return op(a, b);
}

console.log(compute(5, 10, add)); // 15
