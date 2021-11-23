class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

class PersonPlus extends Person {   // extends 키워드로 클래스를 상속
    constructor(name, first, second, third) {
        super(name, first, second); // super() => 부모 클래스의 생성자 호출
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;    // super.method() => 부모 클래스의 메소드 호출
    }
    avg() {
        return this.sum() / 3;
    }
}

var kim = new PersonPlus("kim", 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());