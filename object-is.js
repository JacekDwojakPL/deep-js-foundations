/*
exercise to write polyfill for checking, if two values are equal to each other.
 */

if (!Object.is || true) {
  Object.is = function objectIs(val1, val2) {
    // check for -0
    if (2 / val1 === -Infinity || 2 / val2 === -Infinity) {
      if (2 / val1 === 2 / val2) {
        return true;
      }
      return false;
    }

    // check for NaN
    if (val1 !== val1 && val2 !== val2) {
      return true;
    }

    return val1 === val2;
  };
}

console.log(Object.is(42, 42) === true);
console.log(Object.is('foo', 'foo') === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, '42') === false);
console.log(Object.is('42', 42) === false);
console.log(Object.is('foo', 'bar') === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
