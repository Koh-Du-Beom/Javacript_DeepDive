/*명시적 타입 변환 예시*/
var x = 10;
var str = x.toString();
console.log(typeof str, str);
console.log(typeof x, x);

/*암묵적 타입 변환 예시*/
var str = x + '';
console.log(typeof str, str);
console.log(typeof x, x);

console.log(0 + '1');
console.log(1 + '1');
console.log(NaN + '1');
console.log(true + '1');
console.log(false + '1');
console.log(null + '1');

console.log(typeof (0 + ''));
console.log(typeof (1 + ''));
console.log(typeof (NaN + ''));
console.log(typeof (true + ''));
console.log(typeof (false + ''));
console.log(typeof (null + ''));






