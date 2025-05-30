/**
 * [문제] 서버 응답 타입을 제네릭 인터페이스로 정의하세요.
 *
 * - 인터페이스 이름: ApiResult
 * - 필드:
 *   - success: boolean
 *   - data: 임의 타입(T) (제네릭 타입 파라미터 사용)
 *   - error: string (옵셔널, 즉 없을 수도 있음)
 *
 * [요구사항]
 * 1. 인터페이스를 제네릭으로 정의할 것 (예: interface ApiResult<T>)
 * 2. data 필드가 T 타입이 되도록 할 것
 * 3. error 필드는 optional(?)
 *
 * [예시]
 * const res1: ApiResult<number> = { success: true, data: 123 }
 * const res2: ApiResult<string[]> = { success: false, data: [], error: "오류" }
 */

// TODO: 여기에 ApiResult 인터페이스를 작성하세요.

// 아래 코드를 복사해 결과를 확인해 보세요.
const res1: ApiResult<number> = { success: true, data: 123 };
const res2: ApiResult<string[]> = { success: false, data: [], error: "오류" };
