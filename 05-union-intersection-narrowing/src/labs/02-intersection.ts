// [문제] 인터섹션 타입: 두 타입의 속성을 모두 갖는 객체 만들기
// User와 AdminPrivileges의 속성을 모두 가진 admin 객체를 선언하고
// admin의 모든 정보를 출력하세요.

type User = { id: number; name: string };
type AdminPrivileges = { isAdmin: true; permissions: string[] };

type AdminUser = User & AdminPrivileges;

const admin: AdminUser = {
  id: 1,
  name: "Alice",
  isAdmin: true,
  permissions: ["read", "write", "delete"],
};

// 여기에 admin 객체 정보를 출력하는 코드를 작성하세요.
// 예시: ID: 1, 이름: Alice, isAdmin: true, 권한: read,write,delete
