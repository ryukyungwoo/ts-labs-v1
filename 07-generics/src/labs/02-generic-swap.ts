/**
 * [문제] 두 값을 받아서 순서를 바꾼 뒤 튜플로 반환하는 제네릭 함수를 만드세요.
 *
 * - 함수 이름: swap
 * - 매개변수: a, b (각각 임의 타입, 서로 다른 타입 가능)
 * - 반환값: [b, a] (튜플)
 *
 * [요구사항]
 * 1. 두 개의 타입 파라미터를 사용할 것 (예: <A, B>)
 * 2. 어떤 타입이 오든 사용 가능해야 함 (예: number, string, boolean 등)
 * 3. 반환값 타입도 튜플 타입 [B, A]가 되도록 할 것
 *
 * [예시]
 * const swapped1 = swap(1, "hello");    // [string, number]
 * const swapped2 = swap(true, [1, 2]);  // [number[], boolean]
 */

// TODO: 여기에 swap 함수를 작성하세요.

// 아래 코드를 복사해 결과를 확인해 보세요.
const swapped1 = swap(1, "hello"); // ['hello', 1]
const swapped2 = swap(true, [1, 2]); // [[1, 2], true]
