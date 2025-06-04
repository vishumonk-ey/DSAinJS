/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let max = 0
    for(let i = 0 ; i < nums.length ; i++){
        max = Math.max(max,nums[i])
    }
    let left = 1
    let right = max
    let result
    while(left <= right){
        const mid = Math.floor((left+right)/2)
        const sum = findSum(nums , mid)
        if(sum <= threshold){
            result = mid
            right = mid - 1
        }else{
            left = mid + 1
        }
    }  
    return result
};
function findSum(nums , mid){
    let sum = 0
    for(let i = 0 ; i <nums.length ; i++){
        sum+= Math.ceil(nums[i]/mid)
    }
    return sum
}
