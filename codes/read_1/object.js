let person = {
  name: 'lee',
  sayHello(){
    console.log("hello?", this.name);
    return 0; // 리턴값을 뱉지 않아 undefined로 나올수 있음.
  },
};

console.log(typeof person);
console.log(person.sayHello());
console.log(person.name);
console.log(person["name"]);

person.age = 20;
console.log(person.age);

//프로퍼티 삭제
delete person.age;
console.log(person.age);

