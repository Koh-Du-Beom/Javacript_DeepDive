var str = 'string';

console.log((str[0]));

console.log(str.length);
console.log(str.toUpperCase());
//touppercase함수는 원본을 훼손하지 않음.

console.log(str);
str[0] = "S";
console.log(str); // str[0]만 따로 바꾸려고 해도 변경할 수 없음. 원시값이기 때문이다. 

//값에 의한 전달
var score = 80;
var copy = score;

copy = 70;
console.log(score);
console.log(copy);

score = copy;
console.log(score, copy, typeof score, typeof copy);
console.log(score === copy);
