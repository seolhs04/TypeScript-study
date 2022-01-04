// 기본 변수 문법
// 타입종류 : string, number, boolean, null, undefined, bigint, [], {}...

let 스트링: string = "seol";
let 숫자: number = 12;
// 변수 옆에 :를 쓰고 타입을 지정한다.

let 배열: number[] = [1, 2];
// 숫자가 들어가는 배열을 사용할때는 number[]

let 오브젝트: { name?: string } = { name: "seol" };
// object 타입지정 때에는 object와 똑같은 방식으로 선언한다
// ?는 들어올수도 안들어올수도 있는 것을 의미하는 옵션

let 스트링or숫자: string | number = 1;
// 타입지정할 때 |기호를 써서 string number 둘다 받을 수 있게도 가능

type MyType = string | number;
let 타입: MyType = 0;
// 타입이 길어지면 type으로 선언해서 넣을 수도 있음

function 함수(x: number): number {
  return x * 2;
}
// 함수의 arg에 타입지정도 가능함
// return값에 타입지정 시에는 ()옆에 지정함

let object2: { [key: string]: string };
// 오브젝트에 들어가는 key값이 string으로 중복되지만 너무 많을때 일일히 지정하는 것이 힘들 경우 [key:stirng]으로 사용할 수 있다
