// Array 생성
const cars = ['Saab', 'Volvo', 'BMW'];
const persons = new Array('James', 'Maria');
console.log(cars,persons);

// Array 속성
console.log(cars.length, persons.length);

// 마지막 요소
console.log(cars[cars.length-1]);

// 배열 합치기
console.log(cars.concat(persons));
console.log(cars + persons);                  // cars.toString() + persons.toString()
console.log([cars, persons]);                 // Nested array

// 문자열 만들기(join)
console.log(cars.join(' | '));

// 마지막 요소 제거(pop)    -   배열이 변함
let car = cars.pop();
console.log(car, cars);

// 마지막에 요소 추가(push) -   배열이 변함
cars.push('Benz');
console.log(cars);

// 배열의 요소 순서를 뒤집기(reverse)
console.log(cars.reverse());
console.log(cars);
function reverseString(str) {
    /* let strArray = str.split('');
    strArray.reverse();
    let result = strArray.join('');
    return result; */
    return str.split('').reverse().join('');
}
let rs = str => str.split('').reverse().join('');
console.log(rs('비가 내린다'));

// 배열의 일부분을 리턴(slice) -  배열이 변하지 않음.
const fruits = ['apple', 'banana', 'cherry', 'grape']
console.log(fruits.slice(1,3));     // 시작 인덱스, 끝 인덱스(끝은 포함하지 않음.)
console.log(fruits.slice(2));       // 끝을 생략하면 끝까지

// 배열의 요소를 정렬(sort) - 배열이 변함
console.log(cars);          // [ 'Benz', 'Volvo', 'Saab' ]
cars.sort();                // 오름차순 정렬
console.log(cars);          // [ 'Benz', 'Saab', 'Volvo' ]

// 내림차순 정렬
const numbers = [45, 67, 35, 97, 82];
numbers.sort().reverse();
console.log(numbers);

// 배열의 일부분을 삭제해서 리턴(splice)
const abFruits = fruits.splice(0,2);
console.log(abFruits)
console.log(fruits)

// 배열의 각 요소에 대해 함수 적용
let result = numbers.map(function(num) {
    return Math.sqrt(num);
});
console.log(result);
result = numbers.map(x => Math.sqrt(x));
console.log(result);

// 앞으로 해결해야할 과제
const objArray = [
    {name:'제임스',score:80,math:80,sci:70},
    {name:'마리아',score:50,math:90,sci:70},
    {name:'아담',score:70,math:80,sci:60},
    {name:'이브',score:65,math:70,sci:80}
]
// 성적순으로 정렬
// math와 sci의 평균
// math 점수가 80점 이상인 사람