// 자바스크립트 class 문법

// 옛날 클래스 문법
// 클래스를 함수로 만들어서 오브젝트로 활용한다.
function Ant() {
  this.q = "asfd"; /* this란 instance, 새로 생성되는 object */
  this.w = "sadfd";
}
new Ant();

// 신 클래스 문법
class Ant2 {
  constructor() {
    this.q = "sdff";
    this.w = "asdd";
  }
}

// constructor대신 class필드안에서도 변수 선언가능
// constructor 안에는 오브젝트 마다 변하는 값을 넣으면 좋다.
// ts에서는 constructor안에 쓸 변수를 class필드안에서 선언한다.
class Person1 {
  data = 0;
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // 클래스에 프로토타입 함수 넣는 방법
  프로토타입함수(a: string): void {
    console.log("hi");
  }
}

// 자동차 클래스
class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): void {
    console.log(this.price / 10);
  }
}
let car1 = new Car("소나타", 3000);

// 문자 클래스
class Word {
  num: number[];
  str: string[];
  constructor(...params) {
    this.num = params.filter((ele) => typeof ele === "number");
    this.str = params.filter((ele) => typeof ele === "string");
  }
}
let obj1 = new Word("kim", 3, 5, "park");

// interface type지정
// type대신에 interface로 타입 지정하고 등호가 들어가지 않음
interface Square {
  color: string;
  width: number;
}
let 네모: Square = { color: "red", width: 100 };

// interface extends
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };
// interface는 중복선언이 가능함. type은 중복선언이 되지 않음
// 중복선언을 하게되면 자동으로 추가가 됨

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface ProductItem {
  product: string;
  price: number;
}

let 장바구니: ProductItem[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface newItem extends ProductItem {
  card: boolean;
}

interface TestInter {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}
let interfaceTest: TestInter = {
  plus: (x, y) => x + y,
  minus: (x, y) => x - y,
};
