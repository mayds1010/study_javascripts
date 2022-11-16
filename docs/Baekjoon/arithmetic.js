//두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.
const fs = require("fs");

//fs.readFileSync(filepath) = sentance(string.js에 있는)둘은 같다
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt"; //삼항연산자,"linux"는 백준 docs/vanilla_js/input.txt는 윈도우
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number); //System.in과 같은

console.log(inputs[0] + inputs[1]);
console.log(inputs[0] - inputs[1]);
console.log(inputs[0] * inputs[1]);
console.log(Math.floor(inputs[0] / inputs[1]));
console.log(inputs[0] % inputs[1]);
