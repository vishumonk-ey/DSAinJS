// comparison sort thi aur saare sorting algos kyuki basically hum elements ko compare hi kr rhe the and at max avg time complexity nlogn hi jaaskta hai..isse better inse nhi hosktaa!
// radix sort doesnt uses comparison operator

// helper function for getting digit
function getDigit(num,i){
    return ( Math.floor(Math.abs(num)/Math.pow(10,i)) % 10 )
}
// console.log(getDigit(9910,3));

// helper function for getting number of digits

function countDigit(num){
    if(num==0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// helper function for getting the largest number of digits in a number

function mostDigit(arr){
    let maxDigit = -Infinity
    for(let i=0;i<arr.length;i++){
        let digit = countDigit(arr[i])
        if(digit>maxDigit) maxDigit=digit;
    }
    return maxDigit
}
// console.log(mostDigit([12,999,-12934]));

function radixSort(arr){
    let maxDigit=mostDigit(arr)
    for(let k=0;k<maxDigit;k++){
        let digitBuckets=Array.from({length:10}, ()=>[])
        // second arguement is a map functionn jo ki har ek element of array pr lagega , here it is returning an empty array !
        for(let i=0;i<arr.length;i++){
            let digit= getDigit(arr[i],k)
            digitBuckets[digit].push(arr[i])
        }
        arr=digitBuckets.flat()
        // directly spread operator use krunga to bas elements ayenge ,inner elements nhi ayenge
        // instead
        // arr=[].concat(...digitBuckets)
    }
    return arr
}
console.log(radixSort([213,5,12,400]));

// big o of radix sot---:
// all case-> O(n*k)
// where n is the num of Element in the array and k is the max. key length