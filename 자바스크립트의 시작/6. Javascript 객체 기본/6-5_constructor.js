/*
    객체의 생성자 Constructor
    - 같은 형태의 객체를 여러 번 생성할 때 사용한다.
    - 함수로 작성하여, `new` 키워드를 붙여 호출하면 객체를 생성하는 생성자 constructor가 된다.
    - 각 객체가 다른 값을 갖게 하도록 하려면, 생성자 함수에 매개변수를 정의하고, 객체 생성 시 인자를 준다.
*/

// 어떤 객체가 있나? => Date 객체 사용해보기
var d1 = new Date('2021-11-23');
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());

console.log('Date', Date);


// Constructor 작성해보기
function Person(name, first, second, third) {
    // 매개변수를 정의하고, 인자를 주어 속성값이 필요에 따라 달라지도록 작성.
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function () {
        return this.first + this.second + this.third;
    }
}

// 'new' 키워드가 붙었을 때, 객체를 생성하는 생성자가 된다.
console.log('Person()', Person());  // 그냥 함수, function
console.log('new Person()', new Person());  // 생성자 constructor

// 같은 종류의 객체에 다른 속성값을 주고 생성.
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());