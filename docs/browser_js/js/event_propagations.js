// let queryInput1 = document.querySelector("item1")
// let queryInput2 = document.querySelector("item2")
//let queryInputAll = document.querySelectorAll("input"); //위와 같이 따로 안하고 한번에 input을 선언해주기

// for (queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   }); //따로따로 경고창이 뜨는
// }(선호x)

let newItem = `<li>
                <div>
                    <input type="checkbox" name="" id="item3">
                    <label for="item3">item three</label>
                    <span>
              <i class="material-icons delete">delete</i>
            </span>
                </div>
            </li>`; //html창에 item3을 작성하지 않고 js창에 직접 넣을 수도 있음

let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undefined") {
    //아니면 밑에 뜨게
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    //icon에 대한
    event.target.parentElement.parentElement.parentElement.remove(); //item 삭제
  }
}); //상위 element에 Event 설정(아이템 전체 불러오기)

//queryItemList.innerHTML = queryItemList.innerHTML + newItem;//item3추가1
queryItemList.insertAdjacentHTML("beforeend", newItem); //item3추가 새로운 방식2
//queryItemList.insertAdjacentHTML("beforebegin", newItem);//item3 위에 배치

// let queryInputs = document.querySelectorAll("input");
// for (let queryInput of queryInputs) { //위에 item1,2추가 한거처럼 item3도 다시 선언해서 만들어 줘야 함
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// } //item3뜨는1(선호x)
