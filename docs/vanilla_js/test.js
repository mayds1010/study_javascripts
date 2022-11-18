// const fs = require("fs");
// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

// let inputs = fs
//   .readFileSync(filepath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

// let surveyQuestions = [
//   {
//     questions_uid: "Q1",
//     questions: "해당 매장을 방문시 매장은 청결 하였습니까?",
//     orders: 1,
//   },
//   {
//     questions_uid: "Q4",
//     questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
//     orders: 4,
//   },
//   {
//     questions_uid: "Q2",
//     questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
//     orders: 2,
//   },
//   {
//     questions_uid: "Q5",
//     questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
//     orders: 5,
//   },
//   {
//     questions_uid: "Q3",
//     questions: "주문시 직원은 고객님께 친절 하였습니까?",
//     orders: 3,
//   },
// ];

// let surveyAnswers = [
//   { example_uid: "E5", example: "매우 그렇다", orders: 5 },
//   { example_uid: "E1", example: "전혀 아니다", orders: 1 },
//   { example_uid: "E4", example: "그렇다", orders: 4 },
//   { example_uid: "E2", example: "아니다", orders: 2 },
//   { example_uid: "E3", example: "보통이다", orders: 3 },
// ];

// // ======================================== 처리 ========================================

// function surveyQuestion(i) {
//   //설문 질문
//   console.log(
//     `${surveyQuestions[i]["orders"]}. ${surveyQuestions[i]["questions"]}`
//   );
// }

// function surveyAnswer(...args) {
//   // 설문 답항
//   args.forEach((arg) => {
//     str += `(${surveyAnswers[arg]["orders"]}) ${surveyAnswers[arg]["example"]} `;
//   });
//   console.log(str);
//   console.log("");
//   str = "";
// }

// function userAnswer(i) {
//   // 유저 답변
//   console.log(`답) (${inputs[i]})\n`);
// }

// // ======================================== 출력 ========================================
// for (let i = 0; i < surveyQuestions.length; i++) {
//   surveyQuestion(i);
//   switch (i) {
//     case 0:
//       surveyAnswer(1, 3, 4);
//       userAnswer(i);
//       break;
//     case 1:
//       surveyAnswer(1, 3, 4, 2);
//       userAnswer(i);
//       break;
//     case 2:
//       surveyAnswer(1, 3);
//       userAnswer(i);
//       break;
//     case 3:
//       surveyAnswer(1, 3, 4, 2, 0);
//       userAnswer(i);
//       break;
//     case 4:
//       surveyAnswer(1, 3, 4);
//       userAnswer(i);
//       break;
//   }
// }

// console.log("--------------------- 설문자 선택 --------------------------");

// for (let i = 0; i < surveyQuestions.length; i++) {
//   surveyQuestion(i);
//   userAnswer(i);
// }

// console.log("이용해주셔서 감사합니다!");

// console.log("-------------------설문자 선택--------------------");
// for (i = 0; i < survey.length; i++) {
//   survey_display(i); // 질문

//   let answer_value = inputs[i] - 1; //인덱스값은 번호보다 1 적으니까 -1   // 답변
//   console.log(`${answers[answer_value]["example"]}`);
//   console.log(" ");
// }

// console.log("이용해주셔서 감사합니다!");
//방법2
// const fs = require("fs");

// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let inputs = fs.readFileSync(filepath).toString().trim().split("\n");

// // 문항과 답항을 오브젝트에 담기
// let questions_list = [
//   {
//     questions_uid: "Q1",
//     questions: "해당 매장을 방문시 매장은 청결 하였습니까?",
//     orders: 1,
//   },
//   {
//     questions_uid: "Q4",
//     questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
//     orders: 4,
//   },
//   {
//     questions_uid: "Q2",
//     questions: "주문시 직원은 고객님께 친절 하였습니까?",
//     orders: 2,
//   },
//   {
//     questions_uid: "Q5",
//     questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
//     orders: 5,
//   },
//   {
//     questions_uid: "Q3",
//     questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
//     orders: 3,
//   },
// ];

// let example_list = [
//   { example_uid: "E5", example: "매우 그렇다", orders: 5 },
//   { example_uid: "E1", example: "전혀 아니다", orders: 1 },
//   { example_uid: "E4", example: "그렇다", orders: 4 },
//   { example_uid: "E2", example: "아니다", orders: 2 },
//   { example_uid: "E3", example: "보통이다", orders: 3 },
// ];

// // order 순으로 재배치
// questions_list = questions_list.sort((a, b) => {
//   return a.orders - b.orders;
// });
// example_list = example_list.sort((a, b) => {
//   return a.orders - b.orders;
// });

