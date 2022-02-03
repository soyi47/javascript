/*
    this
    - 객체 또는 객체의 property 정의 내부에서 사용되는`this` 키워드는 객체 자신을 가리킨다.
    - 어떤 메소드에서 그 메소드가 속한 객체를 가리키는 특수한 키워드
*/

var kim = {
    name: 'kim',
    first: 10,  // 첫번째 게임 점수
    second: 20, // 두번째 게임 점수
    sum: function () {
        return this.first + this.second;
    }
};

console.log("kim.sum()", kim.sum());