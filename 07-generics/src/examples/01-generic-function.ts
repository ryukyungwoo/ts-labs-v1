// 어떤 타입이든 배열의 첫 번째 요소를 반환하는 제네릭 함수
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

// 사용 예시
const firstNum = getFirstElement([10, 20, 30]); // number
const firstStr = getFirstElement(["a", "b", "c"]); // string
const firstObj = getFirstElement([{ id: 1 }, { id: 2 }]); // {id: number}
