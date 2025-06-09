// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find minimum number of pages.
    findPages(arr, k) {
        // your code here
        if(arr.length < k){
            return -1 
        }
        let max = 0
        let sum = 0
        for (let i = 0 ; i < arr.length ; i++){
            sum+=arr[i]
            max = Math.max(max,arr[i])
        }
        // for ( let i = max ; i<=sum ; i++){
        //     const isPossible = this.checkAllocation(arr,k,i)
        //     if(isPossible){
        //         return i
        //     }
        // }
        let left = max
        let right = sum
        let result 
        while (left <= right){
            const mid = Math.floor((left+right)/2)
            const isPossible = this.checkAllocation(arr,k,mid)
            if(isPossible){
                right = mid - 1
                result = mid
            }else{
                left = mid + 1
            }
        }
        return result
    }
    checkAllocation(arr , k , maxPages){
        let studentCount = k
        let sumPages = 0
        for (let i = 0 ; i < arr.length ; i++){
            sumPages += arr[i]
            if(sumPages > maxPages){
                studentCount--
                sumPages = arr[i]
            }
        }
        studentCount--
        if(studentCount >= 0)return true
        return false
    }
}
// if student bach jaa rha hai then it means that we have given students more than they needed and we can reduce the number of books , to it might be possible that we can do the work in less number of max pages 
