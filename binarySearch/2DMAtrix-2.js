/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m  = matrix.length //rows
    let n = matrix[0].length //col
    let row = 0
    let col =  n - 1
    while(col >=0 && row < m){
        if(matrix[row][col] === target) {
            return true
        }else if (matrix[row][col] > target){
            col--
        }else{
            row++
        }
    }
    return false
};
