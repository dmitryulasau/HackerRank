// https://www.hackerrank.com/challenges/diagonal-difference/problem

// Given a square matrix, calculate the absolute difference between
// the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal = . The right to left diagonal = . Their absolute
// difference is .

function diagonalDifference(arr) {
  // Write your code here
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; i++) {
      if (i === j) {
        d1 += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        d2 += arr[i][j];
      }
    }
  }
  return Math.abs(d1 - d2);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
