// Google Question
// recurring(2,5,1,2,3,5,1,2) // return 2
// recurring(2,1,1,2) // return 1
// recurring(2,5,3,2) // return undefiend

const recurring = (arr) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      console.log(map[arr[i]] !== undefined);
      return arr[i];
    } else {
      map[arr[i]] = true;
    }
    console.log(map);
  }
  return undefined;
};

console.log(recurring("abcdefgg"));
