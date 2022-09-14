/* 1. random number로 두개의 정수가 주어집니다.(첫번째 값의 범위는 1~20,
    두 번째 값의 범위는 10~30이며 첫 번째 값은 두 번째 값보다 작아야 합니다).
    첫 번째 정수부터 두 번째 정수까지를 지수로 하는 2의 거듭제곱 배열을
    출력하는 프로그램을 만드세요.
    단, 배열의 두 번째 요소와 뒤에서 두 번째 요소는 삭제한 뒤 출력하세요.
     */
const a = Math.floor(Math.random()*(20-1)+1);
const b = Math.floor(Math.random()*(30-10)+1);
let box = [];
for(let i=a;i<=b;i++){
    if (b>a){
        box.push(2**i);
    } 
}
const A = box.splice(1,1);
const B = box.splice(box.length-2,1);
console.log(box);