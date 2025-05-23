// Binary search -:
// for sorted data only.
function binarySearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  if(arr.length === 0){
    return false
  }
  while (r >= l) {
    const k = Math.floor((l + r) / 2);
    if (arr[k] == x) {
      return k;
    }
    if (arr[k] > x) {
      r = k - 1;
    } else {
      l = k + 1;
    }
  }
  return false;
}
// jumping approach - :
function binaryJumpSearch(arr,x){
    let k = 0;
    for (let b = Math.floor(arr.length / 2) ; b>=1 ; b/=2){
        while(k+b < arr.length && arr[k+b] <= x) {
            k= k+b
        }
    } 
    if(arr[k] === x ){
        return k
    }else{
        return false
    }
} 
function smallestK(){
    let left = 0
    let right = x //x is a value for which i know the function is true 
    let mid = (left + right)/2
    while (left<=right){
        if(!ok(mid)){
            left = mid+1
        }else{
            right = mid - 1
        }
    }
    return left
}
// similarly largestK can be done , monotonic koi data hai ya sorted hai then binary seach can be thought
