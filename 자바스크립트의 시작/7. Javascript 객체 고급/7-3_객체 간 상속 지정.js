// Javascript는 프로토타입 링크를 통해 객체 간에 상속 관계를 정할 수 있다.
// __proto__ 또는 Object.create()를 사용하여 프로토타입 링크를 지정한다.

var superObj = { superVal: 'super' };
var subObj = { subVal: 'sub' };
subObj.__proto__ = superObj;    // __proto__ 를 사용하여 상속 받을 프로토타입 객체를 지정한다 (비표준)

var subObj2 = Object.create(superObj);  // Object.create()을 사용하여 상속받을 프로토타입 객체를 지정한다. (표준, 권장)
subObj2.subVal = 'sub'; // 이후 객체 속성을 추가

console.log('subObj.subVal : ', subObj.subVal);
console.log('subObj.superVal : ', subObj.superVal);
console.log('subObj2.subVal : ', subObj2.subVal);
console.log('subObj2.superVal : ', subObj2.superVal);

subObj.superVal = "sub";
console.log('subObj.superVal : ', subObj.superVal);
console.log('superObj.superVal : ', superObj.superVal); // 상속 받은 객체 인스턴스에서 속성 값을 바꿔도, 프로토타입 객체의 속성값이 변하지는 않는다.