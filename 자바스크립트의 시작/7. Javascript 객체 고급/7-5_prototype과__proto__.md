# `prototype`과 `__proto__`



![](..\images\prototype.PNG)

+ Person이라는 함수(객체)를 생성하면, Person의 prototype 객체가 생성되어 서로를 참조한다.
  + Person의 `prototype` 속성은 Person의 prototype 객체를 가리킨다.
  + Person의 prototype 객체의 constructor 속성은 Person 객체를 가리킨다.
+ Person 함수를 생성자로 이용하여 새로운 객체 kim을 생성하면, 생성자 함수 Person이 실행되면서 속성값들이 생성되고, 동시에 `__proto__` 속성도 생성된다. `__proto__`는 생성자 함수의 prototype을 가리킨다. 즉 kim의 `__proto__`는 생성자 함수 Person의 prototype 속성값인 Person의 prototype 객체를 가리킨다.
+ 어떤 객체에서 메소드나 프로퍼티를 호출하면,
  1. 해당 객체에 호출하려는 값이 있는지 확인하여 있다면 사용하고,
  2. 없다면 객체의 `__proto__`가 가리키는 객체를 확인한다.