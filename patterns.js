// frequency counter--: #######################################################
function same(arr1, arr2) {
  // check if all are numbers by looping over both arrays
  // check for the values from one array till end of the array-:
  //  one loop for array 1 and second for array 2
  // return true/false
  let isValid;
  let i;
  for (const elmnt of arr1) {
    if (elmnt <= 57 && elmnt >= 48) {
      isValid = true;
    } else {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    for (const elmnt of arr2) {
      if (elmnt <= 57 && elmnt >= 48) {
        isValid = true;
      } else {
        isValid = false;
        break;
      }
    }
  }
  let isSame = true;
  for (const num of arr1) {
    let i=0
    if (isSame) {
      for (const num2 of arr2) {
        if (num * num == num2) {
          isSame = true;
          arr2.splice(i,1)
          break;
        } else {
          isSame = false;
        }
        i++
      }
    }else{break}
  }
  return isSame;
}
// error as i am modifying the array on which for of loop lagaya hai..
// console.log(same([1,1,3,1], [9,1,1]));


function sameBasic(arr1,arr2){
    // check if length is same
    // Check if elements exists or not in 2nd array.
    // return true / false
    if(arr1.length !==  arr2.length){
        return false
    }
    for (const elmnt of arr1) {
        let indexOfelmnt=arr2.indexOf(elmnt**2)
        if(indexOfelmnt == -1){
            return false
        }
        arr2.splice(indexOfelmnt,1)

    }
    return true
}
console.log(sameBasic([1,1,3,1], [9,0,1,1]));

// pattern for frequency counter---------:

 function sameNew(arr1,arr2){
    if(arr1.length != arr2.length){
        return false
    }
    let frequencyCount1={}
    let frequencyCount2={}
    for (const element of arr1) {
        frequencyCount1[element] = ( frequencyCount1[element] || 0 ) + 1
    }
    for (const element of arr2) {
        frequencyCount2[element] = ( frequencyCount2[element] || 0 ) + 1
    }
    for (const key in frequencyCount1) {
        let keyInNum=Number(key)
        if (!frequencyCount2[keyInNum**2]){
            return false
        }
        if(frequencyCount2[keyInNum**2] != frequencyCount1[keyInNum]){
            return false
        }
    }
    return true
 }
 
 console.log(sameNew([1,1,3,5], [9,25,1,1]));

//  example 2-:
// checking for anagram.

function checkAnagram(str1,str2){
    // check if strlength is same
    // frequency of all char in an object
    // then compare the object keys and values
    if(str1.length != str2.length){
        return false
    }
    let frequencyCount1={}
    let frequencyCount2={}
    for (const element of str1) {
         frequencyCount1[element]= (frequencyCount1[element] || 0) + 1
    }
    for (const element of str2) {
         frequencyCount2[element]= (frequencyCount2[element] || 0) + 1
    }
    for (const key in frequencyCount1) {
        if (!frequencyCount2[key]) {
            return false
        } else if(frequencyCount1[key]!=frequencyCount2[key]){
            return false
        }
    }
    return true
}
console.log(checkAnagram("ipkalp","lipika"))