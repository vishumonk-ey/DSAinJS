/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const PGE = findPGE(height)
    const NGE = findNGE(height)
    let water = 0 
    for(let i = 0 ; i < height.length ; i++){
        if(NGE[i] === -1 || PGE[i] === -1  ){
            continue
        }else{
            if(NGE[i] >= PGE[i]){
                water += PGE[i] - height[i]
            }else{
                water += NGE[i] - height[i]
            }
        }
    }
    return water
};

function findPGE(arr){
    let pge = -1
    const result = []
    for( let i = 0 ; i< arr.length ; i++){
        if(pge > arr[i]){
            result.push(pge)
        }else{
            result.push(-1)
            pge = arr[i]
        }
    }
    return result
}

function findNGE(arr){
    let nge = -1
    const result = []
    for ( let i = arr.length ; i >= 0 ; i--){
        if(nge > arr[i]){
            result.unshift(nge)
        }else{
            nge = arr[i]
            result.unshift(-1)
        }
    }
    return result
}
