// [문제] 디스크리미네이티드 유니온(Tagged Union) 패턴
// API 응답 타입 분기: 성공이면 데이터 출력, 실패면 에러 메시지 출력

type SuccessResponse = { ok: true; data: string };
type ErrorResponse = { ok: false; error: string };
type ApiResponse = SuccessResponse | ErrorResponse;

function handleApiResponse(res: ApiResponse) {
  // 여기에 코드를 작성하세요.
}

// 사용 예시
// handleApiResponse({ ok: true, data: "가입 완료" });
// handleApiResponse({ ok: false, error: "중복된 이메일" });
