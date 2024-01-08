const numObj = new Number(10);
console.log(numObj);

console.log(0.1 + 0.2 === 0.3);
function isEqual(a, b){
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN); 
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(1));
console.log(Number.isInteger(2));
console.log(Number.isInteger(0.1));
console.log(Number.isInteger(Infinity));
console.log(Number.isNaN(NaN));
console.log((77.1234).toExponential(4));
console.log((77.1234).toFixed(2));
console.log((17).toString(2));