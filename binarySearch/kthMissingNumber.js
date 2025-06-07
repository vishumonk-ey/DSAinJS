/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// var findKthPositive = function(arr, k) {
//     let count =0
//     let i = 0
//     while ( count < k){
//         i++
//         const isPresent = BinarySearch(arr , i)
//         if(!isPresent){
//             count++
//         }
//     }
//     return i
// };
// function BinarySearch(arr , num){
//     let result = false
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//         const mid = Math.floor((left+right)/2)
//         if (arr[mid] == num){
//             result = true
//             break
//         }else if (arr[mid] > num){
//             right = mid - 1
//         }else{
//             left = mid + 1
//         }
//     }
//     return result
// }

// brute force ----: O(N)
var findKthPositive = function(arr,k) {
    let answer = k
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] <= answer ){
            answer++
        }else{
            break
        }
    }
    return answer
}
// bnary Search approach
var findKthPositive = function(arr,k) {
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        const mid = Math.floor((left+right)/2)
        const missingNum = arr[mid] - mid - 1
        if(missingNum >= k){
            right = mid - 1
        }else{
            left = mid +1
        }
    }
    return right + k + 1

}
