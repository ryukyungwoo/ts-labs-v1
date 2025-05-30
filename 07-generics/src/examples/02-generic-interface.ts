// 서버에서 받은 데이터의 타입을 제네릭으로 선언
interface ApiResponse<T> {
  status: number;
  data: T;
}

// 사용 예시
const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: "Yun", age: 29 },
};

const listResponse: ApiResponse<string[]> = {
  status: 200,
  data: ["a", "b", "c"],
};
