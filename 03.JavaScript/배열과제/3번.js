/* 3.random number로 10보다 크고 100보다 작은 두개의 정수가 주어집니다.
두 숫자의 공약수를 세트 형태로 구하도록 프로그램을 작성하세요. */
const a = Math.floor(Math.random()*(100-10)+1);
const b = Math.floor(Math.random()*(100-10)+1);
let A = []
let B = []
for(let i=1;i<=a;i++) {
    if(a%i===0){
        A.push(i)
    }
}
for(let j=1;j<=b;j++) {
    if(b%j===0){
        B.push(j)
    }
}
/* 공약수 즉 교집합을 행할 방법이 떠오르지 않아서 구글링으로
교집합 방법을 찾아봄 */
const C = A.filter(x => B.includes(x));
const set = new Set(C)
console.log(set)