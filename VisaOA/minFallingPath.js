/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const dp = new Array(n).fill(new Array(n).fill(Number.MAX_SAFE_INTEGER));
  const minPathSum = (i, j) => {
    if (j < 0 || j >= n) return Number.MAX_SAFE_INTEGER;
    if (i === n - 1) return matrix[i][j];
    if (dp[i][j] != Number.MAX_SAFE_INTEGER) {
      return dp[i][j];
    }
    // calculate the dp
    dp[i][j] =
      matrix[i][j] +
      Math.min(
        minPathSum(i + 1, j),
        minPathSum(i + 1, j - 1),
        minPathSum(i + 1, j + 1)
      );
      return dp[i][j]
  };
  let result = Number.MAX_SAFE_INTEGER
  for(let j = 0 ; j < n ; j++){
        result = Math.min(result , minPathSum(0 , j))
  }
  return result
};
