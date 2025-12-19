
function maxSum(arr,i){
    if(i < 0){
        return 0
    }
    if(dp[i] != Number.MAX_SAFE_INTEGER){
        return dp[i]
    }
    return Math.max((arr[i] + maxSum(arr,i-2)) , (maxSum(arr,i-1)))
}
let arr= [1,4,2,-10,10,5]
const dp = new Array(arr.length).fill(Number.MAX_SAFE_INTEGER)
console.log(maxSum(arr,arr.length - 1))
let arr= [1,4,2,-10,10,5]
const dp = new Array(arr.length).fill(Number.MIN_SAFE_INTEGER)
function solve(arr , i){
    if( i < 0)return 0
    if( dp[i] == Number.MIN_SAFE_INTEGER ){
        dp[i] = Math.max(solve(arr , i-2)+arr[i] , solve(arr , i-1))
    }
    return dp[i]
}
console.log(solve(arr , arr.length - 1))