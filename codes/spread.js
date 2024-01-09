console.log(...[1,2,3]);
console.log(..."hello");

const arr = [1,2,3];
const max = Math.max(...arr);
console.log(max);

const arr2 = [...[1, 2], ...[3,4]];
console.log(arr2);

const arr3 = [1, 4];
const arr4 = [2, 3];
arr3.splice(1, 1, ...arr4);
console.log(arr3);

const origin = [1, 2];
const copy = [...origin];
console.log(copy);
console.log(copy === origin);

function sum(){
  return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1,2,3));

const merged = { ...{x: 1, y: 2}, ...{y: 10, z: 3}};
console.log(merged);