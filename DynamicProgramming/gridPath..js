// Consider an n \times n grid whose squares may have traps. It is not allowed to move to a square with a trap.
// Your task is to calculate the number of paths from the upper-left square to the lower-right square. You can only move right or down./
function solve() {
  // const arr = [
  //   [".", ".", ".", "."],
  //   [".", "*", ".", "."],
  //   [".", ".", ".", "*"],
  //   ["*", ".", ".", "."],
  // ];
  const arr = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "*"]
  ]
  
  // const dp = new Array(5).fill(() => [-1, -1, -1, -1, -1]);
  const dp = new Array(arr.length + 1)
    .fill(-1)
    .map(() => new Array(arr.length + 1).fill(-1));
  // const dp = new Array(5).fill(-1).map(() => [-1,-1,-1,-1,-1] )

  console.log(totalPaths(arr, dp, 1, 1));
  console.log(dp);
}
function totalPaths(arr, dp, i, j) {
  const mod = 1e9 + 7;
  if (i > arr.length || j > arr.length) {
    return 0;
  }
  if (arr[i - 1][j - 1] == "*") {
    return (dp[i][j] = 0);
  }
  if (i == arr.length && j == arr.length) return (dp[i][j] = 1);

  if (dp[i][j] != -1) {
    return dp[i][j];
  }
  dp[i][j] =
    (totalPaths(arr, dp, i + 1, j) % mod) +
    (totalPaths(arr, dp, i, j + 1) % mod);
  return dp[i][j];
}
solve();
const grid = [
  [".", ".", "."],
  [".", ".", "."],
  [".", ".", "*"]
]
const dp = Array.from({length : grid.length} , () => new Array(grid.length).fill(-1))
function solution(grid , dp , i , j){
  if(i == grid.length - 1 && j == grid.length - 1 && grid[i][j] != '*'){
    return dp[i][j] = 1 
  }else if ( i >= grid.length || j >= grid.length ){
    return 0
  }else{
    if(dp[i][j] == -1){
      if(grid[i][j] == '*'){
        dp[i][j] = 0
      }else{
        dp[i][j] = solution(grid , dp , i , j+1) + solution(grid , dp , i+1 , j)
      }
    }
    return dp[i][j]
  }
}
console.log(solution(grid , dp , 0 , 0))