// 

// merging two sorted arrays- helper function-:
function merge(arr1,arr2){
    let arr=[];
    let i =0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]) {
            arr.push(arr1[i]);
            i++
        }
        else if(arr1[i]>arr2[j]){
            arr.push(arr2[j]);
             j++ 
        }else{
            arr.push(arr1[i])
            i++
            j++
        }
    }
    while(i<arr1.length){
        arr.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        arr.push(arr2[j])
        j++
    }
    return arr
}

function mergeSort(arr){
    if(arr.length==1) {
        return arr
    }
let mid = Math.floor(arr.length/2)
let left= mergeSort(arr.slice(0,mid))
let right= mergeSort(arr.slice(mid))
 return merge(left,right)
}
console.log(mergeSort([98,1,2974,2864,39,49,0]))

// BIg O-:


// avg. -> O(n logn)
// worst -> O(n logn)
// best -> O(n logn)
// space complexity--> O(n)