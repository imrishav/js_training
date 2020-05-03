/**
 * @param {array, size}
 * @returns {array}
 * chunk([1,2,3,4],2) --> [[1,2],[3,4]]
 * chunk([1,2,3,4,5],2) --> [[1,2],[3,4],[5]]
 * chunk([1,2,3,4,5],4) --> [[1,2,3,4],[5]]
 *
 */

const chunk = (array, size) => {
  let chuncked = [];

  for (let ch of array) {
    const last = chuncked[chuncked.length - 1];

    if (!last || last.length === size) {
      chuncked.push([ch]);
    } else {
      last.push(ch);
    }
  }

  return chuncked;
};

console.log(chunk([1, 2, 3, 4, 5], 4));
