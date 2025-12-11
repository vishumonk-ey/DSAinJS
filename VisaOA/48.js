/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function(matrix) {
//     let left = 0 , top = 0;
//     let right = matrix.length - 1 , bottom = matrix.length - 1
//     while ( left <= right &&  top <= bottom){
//         const temp = []
//         for( let i = left  ; i <= right ; i++){
//             temp.push(matrix[top][i])
//         }
//         let count = 0
//         for ( let i = top ; i<= bottom ; i++){
//             const tempVal = matrix[i][right]
//             matrix[i][right] =temp[count]
//             temp[count] = tempVal
//             count++
//         }
//         right -- 

//         count = 1
//         for( let i = right ; i >= left ; i--){
//             const tempVal = matrix[bottom][i]
//             matrix[bottom][i] = temp[count]
//             temp[count] = tempVal
//             count++
//         }
//         bottom--

//         count = 1
//         for ( let i = bottom ; i >= top ; i--){
//             const tempVal = matrix[i][left]
//             matrix[i][left] = temp[count]
//             temp[count] = tempVal
//             count++
//         }
//         left++
        
//         count = 1
//         for( let i = left ; i<= right ; i++){
//             matrix[top][i] = tempVal[count]
//             count++
//         }
//         top++
//     }
// };
var rotate = function(matrix){
    // transpose
    const n = matrix.length
    for( let i = 0 ; i < n ; i++){
        for(let j = 0 ; j <= i-1 ; j++){
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for( let i = 0 ; i < n ; i++){
        for( let j = 0 ; j < Math.floor(n/2) ; j++){
            const temp = matrix[i][j]
            matrix[i][j] = matrix[i][n-1 - j]
            matrix[i][n-1 - j] = temp
        }
    }
    
}