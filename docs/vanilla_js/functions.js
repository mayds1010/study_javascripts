//function name(parameter1, parameter2, parameter3){
//code to be executed (내부적으로 무언가를 동작하고 그 결과값을 던져줌)//스코프
//     return;
//} 변수의 내용이 똑같아도 밖에서는 사용할 수 없음
//function은 코드를 재사용하기 위해 사용

// normal Function
//()안에 있는것 param(매개변수) : 2개(1, 3), return 1개(1 + 3)
function sum(item_first, item_secound) {
  //param(매개변수) 2개(1, 3)를 이름을 만들어 안에 넣어 줌
  return item_first + item_secound; //return 1개(1 + 3)을 입력
} //선언만 한거임

{
  let sum_number = 1 + 3; //변수이름 선언해주기
  //1.(변수라는것을 두고 재사용을 위해 sum을 할때마다 특별한 function을 만들어 호출 )
  sum_number = 3 + 5; //2.
  sum_number = 6 + 9;
  let sum_function = sum(1, 2); //item_first=1, item_secound=2(총 2개)
  // sum_function:리턴받는 부분
  console.log();
}
// anonymouse Function(익명Function)
// let calculateSum = function (item_first, item_secound) {
//   return item_first + item_secound;
// };
// {
//   console.log(`${calculateSum(5, 7)}`);
// }
// Arrow Function(화살 Function)가장 많이 씀
// let calculateSumSecound = (item_first, item_secound) => {
//   return item_first + item_secound;
// };
// {
//   console.log(`${calculateSumSecound(7, 8)}`);
// }
//result를 써서 출력할 수 있지만 바로 하면 코드의 단순화

//rest parameters
function printRestParams(...args) {
  let restparam = (arg) => {
    console.log(`arg :${arg}`);
  };
  args.forEach(restparam);
}
{
  printRestParams(2, 4, 5);
  printRestParams(2, 4, 5, 6, 7);
}
// arg :2
// arg :4
// arg :5
// arg :2
// arg :4
// arg :5
// arg :6
// arg :7
//1,2,4,3,5
