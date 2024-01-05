//자바스크립트 엔진이 암묵적으로 생성한 식별자 add
function add(x, y){
    return x + y;
}
console.log(add(4, 10));
//이것처럼 식별자로 선언하고 사용하는게 맞다. 이름이 생략되는 이유는
// 함수이름으로는 함수사용이 불가능.하고 위에서 말한것처럼 자바스크립트 엔진은 식별자로 함수를 사용
const operateAdd = (x, y) => x + y;
res = operateAdd(2, 4);
console.log(res);

function bar(){ console.log('bar') };
bar();
////error
// (function bar2(){ console.log('bar2');});
// bar2();


//함수 호이스팅
var sub = function (x, y){
    return x - y;
}
console.dir(add);
console.dir(sub);
console.log(add(2,5));
console.log(sub(2,5));

function add(x, y){
    return x + y;
}
//여기에 sub 선언하면 error
function add(x, y){
    console.log(arguments);
    
    return x + y;
}
console.log(add(2, 5, 10));

function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'KIM';
}

var num = 100;
var person = { name: 'Lee'};
console.log(num);
console.log(person);

changeVal(num, person);
console.log(num);
console.log(person);

function repeat(n, f){
    for (var i =0; i<n; i++){
        f(i);
    }
}

var logAll = function(i){
    console.log(i);   
}

var logOdds = function(i){
    if (i%2 !== 0){
        console.log(i);
    }
}

repeat(3, logOdds);
repeat(3, logAll);
// pure function and non-pure function
var count = 0;

function increase(n){
    return ++n;
}

count = increase(count);
console.log(count);
count = increase(count);
console.log(count);

var cnt = 0;
function increaseCnt(){
    return ++cnt;
}

increaseCnt();
console.log(cnt);

increaseCnt();
console.log(cnt);







