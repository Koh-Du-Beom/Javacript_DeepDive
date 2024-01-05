
// function foo(){
//   'use strict';
//   x = 10;
// }
// foo();
// console.log();

// //implicit global error
// (function(){
//   'use strict';

//   x = 1;
//   console.log(x);
// }());

// identifier delete error 
// (function(){
//   'use strict';

//   var x = 1;
//   delete x;

//   function foo(a){
//     delete a;
//   }

//   delete foo;
// });

// //duplicate parameter error
// (function(){
//   'use strict';

//   function foo(x, x){
//     return x + x;
//   }
//   console.log(foo(1, 2));
// })

//참고로 소괄호로 둘러싼 이 코드는 즉시실행함수 IIFE이다. 변수의 범위를 
//함수 내로 제한하여 글로벌 스코프의 오염을 방지하는 데 사용된다.
(function (){
  'use strict';

  function foo(){
    console.log(this);
  }
  foo();

  function Foo(){
    console.log(this);
  }
  new Foo();
}());

(function(a){
  'use strict';
  a = 2;
  console.log(arguments);

}(1));