//문제: 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오

function sum(items) {
  let sum = 0;
  for (let item of items) {
    sum += item;
  }
  return sum;
}
let arr = [1, 2, 3, 4, 5, 6];
//console.log((`${sum(arr)}`);) -방법1
let result = sum(arr);
console.log(`${result}`); //방법2

//답:21
