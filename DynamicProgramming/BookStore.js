// You are in a book shop which sells n different books. You know the price and number of pages of each book.
// You have decided that the total price of your purchases will be at most x. What is the maximum number of pages you can buy? You can buy each book at most once.
// Input
// The first input line contains two integers n and x: the number of books and the maximum total price.
// The next line contains n integers h_1,h_2,\ldots,h_n: the price of each book.
// The last line contains n integers s_1,s_2,\ldots,s_n: the number of pages of each book.
const target = 20;
const price = [4, 8, 5, 3];
const pages = [5, 12, 8, 1];
// const dp = new Array(target + 1).fill(-1);
// function maxPages(price , pages , i){
//     if( i < 0 ){
//         return Number.MIN_SAFE_INTEGER
//     }else if ( i == 0 ){
//         return dp[0] = 0
//     }
//     if( dp[i] == -1){
//         let max = Number.MIN_SAFE_INTEGER
//         for( let j = 0 ; j < pages.length ; j++){
//             max = Math.max(maxPages(price , pages , i - price[j]) + pages[j] , max)
//         }
//         if(max < 0){
//             dp[i] = 0
//         }else{
//             dp[i] = max
//         }
//     }
//     return dp[i]
// }
// console.log(Number.MAX_SAFE_INTEGER + 5 == Number.MAX_SAFE_INTEGER);
// function maxPages(price, pages, i, j) {
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
const dp = Array.from({ length: price.length }, () =>
  new Array(target + 1).fill(-1)
);
function maxPages(price, pages, i, j) {
  if (i < 0 || j < 0) {
    return 0;
  }
  if (dp[i][j] == -1) {
    if (j < price[i]) {
      dp[i][j] = maxPages(price, pages, i - 1, j);
    } else {
      dp[i][j] = Math.max(
        maxPages(price, pages, i - 1, j),
        maxPages(price, pages, i - 1, j - price[i]) + pages[i]
      );
    }
  }
  // when we are taling the ith book and if the cost is getting in negative which means we cant have the ith book but isse piche waala will return 0 and pages[i] are still there
  return dp[i][j];
}
console.log(maxPages(price, pages, price.length - 1, target));
console.log(dp);
