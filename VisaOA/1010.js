/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let count = 0 
    let map = new Map()
    let max = Number.MIN_SAFE_INTEGER
    for( let i = time.length - 1 ; i >= 0 ; i--){
        let k = 0
        let j = 1
        while( k <= max ){
            k = 60*j - time[i]
            if( map.get(k) != undefined){
                count += map.get(k)
            }
            j++
        }
        if(time[i] > max ){
            max = time[i]
        }
        map.set(time[i] , (map.get(time[i]) || 0) + 1 )
    }
    return count
};