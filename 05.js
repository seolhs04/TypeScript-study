// TypeScript로 DOM객체 다루는 법
// tsconfig.json에 strictNullCheck옵션을 true로 저장한다.
// 저장하는 이유는 html셀렉터로 조작을 할때 null값이 많이 발생하기 때문에 그걸 캐치하기 위함
var 제목 = document.querySelector("#title");
제목.innerHTML = "반가워요";
// 이런식으로 하게 되면 제목이 union타입이기 때문에 error가 뜬다.
// querySelector가 특정 값을 통해 dom객체를 가져올 때 없는 값을 통해 가져올 경우 null이 들어오기 때문에 null과 오브젝트가 들어올 수 있는 union타입인 것이다.
// 따라서 이런식으로 작성한다. narrowing 기법이다.
var 제목1 = document.querySelector("#title");
if (제목1 !== null) {
    제목1.innerHTML = "반가워요";
}
// instanceof 이용하기. 가장 많이 쓰인다.
var 제목2 = document.querySelector("#title");
if (제목2 instanceof Element) {
    제목2.innerHTML = "반가워요";
}
// as 이용하기. as는 잘 안쓴다.
var 제목3 = document.querySelector("#title");
제목3.innerHTML = "반가워요";
// optional chaining 신문법. 해당 엘리먼트에 innerhtml이 있으면 출력, 없으면 undefined
var 제목4 = document.querySelector("#title");
if (제목4 === null || 제목4 === void 0 ? void 0 : 제목4.innerHTML) {
    제목4.innerHTML = "반가워요";
}
// a태그 href 속정 바꾸기
var 링크 = document.querySelector(".link");
링크.href = "https://kakao.com";
// 마찬가지로 union 타입이라 에러가 뜬다.
// a태그는 보통 element가 아닌 HTMLAnchorElement이다
var 링크1 = document.querySelector(".link");
if (링크1 instanceof HTMLAnchorElement) {
    링크1.href = "https://kakao.com";
}
// 이벤트 리스너 부착하는 방법
// optional chaining narrowing 사용한다.
var 버튼 = document.querySelector("#butotn");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
