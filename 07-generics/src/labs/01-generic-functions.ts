/**
 * [문제] 임의의 타입 배열에서 마지막 요소를 반환하는 제네릭 함수를 만드세요.
 *
 * - 함수 이름: getLastElement
 * - 매개변수: arr (임의의 타입 배열, 예: number[], string[] 등)
 * - 반환값: arr의 마지막 요소 (없으면 undefined)
 *
 * [요구사항]
 * 1. 제네릭 함수로 작성할 것 (타입 파라미터 T 사용)
 * 2. 빈 배열일 때는 undefined를 반환해야 함
 * 3. 입력 타입이 무엇이든 올 수 있도록 설계할 것
 *
 * [예시]
 * const n = getLastElement([1, 2, 3]);   // n: number | undefined (3)
 * const w = getLastElement(['a', 'b']);  // w: string | undefined ('b')
 * const e = getLastElement([]);          // e: undefined
 */

// TODO: 여기에 getLastElement 함수를 작성하세요.

// 아래 코드를 복사해 결과를 확인해 보세요.
const n = getLastElement([1, 2, 3]); // 3
const w = getLastElement(["a", "b"]); // 'b'
const e = getLastElement([]); // undefined
