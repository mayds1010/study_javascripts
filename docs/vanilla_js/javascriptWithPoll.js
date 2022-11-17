const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map_(Number);

let inputs_answers = [];
for (let i = 0; i < 5; i++) {
  inputs_answers[i] = inputs[i];
}

let survey = [
  {
    questions: "해당 매장을 방문시 매장은 청결 하였습니까?",
    answers: "(1)전혀 아니다 (2)아니다 (3)보통이다",
  },
  {
    questions: "직원이 제조한 음료에 대해 맛은 좋았습니까 ?",
    answers: "(1)전혀 아니다 (2)아니다 (3)보통이다 (4)그렇다",
  },
  {
    questions: "주문시 직원은 고객님께 친절 하였습니까? ?",
    answers: "(1)전혀 아니다 (2)아니다 ",
  },
  {
    questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까? ?",
    answers: "(1)전혀 아니다 (2)아니다 (3)보통이다 (4)그렇다 (5)매우 그렇다",
  },
  {
    questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    answers: "(1)전혀 아니다 (2)아니다 (3)보통이다",
  },
];

survey.forEach((Object, length) => {
  console.log(`${length + ":" + Object.questions + ":" + Object.answers}`);
});
