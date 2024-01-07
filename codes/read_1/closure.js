// const x = 1;

// function outerFunc(){
//   const x = 10;
//   function innerFunc(){
//     console.log(x);
//   }
//   innerFunc();
// }

// outerFunc();

// const x = 1;
// function foo(){
//   const x = 10;
//   function lar(){
//     console.log(x);
//   }
//   bar();
//   lar();
// }

// function bar(){
//   console.log(x);
// }

// foo();
// bar();

//bar과 foo는 상위 스코프가 전역이므로 bar을 불렀을 때 참조하고 있는 값은 1이다.
//하지만 lar은 상위 스코프가 foo이므로 10이 나오게됨. 즉, 함수가 정의된 환경이 중요하다.

const x = 1;

function outer(){
  const x = 10;
  const inner = function(){ console.log(x) };
  return inner;
}

const innerFunc = outer();
innerFunc();


// function foo(){
//   const x = 1;
//   const y = 2;

//   function bar(){
//     const z = 3;

//     debugger;
//     console.log(z);
//   }
//   return bar;
// }
// const bar = foo();
// bar();

// const counter = () => {
//   let x = 0;
//   const increase = () => { return ++x; };
//   const decrease = () => { return --x; };
//   return { increase, decrease };
// }

// const ctr = counter();
// const inc = ctr.increase;
// const dec = ctr.decrease;

// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(dec());

function makeCounter(aux){
  let counter = 0;

  return function(){
    counter = aux(counter);
    return counter;
  };
}

const increase = (n) => {
  return ++n;
}

const decrease = (n) => {
  return --n;
}


const increaser = makeCounter(increase);
const decreaser = makeCounter(decrease);

console.log(increaser());
console.log(increaser());
console.log(decreaser());

var funcs = [];

for (var i=0; i<3; i++){
  funcs[i] = function(){ return i; };
}

for (var j =0; j < funcs.length; j++){
  console.log(funcs[j]());
}

