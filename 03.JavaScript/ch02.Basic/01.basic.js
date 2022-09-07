// 웬만하면 const 변수로 선언할 것
// 값이 변하는 변수만 var로 선언할 것(2015 이전)
// 어지간하면 let을 사용할 것
// 내가 사용할 변수는 미리 정의하고 시작함

const a=10;
let b = 20;
b += a;
console.log(a,b);

//범위 주석은 alt shift a
/* var c = 10;
var c = 20;                     
let d = 10;
d = 20; */

// console.log(Math.PI, Math.sqrt(d));

//기본자료형
//1. number
console.log(typeof(3.1),typeof(2));
//2.string
console.log(typeof('abc'),typeof('안녕'));
// template literal --> 파이썬에서 f스트링과 같은 역할
let tl = `a=${a}, b=${b}`       // back quote --> esc위의 자판
tl = tl + ' 문자열 결합';
console.log(tl);
let st = '문자열과 숫자의 결합' + 123;
console.log(st);
console.log(st, st[0], st[10], st[st.length-1]);
const today = new Date();
console.log(today, today.getFullYear(), today.getMonth()+1);
console.log(typeof today);      // object가 나옴

// 3. bool
console.log(4>3, 4<3);      // true, false
console.log(4>3 && 10>8,'가방' < '나무' || false);    // true, true
console.log(today.getHours() >= 9 && today.getHours() < 18);

// 4. undefined
let pl;
console.log(typeof pi);
pi = Math.PI;
console.log(typeof pi);
console.log(new Date().getFullYear());