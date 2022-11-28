let queryRemove = document.querySelector("#removebtn"); //버튼 변수선언
queryRemove.addEventListener("click", (event) => {
  let Removeshow = document.querySelector("#removeshow"); //버튼을 누르면 바껴야 해서 사진을 버튼 안에 배치
  Removeshow.style.display = "none"; //누르면 사라지는
});

let queryHidden = document.querySelector("#hidebtn"); //버튼 변수선언
queryHidden.addEventListener("click", (event) => {
  let Hideshow = document.querySelector("#hideshow"); //버튼을 누르면 바껴야 해서 사진을 버튼 안에 배치
  Hideshow.style.visibility = "hidden"; //누르면 감추어지는
});

let queryReset = document.querySelector("#resetbtn"); //버튼 변수선언
queryReset.addEventListener("click", (event) => {
  //버튼을 누르면 바껴야 해서 사진을 버튼 안에 배치
  let Removeshow1 = document.querySelector("#removeshow"); //감추어졌던 첫번째 사진 다른이름으로 변수선언 한번 더
  Removeshow1.style.display = "flex"; //감추어졌던 사진 다시 나오게 끔
  let Hideshow2 = document.querySelector("#hideshow"); //감추어졌던 두번째 사진 다른이름으로 변수선언 한번 더
  Hideshow2.style.visibility = "visible"; //감추어졌던 사진 다시 나오게 끔
});
