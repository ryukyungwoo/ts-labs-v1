type User = { id: number; name: string; email?: string };

function printUserProfile(user?: User) {
  if (!user) {
    // null, undefined 처리
    console.log("유저 정보가 없습니다.");
    return;
  }
  console.log(`ID: ${user.id}, 이름: ${user.name}`);
  if (user.email) {
    // email 프로퍼티가 있을 때만 출력
    console.log(`이메일: ${user.email}`);
  } else {
    console.log("이메일 정보 없음");
  }
}

// 사용 예시
printUserProfile(undefined);
printUserProfile({ id: 1, name: "Alice" });
printUserProfile({ id: 2, name: "Bob", email: "bob@example.com" });
