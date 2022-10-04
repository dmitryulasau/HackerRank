function findMedian(arr) {
  // Write your code here
  let sorted = arr.sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;
  while (left < right) {
    for (let i = 0; i < sorted.length; i++) {
      if (left === right) {
        return sorted[i];
      } else {
        left++;
        right--;
      }
    }
  }
}

console.log(findMedian([1, 2, 3, 4, 5]));
