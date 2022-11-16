//N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
//최대값, 최소값object_type적용 방법
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

let count = inputs[0];
let number = inputs[1].split(" ").map(Number);

let statistics_obj = { min: number[0], max: number[0] };

for (let i = 1; i < count; i++) {
  if (statistics_obj.max < number[i]) {
    statistics_obj.max = number[i];
  }
  if (statistics_obj.min > number[i]) {
    statistics_obj.min = number[i];
  }
}
console.log(`${statistics_obj.min} ${statistics_obj.max}`);
//split 메서드를 사용하여 줄(\n)을 기준으로 입력값을 나누어줌
//그 후 split 메서드를 한번 더 사용하여 공백(" ")을 기준으로 한번 더 나누어 줌

//다른방법
// const fs = require("fs");
// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

// let count = Number(inputs[0]);
// let number = inputs[1].split(" ").map(Number);

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

// console.log(min, max);
