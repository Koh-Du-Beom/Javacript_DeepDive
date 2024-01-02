// const person ={
//   name: 'lee',
// };

// person.age = 20;

// console.log(Object.getOwnPropertyDescriptors(person));

// const person = {
//   firstName: 'Ungmo',
//   lastName: 'Lee',

//   get fullName(){
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name){
//     [this.firstName, this.lastName] = name.split(' ');
//   }
// };

// console.log(person.firstName + " " + person.lastName);

// //접근자 프로퍼티 fullName에 값 할당하면 set함수가 실행
// person.fullName = 'Heegun Lee';
// console.log(person);

// //접근자 프로퍼티 fullName에 접근하면 get 함수가 실행
// console.log(person.fullName);


// let descripter = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log(descripter);

// descripter = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descripter);

// const person = {};

// Object.defineProperty(person, 'firstName', {
//   value: 'Ungmo',
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// Object.defineProperty(person, 'lastName', {
//   value: 'Lee',
// });

// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log('firstName', descriptor);

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor);

// console.log(Object.keys(person));

// person.lastName = 'Kim';
// delete person.lastName;

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor);

// Object.defineProperty(person, 'fullName', {
//   get(){
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set(name){
//     [this.firstName, this.lastName] = name.split(" ");
//   },
//   enumerable: true,
//   configurable: true,
// });

// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log('fullName', descriptor);

// person.fullName = 'Heegun Lee';
// console.log(person);

// /* extension */
// const person = {name : 'Lee'};
// console.log(Object.isExtensible(person));

// Object.preventExtensions(person);
// console.log(Object.isExtensible(person));

// //preventExtensions 메소드를 실행했으므로, age라는 프로퍼티를 추가할 수 없다.
// person.age = 20;
// console.log(person); 

// delete person.name;
// console.log(person);

// Object.defineProperty(person, 'age', { value : 20 });

// /* freeze */
// const person = { name : 'lee' };
// console.log(Object.isFrozen(person));

// Object.freeze(person);
// console.log(Object.isFrozen(person));

// console.log(Object.getOwnPropertyDescriptors(person));

// person.age = 20;
// console.log(person);

// delete person.name;
// console.log(person);

// person.name = "kim";
// console.log(person);
//freeze 되어있으므로 error가 발생
// Object.defineProperty(person, 'name', { configurable: true });

/*deepfreeze */
function deepfreeze(target){
  if (target && typeof target === 'object' && !Object.isFrozen(target)){
    Object.freeze(target);
    
    Object.keys(target).forEach(key => deepfreeze(target[key]));
  }
  return target;
} // 모든 key값에 대해 재귀적으로 freeze메소드를 실행해준다고 생각.

const person = {
  name: 'Lee',
  address: { city: 'Seoul' },
}

deepfreeze(person);

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person.address));

person.address.city = 'Busan';
console.log(person);
