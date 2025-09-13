/**
 * @param {number[][]} grid
 * @return {number}
 */
 
var minPathSum = function (grid) {
    const dp = new Array(200).fill(-1).map(() => new Array(200).fill(-1));
    return minPath(grid, 0, 0 ,dp);
};
function minPath(grid, i, j ,dp) {
  const rows = grid.length;
  const cols = grid[0].length;
  if (j >= cols || i >= rows) {
    return Number.MAX_SAFE_INTEGER;
  }
  if (i == rows - 1 && j == cols - 1) {
    return grid[i][j];
  }
  if(dp[i][j] == -1){
    return dp[i][j] = (grid[i][j] + Math.min(minPath(grid , i , j+1 , dp) , minPath(grid , i , j+1 , dp)));
  }else{
    return dp[i][j]
  }
  
}
