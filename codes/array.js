const arr = [1, 2, 3];
console.log(arr.constructor === Array);
console.log(Object.getPrototypeOf(arr)===Array.prototype);

console.log([].length);
console.log([1,2,3].length);

const arr2 = [1];
arr2.length = 3;
console.log(arr2);

const sparse = [, 2, , 4];
console.log(sparse.length);
console.log(sparse);
console.log(Object.getOwnPropertyDescriptors(sparse));

const arr3 = [1,2,3];
const arr4 = new Array(10);
console.log(arr4);
console.log(arr4.length);

const arr5 = Array.of(1,2,3);
console.log(arr5);

const arr6 = Array.from({ length : 2, 0: 'a', 1: 'b'});
console.log(arr6);

const arr7 = Array.from('Hello');
console.log(arr7);

const arr8 = [0];
arr8[1] = 2;
console.log(arr8);

const arr9 = [1, 2, 3];
arr9.splice(1,2);
console.log(arr9);

console.log(Array.isArray([]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray({name: 'Lee', job: 'lawyer'}));
console.log(Array.isArray({'0' : '1', '1' : '2'}));
//유사배열은 배열의 형태를 가지고 있지만 표준배열이 아니므로 false가 나옴

const arr10 = [1,2,3,4];
console.log(arr10.indexOf(2));
console.log(arr10.indexOf(2, 1)); // 1번 인덱스를 시작으로 2라는 요소가 존재하므로 true
console.log(arr10.indexOf(2, 2)); // 2번 인덱스를 시작으로 2라는 요소가 존재하므로 false

const foods = ['apple', 'banana', 'orange'];
if (!foods.includes('orange')){
  foods.push('orange');
}else{
  foods.push("orange2");
}

console.log(foods);

const arr11 = [1, 2];
let result = arr11.unshift(3, 4); // length값을 반환하므로.
console.log(result);
console.log(arr11); //원본이 바뀌는 이슈가 있기 때문에 고려할 필요가 있음.

const arr12 = [1, 2];
const arr13 = [3, 4];
const arr14 = arr12.concat(arr13);
console.log(arr14);
const arr15 = arr14.concat(arr14, 5, 6, 5);
console.log(arr15);

const arr16 = [1,2,3,4];
const res = arr16.splice(1, 2, 20, 30); // 1번 인덱스부터 2개의 요소를 제거하고 뒤에 있는 요소들을 삽입하며, 제거한 요소를 배열로 반환
console.log(res);
console.log(arr16);

const arr17 = [1,2,3,4];
const r = arr17.splice(1, 1, 40, 50);
console.log(r);

const arr18 = [1,2,3,4];
const res2 = arr18.slice(1);
const res3 = arr18.slice(-1);
console.log(res2, res3);

const arr19 = [1,2,3,4];
const res4 = arr19.join();
console.log(res4, typeof res4);

const arr20 = [1,1,1,1,1,1,1,1,1,1];
arr20.fill(0);
console.log(arr20);

const arr21 = [1,2,3];
console.log(arr21.includes(2));

const arr22 = [1, [2, [3, [4]]]];
const tmp1 = arr22.flat(0);
const tmp2 = arr22.flat(1);
const tmp3 = arr22.flat(2);
const tmp4 = arr22.flat(Infinity);

console.log(tmp1);
console.log(tmp2);
console.log(tmp3);
console.log(tmp4);

//순수함수 : 동일한 입력에 대해 동일한 출력을 반환, 함수가 외부상태를 변경하지 않으며, 외부환경에 영향을 미치지 않는다.
const fruits = ['Banana', 'orange', 'Apple'];
fruits.sort();
console.log(fruits);

const points = [40, 100, 1, 5, 2, 25, 10];
points.sort((a, b) => a - b); //오름차순 정렬
console.log(points); 

points.sort((a, b) => b - a); //내림차순 정렬
console.log(points); 

const todos = [
  { id : 4, content: 'Javascript'},
  { id : 1, content: 'HTML'},
  { id : 2, content: 'CSS'},
];

function compare(key){
  return (a, b) => (a[key] > b[key] ? 1: (a[key] < b[key] ? -1 : 0));
}

todos.sort(compare('id'));
console.log(todos);

todos.sort(compare('content'));
console.log(todos);

const numbers = [1, 2, 3];
const pows = [];

numbers.forEach(item => pows.push(item ** 2));
console.log(pows);

[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값 : ${item}, 인덱스 : ${index}, this: ${JSON.stringify(arr)}`);
});

const nums = [1,2,3];
nums.forEach((item, index, arr) => { arr[index] = item ** 2});
console.log(nums);

const array = [1,4,9];
const roots = array.map((item, index, arr) => item = item **0.5);
console.log(roots);
console.log(array);

const array2 = [1,2,3,4,5];

const odds = array2.filter(item => item%2 != 0);
console.log(odds);

const sum = [1,2,3,4].reduce((accmulator, currentValue, index, array) => accmulator + currentValue, 0);
console.log(sum);

const values = [1,2,3,4,5,6];
const average = values.reduce((accumulator, currentValue, index, array) => accumulator + currentValue / array.length, 0);
console.log(average);

console.log([5, 10, 15].every(item => item > 3));
console.log([5, 10, 15].every(item => item > 10));
console.log([].every(item => item > 3));

