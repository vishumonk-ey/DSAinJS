// Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to produce a sum of money x using the available coins in such a way that the number of coins is minimal.
// For example, if the coins are \{1,5,7\} and the desired sum is 11, an optimal solution is 5+5+1 which requires 3 coins.
function solve(arr, target) {
  const dp = new Array(target+1).fill(Number.MAX_SAFE_INTEGER);
  console.log(minCoins(arr, target, dp));
}
function minCoins(arr, i, dp) {
  if (i == 0) {
    return 0;
  }
  if (i < 0) {
    return Number.MAX_SAFE_INTEGER;
  }
  if (dp[i] != Number.MAX_SAFE_INTEGER) {
    return dp[i];
  } else {
    for (let j = 0; j < arr.length; j++) {
      const coinsReqd = minCoins(arr, i - arr[j] , dp)
      dp[i] = Math.min(dp[i], 1 + ( coinsReqd == -1 ? Number.MAX_SAFE_INTEGER : coinsReqd));
    }
    return dp[i] == Number.MAX_SAFE_INTEGER ? -1 : dp[i]
  }
}

solve([5,7] , 8 )