// const increase = function(num){
//   return ++num;
// }

// const decrease = function(num){
//   return --num;
// }

// const auxs = { increase, decrease }
// function makeCounter(aux){
//   let num = 0;

//   return function(){
//     num = aux(num);
//     return num;
//   };
// }

// const increaser = makeCounter(auxs.increase);
// console.log(increaser());
// console.log(increaser());

// const decreaser = makeCounter(auxs.decrease);
// console.log(decreaser());
// console.log(decreaser());

// function square(number){
//   return number **2;
// }

// console.dir(square);

// function sum(){
//   let res = 0;
//   for (let i =0; i< arguments.length; i++){
//     res += arguments[i];
//   }

//   return res;
// }

// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(1,2,3));

// function sum(){
//   const array = Array.prototype.slice.call(arguments);
//   return array.reduce(function(pre, cur){
//     return pre + cur;
//   }, 0);


const obj = { a: 1};

console.log(obj.__proto__ === Object.prototype);

console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('__proto__'));






