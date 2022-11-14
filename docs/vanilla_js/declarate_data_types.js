// let declaration
let myName = "홍길동"; // 무조건 변수 선언할때 let, let = 컴퓨터 메모리에 변수의 공간만을 마련
console.log(myName);
myName = "김다솜";
myName = 5;
console.log(); // myName= let의 변수값을 변경 그래서 마지막에 5 출력

//const declaration
const nickName = "홍길동"; //const = 한번 지정된 변수는 다시 재 할당 x
console.log(nickName);
nickName = "김다솜"; //Error
console.log();
