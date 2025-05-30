// 객체

let user: { id: number; name: string } = {
  id: 1,
  name: "name",
};

let student: {
  name: string;
  age: number;
  scores: [string, number][];
};

student = {
  name: "user",
  age: 22,
  scores: [
    ["자바스크립트", 90],
    ["자바", 70],
  ],
};

// 선택적 프로퍼티
let product: {
  id: number;
  name: string;
  price: number;
  description?: string;
};

product = {
  id: 1,
  name: "아이폰16",
  price: 100000,
};

// reaeonly 속성
let order: {
  userId: number;
  status: string;
  amount: number;
  readonly createdAt: string;
};

order = {
  userId: 1,
  status: "배송중",
  amount: 100000,
  createdAt: "2025",
};

order.status = "배송완료";
// order.createdAt = "2024";
