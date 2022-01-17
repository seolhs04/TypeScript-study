// 자바스크립트 class 문법
// 옛날 클래스 문법
// 클래스를 함수로 만들어서 오브젝트로 활용한다.
function Ant() {
    this.q = "asfd"; /* this란 instance, 새로 생성되는 object */
    this.w = "sadfd";
}
new Ant();
// 신 클래스 문법
var Ant2 = /** @class */ (function () {
    function Ant2() {
        this.q = "sdff";
        this.w = "asdd";
    }
    return Ant2;
}());
// constructor대신 class필드안에서도 변수 선언가능
// constructor 안에는 오브젝트 마다 변하는 값을 넣으면 좋다.
// ts에서는 constructor안에 쓸 변수를 class필드안에서 선언한다.
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.data = 0;
        this.name = name;
    }
    // 클래스에 프로토타입 함수 넣는 방법
    Person1.prototype.프로토타입함수 = function (a) {
        console.log("hi");
    };
    return Person1;
}());
// 자동차 클래스
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        console.log(this.price / 10);
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
// 문자 클래스
var Word = /** @class */ (function () {
    function Word() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.num = params.filter(function (ele) { return typeof ele === "number"; });
        this.str = params.filter(function (ele) { return typeof ele === "string"; });
    }
    return Word;
}());
var obj1 = new Word("kim", 3, 5, "park");
var 네모 = { color: "red", width: 100 };
var 학생 = { name: "kim" };
var 선생 = { name: "kim", age: 20 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var interfaceTest = {
    plus: function (x, y) { return x + y; },
    minus: function (x, y) { return x - y; },
};
