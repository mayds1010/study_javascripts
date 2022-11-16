// const fs = require("fs");

// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt"; //삼항연산자,"linux"는 백준 docs/vanilla_js/input.txt는 윈도우
// let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number); //System.in과 같은

//fs.readFileSync(filepath) = sentance(string.js에 있는)둘은 같다

//체인 펑션
//let inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let readFileSync = fs.readFileSync("/dev/stdin"); //scanner(System.in)과 같음 //Sync
// let toString = readFileSync.toString();
// let trim = toString().trim();
// let split = trim.split(" ");
let sentance = " 5 2 6 ";
let trims = sentance.trim(); //공백 제거
let splits = trims.split(" "); //공백으로 배열 만듬
let maps = splits.map(Number); //각 배열을 String To Number로 바꿈
// split : 문자열을 배열로 바꾸는 역할
console.log(maps[0] + maps[1] + maps[2]); //합산을 함.

let inputs = sentance.trim().split(" ").map(Number); //체인펀션
console.log(inputs[0] + inputs[1] + inputs[2]); //합산을 함.

// const fs = require("fs");

// //fs.readFileSync(filepath) = sentance(string.js에 있는)둘은 같다
// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt"; //삼항연산자,"linux"는 백준 docs/vanilla_js/input.txt는 윈도우
// let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number); //System.in과 같은

// // 백준문제 사칙연산문제 1
// console.log(inputs[0] + inputs[1]);
// console.log(inputs[0] - inputs[1]);
// console.log(inputs[0] * inputs[1]);
// console.log(Math.floor(inputs[0] / inputs[1]));
// console.log(inputs[0] % inputs[1]);

// 백준문제 사칙연산문제 2
// console.log(inputs[0] + inputs[1]);
// console.log(inputs[0] - inputs[1]);
// console.log(inputs[0] * inputs[1]);
// console.log(parseInt(inputs[0] / inputs[1]));
// console.log(inputs[0] % inputs[1]);
// parseInt 백준에서 런타임에러 뜸 그냥 Math.floor쓰는게 좋음

// 백준 사칙연산문제 3
// let a = inputs[0];
// let b = inputs[1];

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(Math.floor(a / b));
// console.log(a % b);
