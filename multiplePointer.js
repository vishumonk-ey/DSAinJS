function sumZero(arr) {
  // create an empty array to return at last
  // first for loop for negative num and second for loop for postive num starting from end of array
  let result = [];
  for (let i = 0; arr[i] <= 0; i++) {
    for (let j = arr.length - 1; arr[j] >= 0; j--) {
      if (arr[i] + arr[j] == 0 && i != j) {
        result.push(arr[i]);
        result.push(arr[j]);
        return result;
      }
    }
  }
  return undefined;
}
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 4]));
// %%%%%%%%%%%     WITH MULTIPLE POINTERSSSS    --:
function sumZeroMultiplePointer(arr) {
  // two pointers left and right
  let left = 0;
  let right = arr.length - 1;
   while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      return [arr[left], arr[right]];
    }
  }
   return undefined
//    agr mera kuch return nhi horha hai but still mai clog kr rha hu then undefined dega
}
console.log(sumZeroMultiplePointer([-3, -2, -1, 0,0, 4]));

// COUNTING UNIQUE NUM FROM SORTED ARRAYS-:
function countUniqueValues(arr){
    if(arr.length==0){
        return 0
    }else {
        let left = 0
        let right =1
        let counter =1
        while(right<=arr.length-1){
            if(arr[left] != arr[right]){
                counter++
                left=right
                right=left+1
            }else{
                right++
            }
        }
        return counter
    }
}

// another soln where no need of counter...
function countUniqueValuesTwo(arr){
  if(arr.length==0){
    return 0
  }
  let i=0
  let j=1
  while(j<=arr.length-1){
    if(arr[i]==arr[j]){
      j++
    }else{
      i++
      arr[i]=arr[j]
      j++
    }
  }
  return i+1
}
console.log(countUniqueValuesTwo([1,1,1,1,2,2,3,3,4]))
