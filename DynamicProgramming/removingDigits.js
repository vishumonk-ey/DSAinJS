// You are given an integer n. On each step, you may subtract one of the digits from the number.
// How many steps are required to make the number equal to 0?
// Input
// The only input line has an integer n.
// Output
// Print one integer: the minimum number of steps.

function solve(n) {
  const dp = new Array(n + 1).fill(-1);
  const dpA = new Array(n + 1).fill(-1);
  dpA[0] = 0
  console.log(MinSteps(n, dp));
  console.log("iter");
  console.log(MinStepsIt( n , dpA))
  
}
// ######## GREEEdy #################
function largestDigit(n) {
  let maxDig = 0;
  while (n != 0) {
    const digit = n % 10;
    maxDig = Math.max(digit, maxDig);
    n = Math.floor(n / 10);
  }
  return maxDig;
}
function minSteps(n) {
  let steps = 0;
  while (n != 0) {
    //while loop runs k times where k is min number of steps required , so overall complexity of minSteps is k*logn
    const largestDig = largestDigit(n); // takes floor of log(n) + 1 time , so overall logn times
    n -= largestDig;
    steps++;
  }
  return steps;
}

// solve(10);

// ######### Recursive DP

function MinSteps(n, dp) {
  if (n == 0) return 0;
  if (dp[n] != -1) return dp[n];
  let minSteps = Number.MAX_SAFE_INTEGER;
  let temp = n;
  while (temp != 0) {
    const digit = temp % 10;
    temp = Math.floor(temp / 10);
    if (digit == 0) {
      continue;
    }
    minSteps = Math.min(minSteps, MinSteps(n - digit, dp));
  }
  dp[n] = minSteps + 1;
  return dp[n];
}

// ########### IterativeDp 
function MinStepsIt( n , dp ){
  if( n == 0 )return 0
    for ( let i = 1 ; i <= n ; i++ ){
        // if(i == 0) continue
        let temp = i
        let minSteps = Number.MAX_SAFE_INTEGER
        while( temp!= 0 ){
          const digit = temp % 10
          temp = Math.floor(temp / 10)
          if ( digit == 0 ) continue
          minSteps = Math.min(minSteps , dp[i - digit])
        }
        dp[i] = minSteps + 1
    }
  return dp[n]  
}

solve(27);
