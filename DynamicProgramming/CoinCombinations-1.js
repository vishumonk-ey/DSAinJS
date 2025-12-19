// Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to calculate the number of distinct ways you can produce a money sum x using the available coins.
// For example, if the coins are \{2,3,5\} and the desired sum is 9, there are 8 ways:

// 2+2+5

// Modulo value to prevent integer overflow beyond Number.MAX_SAFE_INTEGER (2^53 - 1)
// Using 1e9 + 7 (1000000007) is a common prime number used in competitive programming
// to keep values within safe integer range while maintaining mathematical properties
//
// ISSUES WHEN OVERFLOW OCCURS (beyond Number.MAX_SAFE_INTEGER = 9007199254740991):
// 1. Loss of Precision: JavaScript uses 64-bit floating-point (IEEE 754), which can only
//    represent integers exactly up to 2^53 - 1. Beyond this, numbers lose precision.
// 2. Incorrect Calculations: Arithmetic operations may produce wrong results.
//    Example: 9007199254740992 + 1 = 9007199254740992 (should be 9007199254740993)
// 3. Comparison Failures: Two numbers that should be equal might not be equal.
//    Example: 9007199254740992 === 9007199254740993 returns true (incorrect!)
// 4. Wrong DP Results: In dynamic programming, incorrect intermediate values propagate
//    through the entire solution, leading to completely wrong final answers.
const MOD = 1e9 + 7;

function solve(arr, target) {
  const dp = new Array(target + 1).fill(-1);
  console.log(totalWays(arr, target, dp));
  // console.log(dp);
}
function totalWays(arr, i, dp) {
  if (i < 0) {
    return 0;
  }
  if (i == 0) {
    return 1;
  }
  if (dp[i] != -1) {
    return dp[i];
  }
  dp[i] = 0;
  for (let k = 0; k < arr.length; k++) {
    dp[i] = (dp[i] + totalWays(arr, i - arr[k], dp)) % MOD;
  }
  return dp[i];
}
function solution(arr, n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i - arr[j] >= 0) {
        dp[i] = (dp[i] + dp[i - arr[j]]) % MOD;
      }
    }
  }
  return dp[n];
}
solve([2, 3, 5], 1125);
console.log(solution([2, 3, 5], 1125));
