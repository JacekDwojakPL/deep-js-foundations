/**
 * Function checks, if two passed parameters are of the same type
 *
 * @param {any} val1
 * @param {any} val2
 * @return {boolean}
 */
function objectIs(val1, val2) {
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
}

module.exports = objectIs;
