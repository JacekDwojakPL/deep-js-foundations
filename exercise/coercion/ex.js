// TODO: write the validation functions
/**
 * Function checks input parameter has type of string
 * and length of at least three non-whitespace characters.
 * @param {string} name
 * @return {boolean}
 */
function isValidName(name) {
  return typeof name == 'string' && name.trim().length >= 3;
}

/**
 * Function checks two paramteres
 * @param  {ant} attended
 * @param {any} length
 * @return {boolean}
 */
function hoursAttended(attended, length) {
  if (isNumberOrString(attended) && isNumberOrString(length)) {
    const attendedNumber = Number(attended);
    const lengthNumber = Number(length);

    if (attendedNumber % 1 === 0 && lengthNumber % 1 === 0) {
      return attendedNumber <= lengthNumber;
    }
  }
  return false;
}

/**
 * Function checks if input value has type of string or number
 * @param {any} value
 * @return {boolean}
 */
function isNumberOrString(value) {
  return (
    (typeof value == 'string' && value.trim().length > 0) ||
    typeof value == 'number'
  );
}
// tests:
console.log(isValidName('Frank') === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, '10') === true);
console.log(hoursAttended('6', 10) === true);
console.log(hoursAttended('6', '10') === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName('') === false);
console.log(isValidName('  \t\n') === false);
console.log(isValidName('X') === false);
console.log(hoursAttended('', 6) === false);
console.log(hoursAttended(6, '') === false);
console.log(hoursAttended('', '') === false);
console.log(hoursAttended('foo', 6) === false);
console.log(hoursAttended(6, 'foo') === false);
console.log(hoursAttended('foo', 'bar') === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, '6') === false);
console.log(hoursAttended('10', 6) === false);
console.log(hoursAttended('10', '6') === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, '10.1') === false);
console.log(hoursAttended('6.1', 10) === false);
console.log(hoursAttended('6.1', '10.1') === false);
