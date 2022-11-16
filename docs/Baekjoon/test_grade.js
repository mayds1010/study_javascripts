//시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

console.log(
  inputs >= 90
    ? "A"
    : inputs >= 80
    ? "B"
    : inputs >= 70
    ? "C"
    : inputs >= 60
    ? "D"
    : "F"
);
