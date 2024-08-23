function stringSearch(inputStr,pattern){
    let count =0;
    for(let i = 0 ; i<= (inputStr.length - pattern.length);i++){
        for(let k=0;k<pattern.length;k++){
            if(inputStr[i+k]!=pattern[k]){
                break;
            }
            else if(k==pattern.length-1){
                count++;
            }
        }
    }
    return count;
}
console.log(stringSearch("ik that ik idk","ik"))