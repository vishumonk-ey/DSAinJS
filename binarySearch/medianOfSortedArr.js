var findMedianSortedArrays = function(nums1, nums2) {
    if(nums2.length < nums1.length) return findMedianSortedArrays(nums2,nums1)
    const firstHalfNum = Math.floor((nums1.length + nums2.length)/2)
    const totalNum = nums1.length + nums2.length
    let left = 0
    let right = nums1.length
    let l1,l2,r1,r2
    while (left <= right){
        const mid1 = Math.floor((left + right)/2)
        const mid2 = firstHalfNum - mid1
         l1 = nums1[mid1-1] === undefined ? Number.MIN_VALUE : nums1[mid1-1]
         l2 = nums2[mid2-1] === undefined ? Number.MIN_VALUE : nums2[mid2-1] 
         r1 = nums1[mid1] === undefined ? Number.MAX_VALUE : nums1[mid1]
         r2 = nums2[mid2] === undefined ? Number.MAX_VALUE : nums2[mid2]

        if(l1>r2){
            right = mid1 - 1
        }else if ( l2 > r1){
            left = mid1 + 1
        }else{
            break
        }
    }
    if (totalNum % 2 == 0) return ((Math.max(l1,l2) + Math.min(r1,r2))/2)
    return Math.min(r1,r2)
}
// Linear search approach 


var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length == 0 && nums2.length ==0)return 0
    let i =0
    let j = 0
    let count = 0
    let totalLen = nums1.length + nums2.length 
    let firstInd = Math.floor(totalLen/2) - 1
    let secondInd = Math.floor(totalLen/2)
    let firstEl,secondEl 
    while(i<nums1.length && j < nums2.length && count <= secondInd ){
        if(nums1[i] < nums2[j]){
            if(count == firstInd){
                firstEl = nums1[i]
            }else if ( count == secondInd){
                secondEl = nums1[i]
            }
            count++
            i++
        }else{
            if(count == firstInd){
                firstEl = nums2[j]
            }else if(count == secondInd){
                secondEl = nums2[j]
            }
            count++
            j++
        }
    }
    if ( count <= secondInd){
        while ( i< nums1.length ){
            if(count === firstInd){
                firstEl = nums1[i]
            }else if (count == secondInd){
                secondEl = nums1[i]
            }
            count++
            i++
        }
        while ( j < nums2.length){
            if ( count == firstInd){
                firstEl = nums2[j]
            }else if (count == secondInd){
                secondEl = nums2[j]
            }
            count++
            j++
        }
    }
    if (totalLen % 2 === 0) return (firstEl + secondEl)/2
    return secondEl
};
