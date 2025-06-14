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
