//문제: 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오
//리턴값: a에 포함되어 있는 정수 n개의 합
function sum(items) {
  let sum = 0;
  for (let item of items) {
    sum += item;
  }
  return sum;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(`${sum(arr)}`);
//답:21
