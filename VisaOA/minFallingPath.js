/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const dp = Array.from({length : n } , () => new Array(n).fill(Number.MAX_SAFE_INTEGER));
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

// ITERable Dp -:

// /**
//  * @param {number[][]} matrix
//  * @return {number}
//  */
// var minFallingPathSum = function (matrix) {
//   const n = matrix.length;
//   const dp = Array.from({ length: n }, () =>
//     new Array(n).fill(Number.MAX_SAFE_INTEGER)
//   );
//   let result = Number.MAX_SAFE_INTEGER;
//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = n - 1; j >= 0; j--) {
//       if (i == n - 1) {
//         dp[i][j] = matrix[i][j];
//       } else {
//         dp[i][j] =
//           matrix[i][j] +
//           Math.min(dp[i + 1][j], dp[i + 1][j - 1] || Number.MAX_SAFE_INTEGER , dp[i + 1][j + 1] || Number.MAX_SAFE_INTEGER);
//       }

//       if (i == 0) {
//         result = Math.min(result, dp[i][j]);
//       }
//     }
//   }
//   console.log(dp);

//   return result;
// };

