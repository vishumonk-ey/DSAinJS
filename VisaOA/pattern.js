function answer(src , pattern){
    let count = 0
    for( let i = 0 ; i < src.length - pattern.length ; i++ ){
            let isValid = true
            for ( let j = 0 ; j < pattern.length ; j++){
                const dig = pattern[j]
                const char = src[i + j]
                if(dig == '0' && isVowel(char)){
                    continue
                }else if( dig == '1' && !isVowel(char)){
                    continue
                }else{
                    isValid = false
                    break
                }
            }
            if( isValid ){
                count++
            }
    }
     console.log(count)
}
function isVowel(char){
    if ( char == "a" || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        return true
    }else{
        return false
    }
}
const src = "codesignal"
const pattern = "100"
answer(src , pattern)