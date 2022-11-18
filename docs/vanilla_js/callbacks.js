console.log(`first`);
// console.log(`secound`);
// setTimeout(functionRef,delay)
// function(){ //이런모양
//}
setTimeout(function () {
  console.log(`setTimeout : secound`); //한참뒤에 실행됨(네트워크상 특정한 부분을 가져올때 사용)
}, 2000); //callback : 실행되는 순서가 바뀔 수 있음
console.log(`third`);
// 5+6
// function plus(first, secound) {
//   return first + secound;
// }
// //plus(5, 6);
// // 5-6
// function minus(first, secound) {
//   return first - secound;
// }
// //minus(5, 6);

// //callbackFunction

// function callbackFunction(callback, first, secound) {
//   //1

//   let result = callback(first, secound); //2 callback(first, secound); = plus(5, 6);둘이 같음
//   console.log(`result: ${result}`); //3
// }

// callbackFunction(plus, 5, 6); //4
// //result: 11
// callbackFunction(minus, 5, 6); //4
//result: 11
//result: -1
//setTimeout : secound
