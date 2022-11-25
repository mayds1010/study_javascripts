let queryTitle = document.querySelector("#title"); //item하나씩 가져올때 queryList.querySelector(".item")
//queryTitle.innerHTML = "query Title";

let queryitems = document.querySelectorAll(".item");
// queryitems.forEach((item, index) => {
//   console.log(item);
// });
//queryitems.forEach((element,i) => console.log(element));이 방법

let queryLists = document.querySelectorAll(".list");
let queryList = document.querySelector(".list");

let pByTagName = document.getElementsByTagName("p");
//console.log(`${pByTagName}`);
// pByTagName.innerHTML = "클릭하세요!";

let listByClassName = document.getElementsByClassName("list"); //getElements(class이기에 복수형태)
//console.log(`${listByClassName}`);

let titleById = document.getElementById("title"); //getElement(Id이기에 단수형태)
// titleById.innerHTML = "Title By Id";

let elementById = document.getElementById("selector"); //elementById 대소문자 구분하고 elementsById라고 되어 있어 안됐음
// console.log(`elementById: ${elementById}`);
//elementById.innerHTML = "<b>Change selecter</b>";

//change properties from querySelector 스타일을 직접 입혀주는
queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255,0,0,0.5)";

let queryContent = document.querySelector("#contentId"); //변수선언
