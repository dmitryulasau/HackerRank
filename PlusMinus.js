// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/

// Given an array of integers, calculate the ratios of its elements that are
// positive, negative, and zero. Print the decimal value of each fraction on
// a new line with  places after the decimal.

function plusMinus(arr) {
  // Write your code here
  let positiveCount = 0;
  let negativeCount = 0;
  let zerosCount = 0;

  for (let number of arr) {
    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeCount++;
    } else {
      zerosCount++;
    }
  }

  let result = [positiveCount, negativeCount, zerosCount];

  result.forEach((number) => console.log((number / arr.length).toFixed(6)));
}

// console.log(plusMinus([1, 1, 0, -1, -1]));
console.log(plusMinus([-1, -1, 0, -1, -1]));
