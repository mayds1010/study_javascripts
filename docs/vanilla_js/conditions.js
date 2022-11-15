let num = 5;
if (20 > num || 20 < num) {
  //true니까 print출력
  console.log("print!");
}
if (20 < num) {
  console.log(`20 < ${num}`);
} else if (20 > num) {
  console.log(`20 > ${num}`);
} else {
  console.log(`done`); //20 > 5
}
//20 > num || 20 < num
// true
// (20 > num) || (20 < num)
// true
// 20 < 5
// false
// bool_true = 20 > 5
// true
// bool_false = 20 < 5
// false
// !bool_true
// false
// true && false
// false
// true || flase
// true
// bool_true && bool_false
// false
// bool_true || bool_false
// true
//print!

//Termay operator 삼항연산자
let conditon = 20 < num ? `20 < ${num}` : `done`;
console.log();
// 20 > num || 20 < num
// true
// (20 > num) || (20 < num)
// true
