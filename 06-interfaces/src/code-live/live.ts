// interface

// 1. 인터페이스 선언

interface User {
  id: number;
  name: string;
  email?: string;
}

interface User {
  readonly createdAt: Date;
}

// 합쳐야만 생성이 됨
const userA: User = {
  id: 1,
  name: "name",
  email: "email",
  createdAt: new Date(),
};

const userB: User = {
  id: 2,
  name: "name2",
  email: "email2",
  createdAt: new Date(),
};

function printUser(user: User) {}

// 2. 함서에서의 인터페이스
interface Add {
  (a: number, b: number): number;
}

type Add2 = (a: number, b: number) => number;

// 객체 : 인터페이스
// 그외 함수 및 기타 : 타입 별칭

// 3. 인터페이스 확장 (= 상속)

interface ApiResponse {
  success: boolean;
  message?: string;
}

interface UserResponse extends ApiResponse, AdditionalInfo {
  user: {
    id: string;
    name: string;
  };
}

type AdditionalInfo = {
  info: string;
};

interface ProductReponse extends ApiResponse {
  product: {
    id: string;
    name: string;
    price: number;
  };
}

let userResponse: UserResponse = {
  success: true,
  message: "a",
  user: {
    id: "a",
    name: "name",
  },
  info: "info",
};

// 4. 인덱스 시그니처
// 키 : 값 구조에서 동적으로 사이즈가 추가될 때
interface StringMap {
  [key: string]: string;
}

const colors: StringMap = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};
