/**
 * @param {string, string}
 * @returns {boolean}
 * anagrams('rail safety', 'fairy tales') --> true
 * anagrams('RAIL! SAFETY!', 'RAIL! SAFETY!') --> true
 * anagrams('rail safetyss', 'fairy talesss') --> false
 */

const anagrams = (stringA, stringB) => {
  const aMap = charMapGenerator(stringA);
  const bMap = charMapGenerator(stringB);

  if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    return false;
  }

  for (let char in aMap) {
    if (aMap[char] !== bMap[char]) {
      return false;
    }
  }

  return true;
};

const charMapGenerator = str => {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
};

console.log(anagrams("rail safety", "fairy tales"));
