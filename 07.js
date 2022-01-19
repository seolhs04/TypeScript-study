// rest Parameter
// python의 *args와 동일
// 파라미터의 갯수를 정확히 알지 못할때 쓰인다.
// spread operator는 배열안에 들어간다는 점이 차이가 있다
/* a는 array이기 때문에 array로 타입지정함 */
function restFunc() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a; /* Array type으로 저장함 */
}
restFunc(1, 2, 3, 4, 5);
function multiNum() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return Math.max.apply(Math, a);
}
var object1 = { user: "kim", comment: [3, 5, 4], admin: false };
function objectParam(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
objectParam(object1);
function arrParam(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
arrParam([40, "wine", false]);
// never type 함수
// return값이 없어야 한다
// endpoint가 없어야한다 (끝나지 않는 함수)
// 사용할일 없음
// 에러를 낸다.
function neverFunc1() {
    throw new Error();
}
// 무한루프를 돌린다.
function neverFunc2() {
    while (true) { }
}
