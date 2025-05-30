// 객체에서 특정 key의 value만 추출하는 제네릭 함수
function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Yun", age: 29 };
const userName = pluck(user, "name"); // string
const userAge = pluck(user, "age"); // number
