// finding the maximum sum of consecutive  n num in an array
function maxSubArray(arr,n){
    if (arr.length<n) return null
    let sum=0
    let maxSum=0
    for(let i=0;i<n;i++){
        sum+=arr[i]
    }
    maxSum=sum
    // for sliding the window by subtracting one lement from left and adding one at right
    for(let i=n;i<arr.length;i++){
        sum=sum+arr[i]-arr[i-n]
        if(sum>maxSum){
            maxSum=sum
        }
    }
    return maxSum
}
console.log(maxSubArray([2,6,9,1,5,6,3],4))
// ___________________DIVIDE AND CONQUER-------------
// larger set of data ko divide krdiya and uspe process repeat krte gye more in binary search section.