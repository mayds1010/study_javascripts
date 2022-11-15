//Array == ArrayList (if문할때 사용)
let fruits = ["apple", "banana", "orange", "mellon"];
let numbers = [1, 2, 3, 4, 5];
let fruits_init = new Array(); //변수의 초기화
fruits_init = []; //변수의 초기화

//object == HashMap
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "mellon"];
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
let mixins_third = [1, 2, 3, "banana", objects];
let mixins_fourth = [fruits, numbers];

console.log();
