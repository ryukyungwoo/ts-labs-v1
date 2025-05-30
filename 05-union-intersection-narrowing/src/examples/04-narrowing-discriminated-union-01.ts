// API 응답이 성공 or 실패일 수 있는 케이스에서 내로잉

type SuccessResponse = { ok: true; data: string };
type ErrorResponse = { ok: false; error: string };
type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(res: ApiResponse) {
  if (res.ok) {
    // 내로잉: ok가 true면 SuccessResponse로 확정!
    console.log("성공 데이터:", res.data);
  } else {
    // 내로잉: ok가 false면 ErrorResponse!
    console.error("에러:", res.error);
  }
}

// 사용 예시
handleResponse({ ok: true, data: "로그인 성공" });
handleResponse({ ok: false, error: "비밀번호 오류" });
