/**
 * [문제] 조건에 맞는 요소만 반환하는 제네릭 filter 함수를 구현하세요.
 *
 * - 함수 이름: myFilter
 * - 매개변수:
 *   - arr: T[] (임의 타입 배열)
 *   - predicate: (item: T) => boolean (조건 함수)
 * - 반환값: 조건을 만족하는 요소들만 모은 배열(T[])
 *
 * [요구사항]
 * 1. 제네릭 함수로 작성할 것
 * 2. for 반복문 또는 배열 메서드 모두 사용 가능
 * 3. predicate 함수로 전달된 조건을 만족하는 값만 반환
 *
 * [예시]
 * const odds = myFilter([1, 2, 3, 4], n => n % 2 === 1);   // [1, 3]
 * const shortWords = myFilter(["apple", "hi", "bye"], w => w.length <= 3); // ["hi", "bye"]
 */

// TODO: 여기에 myFilter 함수를 작성하세요.

// 아래 코드를 복사해 결과를 확인해 보세요.
const odds = myFilter([1, 2, 3, 4], (n) => n % 2 === 1); // [1, 3]
const shortWords = myFilter(["apple", "hi", "bye"], (w) => w.length <= 3); // ["hi", "bye"]
