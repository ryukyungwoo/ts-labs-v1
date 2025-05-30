// 읽기 전용 프로퍼티 (readonly)

interface Point {
  readonly x: number;
  readonly y: number;
}

const p: Point = { x: 10, y: 20 };
// p.x = 30; // 에러! 읽기 전용이므로 값 변경 불가

function printPoint(pt: Point) {
  console.log(`좌표: (${pt.x}, ${pt.y})`);
}

printPoint(p);
