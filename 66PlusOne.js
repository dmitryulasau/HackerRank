function plusOne(digits) {
  // start looping from the end of the digit's array
  for (let i = digits.length - 1; i >= 0; i--) {
    // checking if the last digit is 9
    if (digits[i] === 9) {
      // changing last digit to 0
      digits[i] = 0;
    } else {
      // adding +1 to the last digit (except 9)
      digits[i]++;

      return digits;
    }
  }
  return [1, ...digits]; // in case of 9, 99, 999, 9999 ...
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
