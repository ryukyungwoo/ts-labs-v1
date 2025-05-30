// [문제] typeof 패턴: 입력값 타입 판별 및 처리
// 입력값이 문자열이면 모두 대문자로, 숫자면 세제곱 값 출력

function handleInput(input: string | number) {
  // 여기에 코드를 작성하세요.
  if (typeof input === "string") {
    console.log(input.toUpperCase());
    return;
  }
  if (typeof input === "number") {
    console.log(input * input * input);
  }
}

// 사용 예시
// handleInput("hello"); // "HELLO"
// handleInput(2); // 8
handleInput("hello"); // "HELLO"
handleInput(2); // 8
