// [개념] 비동기 처리 결과를 다양한 타입으로 반환
function fetchData<T>(data: T, delay = 500): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

fetchData<string>("Hello, TS!").then((res) => {
  // res는 string 타입으로 추론됨
});

fetchData<number[]>([1, 2, 3]).then((res) => {
  // res는 number[] 타입
});
