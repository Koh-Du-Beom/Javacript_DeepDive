// const circle = {
//   radius : 5,
//   getDiameter(){
//     return 2 * circle.radius;
//   }
// }

// console.log(circle.getDiameter());

// const circle = {
//   radius: 5,
//   getDiameter(){
//     return 2 * this.radius;
//   }
// }

// console.log(circle.getDiameter())

console.log(this);

function square(number){
  console.log(this);
  return number * number;
}

square(2);

const person = {
  name: "lee",
  getName(){
    console.log(this);
    return this.name;
  }
};

console.log(person.getName());

function Person(name){
  this.name = name;
  console.log(this);
}

const me = new Person('Lee');

const foo = function(){
  console.dir(this);
}

foo();
const obj = { foo };
obj.foo();

new foo()
const bar = { name : 'bar' };
foo.call(bar);
foo.apply(bar);
foo.bind(bar)();