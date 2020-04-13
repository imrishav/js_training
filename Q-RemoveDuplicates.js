/**
 * @param {number[]} nums
 * @returns {array[]}
 * ([2,7,11,11,15]) = [2,7,11,15]
 */

let a = [2, 7, 11, 11, 15];

// ================================

// ==============Solution 1 (n2)     =======================
let b = [];

for (let i = 0; i <= a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}

console.log(b);
// ================================

// ==============Solution 2 (n2)Using sorting     =======================
let temp;
let c = [];
let sorted = a.sort();
let len = sorted.length;
for (let i = 0; i <= len; i++) {
  if (a[i] !== temp) {
    c.push(a[i]);
    temp = a[i];
  }
}

console.log(c);