// 10보다 큰 정수를 입력으로 받아 약수를 모두 배열로 만들어서 출력
// 약수 : 어떤 수를 나누어 떨어지게 하는 수
let input = 12;
let divisors =  [];             // [i for i in rage(1,input+1) if input % i == 0]
for (let i=1; i<=input; i++) {
    if (input % i == 0)
        divisors.push(i);
}
console.log(divisors);