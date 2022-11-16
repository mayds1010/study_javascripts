// Java: long sum(int[] a); (클래스 이름: Test)
// a: 합을 구해야 하는 정수 n개가 저장되어 있는 배열 (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
// 리턴값: a에 포함되어 있는 정수 n개의 합

function sum(items) {
  let sum = 0;
  for (let item of items) {
    sum += item;
  }
  return sum;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(`${sum(arr)}`);
//21
