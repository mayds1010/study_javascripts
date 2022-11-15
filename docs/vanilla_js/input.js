let fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt"; //삼항연산자,"linux"는 백준 docs/vanilla_js/input.txt는 윈도우
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number); //System.in과 같은
//fs.readFileSync(filepath) = sentance(string.js에 있는)둘은 같다

//체인 펑션
//let inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let readFileSync = fs.readFileSync("/dev/stdin"); //scanner(System.in)과 같음 //Sync
// let toString = readFileSync.toString();
// let trim = toString().trim();
// let split = trim.split(" ");