// // 문항과 답항 출력하는 function
// function printsurvey(questions_list, example_list) {
//   //문항 출력
//   questions_list.forEach((question) => {
//     console.log(`${question["orders"]}. ${question["questions"]}`);
//     // 문항에 따른 답항 출력
//     if (`${question["questions_uid"]}` === "Q1") {
//       for (let i = 0; i < 3; i++) {
//         console.log(
//           `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
//         );
//       }
//       console.log(`답 : (${inputs[0]})`);
//     } else if (`${question["questions_uid"]}` === "Q2") {
//       for (let i = 0; i < 4; i++) {
//         console.log(
//           `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
//         );
//       }
//       console.log(`답 : (${inputs[1]})`);
//     } else if (`${question["questions_uid"]}` === "Q3") {
//       for (let i = 0; i < 2; i++) {
//         console.log(
//           `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
//         );
//       }
//       console.log(`답 : (${inputs[2]})`);
//     } else if (`${question["questions_uid"]}` === "Q4") {
//       for (let i = 0; i < 5; i++) {
//         console.log(
//           `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
//         );
//       }
//       console.log(`답 : (${inputs[3]})`);
//     } else if (`${question["questions_uid"]}` === "Q5") {
//       for (let i = 0; i < 3; i++) {
//         console.log(
//           `(${example_list[i]["orders"]}) ${example_list[i]["example"]}`
//         );
//       }
//       console.log(`답 : (${inputs[4]})`);
//     }
//   });
// }
// //문항과 답항 출력
// printsurvey(questions_list, example_list);

// console.log("--------------------------설문자 선택--------------------------");

// // 설문자가 답한 문항과 답항 출력하는 function
// function printAnswer(questions_list, example_list, inputs) {
//   for (let i = 0; i < questions_list.length; i++) {
//     //문항 출력
//     console.log(
//       `${questions_list[i]["orders"]}. ${questions_list[i]["questions"]}`
//     );
//     // 설문자가 입력한 답항과 예시 답항 맞추어 출력하는 function
//     let answer_match = (inputs, example_list) => {
//       if (
//         parseInt(`${inputs[i]}`) === parseInt(`${example_list[0]["orders"]}`)
//       ) {
//         console.log(
//           `(${example_list[0]["orders"]}) ${example_list[0]["example"]}`
//         );
//       } else if (
//         parseInt(`${inputs[i]}`) === parseInt(`${example_list[1]["orders"]}`)
//       ) {
//         console.log(
//           `(${example_list[1]["orders"]}) ${example_list[1]["example"]}`
//         );
//       } else if (
//         parseInt(`${inputs[i]}`) === parseInt(`${example_list[2]["orders"]}`)
//       ) {
//         console.log(
//           `(${example_list[2]["orders"]}) ${example_list[2]["example"]}`
//         );
//       } else if (
//         parseInt(`${inputs[i]}`) === parseInt(`${example_list[3]["orders"]}`)
//       ) {
//         console.log(
//           `(${example_list[3]["orders"]}) ${example_list[3]["example"]}`
//         );
//       } else if (
//         parseInt(`${inputs[i]}`) === parseInt(`${example_list[4]["orders"]}`)
//       ) {
//         console.log(
//           `(${example_list[4]["orders"]}) ${example_list[4]["example"]}`
//         );
//       }
//     };
//     // 매치한 문항 출력
//     answer_match(inputs, example_list);
//   }
// }

// // 설문자 선택 문항 답항 출력
// printAnswer(questions_list, example_list, inputs);

//방법3
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ");

// 설문 문항 리스트
let questions = [
  {
    questions_uid: "Q1",
    question: "1. 해당 매장을 방문시 매장은 청결 하였습니까?",
  },
  {
    questions_uid: "Q2",
    question: "2. 주문시 직원은 고객님께 친절 하였습니까?",
  },
  {
    questions_uid: "Q3",
    question: "3. 주문하신 음료가 나오기까지 시간이 적당하였습니까?",
  },
  {
    questions_uid: "Q4",
    question: "4. 직원이 제조한 음료에 대해 맛은 좋았습니까?",
  },
  {
    questions_uid: "Q5",
    question: "5. 해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
  },
];

// 답항 리스트
let answers = [
  { example_uid: "E1", example: "(1) 전혀 아니다." },
  { example_uid: "E2", example: "(2) 아니다." },
  { example_uid: "E3", example: "(3) 보통이다." },
  { example_uid: "E4", example: "(4) 그렇다." },
  { example_uid: "E5", example: "(5) 매우 그렇다." },
];

// 설문 문항 function
function questions_function(i) {
  console.log(`${questions[i]["question"]}`);
}

// 답항 function
function answer_function(i) {
  if (questions[i]["questions_uid"] == "Q1") {
    for (let i = 0; i < 3; i++) {
      console.log(`${answers[i]["example"]}`);
    }
  } else if (questions[i]["questions_uid"] == "Q2") {
    for (let i = 0; i < 4; i++) {
      console.log(`${answers[i]["example"]}`);
    }
  } else if (questions[i]["questions_uid"] == "Q3") {
    for (let i = 0; i < 2; i++) {
      console.log(`${answers[i]["example"]}`);
    }
  } else if (questions[i]["questions_uid"] == "Q4") {
    for (let i = 0; i < 5; i++) {
      console.log(`${answers[i]["example"]}`);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      console.log(`${answers[i]["example"]}`);
    }
  }
}

// 설문에 맞는 답항 출력
for (let i = 0; i < questions.length; i++) {
  questions_function(i);
  answer_function(i);
  console.log(" ");
  console.log(`답) (${inputs[i]})`);
  console.log(" ");
}

console.log("------------------ 설문자 선택 ------------------ ");

// 설문자 선택 조회
for (let i = 0; i < questions.length; i++) {
  questions_function(i);
  let answers_num = inputs[i] - 1;
  console.log(`${answers[answers_num]["example"]}`);
  console.log(" ");
}

console.log("이용해주셔서 감사합니다!");
