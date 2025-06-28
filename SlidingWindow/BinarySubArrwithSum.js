/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    return helperFunc(nums,goal) - helperFunc(nums,goal-1)
};
var helperFunc = function(nums,goal){
    if(goal < 0) return 0
// will tell me the sub arrs lesser than equal to the goal 
let left = 0
let sum = 0
let count = 0
for(let right = 0 ; right < nums.length ; right++){
    sum+=nums[right]
    while(sum > goal){
        sum-=nums[left]
        left++
    }
    count += right - left + 1 
}
return count
}
