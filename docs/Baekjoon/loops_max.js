// 문제: 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
// 예를 들어, 서로 다른 9개의 자연수
// 3, 29, 38, 12, 57, 74, 40, 85, 61
// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
const fs = require("fs"); // CommonJS Modules let input으로 되어 있어서 안됐던거임

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number); //System.in과 같은

let max = inputs[0];
let number = 0;

for (let i = 1; i < 9; i++) {
  if (max < inputs[i]) {
    max = inputs[i];
    number = i;
  }
}

console.log(`${max}`);
console.log(`${number + 1}`);
