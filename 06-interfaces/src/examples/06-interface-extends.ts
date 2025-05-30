// 인터페이스 확장 (상속)

interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "뽀삐",
  breed: "진돗개",
};

function printDog(dog: Dog) {
  console.log(`강아지 이름: ${dog.name}, 품종: ${dog.breed}`);
}
printDog(myDog);
