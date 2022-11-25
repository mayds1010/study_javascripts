const questions_list = [
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
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 5,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 4,
  },
];

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 },
];

const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" },
];

//예상 묶음 데이터,배열로 만듬
// [
// [Q1, E1,E2] -> {questiones_uid:Q1,answer_uids:[E1,E2],answer:Q2}이런 object방식으로 넣는게 좋음
// [Q2, E1,E2,E3] -> {questiones_uid:Q2,answer_uids:[E1,E2,E3]}
// [Q3, E1,E2] -> {questiones_uid:Q3,answer_uids:[E1,E2]}
// [Q4, E1,E2,E3,E4,E5] -> {questiones_uid:Q4,answer_uids:[E1,E2,E3,E4,E5]}
// [Q5, E1,E2,E3] -> {questiones_uid:Q5,answer_uids:[E1,E2,E3]}
// ]

//1차 방식:[Q1,Q2,Q3,Q4,Q5]
//2차 방식:Array in [[Q1,E1,E2],[Q2,E1,E2,E3]...]
//3차 방식:object in Array
let polls = []; //전체 묶음[Q1,Q2,Q3,Q4,Q5]들어가 있어야 함
let question_compare; //그냥 비교하는 값
let questions = {}; // 내부 묶음
let answer_uids = []; // 내부 설문 답변 묶음
for (let idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (Object.keys(questions).length > 0) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
      questions = {};
      answer_uids = [];
    }
    // console.log(`!= : ${questions_answers[idx]["questions_uid"]}`);
    // console.log(`!= : ${questions_answers[idx]["answer_uid"]}`);
    questions["questions_uid"] = questions_answers[idx]["questions_uid"];
    answer_uids.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${questions_answers[idx]["answer_uid"]}`);
    answer_uids.push(questions_answers[idx]["answer_uid"]);
    if (idx + 1 >= questions_answers.length) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
    }
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 입력
}
//polls.push(questions); 그냥이것만 넣어도 5번이 추가 됨
//console.log(`${polls}`);

//출력
//3차 방식:object in Array
//[
//{questiones_uid:Q1,answer_uids:[E1,E2]},
//{questiones_uid:Q2,answer_uids:[E1,E2,E3]},
//...]
// polls[0]["questions_uid"];//1번
// polls[0]["answer_uids"][0];
// polls[0]["answer_uids"][1];

// polls[1]["questions_uid"];//2번
// polls[1]["answer_uids"][0];
// polls[1]["answer_uids"][1];
// polls[1]["answer_uids"][2];
// 다른 방법
// function getQuestionByUid(questions_uid) {
//   let questions_desc;
//   for (question_item of questions_list) {
//     if (question_item["questions_uid"] >= questions_uid) {
//       questions_desc = question_item["question"];
//     }
//   }
//   return questions_desc;
// }
function getQuestionByUid(question_uid) {
  // questions_uid = 'Q1'
  let question_desc = "";
  for (question of questions_list) {
    if (question["questions_uid"] === question_uid) {
      question_desc = question["question"];
      break;
    }
  }
  return question_desc;
}

function getAnswerByUid(answer_uid) {
  let answer_desc = "";
  for (answer of answer_list) {
    if (answer["answer_uid"] === answer_uid) {
      answer_desc = answer["answer"];
      break;
    }
  }
  return answer_desc;
}

for (poll of polls) {
  let question_desc = getQuestionByUid(poll["questions_uid"]);
  // console.log(`${poll["questions_uid"]}. ${question_desc}`); // == polls[idx]
  let answer_uids = poll["answer_uids"];
  answer_uids.forEach((answer_uid, index) => {
    // answers
    // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
  });
}

// Event handlers
// Next 클릭 시 순서 있게 설문 표시
// 대상 변수는 polls
let queryNext = document.querySelector("#next");
queryNext.addEventListener("click", setPollContentNext);

//html과 연결하여 창에 문항,답항 보여지는
let index = 0;
function setPollContentNext() {
  if (index === polls.length) {
    alert("마지막 페이지 입니다");
    return;
  } else {
    let queryContent = document.querySelector("#poll-contents");
    // polls[0]["questions_uid"]; // 설문 문항
    // polls[0]["answer_uids"]; // 설문 답항 묶음
    // 1. 매장 상태가 좋은가요 ?
    //  (1) 예
    //  (2) 아니다.
    // console.log(getQuestionByUid(polls[index]["questions_uid"]));
    let desc = `<div>${index + 1}. ${getQuestionByUid(
      polls[index]["questions_uid"]
    )}</div>`;
    polls[index]["answer_uids"].forEach((answer_uid, index) => {
      // answers
      // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
      desc =
        desc +
        `<div><input type = "radio" name = "answers" id = "id${index}" ><label for = "id${index}">(${
          index + 1
        }) ${getAnswerByUid(answer_uid)}</div>`;
    });
    queryContent.innerHTML = desc;
    index++;
  }
}

let queryPrev = document.querySelector("#prev");
queryPrev.addEventListener("click", setPollContentPrev);

function setPollContentPrev() {
  if (index === 0) {
    alert("첫 페이지입니다");
    return;
  } else {
    let queryContent = document.querySelector("#poll-contents");
    let desc = `<div>${index + 1}. ${getQuestionByUid(
      polls[index]["questions_uid"]
    )}</div>`;
    polls[index]["answer_uids"].forEach((answer_uid, index) => {
      desc =
        desc +
        `<div><input type = "radio" name = "answers" id = "id${index}" ><label for = "id${index}">(${
          index + 1
        }) ${getAnswerByUid(answer_uid)}</div>`;
    });
    queryContent.innerHTML = desc;
    index--;
  }
}
