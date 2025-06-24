/**
 * @param {string} s
 * @return {number}
 */
//  naive approach
// var lengthOfLongestSubstring = function(s) {
//     let maxLen = 0
//    for(let i = 0 ; i < s.length ; i++){
//     // let hash = new Array(256).fill(0)
//     let map = new Map()
//     let len = 0
//     for( let j = i ; j < s.length ; j++){
//         const char = s[j]
//         if( map.get(char) == 1){
//             break
//         }else{
//             len++
//             maxLen = Math.max(len , maxLen)
//             // hash[char.charCodeAt(0)] = 1
//             map.set(char,1)
//         }
//     }
//    }
//    return maxLen
// };

// optimized approach

var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
    let map = new Map()
    let left =0
    for( let right = 0 ; right < s.length ; right++ ){
        if( (map.get(s[right]) != undefined ) && (map.get(s[right]) >= left )){
            left = map.get(s[right])+1
            map.set(s[right] , right)
        }else{
            const len = right - left + 1
            maxLen = Math.max(maxLen , len)
            map.set(s[right] , right)
        }
    }
    return maxLen
}
