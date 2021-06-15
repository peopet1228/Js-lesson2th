// 1.JSON        자바스크립트의 객체아 배열을 문자열로 표현이 가능하다.
//let person = { name: "강현구", age :19 };

//JSON.stringify(person);
// 답: 안뜨는게 정상
//               반대로 문자열을 객체나 변수로 바꾸는 것도 가능하다.
//let person = `{ "name": "강현구", "age": 19 }`;

//person = JSON.parse(person);

//console.log(person.name);      // 답: name으로 했으면 강현구, age로 했으면 19 

// 2.함수 만들고 써보기
//function hello() {     ─────────────┐
//    console.log(`Hello World!`);  ──┤함수 선언
//    return 10;     ─────────────────┘
//}

//console.log(hello());         // 답: Hello World!

// 2-1.함수에 매개변수 주기
//function add(a,b) {
//    return a + b;
//}

//console.log(add(10,20));      // 답: 30

//2-2.함수를 변수에 담기
//let add = function(a,b) {
//    return a + b;
//}

//console.log(add(10,20));      // 답: 30

//2-3.화살표 함수를 변수에 담기
//let add = (a,b) => {
//    return a + b;
//}

//console.log(add(10,20));      // 답: 30

//3.콜백 함수
//function calc(a, b, func) {
//    return func(a, b);
//}

//console.log(calc(10, 20, (a, b) => {
//    return a - b;
//}));                            // 답: 30

//4.모듈과 require
//let person = require('./person');

//console.log(person.age);