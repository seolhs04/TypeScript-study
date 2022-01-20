// Generic 함수

// 타입을 파라미터로 받음 총 두개의 파라미터가 함수에 존재하는 것 (<>와 ()안)
// 함수를 사용할 때 타입을 알려주게되면 인자로 받은 타입을 함수안에서 적용시킬 수 있음
function genericFunc<Type>(x: Type[]): Type {
  return x[0];
}

let a = genericFunc<number>([4, 2]);

// 타입 파라미터 제한두기
function genericFunc2<T extends number>(x: T) {
  return x - 1;
}

// 리액트 jsx 타입 지정
// let 박스 :JSX.Element = <div></div>

// 정확히 표현하기
// let 박스 :JSX.IntrinsicElements['div'] = <div></div>

// 컴포넌트 타입지정
// 리턴 타입에 타입 지정하면 된다. 프롭스도 마찬가지
