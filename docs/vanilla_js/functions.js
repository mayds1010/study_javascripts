//function name(parameter1, parameter2, parameter3){
//code to be executed //스코프
//     return;
//} 변수의 내용이 똑같아도 밖에서는 사용할 수 없음
//function은 코드를 재사용하기 위해 사용

//param : 2(1, 3), return 1(1 + 3)
function sum(item_first, item_secound) {
  return item_first + item_secound;
} //선언만 한거임

{
  let sum_number = 1 + 3;
  sum_number = 3 + 5;
  sum_number = 6 + 9;
  let sum_function = sum(1, 2); //item_first=1, item_secound=2
  console.log();
}
