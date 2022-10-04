// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum

// Given five positive integers, find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers. Then print the
// respective minimum and maximum values as a single line of two space-separated
// long integers.

function miniMaxSum(arr) {
  // Write your code here

  //   MIN
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);

  // MAX
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let totalSum = 0;

  for (let number of arr) {
    totalSum += number;
  }

  console.log(totalSum);

  let minSum = totalSum - max;
  let maxSum = totalSum - min;

  console.log(minSum, maxSum);
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));
