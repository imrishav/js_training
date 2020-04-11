/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 * ([2,7,11,15],9) = [0,1]
 */

const twoArray = (nums, target) => {
  let hash = {};

  for (let i = 0; i <= nums.length; i++) {
    let diff = target - nums[i]; //7, 2
    if (diff in hash) {
      return [hash[diff], i]; //{0,1}
    } else {
      hash[nums[i]] = i; // hash{2:0}
    }
  }
};

console.log(twoArray([2, 7, 11, 15], 17));
