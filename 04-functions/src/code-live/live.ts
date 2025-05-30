// 함수 선언

// (1) 함수 선언식
function add(a: number, b: number): number {
  return a + b;
}

// (2) 함수 표현식 (변수 = 함수)
const sub = function (a: number, b: number): number {
  return a - b;
};

// (3) 화살표 함수
const multiply = (a: number, b: number): number => {
  return a * b;
};

// 선택적 매개변수 optional property
function log(msg: string, userName?: string): void {
  console.log(`${userName}: ${msg}`);
}

log("안녕하세요"); //에러가 발생하지 않음
log("안녕하세요", "user");

// 나머지 매개변수 ... spread
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
sumAll(1, 2);
sumAll(1, 2, 3);
sumAll(1, 2, 3, 4);

// 함수 = 값
// 직접 함수 타입을 지정하는 방식

function compute(a: number, b: number, op: (c: number, d: number) => number) {
  return op(a, b);
}

type OP = (c: number, d: number) => number;

function compute2(a: number, b: number, op: OP) {
  return op(a, b);
}
console.log(compute2(1, 2, (a, b) => a + b));

let func: OP = function (a, b) {
  return a + b;
};

console.log(compute2(1, 2, func));

// 함수 오버로딩
// 시그니쳐가 달라야 됨

function func2(a: string, b: string): string;
function func2(a: number, b: number): number;
function func2(a: string, b: number): number;

function func2(a: any, b: any): any {
  return a + b;
}

func2("a", 1);
func2(1, 1);
func2("1", "a");
