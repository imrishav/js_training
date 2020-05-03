// Examples

// chunk([1,2,3,4],2) => [[1,2],[3,4]]
// chunk([1,2,3,4,5,6,7,8],2) => [[1,2],[3,4],[4,5],[6,7],[8]]

function chunk(array, size) {
  let chunked = [];
  let index = 0;

  //   while (index < array.length) {
  //     chunked.push(array.slice(index, index + size));
  //     index += size;
  //   }

  for (let i of array) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([i]);
    } else {
      last.push(i);
    }
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
