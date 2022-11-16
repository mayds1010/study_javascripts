//object : 여러 정보를 key,value에 담을 수 있음
// //let animal = {key:value,key:value,key:value}
let animal = { name: "juju", species: "cat" };
//juju
console.log(animal.name);

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
  //되도록 이렇게 쓰기
  console.log(`${[key]} : ${animal[key]}`); //animal['name'],animal['species']와 같음
}
// animal['species'] - 스트링이여서 ' ' 사용(위와같이 두가지 방식 사용가능)
// 'cat'
//key를 기준으로 value를 뽑는방식animal['name']이 방식
console.log();
//name : juju
//species : cat

const animals_obj = [
  animal, //animal은 name: "juju"과 같음
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];
//데이터타입 Array
// Object.keys(animal)
// (2) ['name', 'species']
// Object.values(animal)
// (2) ['juju', 'cat']
