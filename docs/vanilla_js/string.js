// operate number type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);
// recommanded this way
let concate_string = `${number_first}${string_second}`;
console.log();
// 35
// number_first - string_second
// -2
//number_first * string_second
// 15

string_second = "A";
console.log(number_first + string_second);
console.log();
//3A

// Strings
let animal = "tiger"; //""을 사용하는게 더 나음
console.log(`${animal}`);
// typeof number_first
// 'number'
// typeof string_second
// 'string'
// typeof animal
// 'string'
// animal.substring(0,3) // substring : 0부터 3번째 자리까지 출력
// 'tig'
// animal.replace('ti','Ti') // replace : ti를 대문자로 출력
// 'Tiger'
// animal.toUpperCase() // toUpperCase() : tiger를 대문자로 출력
// 'TIGER'
// animal.charAt(0) // charAt(0): 0번째 자리 출력
// 't'
// animal = animal.replace('ti','Ti') //  선언을 해줘야 저 위에 것도 바뀜(위에는 선언 안해서 바뀌지 x)
// animal.split('g')
// (2) ['Ti', 'er']
// 0: 'Ti'
// 1: 'er'
// length: 2

let sentance = " 5 2 6 ";
let trims = sentance.trim(); //공백 제거
let splits = trims.split(" "); //공백으로 배열 만듬
let maps = splits.map(Number); //각 배열을 String To Number로 바꿈
// split : 문자열을 배열로 바꾸는 역할
console.log(maps[0] + maps[1] + maps[2]); //합산을 함.

let inputs = sentance.trim().split(" ").map(Number); //체인펀션
console.log(inputs[0] + inputs[1] + inputs[2]); //합산을 함.
