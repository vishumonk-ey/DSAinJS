// selection sort--> har baari iterate kr rhe hain and jo minimum hai usko first me rakh de rhe hain.
function swap(arr,ind1,ind2){
    let temp= arr[ind1]
    arr[ind1]=arr[ind2]
    arr[ind2]=temp
   }

function selectionSort(arr){
    for(let i =0;i<arr.length-1;i++){
        let min=arr[i];
        // let min=i;
        let minIndx;
        // i can even get rid of the extra counter 
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<min) {
                min=arr[j]
                minIndx=j
            }
        }
        if(min!=arr[i]) swap(arr,i,minIndx)
    }
return arr
}
// without the use of extra counter...
function selectionSort(arr){
    for(let i =0;i<arr.length-1;i++){
        let min=i;
        // let minIndx;
        // i can even get rid of the extra counter 
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]) { 
                min=j
            }
        }
        if(min!=i) swap(arr,i,min)
    }
return arr
}
console.log( selectionSort([2,3,5,4,1]))
// ####Big O -: O(n*n)---> only helpful when theree is need of min. swap