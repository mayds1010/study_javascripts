// //input.txt에 답 저장되어 있음

let fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";

let inputs = fs //inputs안에 답이 들어 있음
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 문항
let surveys = [
  {
    question_num: "1", //문항번호
    question: "해당 매장을 방문시 매장은 청결 하였습니까?", //문항
    answer: "E1 E2 E3", //답항갯수
  },
  {
    question_num: "2",
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    answer: "E1 E2 E3 E4",
  },
  {
    question_num: "3",
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    answer: "E1 E2",
  },
  {
    question_num: "4",
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    answer: "E1 E2 E3 E4 E5",
  },
  {
    question_num: "5",
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    answer: "E1 E2 E3",
  },
];

// 문항 답항 답 반복 출력
for (let i = 0; i < surveys.length; i++) {
  //문항5개를 반복 하고 function surveys_item(i)이 출력(질문)
  surveys_item(i); //문항을 담을 박스
  answer_item(surveys[i].answer); //답항갯수를 담을 박스에 surveys안의 답항을 연결
  console.log(`답) ${inputs[i]}`); //마지막 inputs를 통해 답 출력
}

function surveys_item(i) {
  console.log(`${surveys[i].question_num}. ${surveys[i].question}`);
} //문항번호와 문항출력
function answer_item(answer) {
  if (answer == "E1 E2 E3") {
    //위에 출력되고 답항들 출력
    console.log("(1)전혀 아니다 (2)아니다 3) 보통이다");
  } else if (answer == "E1 E2 E3 E4") {
    console.log("(1)전혀 아니다  (2)아니다  (3) 보통이다 (4)그렇다");
  } else if (answer == "E1 E2") {
    console.log("(1)전혀 아니다  (2)아니다");
  } else if (answer == "E1 E2 E3 E4 E5") {
    console.log(
      "(1)전혀 아니다  (2)아니다  (3) 보통이다  (4)그렇다 (5)매우 그렇다"
    );
  } else if (answer == "E1 E2 E3") {
    console.log("(1)전혀 아니다 (2)아니다  (3) 보통이다");
  }
}
//강사님코드
// let question_compare;
// let idx;
// for (idx = 0; idx < answers.length; idx++) {
//   if (question_compare == answers[idx]["questions_uid"]) {
//     console.log(
//       `== : ${answers[idx]["questions_uid"]}, ${answers[idx]["example_uid"]}`
//     );
//   } else {
//     console.log(
//       `!= : ${answers[idx]["questions_uid"]}, ${answers[idx]["example_uid"]}`
//     );
//   }

//   question_compare = answers[idx]["questions_uid"];
// }
// console.log(`${answers.length}, ${idx}`);
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
//body.addEventListener("load", init(), false);
//init() 만든 function
