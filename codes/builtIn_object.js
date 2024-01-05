const strObj = new String('Lee');
console.log(typeof strObj);

const str = 'hi';

console.log(str.length);
// 객체 처리가 종료되면 래퍼객체의 내부슬롯에 할당된 원시값으로 원래의 상태로 되돌리고
// 래퍼 객체는 가비지 컬렉션의 대상이 된다.
console.log(str.toUpperCase()); 
console.log(str);
console.log(typeof str)

const str2 = 'hello';
str2.name = 'lee';
console.log(str2.name);
console.log(str2, typeof str2)

console.log(window.parseInt('F', 16));
console.log(parseInt('F', 16));
console.log(window.parseInt === parseInt);

console.log(window.Infinity === Infinity);
console.log(3/0);
console.log(3/0 === Infinity)

// eval('var x = 3;');
// console.log(x);

console.log(isFinite(0))
console.log(isFinite(2e64))
console.log(isFinite('10'))
console.log(isFinite(null))

console.log(isFinite(Infinity))
console.log(isFinite(-Infinity))
console.log(isFinite(NaN));
isFinite('hello');

console.log();
console.log(isNaN(NaN));
console.log(10);
console.log(isNaN('blabla'));

console.log(parseFloat('3.14'));
console.log(parseFloat('He was 40'));
console.log(parseFloat('40 years'));
console.log(parseInt('10.234'));
const x = 15;
console.log(x.toString(2));
console.log(parseInt(x.toString(2), 2));

const uri = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8';
const enc = encodeURI(uri);
console.log(enc);

const dec = decodeURI(enc);
console.log(enc);

var t = 10;
function foo(){
  y = 20; //암묵적 전역 const로 선언안해서 그럼
  //전역객체의 프로퍼티로 추가되어 변수 호이스팅도 발생 x
}
foo();

console.log(t + y);

var x1 = 10;
function fo(){
  y = 20;
  console.log(x + y);
}
fo();

console.log(window.x1);
console.log(window.y);

delete x1; //전역변수 x1은 삭제 x
delete y; // 전역객체 property인 y는 삭제됨.
console.log(window.x1); //10
console.log(window.y); //undefined