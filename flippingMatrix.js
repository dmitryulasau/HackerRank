function flippingMatrix(matrix) {
  // Write your code here
  let n = matrix.length / 2;
  let max = 0;
  let total = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[row][col], max); // top LEFT
      max = Math.max(matrix[row][2 * n - col - 1], max); // top RIGHT
      max = Math.max(matrix[2 * n - row - 1][col], max); // bottom LEFT
      max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max); // bottom RIGHT

      total += max;
    }
  }
  return total;
}
