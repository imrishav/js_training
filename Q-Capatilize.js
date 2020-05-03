// capitalize('rishav is the king') => 'Rishav Is The King'
// capitalize('time will heal everything') => 'Time Will Heal Everything'

const capitalize = (str) => {
  let result = str[0].toUpperCase();

  for (let index = 1; index < str.length; index++) {
    if (str[index - 1] === " ") {
      result += str[index].toUpperCase();
    } else {
      result += str[index];
    }
  }
  return result;
};

console.log(capitalize("rishav is the king"));

//Alternate
// const capitalize = (str) => {
//     const words = [];

//     for (let char of str.split(" ")) {
//       words.push(char[0].toUpperCase() + char.slice(1));
//     }

//     return words.join(" ");
//   };
