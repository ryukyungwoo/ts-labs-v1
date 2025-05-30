// [문제] 타입 가드 함수 패턴: 여러 동물 중 Dog만 골라서 이름과 짖는 소리 출력

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

// function isDog(animal: Animal): animal is Dog {
//   // 여기에 코드를 작성하세요.
// }

const animals: Animal[] = [
  { type: "dog", name: "몽이", bark: () => console.log("멍!") },
  { type: "cat", name: "냥이", meow: () => console.log("야옹~") },
  { type: "dog", name: "쫑", bark: () => console.log("왈왈!") },
];

// isDog를 filter에 활용해서 Dog만 골라 각각 이름과 짖는 소리를 출력하세요.
