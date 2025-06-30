/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return helperFunction(nums,k) - helperFunction(nums,k-1)
};
var helperFunction= function(nums,k){
    if(k==0)return 0
    const map = new Map()
    let left = 0
    let count = 0
    for(let right = 0 ; right < nums.length ; right++){
        map.set(nums[right] , ( map.get(nums[right]) || 0)+1)
        while(map.size > k){
            map.set(nums[left] , map.get(nums[left]) - 1)
            if(map.get(nums[left]) == 0){
                map.delete(nums[left])
            }
            left++
        }
        count += right - left + 1
    }
    return count
}
