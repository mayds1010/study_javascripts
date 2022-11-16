//let animal = {key:value,key:value,key:value}
let animal = { name: "juju", species: "cat" }; //object방식

console.log(animal.name); //juju

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
  console.log(`${[key]} : ${animal[key]}`); //animal['name'],animal['species']
}
// juju
// name : juju
// species : cat
console.log();

//juju
// animal['species'] - 스트링이여서 ' ' 사용(위와같이 두가지 방식 사용가능)
// 'cat'
//key를 기준으로 value를 뽑는방식animal['name']이 방식
const animals_obj = [
  animal,
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
]; //데이터타입 Array
// Object.keys(animal)
// (2) ['name', 'species']
// Object.values(animal)
// (2) ['juju', 'cat']
for (let animal of animals_obj) {
  consol.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}
