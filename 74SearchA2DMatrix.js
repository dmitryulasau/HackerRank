var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;

  let left = 0;
  let right = matrix.length;

  while (left < right) {
    const mid = Math.ceil((left + right) / 2);
    const num = matrix[mid][0];

    if (num === target) {
      return true;
    } else if (num < target) {
      left = middle;
    } else {
      right = middle - 1;
    }
  }
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
