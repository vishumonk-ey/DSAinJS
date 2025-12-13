function answer(field , figure){
    // console.log(field);
    
    const rows = field.length
    const cols = field[0].length
    for( let pos = 0 ; pos <= cols-3 ; pos++ ){
        for( let i = 0 ; i <= rows - 3 ; i++){
            let tempi = i
            let isPossible = true
            let rowFilled = false
            while( tempi <  i + 3  && isPossible){
                let sum = 0
                for( let j = 0 ; j < cols ; j++ ){
                    if( j >= pos && j < pos + 3){
                        const indivSum = figure[tempi-i][j-pos] + field[tempi][j]
                        if(indivSum  == 2){
                            isPossible = false
                            break
                        }else{
                            sum += indivSum
                        }
                       
                    }else{
                        sum += field[tempi][j]
                    }
                }
                if( sum == cols ){
                    rowFilled = true
                }
                tempi++
            }
            if(!isPossible){
                break
            }else if(rowFilled && isPossible){
                return pos
            }
        }
    }
    return -1 
}
const field = [[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[1, 1, 0, 1, 0],
[1, 0, 1, 0, 1]]

const figure =[[1, 1, 1],
[1, 0, 1],
[1, 0, 1]]
console.log(answer(field , figure))