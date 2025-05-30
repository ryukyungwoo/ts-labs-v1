// 선택적 프로퍼티 (Optional Property)

interface Profile {
  username: string;
  email?: string; // email은 있어도 되고, 없어도 됨
}

const p1: Profile = { username: "이유저" };
const p2: Profile = { username: "박유저", email: "parkuser@example.com" };

function showProfile(profile: Profile) {
  // 옵셔널 체이닝(?.)과 nullish 병합 연산자(??)로 안전하게 처리
  console.log(profile.email?.toLowerCase() ?? "이메일 없음");
}

showProfile(p1); // "이메일 없음"
showProfile(p2); // "parkuser@example.com"
