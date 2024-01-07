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