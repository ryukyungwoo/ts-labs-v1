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

// 실제로 다양한 에러 타입이 올 수 있는 상황
function handleError(err: Error) {
  if (err instanceof NotFoundError) {
    // NotFoundError만의 필드에 접근 가능
    console.log(`[404] ${err.message} (resource: ${err.resource})`);
  } else if (err instanceof ValidationError) {
    // ValidationError만의 필드에 접근 가능
    console.log(`[400] ${err.message} (field: ${err.field})`);
  } else {
    // 그 외 일반 에러
    console.log(`[500] ${err.message}`);
  }
}

// 사용 예시
try {
  throw new ValidationError("email");
} catch (err) {
  if (err instanceof Error) handleError(err);
}
