/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let max = 0
    for (let i = 0 ; i < piles.length ; i++ ){
        max = Math.max(max,piles[i])
    } 
    let left = 1
    let right = max
    let result
    while (left <= right){
        const mid = Math.floor((left+right)/2)
        let eatingTime = 0 
        for(let i = 0 ;i<piles.length ;i++){
            eatingTime += Math.ceil(piles[i]/mid)
        }
        if(eatingTime <= h){
            result = mid
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return result
};
