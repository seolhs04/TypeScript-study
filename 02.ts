// 이름, 나이, 지역

let myInfo: { name: string; age: number; area: string } = {
  name: "seol",
  age: 26,
  area: "seoul",
};

let myMuse: { [key: string]: string } = { asfd: "asdf", asdfdas: "dfsadf" };

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
// Union type
let numOrStr: number | string = 123;

let numOrStrArr: (number | string)[] = [1, "2", 3];
let numOrStrObj: { a: string | number } = { a: "123" };

// any type
let 아무거나: any = 123;

// unknown type. any와 동일하지만 any보다 안전함
// 모든 타입의 변수를 나중에 넣을 수 있지만 그 자체로 연산은 불가능함.
let 아무거나2: unknown = 123;

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (boolean | number)[];
  teacher: string;
  friend: string[] | string;
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// void type
// 리턴값이 없는 함수를 타입지정하는 것
function myFunc(x: number): void {
  1 + 1;
}

// ?옵션으로 arg가 들어올수 있고 안들어올 수도 있다는 것을 의미한다
// 기본적으로 밑에 arg는 (x:number|undefined)와 동일
function myFunc2(x?: number): number {
  return x * 2;
}

function callName(name?: string): void {
  if (name) {
    console.log(name);
  } else {
    console.log("이름 없음");
  }
}

function calculator(num: string | number): number {
  return num.toString().length;
}

function marry(a: number, b: boolean, c: string): string | void {
  let result: number = a;
  result += b && 500;
  result += c === "상" && 100;
  return result > 600 && "가능";
}
