// [문제] 사용자 목록에서 특정 조건의 사용자 찾기
// users 배열과 조건 함수(predicate: User => boolean)를 받아
// 조건을 만족하는 첫 번째 사용자를 반환하는 findUser 함수를 작성하세요.
// User 타입은 다음과 같이 정의합니다.
// type User = { id: number; name: string; isActive: boolean };
// predicate 함수 타입도 타입 별칭으로 선언하세요.

/*
예시)
const users = [
  { id: 1, name: 'Kim', isActive: false },
  { id: 2, name: 'Lee', isActive: true }
];
const isActiveUser = (u: User) => u.isActive;
findUser(users, isActiveUser) // { id: 2, name: 'Lee', isActive: true }
*/
const users = [
  { id: 1, name: "Kim", isActive: false },
  { id: 2, name: "Lee", isActive: true },
];
type User = {
  id: number;
  name: string;
  isActive: boolean;
};
type Active = (u: User) => boolean;
const isActiveUser = (u: User) => u.isActive;

function findUser(userList: User[], active: Active) {
  return userList.find(active);
}

console.log(findUser(users, isActiveUser));
