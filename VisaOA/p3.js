var longestPalindrome = function(s) {
    let longestSS = ""
    for( let i = 0 ; i < s.length ; i++ ){
        // let subs = ''
        let left = i
        let right = i
        // for odd length palindromic substring
        while ( left >= 0 && right < s.length && s[left] == s[right]){
            // subs = s[left]+subs+s[right]
            if(longestSS.length < right - left + 1){
                longestSS = s.slice(left,right+1)
            }
            left--
            right++
        }
        left = i
        right = i+1
        // for even length palindromic substring    
        while(left >= 0 && s[left] == s[right]){
            // subs = s[left] + subs + s[right]
            if (right - left + 1 > longestSS.length){
                longestSS = s.slice(left,right+1)
            }
            left--
            right++
        }
    
    }
    return longestSS
};