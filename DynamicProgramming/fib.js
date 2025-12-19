// let dp = new Array(50).fill(-1)
// let steps = 0
// function fib (x){
//     steps++
//     if (x == 0)return 0
//     if (x == 1)return 1
//     if(dp[x-1]== -1 ){
//         dp[x-1] = fib(x-1)
//     }
//     if(dp[x-2] == -1){
//         dp[x-2] = fib(x-2)
//     }
//     return dp[x-1] + dp[x-2]
// }
// console.log(fib(49))
// console.log(steps);
const dp = new Array(50).fill(-1)
function fib(n){
    if( n == 0) return dp[0] = 0
    if( n == 1 ) return dp[1] = 1
    if( dp[n] == -1){
        dp[n] =  fib(n-1) + fib(n-2)
    }
    return dp[n]
}
console.log(fib(5));
