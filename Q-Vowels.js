//  vowels('Hi There!') => 3
//  vowels('Why do you ask') => 4
// a,e,i,o,u

const vowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let arr = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      arr = arr + 1;
    }
  }
  return arr;
};

console.log(vowels("Why do you ask"));
console.log(vowels("Hi There!"));
