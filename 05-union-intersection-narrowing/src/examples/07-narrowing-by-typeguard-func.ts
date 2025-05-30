// 커스텀 타입가드 함수로 내로잉 고도화

type Guest = { kind: "guest"; visitReason: string };
type Member = { kind: "member"; memberId: string };
type Person = Guest | Member;

// 타입가드 함수 정의
function isMember(person: Person): person is Member {
  return person.kind === "member";
}

// 실전 적용
function printPersonInfo(person: Person) {
  if (isMember(person)) {
    // Member 타입으로 확정됨!
    console.log("회원 ID:", person.memberId);
  } else {
    // Guest 타입으로 확정됨!
    console.log("방문 이유:", person.visitReason);
  }
}

printPersonInfo({ kind: "member", memberId: "M001" });
printPersonInfo({ kind: "guest", visitReason: "상담" });
