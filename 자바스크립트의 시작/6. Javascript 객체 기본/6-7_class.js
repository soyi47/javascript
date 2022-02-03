class Person {
    // 객체를 생성할 때, 자동으로 실행되는 함수.
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return 'in class: ' + (this.first + this.second);
    }
}

var kim = new Person('kim', 10, 20);
kim.sum = function () {
    return 'this: ' + (this.first + this.second);
}

var lee = new Person('lee', 10, 10);

Person.prototype.sum = function () {
    return 'prototype: ' + (this.first + this.second);
}
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());