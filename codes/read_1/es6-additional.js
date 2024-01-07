const multiply = (x, y) => x * y;
console.log(multiply(2, 3));

const power = x => x ** 2;
console.log(power(2));

const create = (id, content) => ({id, content})
console.log(create(1, 'javascript'));

// //화살표 함수는 인스턴스 생성 불가
// const Foo = () => {};
// new Foo();

//this : this는 바인딩할 객체가 동적으로 결정된다. 
class Prefixer{
  constructor(prefix){
    this.prefix = prefix;
  }

  // add(arr){
  //   return arr.map(function(item){
  //     return this.prefix + item;
  //   })
  // }
  
  add(arr){
    return arr.map(item => this.prefix + item);
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select'])); 
//this가 가리키는 값이 달라 에러가 발생할 코드임. 콜백함수의 this와 외부함수의 this가 다른 값을 가리키기 때문.
//arrow function은 상위 스코프의 this를 참조하는 렉시컬 this이므로, 이 코드는 에러 발생x

function foo(...rest){
  console.log(rest);
}
foo(1,2,3,4,5);

function sum(){
  console.log(arguments);
}

sum(1, 2);

function summation(x, y){
  x = x || 0;
  y = y || 0;
  console.log(x, y);
  return x + y;
}

console.log(summation(1, 2));
console.log(summation(1));

function logName(name = 'Lee'){
  console.log(name);
}

logName();
logName(undefined);
logName(null);

function sum2(x, y=0){
  console.log(arguments);
}

console.log(sum2.length);
sum2(1);
sum2(1, 2);