// ts에서는 객체지향형 클래스 코드가 작성 가능
// 자바랑 똑같은듯
class User {
  public name: string;
  private age: number;
  constructor(a) {
    this.name = a;
  }
}
let 유저1 = new User("park");

// public 키워드는 생략이 가능함. default
// private 키워드는 class 내에서 수정이 가능함. 자식에서 수정이 불가능함 (개인적인 변수)
// 자식에서 class에 접근하기 위해서는 메소드를 통해서만 수정할 수 있음

// 밑에 코드를 해석해보면
// 인자로 들어온 값을 public값으로 저장해달라
// 따라서 this를 생략할 수 있다.
class Human {
  constructor(public name) {
    name = "kim";
  }
}

// protected 키워드도 존재함 (자바랑 똑같네)
// protected: extends된 class는 사용가능. 자식들 사용불가능
// private: extends된 class는 사용불가능. 자식들 사용불가능

// static도 존재함
// 자식한테 물려주지 않음
// static은 public, protected, private와 합쳐서 사용가능
// static으로 선언된 변수는 this.으로 가져오지 않고 해당 클래스이름.으로 가져온다
class User123 {
  static x = 10;
  y = 20;
}

class TestUser {
  private static x = 10;
  public static y = 20;
  addOne(a) {
    TestUser.x += a;
  }
  printX() {
    console.log(TestUser.x);
  }
}
