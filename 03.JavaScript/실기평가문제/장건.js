/* 1. 두 개의 값이 다른 정수를 매개변수로 받아 두수 중 작은 수부터 +3씩 증가시켜서
배열로 만들어 반환하는 함수 ans1(num1, num2) 를 만드세요. 
단, 배열에는 매개변수의 큰 수 보다 더 큰 수는 포함될 수 없다.
또한 이 함수를 검증하는 코드, 즉 ans1(2,10)과 ans1(12,3)의 결과를 출력하는
코드도 만드세요. */
let box = [];
function ans1(num1,num2) {
    box=[]
    if (num2<num1){
        for(let i=num2;i<=num1;i+=3){
            box.push(i);
        }
    } else{
        for(let i=num1;i<=num2;i+=3){
        box.push(i);
        }
    }
    console.log(box)
}
ans1(2,10);
ans1(12,3);
console.log('-------------------------------------------------------------------------')

/* 2. ‘991205’와 같이 년월일 6자리 문자를 매개변수로 받아 만 나이를 반환하는 함수
ans2(birthday)를 만드세요.
또한 이 함수를 검증하는 코드, 즉 ans2(‘991003’)과 ans2(‘000919’)의 결과를
출력하는 코드도 만드세요. */

const today = new Date();
function ans2(birthday) {
    let age = today.getFullYear() - birthday.slice(0,2);
    const m = today.getMonth() - birthday.slice(2,4);
    if (m <0 || (m ===0 && today.getDate() < birthday.slice(4,6))) {
        age --;
    }
    const age_1=age.toString()
    console.log('만 ' + age_1.slice(2,4) + '세')
}
ans2('991003')
ans2('000919')
console.log('-------------------------------------------------------------------------')
//3번 모래시계

const num = 5;
const half = parseInt(num/2);
let diamond = '';
for (let i=half; i>=1; i--) {
    let stars = '';
    for (let k=1; k <= half-i; k++)
        stars += ' ';
    for (let k=1; k <= 2*i+1; k++)
        stars += '*';
    diamond += stars + '\n';
}
for (let i=1; i <= half+1; i++) {
    let stars = '';
    for (let k=1; k <= half+1-i; k++)
        stars += ' ';
    for (let k=1; k <= 2*i-1; k++)
        stars += '*';
    diamond += stars + '\n';
}
console.log(diamond);
console.log('-------------------------------------------------------------------------')
const num2 = 9;
const half2 = parseInt(num2/2);
let diamond2 = '';
for (let i=half2; i>=1; i--) {
    let stars2 = '';
    for (let k=1; k <= half2-i; k++)
        stars2 += ' ';
    for (let k=1; k <= 2*i+1; k++)
        stars2 += '*';
    diamond2 += stars2 + '\n';
}
for (let i=1; i <= half2+1; i++) {
    let stars2 = '';
    for (let k=1; k <= half2+1-i; k++)
        stars2 += ' ';
    for (let k=1; k <= 2*i-1; k++)
        stars2 += '*';
    diamond2 += stars2 + '\n';
}
console.log(diamond2);
console.log('-------------------------------------------------------------------------')
/* 4. 매개변수로 물품 가격 여러 개가 문자열 하나로 전해지고, 각 가격은 세미콜론(;)
 으로 구분되어 있습니다. 이 가격을 배열로 만들고, 내림차순으로 정렬하여
 반환하는 함수 ans4(str) 함수를 만드세요.
 또한 이 함수를 검증하는 코드로
ans4(‘51900;83000;158000;367500;250000;59200;128500;1304000’)의 결과를
출력하는 코드도 만드세요. */
function ans4(str) {
    prices = str.split(';').map(x => parseInt(x));
    prices.sort((a,b) => b-a);
    return prices;
}
console.log(ans4('51900;83000;158000;367500;250000;59200;128500;1304000'))

console.log('-------------------------------------------------------------------------')
/* 5. id, 이름, 전화번호, email 을 속성으로 갖고 toString() 메쏘드를 갖는 Member
 클래스를 만드세요.
 또한 이 클래스로 james와 maria 객체를 생성하고, toString() 메쏘드를 사용하여
 객체안의 속성 정보를 출력하는 코드도 만드세요. */

 class Member {
    constructor(id='JQ1',이름='james', 전화번호='010-0000-0000',email='jq1@gmail.com'){     
        this.id = id;
        this.이름 = 이름;
        this.전화번호 = 전화번호;
        this.email = email;
    }
    toString() {
        return `제 이름은 ${this.이름}이고, id는 ${this.id}이며, 전화번호는 ${this.전화번호}입니다. 그리고 제 이메일은 ${this.email}입니다.`;
    }
}
const james = new Member ();
console.log(james.toString());

const maria = new Member('JQ2', 'maria', '010-1111-1111', 'jq2@gmail.com');
console.log(maria.toString())