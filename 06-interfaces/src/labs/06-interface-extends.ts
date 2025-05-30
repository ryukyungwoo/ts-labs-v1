// [문제]
// 기본 동물(Animal: name 속성)을 상속받는 Cat 인터페이스를 만드세요.
// Cat은 name(문자열), color(문자열) 속성을 가져야 합니다.
// 아래 cat 객체가 타입 에러 없이 동작하게 하세요.

const cat = { name: "나비", color: "회색" };

function printCat(c) {
  console.log(`이름: ${c.name}, 색상: ${c.color}`);
}
