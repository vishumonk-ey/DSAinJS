// const coins = [2, 3, 5];
// const target = 9;
// const dp = Array.from({ length: coins.length }, () =>
//   new Array(target + 1).fill(-1)
// );
// function numOfWays(coins, i, j) {
//   if (j == 0) {
//     return 1;
//   } else if (i < 0 || j < 0) {
//     return 0;
//   }
//   if (dp[i][j] == -1) {
//     // console.log("ran");
//     dp[i][j] = 0;
//     let count = 1;
//     while (count * coins[i] <= j) {
//       dp[i][j] += numOfWays(coins, i - 1, j - count * coins[i]);
//       count++;
//     }
//     dp[i][j] += numOfWays(coins, i - 1, j);
//     // dp[i][j] =
//     //   numOfWays(coins, i - 1, j - coins[i]) + numOfWays(coins, i - 1, j);
//   }
//   return dp[i][j];
// }
// console.log(dp);

// console.log(numOfWays(coins, coins.length - 1, target));

