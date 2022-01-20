// ts에서는 객체지향형 클래스 코드가 작성 가능
// 자바랑 똑같은듯
var User = /** @class */ (function () {
    function User(a) {
        this.name = a;
    }
    return User;
}());
var 유저1 = new User("park");
// public 키워드는 생략이 가능함. default
// private 키워드는 class 내에서 수정이 가능함. 자식에서 수정이 불가능함 (개인적인 변수)
// 자식에서 class에 접근하기 위해서는 메소드를 통해서만 수정할 수 있음
// 밑에 코드를 해석해보면
// 인자로 들어온 값을 public값으로 저장해달라
// 따라서 this를 생략할 수 있다.
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
        name = "kim";
    }
    return Human;
}());
// protected 키워드도 존재함 (자바랑 똑같네)
// protected: extends된 class는 사용가능. 자식들 사용불가능
// private: extends된 class는 사용불가능. 자식들 사용불가능
// static도 존재함
// 자식한테 물려주지 않음
// static은 public, protected, private와 합쳐서 사용가능
// static으로 선언된 변수는 this.으로 가져오지 않고 해당 클래스이름.으로 가져온다
var User123 = /** @class */ (function () {
    function User123() {
        this.y = 20;
    }
    User123.x = 10;
    return User123;
}());
var TestUser = /** @class */ (function () {
    function TestUser() {
    }
    TestUser.prototype.addOne = function (a) {
        TestUser.x += a;
    };
    TestUser.prototype.printX = function () {
        console.log(TestUser.x);
    };
    TestUser.x = 10;
    TestUser.y = 20;
    return TestUser;
}());
