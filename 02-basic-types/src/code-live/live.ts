// 타입스크립트의 기본 타입들

// (1) number
// let num = 123 // 123은 숫자형 리터럴 => ts가 숫자라고 알아서 판단 : 타입 추론
let num: number = 123;
// (: number) => 타입 어노테이션
num = 0;
num = 0.123;
num = -0.123;
num = 12312312312312.123123;
// num = "123" // js에서는 가능하지만 ts는 안됨

// (2) string
let str: string = "hello";
str = `${num}`;
// str = 123
str.toUpperCase();

// (3) boolean
let bool: boolean = true;
bool = false;
// bool = "true";

// (4) null
let nullVal: null = null;
// nullVal = "";
// nullVal = undefined

// (5) undefined
let undefinedVal: undefined = undefined;
// undefinedVal = null

// (6) 값 자체가 타입 = 리터럴 타입 (유니온 타입과 자주 쓰임)
let literalVal: "hello";
literalVal = "hello";
// literalVal = "hi"

// (7) any 타입과 unknown 타입
// any : 뭐든지 허용하고 바로 사용가능
// unknwon : 안전한 any (바로 사용 x)

let a: any = 123;
a = "";
a = {};

// a.toUpperCase()

let b: unknown = 123;
b = "";
b = {};

// b.toUpperCase() 사용할 수 없음

// 타입가드를 사용하면 사용 가능
// unknown 타입은 타입을 확인하기 전 까지는 사용을 제한함
if (typeof b === "string") {
  b.toUpperCase();
}

// (8) void 타입
// 반환값이 없다라는 의미

function returnHello(): string {
  return "hello";
}

// 추론이 되기 때문에 :void를 입력하지 않아도 됨
// 그러나 명확하게 하기 위해 입력해주는 것이 좋음
function sayHello(): void {
  console.log("hello");
}

function echoMsg(msg: string): string {
  return msg;
}

// (9) never
// 어떤 값도 담을 수 없는 타입

let neverVal: never;
// neverVal =123
// neverVal = ""
// neverVal = []
// neverVal = null

// 무언갈 반환하면 안되기 때문에 never를 명시함
function throwError(msg: string): never {
  throw new Error();
}

// 무한루프에서 필요함
function infiniteLoop(): never {
  while (true) {
    console.log("...");
  }
}
