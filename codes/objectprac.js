// const person = new Object();

// person.name = 'Lee';
// person.sayhello = function() {
//   console.log('Hi my name is ' + this.name);
// }

// // () => {} 여기서 this가 왜 동작 안하는지 확인하기

// console.log(person);
// person.sayhello();

// const strObj = new String("Lee");
// console.log(typeof strObj);
// console.log(strObj);

// const numObj = new Number(123);
// console.log(typeof numObj);
// console.log(numObj);

// const boolObj = new Boolean(true);
// console.log(typeof boolObj);
// console.log(boolObj);

// const func = new Function('x', 'return x + x');
// console.log(typeof func);
// console.log(func);

// const arr = new Array(1,2,3);
// console.log(typeof arr);
// console.log(arr);

// const regExp = new RegExp(/ab+c/i);
// console.log(typeof regExp);
// console.log(regExp);

// const date = new Date();
// console.log(typeof date);
// console.log(date);

// function Circle(radius){
//   this.radius = radius;
//   this.getDiameter = function(){
//     return 2 * this.radius;
//   }
// }

// const circle1 = new Circle(5);
// const circle2 = new Circle(10);

// console.log(circle1.getDiameter());
// console.log(circle2.getDiameter());

// function Circle(radius){
//   console.log(this);
//   this.radius = radius;
//   this.getDiameter = function(){
//     return 2 * this.radius;
//   }
// }

// const myCircle = new Circle();

// function foo(){}

// foo.prop = 10;
// foo.method = function(){
//   console.log(this.prop);
  
// }

// foo.method();

function Circle(radius){
  if (!new.target){
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  };
}

const circle = Circle(5)
console.log(circle.getDiameter());





