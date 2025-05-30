// 제네릭
// 타입을 나중에(사용 시점에) 결정하는 문법
// 코드 재사용성 + 타입 안정성

function echo<T>(value: T): T {
  return value;
}

console.log(echo(2));
console.log(echo("A"));
console.log(echo(true));

// 함수를 제네릭으로 선언
type FirstElement<T> = (arr: T[]) => T;

const getFirst: FirstElement<string> = (arr) => arr[0];
getFirst(["a", "b"]);

const getFirstNum: FirstElement<number> = (arr) => arr[0];
getFirstNum([1, 2, 3]);

interface User {
  id: number;
  name: string;
}

const getFirstUser: FirstElement<User> = (arr) => arr[0];

console.log(
  getFirstUser([
    { id: 1, name: "name" },
    { id: 2, name: "name2" },
  ])
);

// 인터페이스에서 제네릭 사용
interface ApiResoponse<T> {
  success: boolean;
  error?: string;
  data: T;
}

const userResponse: ApiResoponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "name",
  },
};

const errResponse: ApiResoponse<null> = {
  success: false,
  error: "error",
  data: null,
};

// 제네릭 타입 제약

// number, boolean, string, arrays ...
function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

printLength("132");
printLength(["132"]);
