// 숫자와 문자열로 이루어져있는 arr를 숫자 배열로 바꾸는 함수

function cleaningType(arr: (number | string)[]): number[] {
  return arr.map((a) => {
    if (typeof a === "string") {
      return parseInt(a);
    } else {
      return a;
    }
  });
}

// 선생들의 과목을 출력해주는 함수

function lastSubject(teacher: { subject: string | string[] }): string {
  if (Array.isArray(teacher.subject)) {
    return teacher.subject[teacher.subject.length - 1];
  } else {
    return teacher.subject;
  }
}

// const로 생성한 오브젝트 인덱스 lock 거는 방법
// readonly를 넣어주게 되면 읽기속성으로 바꾼다.
// 에러를 띄워주기는 하나 실제로 javaScript에서 수정이 가능하기 때문에 실행은 된다.
type Place = { readonly region: string };
const place: Place = { region: "seoul" };

// 타입 합치기
type Name = string;
type Age = number;
type Person = Name | Age;

// AND (extend)
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY; // {x : number, y : number}

// type변수는 재정의가 불가능하다.

type Mytype = { color?: string; size: number; readonly position: number[] };
type MyInfo = { name: string; phone: number; email?: string };
type MyInfo2 = MyInfo & { age: boolean };
