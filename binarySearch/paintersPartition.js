// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

// Linear search approach
class Solution {

    minTime(arr, k) {
        // code here
        let max = 0
        let sum = 0
        for(let i = 0 ; i < arr.length ; i++){
            max = Math.max(max , arr[i])
            sum += arr[i]
        }
        for(let i = max ; i<=sum ; i++){
            const painterReq = this.calculatePainter(arr,i)
            if(painterReq <= k){
                // even though kuch cases hain jisme = hone ke bajhay directr  lesser hogya , which means that kahi pr ek se jyaad a vo maxTime vaala aajarha hai jiski vjh se ek se  jyaada pair ban jaa rhe hain and painterws are being save finallyd
                return i
            }
        }
    }
    calculatePainter(arr,maxTime){
        let paintersReq = 0
        let timeTaken = 0
        for (let i = 0 ; i<arr.length ; i++){
            timeTaken += arr[i]
            if(timeTaken > maxTime){
                paintersReq++
                timeTaken = arr[i]
            }
        }
        paintersReq++
        return paintersReq
    }
}


// Binary search approach

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {

    minTime(arr, k) {
        // code here
        let max = 0
        let sum = 0
        for(let i = 0 ; i < arr.length ; i++){
            max = Math.max(max , arr[i])
            sum += arr[i]
        }
        let left = max
        let right = sum
        let result
        while (left <= right){
            const mid = Math.floor((left + right)/2)
            const paintersReq = this.calculatePainter(arr,mid)
            if(paintersReq <=k){
                result = mid
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
        return result
        
    }
    calculatePainter(arr,maxTime){
        let paintersReq = 0
        let timeTaken = 0
        for (let i = 0 ; i<arr.length ; i++){
            timeTaken += arr[i]
            if(timeTaken > maxTime){
                paintersReq++
                timeTaken = arr[i]
            }
        }
        paintersReq++
        return paintersReq
    }
}
