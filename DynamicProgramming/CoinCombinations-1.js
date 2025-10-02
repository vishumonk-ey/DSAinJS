// Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to calculate the number of distinct ways you can produce a money sum x using the available coins.
// For example, if the coins are \{2,3,5\} and the desired sum is 9, there are 8 ways:

// 2+2+5

function solve(arr , target){
    const dp = new Array(target+1).fill(-1)
    console.log(totalWays(arr,target,dp));
    console.log(dp);
    
}
function totalWays(arr , i , dp){
    if ( i < 0){
        return 0
    }
    if(i == 0){
        return 1
    }
    if ( dp[i] != -1){
        return dp[i]
    }
    dp[i] = 0 
    for(let k = 0 ; k < arr.length ; k++ ){
        dp[i] += totalWays(arr,i-arr[k],dp)
    }
    return dp[i]
}

solve([2,3,5] , 9)