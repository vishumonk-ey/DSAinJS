// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find how many times the array has been rotated. 
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[0]
    let minIndx = 0
    let left = 0
    let right = nums.length - 1
    while(left<=right){
        const mid = Math.floor((left+right)/2)
        if(nums[left] <= nums[mid]){
            // left side sorted
            if(nums[left]<min){
                min = nums[left]
                minIndx = left
            }
            left = mid + 1
        }else{
            if(nums[mid]<min){
                min = nums[mid]
                minIndx = mid
            }
            right = mid - 1
        }
    }
    return min
};
