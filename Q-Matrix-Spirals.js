// matrix(2)[[1, 2]], [4, 3];
// matrix(3)[[1, 2, 3]], [8, 9, 4][(7, 6, 5)];

const matrix = (number) => {
  const results = [];

  for (let i = 1; i < number; i++) {
    results.push([i]);
  }

  let counter = 1;
  let starColumn = 0;
  let endColumn = number - 1;
  let startRow = 0;
  let endRow = number - 1;

  return results;
};

console.log(matrix(3));
