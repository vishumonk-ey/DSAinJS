// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} k

 * @returns {number}
 */

class Solution {
    kthElement(a, b, k) {
        // code here
        if(a.length > b.length) return this.kthElement(b,a,k)
        let left = Math.max( 0 , k-b.length )
        let right = Math.min(k,a.length)
        let l1 , l2 ,r1 ,r2
        while(left <= right){
            const mid1 = Math.floor((left+right)/2)
            const mid2 = k - mid1
            l1 = a[mid1-1] === undefined ? Number.MIN_VALUE : a[mid1-1] 
            l2 = b[mid2 - 1] === undefined ? Number.MIN_VALUE : b[mid2 - 1]
            r1 = a[mid1] === undefined ? Number.MAX_VALUE : a[mid1]
            r2 = b[mid2] === undefined ? Number.MAX_VALUE : b[mid2]
            if(l1 > r2){
                right = mid1 - 1
            }else if ( l2 > r1){
                left = mid1 + 1
            }else{
                break
            }
        }
        return Math.max(l1,l2)
    }
}
