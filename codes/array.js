const arr = [1, 2, 3];
console.log(arr.constructor === Array);
console.log(Object.getPrototypeOf(arr)===Array.prototype);

console.log([].length);
console.log([1,2,3].length);

const arr2 = [1];
arr2.length = 3;
console.log(arr2)

