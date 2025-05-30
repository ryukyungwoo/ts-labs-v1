// 타입스크립트 : 자바스크립트에 정적 타입을 추가한 언어
// tsc [file name].ts -> js 파일로 컴파일(트랜스 파일)

console.log("hello, world!");

// 트랜스 파일된 파일을 실행하려면 node를 써야 됨
// node는 자바스크립트 런타임
// tsc --init
// ts파일을 실제로 구동하려면 tsconfig.json에 컴파일러 옵션과 타겟을 지정해줘야 됨

// 타입을 지정할 수 있음
let a: number = 10; // 숫자 타입 지정
let b: string = "hello"; // 문자열 타입 지정

// 트랜스 파일 한 js 파일에 변수는 var로 변환됨

function printLength(str: string) {
  console.log(str.length);
}

printLength("hello");
// printLength(undefined) // strict 옵션이 false 이면 에러 안남
