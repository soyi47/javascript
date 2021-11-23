function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function () {
    return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
    Person.call(this, name, first, second);
    /*  1. new 키워드가 안 붙었으므로 일반 함수 호출이고, 
        2. this가 현재 객체로 지정되어 있으므로,
        => PersonPlus 내에서 Person 함수와 똑같은 코드를 실행하는 것과 같음.
            일반 함수 호출로 상속 관계가 지정되지는 않음.
    */
    this.third = third;
}

/* 
    PersonPlus의 프로토타입 객체의 프로토타입 객체를 Person의 프로토타입 객체로 지정하여 아래의 과정으로 연결되어 PersonPlus 생성자로 만들어진 객체가 sum() 메소드를 사용할 수 있도록 함.
        kim.sum() => kim 탐색 : 없음 => PersonPlus의 프로토타입 객체 탐색 : 없음 => Person의 프로토타입 객체 탐색 : sum() 있음!
*/

// PersonPlus.prototype.__proto__ = Person.prototype;
/*
    아래는 위 코드와 달리, Person.prototype을 프로토타입 객체로 갖는 새로운 객체로 PersonPlus.prototype를 대체해버림. 
    => PersonPlus.prototype의 constructor가 더 이상 PersonPlus가 아니게 되어버림
        PersonPlus.prototype의 constructor를 PersonPlus로 다시 지정!
    => 마찬가지로 avg()가 PersonPlus.prototype 대체 전에 지정되면, 기존 객체가 대체되므로 오류 생김
*/
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function () {
    return (this.first + this.second + this.third) / 3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim.constructor", kim.constructor);