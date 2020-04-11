const findValues = (firstArray, secondArray) => {
  return secondArray.filter(p => firstArray.some(idx => p.id === idx));
};

const idx = [1, 2, 47, 77, 99, 757];

const person = [
  { id: 1, name: "Rishav" },
  { id: 2, name: "Rishav2" },
  { id: 4, name: "Rishav3" }
];

console.log(findValues(idx, person));
