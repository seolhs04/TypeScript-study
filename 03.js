// 숫자와 문자열로 이루어져있는 arr를 숫자 배열로 바꾸는 함수
function cleaningType(arr) {
    return arr.map(function (a) {
        if (typeof a === "string") {
            return parseInt(a);
        }
        else {
            return a;
        }
    });
}
// 선생들의 과목을 출력해주는 함수
function lastSubject(teacher) {
    if (Array.isArray(teacher.subject)) {
        return teacher.subject[teacher.subject.length - 1];
    }
    else {
        return teacher.subject;
    }
}
var place = { region: "seoul" };
