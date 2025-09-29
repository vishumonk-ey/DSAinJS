const dp = new Array(150).fill(-1)
function maxSum (i,arr){
    if ( i < 0 ){
        return 0
    }
    if(dp[i] != -1 ){
        return dp[i]
    }
    const isTaken = maxSum(i-2 , arr) + arr[i]
    const notTaken = maxSum(i-1, arr)
    dp[i] = Math.max(isTaken , notTaken)
    return dp[i]
}

const arr= [1,4,2,-10,10,5]
console.log(maxSum(arr.length-1 , arr))
console.log(dp);
