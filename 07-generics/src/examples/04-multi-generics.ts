// 두 가지 타입을 모두 받아 처리하는 함수
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

// 사용 예시
const p1 = pair("id", 123); // [string, number]
const p2 = pair("isAdmin", true); // [string, boolean]
