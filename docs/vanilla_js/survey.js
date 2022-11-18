// let fs = require("fs");
// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

// let inputs = fs
//   .readFileSync(filepath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

const answers = [
  //문항 과 답항
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];
let idx;
let compare;
for (idx = 0; idx < answers.length; idx++) {
  if (compare != answers[idx]["questions_uid"]) {
    console.log(`!= : ${answers[idx]["questions_uid"]}`);
    console.log(`!= :${answers[idx]["example_uid"]}`);
  } else {
    console.log(`== :${answers[idx]["example_uid"]}`);
  }
  compare = answers[idx]["questions_uid"];
}
console.log(`answers.length: ${answers.length},idx : ${idx}`);
// != : Q1
// != :E1
// == :E2
// == :E3
// != : Q2
// != :E1
// == :E2
// == :E3
// == :E4
// != : Q3
// != :E1
// == :E2
// != : Q4
// != :E1
// == :E2
