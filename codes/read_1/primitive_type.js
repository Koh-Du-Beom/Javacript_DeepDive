
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

//shallow copy and deep copy
const o = { x : { y : 1} };

//shallow copy
const c1 = { ...o };
console.log(c1===o);
console.log(c1.x === o.x);

//deep copy;
const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);

//참조에 의한 전달 : 객체
var person = {
  name : 'lee',
};

var copy = person;

console.log(copy===person);

copy.name = 'kim';
console.log(person.name);

person.address = "Seoul";
console.log(person);
console.log(copy);

p1 = {
  name: 'lee',
}

p2 = {
  name: 'lee',
}

p1 === p2 ? console.log(true) : console.log(false);
p1.name === p2.name ? console.log(true) : console.log(false);
