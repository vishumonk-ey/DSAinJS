// Your task is to count the number of ways to construct sum n by throwing a dice one or more times. Each throw produces an outcome between 1 and  6.
// For example, if n=3, there are 4 ways:

// 1+1+1
// 1+2
// 2+1
// 3
// state - dp[i] , number of ways to generatte sum = i
// transition : dp[i] = dp[i-1] + dp[i-2]+dp[i-3]+...+dp[i-6]
// function numOfWays(n) {
//   if (n < 0) {
//     return 0;
//   }
//   if (n == 0) {
//     return 1;
//   }
//   return (
//     numOfWays(n - 1) +
//     numOfWays(n - 2) +
//     numOfWays(n - 3) +
//     numOfWays(n - 4) +
//     numOfWays(n - 5) +
//     numOfWays(n - 6)
//   );
// }

solve(12)

function solve(n) {
  const dp = new Array(n+1).fill(0);
  dp[0] = 1;
  console.log(numOfWays(n , dp))
  console.log(dp);
  
}
function numOfWays(n , dp) {
  if (n < 0) {
    return 0;
  }
  if (n == 0) {
    return 1;
  }
  if (dp[n] != 0) {
    return dp[n];
  } else {
     dp[n] = (
      numOfWays((n - 1) , dp) +
      numOfWays((n - 2) , dp) +
      numOfWays((n - 3) , dp) +
      numOfWays((n - 4) , dp) +
      numOfWays((n - 5) , dp) +
      numOfWays((n - 6) , dp)
    )
    return dp[n]
  }
}
