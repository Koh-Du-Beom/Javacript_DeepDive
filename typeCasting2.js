console.log("Cat"&&"Dog");

//optional chaining
var elem = null;
var value = elem?.value;
console.log(value)

var str = " ";
var length = str?.length;
console.log(length);

//nullish coalescing null 병합 연산자
//좌항이 null이나 undefined면 우항 반환, 아니면 좌항
var foo = null ?? 'default string';
console.log(foo);

var foo2 = "" ?? "default string";
console.log(foo2);