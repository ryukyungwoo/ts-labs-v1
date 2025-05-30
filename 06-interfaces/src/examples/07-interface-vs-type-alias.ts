// 타입 별칭(type alias)과 인터페이스(interface)의 비교

// 1. 구조적으로 거의 비슷하게 쓸 수 있음
type UserType = {
  id: number;
  name: string;
};
interface UserInterface {
  id: number;
  name: string;
}

const userT: UserType = { id: 100, name: "타입" };
const userI: UserInterface = { id: 200, name: "인터페이스" };

// 2. 확장성 차이 (extends & intersection)
// 인터페이스: 상속 가능
interface Animal {
  sound: string;
}
interface Cat extends Animal {
  color: string;
}
const kitty: Cat = { sound: "야옹", color: "흰색" };

// 타입 별칭: intersection (&)으로 결합
type AnimalT = { sound: string };
type CatT = AnimalT & { color: string };
const kitty2: CatT = { sound: "야옹", color: "검은색" };

// 3. 선언적 확장 가능 여부
// 인터페이스는 동일 이름으로 여러 번 선언해도 자동 합쳐짐
interface MergeMe {
  a: number;
}
interface MergeMe {
  b: string;
}
const merged: MergeMe = { a: 1, b: "합쳐짐" };

// 타입 별칭은 같은 이름으로 여러 번 선언 불가(에러!)
// type MergeMe = { a: number }; // (이미 선언되어 있으면 불가)

// 4. 결론
// - "객체의 구조" 정의엔 인터페이스를 주로 사용 (특히 OOP, 클래스 등)
// - 유니언/교차타입 등 복잡한 타입 조합엔 타입 별칭 활용
