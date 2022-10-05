function countingSort(arr) {
  let max = Math.max(...arr);
  let n = arr.length;

  // Create a temporary with 0 zero value
  // as the same length of max elemet + 1
  const temp = new Array(max + 1).fill(0);

  // Count the frequency of each element in the original array
  // And store it in temp array
  for (let i = 0; i < n; i++) {
    temp[arr[i]]++;
  }

  // Update the count based on the previous index
  for (let i = 1; i <= max; i++) {
    // Updating elements of count array
    temp[i] = temp[i] + temp[i - 1];
  }

  // Output arr
  const outputArr = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    // Add elements of array A to array B

    outputArr[temp[arr[i]] - 1] = arr[i];

    // Decrement the count value by 1
    temp[arr[i]] = temp[arr[i]] - 1;
  }

  return outputArr;
}

console.log(countingSort([1, 4, 1, 2, 7, 5, 2]));
console.log(countingSort([1, 3, 2, 8, 5, 1, 5, 1, 2, 7]));
