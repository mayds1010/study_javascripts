let fs = require("fs");

// //새로 붙인 코드 fs.readFileSync(filepath) = sentance(string.js에 있는)둘은 같다
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt"; //삼항연산자,"linux"는 백준 docs/vanilla_js/input.txt는 윈도우
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number); //System.in과 같은

console.log(inputs[0] + inputs[1]);
console.log(inputs[0] - inputs[1]);
console.log(inputs[0] * inputs[1]);
console.log(Math.floor(inputs[0] / inputs[1]));
console.log(inputs[0] % inputs[1]);

//두번째 방법
// let a = inputs[0];
// let b = inputs[1];

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(Math.floor(a / b));
// console.log(a % b);

//체인 펑션
//let inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let readFileSync = fs.readFileSync("/dev/stdin"); //scanner(System.in)과 같음 //Sync
// let toString = readFileSync.toString();
// let trim = toString().trim();
// let split = trim.split(" ");

//백준 두번째방법
//console.log();
// let fs = require("fs");

// //새로 붙인 코드 fs.readFileSync(filepath) = sentance(string.js에 있는)둘은 같다
// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// console.log(inputs[0] + inputs[1]);
// console.log(inputs[0] - inputs[1]);
// console.log(inputs[0] * inputs[1]);
// console.log(parseInt(inputs[0] / inputs[1]));
// console.log(inputs[0] % inputs[1]);
//백준에서 런타임에러 뜸 그냥 Math.floor쓰는게 좋음
