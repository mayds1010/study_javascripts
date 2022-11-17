let fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let survey = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 4,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 5,
  },
];

let answers = [
  { example_uid: "E1", example: "(1) 전혀 아니다", order: 1 },
  { example_uid: "E2", example: "(2) 아니다", order: 2 },
  { example_uid: "E3", example: "(3) 보통이다", order: 3 },
  { example_uid: "E4", example: "(4) 그렇다", order: 4 },
  { example_uid: "E5", example: "(5) 매우 그렇다", order: 5 },
];

let survey_item = (element) => {
  //문항
  let question = survey[element]["order"] + ". " + survey[element]["question"];
  console.log(`${question}`);
};

function answers_item(...args) {
  //답항
  let answer = (arg) => {
    console.log(`${answers[arg]["example"]}`);
  };
  args.forEach(answer);
}

let user_answer_item = function user_answer(element) {
  //답
  console.log(`답: (${inputs[element]})`);
};

for (let i = 0; i < survey.length; i++) {
  survey_item(i); // 문항반복출력

  switch (i) {
    case 0:
      answers_item(0, 1, 2); //답항 출력
      user_answer_item(i); //답 출력
      break;

    case 1:
      answers_item(0, 1, 2, 3);
      user_answer_item(i);
      break;

    case 2:
      answers_item(0, 1);
      user_answer_item(i);
      break;

    case 3:
      answers_item(0, 1, 2, 3, 4);
      user_answer_item(i);
      break;

    case 4:
      answers_item(0, 1, 2);
      user_answer_item(i);
      break;
  }

  console.log(" ");
}
