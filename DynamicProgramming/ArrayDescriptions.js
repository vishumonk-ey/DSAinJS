// You know that an array has n integers between 1 and  m, and the absolute difference between two adjacent values is at most 1.
// Given a description of the array where some values may be unknown, your task is to count the number of arrays that match the description.
// Input
// The first input line has two integers n and m: the array size and the upper bound for each value.
// The next line has n integers x_1,x_2,\dots,x_n: the contents of the array. Value 0 denotes an unknown value.
// Output
// Print one integer: the number of arrays modulo 10^9+7.
// Constraints

// 1 \le n \le 10^5
// 1 \le m \le 100
// 0 \le x_i \le m

// Example
// Input:
// 3 5
// 2 0 2

// Output:
// 3

// Explanation: The arrays [2,1,2], [2,2,2] and [2,3,2] match the description.
let count = 0
function solution(arr , m){
    numOfArr(arr , arr , 0 , m)
    console.log(count);
    
}

function numOfArr(arr, temp , i , m){
    console.log("arr" , arr);
    
    if( i >= arr.length ){
        count++
    }else if( i == 0 && arr[i] != 0){
        numOfArr(arr , i+1 , m)
    }else if ( i == 0 && arr[i] == 0){
        for( let j = 0 ; j <= m ; j++){
            arr[i] = j
            numOfArr(arr , i+1 , m)
        }
    }else if ( arr[i] != 0){
        if( Math.abs(arr[i] - arr[i-1]) <= 1){
            numOfArr(arr , i+1 , m)
        }else{
            return 0 
        }
    }else{
        // console.log("arr before : " , arr);
        if( (arr[i-1] + 1) <= m ){
            arr[i] = (arr[i-1] + 1)
            numOfArr(arr , i+1 , m)
        }
        // console.log("arr after : " , arr);
        if( (arr[i-1] - 1) >= 0){
            arr[i] = (arr[i-1] - 1)
            numOfArr(arr , i+1 , m)
        }
        arr[i] = arr[i-1]
        numOfArr(arr , i+1 , m)
    }
}

const arr = [0 , 0]
const m = 5
solution(arr , m)