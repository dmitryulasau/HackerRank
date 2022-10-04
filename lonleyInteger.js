// https://www.hackerrank.com/challenges/lonely-integer/problem

// Given an array of integers, where all elements but one occur twice,
// find the unique element.

function lonelyinteger(a) {
  // Write your code here
  let counts = {};
  for (let i = 0; i < a.length; i++) {
    counts[a[i]] ? counts[a[i]]++ : (counts[a[i]] = 1);
  }
  console.log(counts);

  for (let key in counts) {
    if (counts[key] === 1) {
      return key;
    }
  }
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
