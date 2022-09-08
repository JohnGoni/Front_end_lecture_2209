//1에서 10까지의합
let sum = 0;
for(let i=1; i<=100; i++) {
    sum +=i;
}
console.log(`1에서 100까지 정수의 합은 ${sum} 입니다.`)

//1부터 100까지 홀수의합
sum = 0;
for(let i=1; i<=100; i += 2) {
    sum += i;
}
console.log(`1에서 100까지 홀수의 합은 ${sum}`)

//1부터 100까지 짝수의합
sum = 0;
for(let i=2; i<=100; i += 2) {
    sum += i;
}
console.log(`1에서 100까지 짝수의 합은 ${sum}`)

// 10!(factorial)
let product = 1;
for(let i=1;1<=10;i++) {
    product += i;
}
console.log(`1에서 10까지 정수의 곱은 ${product}`)