//함수 이름을 갖는 기본 함수 - Web
function funcName() {
    console.log('함수 이름을 갖는 함수');
}
funcName();

// 익명(Anoymous) 함수  -NodeJS
const fn = function(){
    console.log('익명함수')
}
fn();
console.log(fn,typeof fn);

// 화살표 함수(Arrow Function)
const arrowFunc = () => {
    console.log('화살표함수')
}
arrowFunc();
console.log(arrowFunc,typeof arrowFunc);

const square2 = (x,y) => {
    return x*x + y*y;
}
console.log(square2(3,4));

// 매개변수가 하나면 ()를 생략할 수 있다.
const square = x => {
    return x*x;
}
console.log(square(5));

// 함수 안의 내용이 return 문 하나만 있으면 중괄호와 return을 생략 할 수 있다.
const sq = x => x*x;
console.log(sq(10));

// 짝수면 제곱을 홀수면 세제곱을 반환하는 함수
const myFunc = x => x%2 == 0 ? x*x: x*x*x;
console.log(myFunc(2),myFunc(3));