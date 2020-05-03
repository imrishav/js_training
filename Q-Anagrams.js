// anagrams('rail safety', 'fairy tales') ==> true
// anagrams('RAIL SAFETY!', 'FAIRY TALES') ==> true
// anagrams('Hi there', 'Bye there') ==> false

const anagrams = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
};

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
}

// Alternative
// const anagrams = (stringA, stringB) => {
//   const mappedA = generateMaps(stringA);
//   const mappedB = generateMaps(stringB);

//   if (Object.keys(mappedA).length !== Object.keys(mappedB).length) {
//     return false;
//   }

//   for (let char in mappedA) {
//     if (mappedA[char] !== mappedB[char]) {
//       return "false";
//     }
//   }

//   return true;
//  };

// function generateMaps(a) {
//   const map = {};

//   for (let char of a.replace(/[^\w]/g, "").toLowerCase()) {
//     map[char] = map[char] + 1 || 1;
//   }

//   return map;
// }

console.log(anagrams("rail safety!!!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));
