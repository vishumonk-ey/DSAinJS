// Delete Sorted Subsequence
// ######### CodeChef
// The set of balanced binary strings are as follows:

// The empty string is balanced.
// If 
// S
// S is balanced, then 
// 0
// +
// S
// +
// 1
// 0+S+1 is balanced.
// If 
// S
// ,
// T
// S,T are balanced, then 
// S
// +
// T
// S+T is balanced.


process.stdin.resume();
process.stdin.setEncoding("utf8");

let input = "";

process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  input = input.trim().split(/\s+/);
  main(input);
});

function main(input) {
  let t = parseInt(input[0]);
  let index = 1;

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[index++]);
    const s = input[index++];
    let delOne = false
    let delZero = false
    let bf = 0
    for ( let j = 0 ; j < n ; j++){
        if( s[j] == 0){
            bf++
        }else{
            bf--
            if(bf < 0){
                bf = 0
                delOne = true
            }
        }
    }
    delZero = bf > 0 ? true : false
    if( delOne && delZero){
        console.log(2);
    }else if( delOne || delZero){
        console.log(1);
    }else{
        console.log(0);
    }
  }
}
