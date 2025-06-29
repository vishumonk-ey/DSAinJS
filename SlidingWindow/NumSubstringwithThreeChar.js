/**
 * @param {string} s
 * @return {number}
 */
// var numberOfSubstrings = function(s) {
//     const n = s.length
//     const notSat = notSatisfying(s)
// const total =      (n*(n+1)) / 2
//     return total - notSat
// };
// var notSatisfying = function(s){
//     let left = 0
//     let count = 0
//     const map = new Map()
//     map.set('a',0)
//     map.set('b',0)
//     map.set('c',0)
//     for(let right = 0 ; right < s.length ; right++){
//         map.set(s[right] , (map.get(s[right])+1))
//         while((map.get('a')!=0) && (map.get('b') != 0) && (map.get('c')!= 0) ){
//             map.set(s[left] , (map.get(s[left]) - 1))
//             left++

//         }
//         count += right - left + 1
//     }
//     return count
// }

var numberOfSubstrings = function(s) {
    let count = 0
    const map = new Map()
    map.set('a',-1)
    map.set('b',-1)
    map.set('c',-1)
    for(let right = 0 ; right < s.length ; right++){
        map.set(s[right] , right)
        if(map.get('a')!=-1 && map.get('b')!=-1 && map.get('c')!=-1){
            const left = Math.min(map.get('a') , map.get('b') , map.get('c'))
            count += left + 1
        }
    }
    return count
}
