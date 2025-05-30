// 열거형(Enum)
// 정해진 값들만 사용할 타입

// (1) 가독성 향상
// (2) 오류 방지
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

let user: {
  name: string;
  role: string;
};

user = {
  name: "name",
  role: "admin ", // 오타가 생길 수 있음
};

let user2: {
  name: string;
  role: Role;
};

user2 = {
  name: "name",
  role: Role.ADMIN,
};

enum Status {
  Pending = "pending",
  Success = "success",
  Reject = "reject",
}

// 유니온
type Status2 = "pending" | "success";
