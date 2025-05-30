// 1. 유니온 타입 '|'
// 여러 타입 중 하나만 만족

let value: number | string | boolean = 2;
value = "hello";
value = true;

// 2. 인터섹션 타입 '&'
// 보통 객체 타입에 사용

type Person = {
  name: string;
};
type Developer = {
  skills: string[];
};
type DevOrPerson = Person | Developer;
type DevPerson = Person & Developer;

const personA: DevOrPerson = {
  name: "string",
  //   skills: ["java", "javscript"], 하나만 만족해도 만족함
};

const personB: DevPerson = {
  name: "str",
  skills: ["java", "javscript"], // 둘 다 만족해야 함
};
