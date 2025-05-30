// 타입 추론 : 타입을 명시하지 않아도 타입스크립트가 알아서 타입을 추론 하는 것
// 추론할 단서(=값)이 명시되어야 추론이 가능함

let a = 1;
a.toFixed();
a.toExponential();
// a = "hello" // 자동으로 타입 추론이 됐기 때문에 다른 타입 할당불가

let b = "hello";
b.toUpperCase();
let c = true;
let d = {};

let e; // 오른쪽에 타입을 추론할만한 값이 없을 땐 any로 추론됨

// 구조 분해 할당
let user: {
  name: string;
  age: number;
};

user = { name: "이름", age: 123 };

let { name, age } = user;

let [todo, done] = ["청소하기", false];

// 함수의 추론
function sayHello() {
  console.log("hello");
}

function returnHello() {
  return "hello";
}

// 추론의 단서가 없음
// function add(a, b) {
//   return a + b;
// }

// 기본값을 지정하면 추론 가능
function add2(a = 1, b = "2") {
  return a + b;
}
