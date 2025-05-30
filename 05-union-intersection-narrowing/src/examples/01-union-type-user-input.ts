// 유저 입력값이 string 또는 number일 수 있는 경우 (예: 나이 입력 폼)
function parseAgeInput(input: string | number): number {
  if (typeof input === "string") {
    // 문자열일 경우 숫자로 변환
    const num = Number(input.trim());
    if (isNaN(num)) throw new Error("유효하지 않은 나이 입력값");
    return num;
  }
  // 이미 숫자라면 그대로 반환
  return input;
}

// 사용 예시
console.log(parseAgeInput("32")); // 32
console.log(parseAgeInput(27)); // 27
// console.log(parseAgeInput("열다섯")); // Error
