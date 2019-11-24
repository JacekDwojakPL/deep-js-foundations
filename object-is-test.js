const objectIs = require('./object-is.js');

console.log(objectIs(42, 42) === true);
console.log(objectIs('foo', 'foo') === true);
console.log(objectIs(false, false) === true);
console.log(objectIs(null, null) === true);
console.log(objectIs(undefined, undefined) === true);
console.log(objectIs(NaN, NaN) === true);
console.log(objectIs(-0, -0) === true);
console.log(objectIs(0, 0) === true);

console.log(objectIs(-0, 0) === false);
console.log(objectIs(0, -0) === false);
console.log(objectIs(0, NaN) === false);
console.log(objectIs(NaN, 0) === false);
console.log(objectIs(42, '42') === false);
console.log(objectIs('42', 42) === false);
console.log(objectIs('foo', 'bar') === false);
console.log(objectIs(false, true) === false);
console.log(objectIs(null, undefined) === false);
console.log(objectIs(undefined, null) === false);
