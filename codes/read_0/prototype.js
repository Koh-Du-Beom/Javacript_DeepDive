function Circle(radius){
  this.radius = radius;
}

Circle.prototype.getArea = function(){
  return Math.PI * this.radius ** 2;
}

const circle1 = new Circle(1);
const circle2  = new Circle(2);

console.log(circle1.getArea === circle2.getArea)
console.log(circle1.getArea() === circle2.getArea())

console.log(circle1.getArea())
console.log(circle2.getArea())

function Person(name){
  this.name = name;
}

const me = new Person('Lee');
console.log(me.constructor === Person);

//깊게 공부할 생각하고 봐야할듯. 중도가서 작정하고 보기 