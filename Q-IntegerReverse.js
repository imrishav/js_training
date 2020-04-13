/**
 * @param {int} int
 * @returns {reversedInt}
 * ('15') === (51)
 * (20) === (02)
 * (500) === (5)
 * (-90) === (-9)
 *
 */

function reverseInt (int) {
  const reversed = int
    .toString()
    .split('')
    .reverse('')
    .join('')

  return parseInt(reversed) * Math.sign(int)
}

console.log(reverseInt(-90))
