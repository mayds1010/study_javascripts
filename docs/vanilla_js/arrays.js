//Array == ArrayList (if문할때 사용)
let fruits = ["apple", "banana", "orange", "mellon"];
let numbers = [1, 2, 3, 4, 5];
let fruits_init = new Array(); //변수의 초기화
fruits_init = []; //변수의 초기화

//object == HashMap
let objects = { name: "Tom", age: 4 };
//fruits numbers objects 다 섞음
let mixins_first = [1, 2, 3, "apple", 4, "mellon"];
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
let mixins_third = [1, 2, 3, "banana", objects];
let mixins_fourth = [fruits, numbers];

// fruits_second = ["berry", "strawberry"]
// (2) ['berry', 'strawberry']
// fruits_second
// (2) ['berry', 'strawberry']
// fruits_concat = fruits.concat(fruits_second) //concat: fruits와fruits_second을 같이 묶음
// concat: 두개의 문자열을 하나의 문자열로 만들어주는 역할,배열도 두개를 엮어 하나의 배열로 만들어줌
// (6) ['apple', 'banana', 'orange', 'mellon', 'berry', 'strawberry']
// fruits_concat.join() // join: 배열의 모든 요소를 연결해 하나의 문자열로 만드는 역할
// 'apple,banana,orange,mellon,berry,strawberry'
// fruits_concat.join( ' and ')
// 'apple and banana and orange and melon and berry and strawberry'
// fruits_string = fruits_concat.join()
// 'apple,banana,orange,mellon,berry,strawberry'
// fruits_arrays = fruits_string.split(",")
// (6) ['apple', 'banana', 'orange', 'mellon', 'berry', 'strawberry']
// fruits_arrays.reverse() // reverse: 배열순서를 거꾸로
// (6) ['strawberry', 'berry', 'mellon', 'orange', 'banana', 'apple']

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];
//위에꺼 풀어서
let first = ["apple", "banana"];
let second = ["orange", "mellon"];
let third = ["berry", "strawberry"];

let mixins_list = [first, second, third];

console.log();
//mixins_list[1][1]
//'melon'
