//const animals = ["dog", "cat", "bird", "fish", "lizard"];

//Normal방식
//
// bird
// fish
// lizard

//for iterable 묶음에서 하나씩 뽑아내는 방식
// for (let animal of animals) {
//   console.log(`${animal}`);
// }
// typeof animal
// 'string'

// animal.split('o')
// (2) ['d', 'g']
// dog
// cat
// bird
// fish
// lizard
// const animals_obj = [
//   //animal,
//   { name: "cat", species: "feline" }, //오브젝트타입
//   { name: "bird", species: "avian" },
//   { name: "fish", species: "aquatic" },
//   { name: "lizard", species: "reptile" },
// ]; //데이터타입 Array

// for (let animal of animals_obj) {
//   consol.log(`${animal["name"]}, ${animal["species"]}`);
//   console.log();
// }
//예제

const cars = ["BMW", "Volvo", "Mini"]; //넘버타입안에 스트링
for (let car of cars) {
  //()=파라메타
  console.log(`${car}`); //cars[0]=index임
  cars[0];
}
