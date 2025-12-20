function maxPages(price, pages, i, j) {
//   if (i == 0) {
//     return 0;
//   } else if (i < 0) {
//     return Number.MIN_SAFE_INTEGER;
//   }
//   if (j == -1 || dp[i][j] == -1) {
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let k = 0; k < pages.length; k++) {
//       if (k == j) continue;
//       max = Math.max(maxPages(price, pages, i - price[k], k) + pages[k]);
//     }
//     if (j == -1) {
//       return max;
//     }
//     dp[i][j] = max < 0 ? 0 : max;
//   }
//   return dp[i][j];
// }