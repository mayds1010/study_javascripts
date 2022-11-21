//div.inner  태그 내부에 <div>hello</div>를 추가
//1. 프로그래밍 방식 적요 create Element
let queryInner = document.querySelector("#container > .inner");
let element = document.createElement("div");
let helloText = document.createTextNode("hello"); //hello - append
element.appendChild(helloText);
queryInner.appendChild(element);

//inner html
let animal = { name: "dog", age: "10" };
let queryApp = document.querySelector("#app");

let item =
  "<div class='item'>" + animal["name"] + " : " + animal["age"] + "</div>"; // 두개 같음(복잡)
item = ` <div class="item">${animal["name"]} : ${animal["age"]}</div>`; // 두개 같음(간단)
queryApp.innerHTML = item;

console.log("================과제==================");
const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];
let queryList = document.querySelector("#list");
let snacks = "";
productsData.forEach((productsData, index) => {
  snacks += `<div id = "list"> ${productsData["title"]} , ${productsData["weight"]} </div>`;
});
queryList.innerHTML = snacks;
