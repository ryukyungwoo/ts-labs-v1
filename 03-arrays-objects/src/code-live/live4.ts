// 타입 별칭 = type alias
// 복잡하거나 반복적으로 사용되는 타입에 별칭을 붙여서 재사용하는 문법

let user1: {
  name: string;
  age: number;
};

user1 = {
  name: "name",
  age: 12,
};

let user2: {
  name: string;
  age: number;
};

user2 = {
  name: "name2",
  age: 122,
};
// 타입을 선언할때마다 복잡함
function helloToUser(user: { name: string; age: number }) {
  console.log(user.name);
}

// 타입 별칭 선언
type User = {
  name: string;
  age: number;
};

let userA: User = {
  name: " name",
  age: 123,
};
let userB: User = {
  name: " name",
  age: 123,
};

function helloToUser2(user: User) {
  console.log(user.name);
}
