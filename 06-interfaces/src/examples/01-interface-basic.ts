// 인터페이스의 기본 구조 선언 및 객체 적용

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const userA: User = { id: 1, name: "홍유저", isAdmin: false };
const userB: User = { id: 2, name: "김유저", isAdmin: true };

// 함수 매개변수 타입 지정
function printUser(user: User): void {
  console.log(`[user] id:${user.id}, name:${user.name}, admin:${user.isAdmin}`);
}

printUser(userA); // [user] id:1, name:홍유저, admin:false
printUser(userB); // [user] id:2, name:김유저, admin:true
