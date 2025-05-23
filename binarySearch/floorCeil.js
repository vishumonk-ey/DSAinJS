// Given a sorted array nums and an integer x. Find the floor and ceil of x in nums. The floor of x is the largest element in the array which is smaller than or equal to x. The ceiling of x is the smallest element in the array greater than or equal to x. If no floor or ceil exists, output -1.


// Examples:
// Input : nums =[3, 4, 4, 7, 8, 10], x= 5

// Output: 4 7

// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

// Input : nums =[3, 4, 4, 7, 8, 10], x= 8

// Output: 8 8

// Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.



class Solution {
    getFloorAndCeil(nums, x) {
       let left = 0
       let right = nums.length - 1
       let result = []
       while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] == x){
            return [nums[mid],nums[mid]]
        }else if ( nums[mid] > x){
            right = mid - 1 
        }else {
            left = mid + 1
        }
       }
        if ( left + 1 < nums.length && right >= 0){
            //beech me conditional check nhi krna pad raha because agar beech me aakar kahi pe mera left aur right equal horha hai then it is only possible when left ko bhi change karna padega --> which means num is lesser than 5 ( floor has an answer ) and right ko bhi change karna padega which means num is greater than 5(key element=5 , so we have a ceil answer also)
            return [nums[right] , nums[left]]
        }else{
            return -1
        }
    }
}
