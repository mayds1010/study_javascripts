// let fs = require("fs");

// fs.readFileSync(filepath) = sentance(string.js에 있는)둘은 같다
// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt"; //삼항연산자,"linux"는 백준 docs/vanilla_js/input.txt는 윈도우
// let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number); //System.in과 같은

// 백준문제 사칙연산문제 1
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

//백준 조건문 시험점수 문제
// let fs = require("fs");

// let inputs = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number); //System.in과 같은

// console.log(
//   inputs >= 90
//     ? "A"
//     : inputs >= 80
//     ? "B"
//     : inputs >= 70
//     ? "C"
//     : inputs >= 60
//     ? "D"
//     : "F"
// );

//백준 조건문 윤년 문제
let fs = require("fs");

let year = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number); //System.in과 같은

// console.log(
//   year % 400 == 0 ? "1" : year % 4 == 0 && year % 100 != 0 ? "1" : "0"
// );

//배열문제
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// let count = Number(input[0]);
// let number = input[1].split(" ").map(Number);

// let max = number[0];
// let min = number[0];

// for (let i = 1; i < count; i++) {
//   if (max < number[i]) {
//     max = number[i];
//   }

//   if (min > number[i]) {
//     min = number[i];
//   }
// }

// console.log(`${min} ${max}`);
//split 메서드를 사용하여 줄(\n)을 기준으로 입력값을 나누어줌

//그 후 split 메서드를 한번 더 사용하여 공백(' ')을 기준으로 한번 더 나누어 줌
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let max = input[0];
let number = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    number = i;
  }
}

console.log(`${max}`);
console.log(`${number + 1}`);
