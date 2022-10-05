// https://www.hackerrank.com/challenges/countingsort1/problem
function countingSort(arr) {
  let freqArray = new Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    freqArray[arr[i]]++;
  }
  return freqArray;
}
