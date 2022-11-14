let fs = require("fs");
//체인 펑션
//let inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let readFileSync = fs.readFileSync("/dev/stdin"); //scanner(System.in)과 같음 //Sync
let toString = readFileSync.toString();
let trim = toString().trim();
let split = trim.split(" ");

console.log();
