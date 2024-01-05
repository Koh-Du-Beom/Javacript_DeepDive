// var x = 'global';

// function foo(){
//   var x = 'local';
//   console.log(x);
// }

// foo();
// console.log(x);

// var x = "global x";
// var y = "global y";

// function outer(){
//   var z = "outer's local z";

//   console.log(x);
//   console.log(y);
//   console.log(z);

//   function inner(){
//     var x = "inner's local x: ";

//     console.log(x);
//     console.log(y);
//     console.log(z);
//   }

//   inner();
// }

// outer();

// console.log(x);
// console.log(y);

// function foo(){
//   console.log("global function foo");
// }

// function bar(){
//   function foo(){
//     console.log("local funtion foo");
//   }

//   foo();
// }

// bar();

var x = 1;

function foo(){
  var x = 10;
  bar();
}

function bar(){
  console.log(x);
}

foo();
bar();
//해설 : foo()와 bar()이 전역코드가 생성되기 전 생성된다. 
//bar은 이미 x를 1로 평가해 1을 출력하게 된다. 따라서 결과는 1, 1