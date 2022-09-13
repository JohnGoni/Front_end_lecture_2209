//상속 - 오버라이딩 : 메쏘드 재정의
class Person {
    constructor(name='홍길동',age=25,gender='남자'){               //속성
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toString() {                       //method
        return `저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`;
    }
}
const hong = new Person ();
console.log(hong.toString());
console.log('-----------------------------')

class Student extends Person {
    constructor (name, age, gender, scholarship=100000) {
        super(name, age, gender);                        //새로운 속성값을 만들려면 부모의 속성을 먼저 호출해야함.
        this.scholarship = scholarship;
    }
    toString() {
        return super.toString() + `\n장학금은 ${this.scholarship}원을 받았습니다.`
    }
}
const student = new Student('성춘향', 17, '여자', 200000);
console.log(student.toString());
console.log('-----------------------------');

// Teacher 클래스 - Person 상속, 속성 : 담당부서 추가, toString() 메쏘드 재정의
class Teacher extends Person{
    constructor(name, age, gender, 담당부서) {
        super(name, age, gender);
        this.담당부서 = 담당부서;
    }
    toString() {
        return super.toString() + `\n담당부서는 ${this.담당부서}입니다.`
    }
}
const teacher = new Teacher('존', 35, '남자', '행정');
console.log(teacher.toString())