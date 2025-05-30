// [문제 8] 타입 호환성 실습
// (1) 아래 변수들의 타입을 선언하고, 주석으로 할당 가능/불가 여부를 확인하세요.

let n1: number = 10;
let s1: string = "test";
let b1: boolean = true;
let u1: unknown = "뭔가";
let a1: any = 777;

// n1 = s1;
s1 = a1;
// b1 = u1;
u1 = n1;
a1 = b1;
