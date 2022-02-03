var kim = { name: 'kim', first: 10, second: 20 }
var lee = { name: 'lee', first: 10, second: 10 }
lee.__proto__ = kim

function sum(prefix) {
    return prefix + (this.first + this.second);
}

// 어떤 함수의 call 메소드의 인자로 객체를 지정하면, 해당 함수의 this는 인자로 받는 객체가 된다.
// call()의 첫번째 인자는 this로 지정할 객체를 주고, 그 뒤로는 사용하려는 함수의 인자로 들어갈 값을 준다.
console.log("sum.call(kim)", sum.call(kim, '==> '));
console.log("sum.call(lee)", sum.call(lee, ':: '));

// bind()를 사용하면 this가 고정된 새로운 함수를 생성한다.
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());