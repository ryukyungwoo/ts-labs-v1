// [문제]
// 쇼핑몰 유저 정보를 관리하려고 한다.
// id(숫자), name(문자열), isAdmin(불리언) 세 속성을 갖는 User 인터페이스를 정의하라.
// 그리고 다음 kimUser, yunUser가 타입 검사를 통과하도록 코드를 작성하라.

const kimUser = { id: 1, name: "김유저", isAdmin: false };
const yunUser = { id: 2, name: "윤유저", isAdmin: true };

// 아래 함수를 완성하라 (매개변수 타입 명시)
function printUser(user) {
  console.log(`[user] id:${user.id}, name:${user.name}, admin:${user.isAdmin}`);
}

// printUser(kimUser), printUser(yunUser)가 정상 동작해야 한다.
