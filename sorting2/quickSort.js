function pivotHelper(arr,start=0,end=arr.length-1){
    // end condition ka problem horha tha,wasnt comparing till end KYUKI MAINE EQUALITY HI NHI LAGAYI THI FOR ME
    let pivotIndx=start
    let pivotElmnt=arr[start]
    for(let i=start+1;i<=end;i++){
        if(arr[i]<pivotElmnt){
            pivotIndx++
            if(pivotIndx != i){
                swap(arr,pivotIndx,i)
            }
        }
    }
    swap(arr,start,pivotIndx)
    return pivotIndx
}
function swap(arr,ind1,ind2){
    let temp= arr[ind1]
    arr[ind1]=arr[ind2]
    arr[ind2]=temp
   }

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
    let pivotIndex=pivotHelper(arr,left,right)
    // for sorting left-:
     quickSort(arr,left,pivotIndex-1)
    //  for sorting right -:
    quickSort(arr,pivotIndex+1,right)
}
return arr
}
console.log(quickSort([4,1,2,6,9]))
