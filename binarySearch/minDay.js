/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(bloomDay.length < m*k ){
        return -1
    }
    let min = 0
    let max = 0
    for(let i = 0 ; i < bloomDay.length ; i++){
        max = Math.max(max,bloomDay[i])
        min = Math.min(min,bloomDay[i])
    }
    let left = min
    let right = max
    let result
    while(left<=right){
        const mid = Math.floor((left+right)/2)
        const bqCount = boquetCount(bloomDay , mid , k)
        if(bqCount >= m ){
            result = mid
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return result
};
function boquetCount(arr,day,k){
    let flowerCount = 0
    let bouqetCount = 0
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] > day){
            flowerCount = 0
        }else{
            flowerCount++
            if(flowerCount == k){
                bouqetCount++
                flowerCount = 0
            }
        }
    }
    return bouqetCount
}
