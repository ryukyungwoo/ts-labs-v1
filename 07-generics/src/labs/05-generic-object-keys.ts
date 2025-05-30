/**
 * [문제] 객체의 모든 key 값을 문자열 배열로 반환하는 제네릭 함수를 만드세요.
 *
 * - 함수 이름: getObjectKeys
 * - 매개변수: obj (임의의 객체)
 * - 반환값: (keyof T)[] 타입의 배열 (객체의 키 배열)
 *
 * [요구사항]
 * 1. 제네릭 함수로 작성할 것
 * 2. 반환 타입은 (keyof T)[]가 되도록 선언할 것
 * 3. 실제 반환값은 string[]이지만, keyof T로 타입 선언하는 것이 타입스크립트의 안전한 방식임
 *
 * [예시]
 * const keys1 = getObjectKeys({ id: 1, name: "유저" });      // ["id", "name"]
 * const keys2 = getObjectKeys({ a: 1, b: 2, c: 3 });         // ["a", "b", "c"]
 */

// TODO: 여기에 getObjectKeys 함수를 작성하세요.

// 아래 코드를 복사해 결과를 확인해 보세요.
const keys1 = getObjectKeys({ id: 1, name: "유저" }); // ["id", "name"]
const keys2 = getObjectKeys({ a: 1, b: 2, c: 3 }); // ["a", "b", "c"]
