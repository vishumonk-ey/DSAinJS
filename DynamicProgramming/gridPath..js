// Consider an n \times n grid whose squares may have traps. It is not allowed to move to a square with a trap.
// Your task is to calculate the number of paths from the upper-left square to the lower-right square. You can only move right or down./
function solve() {
  const arr = [
    [".", ".", ".", "."],
    [".", "*", ".", "."],
    [".", ".", ".", "*"],
    ["*", ".", ".", "."],
  ];
  const dp = new Array(5).fill(() => [-1, -1, -1, -1, -1]);
  console.log(totalPaths(arr, dp, 1, 1));
}
function totalPaths(arr, dp, i, j) {
  if (i >= arr.length || j >= arr.length) {
    return 0;
  }
  if (i == arr.length && j == arr.length) return 1;
  if (arr[i][j] == "*") {
    return 0;
  }
  if (dp[i][j]) {
    return dp[i][j];
  }
  dp[i][j] = totalPaths(arr, dp, i + 1, j) + totalPaths(arr, dp, i, j + 1);
  return dp[i][j];
}
solve()