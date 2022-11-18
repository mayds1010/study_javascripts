//const animals = ["dog", "cat", "bird", "fish", "lizard"];

//Normal방식
//for (let i = 2; i < animals.length; i++) {
//  console.log(`${animals[i]}`);
//}
//dog
//cat
// bird
// fish
// lizard

//for iterable 묶음에서 하나씩 뽑아내는 방식
//for (let animal of animals) {
//animal은 for문을 돌때마다 animals의 값을 담음
// console.log(`${animal}`);
//}
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
//   animal,
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
// const cars = ["BMW", "Volvo", "Mini"]; //넘버타입안에 스트링
// for (let car of cars) {
//   //()=파라메타
//   console.log(`${car}`); //cars[0]=index임
//   cars[0];
// }
// BMW;
// Volvo;
// Mini;

//car
// cars.forEach((car) => {
//   console.log(`${car}`);
// });

//forEach = for iterable
const array1 = ["a", "b", "c"];
//방법1
array1.forEach((element, i) => console.log(element));

//방법2 Arrow Runction 이렇게 사용하는게 더 편함
let arrowFunction = (element, index) => {
  console.log(`${element} , index ${index}`); //scope
};
array1.forEach(arrowFunction);

//방법3 Normal Function
function normalFunction(element) {
  console.log(element);
}
array1.forEach(arrowFunction);
//위에 세개포함 abc *3출력
