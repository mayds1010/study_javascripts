let queryKeydown = document.querySelector("#keydown");
queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(event.target);
  }
  console.log(event.target); //event.target:지금 발생한 이벤트의 타겟
});
function keydownDesc(desc) {
  let queryKeydownDesc = document.querySelector("#keydownDesc");
  queryKeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad());

function queryLoad() {
  queryload.innerHTML = "Done On Load!"; //Desc를 처음부터 아예 Done On Load!로 변경
}

let querySingle = document.querySelector("#single");
//querySingle.addEventListener("click", singleEvent); //누르면 문구가 바뀜,addEventListener=new와 같음
querySingle.addEventListener("click", (event) => {
  singleEvent(event); //singleEvent를 클릭하면
});
function singleEvent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event!"; //Take One Event!로 바꾸기
}
