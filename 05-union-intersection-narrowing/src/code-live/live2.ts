// 타입 좁히기 (Type Narrowing)

// // (1) typeof
function printSomething(value: string | number) {
  //   console.log(value.toUpperCase()); 타입이 여러개가 되면 못 씀
  if (typeof value == "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed());
  }
}

// (2) null checks

type User = { id: number; name: string; email?: string };

// 선택적 매개변수
// api -> user(x)
function printUserProfile(user?: User) {
  //   console.log(`id: ${user?.id}, name: ${user?.name}`); optional chainning
  if (!user) {
    return;
  }
  if (user.email) {
    console.log(`id: ${user.id}, name: ${user.name}, email: ${user.email}`);
  } else {
    console.log(`id: ${user.id}, name: ${user.name}`);
  }
}

printUserProfile({ id: 1, name: "name" });

// (3) in

type SuccessResponse = { ok: true; data: string };
type ErrorResponse = { ok: false; error: string };
type ApiResoponse = SuccessResponse | ErrorResponse;

function handleResponse1(res: ApiResoponse) {
  if ("data" in res) {
    console.log(res.data);
  } else {
    console.log(res.error);
  }
}

// (4) discriminated union (=tagged union)

function handleResponse2(res: ApiResoponse) {
  if (res.ok) {
    console.log(res.data);
  } else {
    console.log(res.error);
  }
}

// (5) 타입 가드 함수

type Guest = { kind: "guest"; visitReason: string };
type Member = { kind: "member"; memberId: string };
type Person = Guest | Member;

// is : 반환타입 고정
// member가 true 면 person은 Member
function isMember(person: Person): person is Member {
  return person.kind === "member";
}

function printPersonInfo(person: Person) {
  if (isMember(person)) {
    console.log(`member ID: ${person.memberId}`);
  } else {
    console.log(`visit reason: ${person.visitReason}`);
  }
}

// (6) instanceof

function obj(a: object) {
  if (a instanceof Number) {
    console.log(a.toFixed());
    return;
  }
  if (a instanceof String) {
    console.log(a.toUpperCase());
    return;
  }
  console.log(a);
}
