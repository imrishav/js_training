/**
 * @param {string} str
 * @returns {boolean}
 * ('abba') =  true
 * ('abcdefg') =  false
 */

//  Using Every/
function palindrome (str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1]
  })
}

console.log(palindrome('level')) // true
console.log(palindrome('rishav')) // false

//Using Split

// function palindrome (str) {
//   let reversedString = str
//     .split('')
//     .reverse()
//     .join('')

//   return reversedString === str
// }

// console.log(palindrome('level')) // true
// console.log(palindrome('rishav')) // false
