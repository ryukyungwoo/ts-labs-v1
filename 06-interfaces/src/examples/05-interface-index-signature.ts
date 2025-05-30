// 인덱스 시그니처 (동적 키 구조)

interface StringMap {
  [key: string]: string;
}

const colors: StringMap = {
  red: "#ff0000",
  green: "#00ff00",
};

colors.blue = "#0000ff";
console.log(colors["green"]); // "#00ff00"
