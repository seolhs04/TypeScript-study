// 이름, 나이, 지역
var myInfo = {
    name: "seol",
    age: 26,
    area: "seoul",
};
var myMuse = { asfd: "asdf", asdfdas: "dfsadf" };
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// Union type
var numOrStr = 123;
var numOrStrArr = [1, "2", 3];
var numOrStrObj = { a: "123" };
// any type
var 아무거나 = 123;
// unknown type. any와 동일하지만 any보다 안전함
// 모든 타입의 변수를 나중에 넣을 수 있지만 그 자체로 연산은 불가능함.
var 아무거나2 = 123;
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
// void type
// 리턴값이 없는 함수를 타입지정하는 것
function myFunc(x) {
    1 + 1;
}
// ?옵션으로 arg가 들어올수 있고 안들어올 수도 있다는 것을 의미한다
// 기본적으로 밑에 arg는 (x:number|undefined)와 동일
function myFunc2(x) {
    return x * 2;
}
function callName(name) {
    if (name) {
        console.log(name);
    }
    else {
        console.log("이름 없음");
    }
}
function calculator(num) {
    return num.toString().length;
}
function marry(a, b, c) {
    var result = a;
    result += b && 500;
    result += c === "상" && 100;
    return result > 600 && "가능";
}
