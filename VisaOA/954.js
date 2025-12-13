/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    const newArr = arr.sort((a,b) => a-b)
    const map = new Map()
    for(let i = 0 ; i < arr.length ; i++){
        map.set(arr[i] , (map.get(arr[i]) || 0) + 1)
    }
    // let pair = 0
    for( let i = 0 ; i < newArr.length ; i++){
        if( map.get(newArr[i]) > 0){
            const db = newArr[i] * 2
            if ( map.get(db) != undefined && map.get(db) > 0){
                map.set(newArr[i] , map.get(newArr[i]) - 1)
                map.set(db , map.get(db) - 1)
            }else{
                return false
            }
        }
    }
    return true
};