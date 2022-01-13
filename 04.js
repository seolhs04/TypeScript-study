// Literal types -> 조금 더 엄격한 타입지정
var number;
number = 123;
function 가위바위보(a) {
    return ["바위"];
}
// object의 자료를 잠굴때 사용하는 as const
// 자료 하나하나 readonly를 붙인것과 동일하게 작동한다
var obj = {
    name: "kim",
};
// 이렇게 정의 하면 string을 파라미터로 받고 number를 return 하는 함수타입을 선언한다.
// 함수 type을 함수에 지정할때는 이렇게 사용한다
// arrow function 사용하는게 나은듯
var myfunc3 = function (a) {
    return 10;
};
// 오브젝트 안에 함수 선언가능함
var info = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
};
var cutZero = function (string) {
    if (string[0] === "0") {
        return string.slice(1);
    }
    else {
        return string;
    }
};
var removeDash = function (phoneNum) {
    return parseInt(phoneNum.split("-").join(""));
};
// 위의 함수들을 조합한 결과를 출력해주는 함수
// 콜백 function을 이용
var mixFunc = function (phoneNum, cutZero, removeDash) {
    console.log(removeDash(cutZero(phoneNum)));
};
