function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function () {
    return 'prototype: ' + (this.first + this.second + this.third);
}

var kim = new Person('kim', 10, 20, 30);
kim.sum = function () {
    return 'this: ' + (this.first + this.second + this.third);
}

var lee = new Person('lee', 10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

/*
객체 인스턴스와 프로토타입 간의 연결, 체인을 따라 올라가며 속성과 메소드를 탐색한다.
따라서 kim.sum() 호출 시, 객체 인스턴스 kim이 가진 sum()이 호출되고,
lee.sum() 호출 시, 객체 인스턴스가 sum() 메소드를 가지고 있지 않으므로 Person 생성자의 prototype이 가지고 있는 sum()이 호출된다.
*/
