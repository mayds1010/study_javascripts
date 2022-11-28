let querySingle = document.querySelector("#single");
//querySingle.addEventListener("click", singleEvent); //누르면 문구가 바뀜,addEventListener=new와 같음
querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});

function singleEvent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}
