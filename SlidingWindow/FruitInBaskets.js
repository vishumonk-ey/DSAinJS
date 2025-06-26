/**
 * @param {number[]} fruits
 * @return {number}
 */
// var totalFruit = function(fruits) {
//     let maxLen = 0
//     for(let i =0 ; i < fruits.length ; i++){
//         let arr = []
//         for(let j = i ; j< fruits.length ; j++){
//             if(arr.length === 0){
//                 arr.push(fruits[j])
//             }else if (arr.length === 1){
//                 if(fruits[j] != arr[0]){
//                     arr.push(fruits[j])
//                 }
//             }else{
//                 if( arr[0]!= fruits[j] && arr[1]!=fruits[j]){
//                     break
//                 }
//             }
//             len = j - i + 1
//             maxLen = Math.max(maxLen , len)
//         }
//     }
//     return maxLen
// };

// var totalFruit = function(fruits) {
//     let left = 0
//     let maxLen = 0
//     let map = new Map()
//     let typeCount = 0
//     for(let right = 0 ; right < fruits.length ; right++){
//         if(map.get(fruits[right]) === undefined || map.get(fruits[right]) < left ){
//             typeCount++
//         }
//         map.set(fruits[right] , right)
//         if( typeCount > 2){
//             if(map.get(fruits[left]) === left){
//                 typeCount--
//             }
//             left++
//         }else{
//             const len = right - left + 1
//             maxLen = Math.max(len , maxLen)
//         }
//     }
//     return maxLen
// }

var totalFruit = function(fruits) {
    let maxLen = 0
    let left = 0
    const map = new Map()
    for(let right = 0 ; right < fruits.length ; right++){
        let freq = map.get(fruits[right]) || 0
        map.set(fruits[right] , ++freq)
        const typeCount = Object.entries(map).length
        if(typeCount > 2){
            let freqLeft = map.get(fruits[left])
            map.set(fruits[left],--freqLeft)
            if(freqLeft === 0){
                map.delete(fruits[left])
            }
            left++
        }else{
        const len = right - left + 1
        maxLen = Math.max(len , maxLen)
        }
    }
    return maxLen
}
