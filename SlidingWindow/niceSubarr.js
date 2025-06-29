/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  number of subarr with k odd numbers ---> number of subarrs with sum = k , where even is replaced by 0 and odd is replaced with 1
var numberOfSubarrays = function(nums, k) {
    return helperFunction(nums,k) - helperFunction(nums,k-1)
};
var helperFunction = function (nums , goal){
    if(goal < 0)return 0
    let left = 0
    let count = 0
    let sum = 0 
    for(let right = 0 ; right < nums.length ; right++){
        sum+=(nums[right] % 2)
        while(sum > goal){
            sum-=(nums[left] % 2)
            left++ 
        }
        count += right - left + 1
    }
    return count
}
