function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}
// the given below isnt the correct insertion sort as it is doing multiple swaps while usme bass compare krte hain aur har ek ko upar shift krte hain .
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         swap(arr, j, j - 1);
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// }
 function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let j=i-1
    let currentVal= arr[i]
    while(arr[j]>currentVal && j>=0){
      arr[j+1]=arr[j]
      j--
    }
    if(j+1!=i){
        arr[j+1]=currentVal
    }
  }
  return arr
 }

//  best for example 
// -for almost sorted array
// -agar kuch aisa hai jisme har baari ek naya number push krdiya jaa rha hai aur mujhe sort karna hai then this because array ka starting vala portion sorted rehta hhai
console.log( insertionSort([2,3,1,4,1]))
