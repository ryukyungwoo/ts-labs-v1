// length 프로퍼티가 있는 타입만 받는 제네릭 함수
function printLength<T extends { length: number }>(input: T): number {
  return input.length;
}

// 사용 예시
printLength([1, 2, 3]); // OK (Array)
printLength("hello"); // OK (string)
printLength({ length: 10 }); // OK (직접 구현한 객체)
// printLength(123);               // Error (number는 length가 없음)
