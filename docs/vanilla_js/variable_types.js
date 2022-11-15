let let_first = 10; //number

{
  console.log(`In let_first ${let_first}`);
  let let_second = 20;
  console.log(`In let_second ${let_second}`);
} //
console.log(`Out let_first ${let_first}`);
//console.log(`Out let_second ${let_second}`); Error
//In let let_first 10
//In let_second 20
//Out let_first 10

//check typeof : 데이터의 타입을 확인하는 역할
console.log(`typeof let_first : ${typeof let_first}`);
let_first = "good"; // string
console.log(`typeof let_first : ${typeof let_first}`);

console.log();
// typeof let_first : number
// typeof let_first : string
// let_first = true;
// true
// typeof let_first
// 'boolean'
