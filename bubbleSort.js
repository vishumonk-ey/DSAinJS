// ####sorting----:
//  rearranging a given collection in an order (koi bhi)
//  javascript inbuilt sort method----:
// 

// BUBBLE SORT-:
   function swap(arr,ind1,ind2){
    let temp= arr[ind1]
    arr[ind1]=arr[ind2]
    arr[ind2]=temp
   }

 function bubbleSort(arr){
    for(let i=arr.length ; i > 1;i--){
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
 }

console.log( bubbleSort([2,3,5,4,1]))
// const swap= (arr,ind1,ind2) =>{
//     [arr[ind1],arr[ind2]]= [arr[ind2],arr[ind1]]
// }

// OPTIIMIZING THE BUBBLE SORT FOR NEARLY SORTED ARRAY TO AVOID UNNECESSARY ITERATIONS.

function bubbleSort_optimized(arr){
    for(let i=arr.length;i>1;i--){
        let noSwap=true
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
                noSwap = false
            }
        }
        if(noSwap) break;
    }
    return arr
}

console.log( bubbleSort_optimized([5,1,2,3,4]))

// Big O -:
//   for general case-> O(n*n)
//   for almost sorted array case-> O(n)
