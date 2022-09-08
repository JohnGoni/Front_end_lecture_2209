//재귀 함수(Recursion)
//n! = n* (n-1)!
//0! = 1

const num = 5;
let product = 1;
for (let i=1; i<=num;i++){
    product *= i;
}
console.log(`${num}!은 ${product}입니다.`)

function factorial(n) {
    if (n == 0)
        return 1;
    return n * factorial(n-1);
}
console.log(`10!은 ${factorial(10)}입니다.`)

//피보나치 수열
//f(n) = f(n-1) + f(n-2)
//f(0),f(1)의 값은 모두 1
//ex) 1, 1, 2, 3, 5, 8, 13, 21......
function fibo(n) {
    if (n == 0 || n == 1)
        return 1;
    return fibo(n-1) + fibo(n-2);
}
for(let i=0;i<10;i++)
    console.log(fibo(i));