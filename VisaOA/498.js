/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  const m = mat.length
  const n = mat[0].length
  const diag = m + n - 1
  let i = 0 , j = 0
  const arr = []
  for (let i = 0 ; i < diag ; i = i + 2){
        while( i >= 0 ){
            arr.push(mat[i][j])
            i--
            j++
        }
        if(j == n){
            i = i + 2
            j--
        }else{
            i++
        }

        while( j >= 0 && i<=m){
            arr.push(mat[i][j])
            i++
            j--

        }
        
        if(i==m){
            j = j + 2
            i--
        }else{
            j++
        }
  }
   return mat 
};


var findDiagonalOrder = function(mat) {
    const m = mat.length
    const n = mat[0].length
    const arr = Array.from({length : m+n-1} , ()=> new Array())
    for ( let i = 0 ; i < m ; i++){
        for ( let j = 0 ; j < n ; j++){
            const sum = i + j
            if( sum % 2 == 0){
                arr[sum].unshift(mat[i][j])
            }else{
                arr[sum].push(mat[i][j])
            }
        }
    }
    return arr.flat()
  };