//연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

let year = fs.readFileSync(filepath).toString().trim().split(" ").map(Number); //System.in과 같은

console.log(
  year % 400 == 0 ? "1" : year % 4 == 0 && year % 100 != 0 ? "1" : "0"
);
