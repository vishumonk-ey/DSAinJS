
function maxSum(arr,i){
    if(i < 0){
        return 0
    }
    if(dp[i] != Number.MAX_SAFE_INTEGER){
        return dp[i]
    }
    return Math.max((arr[i] + maxSum(arr,i-2)) , (maxSum(arr,i-1)))
}
const arr= [-10,-12,1,-10]
const dp = new Array(arr.length).fill(Number.MAX_SAFE_INTEGER)
console.log(maxSum(arr,arr.length - 1))
