// 1. 배열

// 숫자형 배열
let numbers: number[] = [1, 2, 3];

numbers.push(1);
numbers.unshift(0);

console.log(numbers);

let numbers2: Array<number> = [1, 2, 3];

// 문자형 배열
let fruits: string[] = ["바나나", "사과", "키위"];

// 혼합 배열
let flexArr: (number | string | boolean)[] = [1, "2", "3", 4, true];

// 2차원 배열
let twoDimArr: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

let twoDimArr2: (string | number)[][] = [
  ["1", "2", "3"],
  [1, 2, 3],
];

// 2. 튜플
// 길이와 타입이 고정된 특수 배열
// JS로 변환 시 배열

let tuple: [number, string] = [10, "20"];

tuple.push(1);
tuple[0] = 2;

// readonly : 읽기 전용 (Immutable = 불변)
let tuple2: readonly [number, string] = [1, "hello"];
// tuple2.push(1) 불가
tuple2 = [2, "goodbye"]; // 재할당은 가능

// const는 가리키는 객체가 변하지 않을 뿐
const tuple3: [number, string] = [1, "hello"];
// tuple3 = [2, "goodbye"]
tuple3.push(1);

const users: [number, string][] = [
  [1, "윤유저"],
  [2, "김유저"],
];
