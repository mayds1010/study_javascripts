let queryRemove = document.querySelector("#removebtn");
queryRemove.addEventListener("click", (event) => {
  let Removeshow = document.querySelector("#removeshow");
  Removeshow.style.display = "none";
});

let queryHidden = document.querySelector("#hidebtn");
queryHidden.addEventListener("click", (event) => {
  let Hideshow = document.querySelector("#hideshow");
  Hideshow.style.visibility = "hidden";
});

let queryReset = document.querySelector("#resetbtn");
queryReset.addEventListener("click", (event) => {
  let Removeshow1 = document.querySelector("#removeshow");
  Removeshow1.style.display = "flex";
  let Hideshow2 = document.querySelector("#hideshow");
  Hideshow2.style.visibility = "visible";
});
