// [문제] instanceof 패턴: 다양한 에러 객체의 타입 분기와 메시지 처리
// NotFoundError에는 resource, ValidationError에는 field 프로퍼티가 있음

class NotFoundError extends Error {
  constructor(public resource: string) {
    super(`${resource} not found`);
    this.name = "NotFoundError";
  }
}
class ValidationError extends Error {
  constructor(public field: string) {
    super(`Invalid input for ${field}`);
    this.name = "ValidationError";
  }
}

function handleError(err: Error) {
  // 여기에 코드를 작성하세요.
}

// 사용 예시
// handleError(new NotFoundError("User"));
// handleError(new ValidationError("email"));
// handleError(new Error("알 수 없는 에러"));
