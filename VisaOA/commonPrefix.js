// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     let p = strs[0]
//     for(let i = 1 ; i < strs.length ; i++){
//         let s = ""
//         let j = 0
//         while ( j < p.length && j < strs[i].length){
//             if(p[j] === strs[i][j]){
//                 s+=p[j]
//                 j++
//             }else{
//                 break
//             }
//         }
//         p = s
//     }
//     return p
// };


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    let a = strs[0]
    let b = strs[strs.length - 1]
    let i = 0
    while ( i < a.length && i < b.length){
        if(a[i] == b[i]){
            i++
        }else{
            break
        }
    }
    return a.slice(0,i)
};