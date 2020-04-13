/**
 * @param {string} str
 * @returns {max characters in string}
 * ('abba') =  b
 * ('abcdefgss') =  ss
 */

const maxChars = str => {
  const map = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (map[char]) {
      map[char]++
    } else {
      map[char] = 1
    }
  }

  for (chars in map) {
    if (map[chars] > max) {
      max = map[chars]
      maxChar = chars
    }
  }

  return `Max Character is ${maxChar} with ${max} occurances`
}

console.log(maxChars('RRiiisshav'))
