// Palindrome
// 세자리 정수(100~999) 두개를 곱해서 나온 수가 Palindrome(앞 뒤가 똑같음)이라 할 때
// 가장 큰 수와 그 때 두 개의 정수를 찾으시오

// 1) 문자열을 뒤집는 함수
function reverseString(str){
    let result = '';
    for (let i=str.length-1;i>=0;i--)
        result += str[i];
    return result;
}
console.log(reverseString('스위스'));

// 2) 주어진 문자열이 Palindrome인지 확인하는 함수
function isPalindrome(str) {
    //Palindrome이면 참을 아니면 거짓을 return하는 함수
    /* let result_1 = [];
    if (str == reverseString(str))
        return result_1 += str */
    return str == reverseString(str);
}

// 3) 배열에서 가장 큰 수와 그것의 인덱스구하기
const array = [3, 18, 27, 46, 51, 98];
// 최대값을 임의로 선정 > 제일 첫 번째 원소
let maxVal = array[0];              //maxVal= Number.MIN_SAFE_INTEGER
let maxIdx = 0;                     //maxIdx=-1
for (let i=1;i<array.length;i++) {
    if (array[i] > maxVal) {
        maxVal = array[i];
        maxIdx = i;
    }
}

let maxPal = 0, maxI = 0, maxJ = 0;
for (let i=100;i<=999;i++){
    for (let j=i;j<=999;j++){
        let product = i * j;
        if (isPalindrome(String(product))) {
            if (product > maxPal){
                maxPal = product;
                maxI = i;
                maxJ = j;
            }
        }
    }
}
console.log(`${maxI} x ${maxJ} = ${maxPal}`)        //  913 x 993 = 906609