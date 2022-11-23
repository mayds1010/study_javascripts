function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "Change on Me!"; //Click on Me!를 Change on Me!로 바꾸기
}

let queryclickalert = document.querySelector("#clickalert");
//element.addEventListener(event,function,unescapture);
queryclickalert.addEventListener("click", clickAlert);
function clickAlert() {
  alert("click on me!");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText); //버튼

function targetText(event) {
  //()안에 event넣어주면 좋음
  let queryChangeText = document.querySelector("#targetText");
  queryChangeText.innerHTML = "Target Text!"; //위에 버튼을 누르면 Target Change Text가 Target Text!로 변함
}
