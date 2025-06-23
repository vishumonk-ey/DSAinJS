/**
 * @param {string} s
 * @return {number}
 */
//  naive approach
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
   for(let i = 0 ; i < s.length ; i++){
    // let hash = new Array(256).fill(0)
    let map = new Map()
    let len = 0
    for( let j = i ; j < s.length ; j++){
        const char = s[j]
        if( map.get(char) == 1){
            break
        }else{
            len++
            maxLen = Math.max(len , maxLen)
            // hash[char.charCodeAt(0)] = 1
            map.set(char,1)
        }
    }
   }
   return maxLen
};

// optimized approach
