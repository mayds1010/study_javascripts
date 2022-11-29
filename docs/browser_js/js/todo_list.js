let querylistid = document.querySelector("#listid");
let queryinputid = document.querySelector("#inputid");
let querybtn = document.querySelector("#btn");

//엔터키 누르면 추가
queryinputid.addEventListener("keydown", ({ key, isComposing }) => {
  //isComposing:한글두번씩 입력되는거 방지
  if (isComposing === "true") {
  }
  if (key == "Enter") {
    newlist();
  }
});

// 버튼 클릭하면 추가
querybtn.addEventListener("click", (event) => {
  newlist(event);
});

let newlist = () => {
  if (queryinputid.value != "" && queryinputid.value != "undefined") {
    let newitem = `<div class="boxdiv" >
        <div class="textdiv" id="newtext"> ${queryinputid.value} </div>
        <span> <i class="material-icons" id="heart">favorite_border</i></span>
        <span> <i class="material-icons" id="delete">delete</i></span>
        </div>`;

    //입력을 하지않았을 시 경고창
    querylistid.insertAdjacentHTML("beforeend", newitem);
  } else {
    alert(`내용을 입력해주세요`);
  }
};

//좋아요,삭제
querylistid.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
    return;
  }
  if (event.target.innerHTML == "favorite") {
    event.target.innerHTML = "favorite_border";
    return;
  }
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.remove();
  }
});
