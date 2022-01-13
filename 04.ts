// Literal types -> 조금 더 엄격한 타입지정
let number: 123;
number = 123;

function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["바위"];
}

// object의 자료를 잠굴때 사용하는 as const
// 자료 하나하나 readonly를 붙인것과 동일하게 작동한다
let obj = {
  name: "kim",
} as const;

// function alias
// 함수의 타입을 지정할 때 arrow function을 사용한다
type 함수타입 = (a: string) => number;
// 이렇게 정의 하면 string을 파라미터로 받고 number를 return 하는 함수타입을 선언한다.

// 함수 type을 함수에 지정할때는 이렇게 사용한다
// arrow function 사용하는게 나은듯
let myfunc3: 함수타입 = (a) => {
  return 10;
};

// 오브젝트 안에 함수 선언가능함

let info: {
  name: "kim";
  plusOne: (number) => number;
} = {
  name: "kim",
  plusOne: (a) => {
    return a + 1;
  },
};

// 맨앞에 '0'이 들어가면 제거해주고 return해주는 함수
type TypeCutZero = (a: string) => string;
let cutZero: TypeCutZero = (string) => {
  if (string[0] === "0") {
    return string.slice(1);
  } else {
    return string;
  }
};

// -기호를 없애주는 함수
type TypeRemoveDash = (a: string) => number;
let removeDash: TypeRemoveDash = (phoneNum) => {
  return parseInt(phoneNum.split("-").join(""));
};

// 위의 함수들을 조합한 결과를 출력해주는 함수
// 콜백 function을 이용
let mixFunc = (
  phoneNum: string,
  cutZero: TypeCutZero,
  removeDash: TypeRemoveDash
): void => {
  console.log(removeDash(cutZero(phoneNum)));
};
