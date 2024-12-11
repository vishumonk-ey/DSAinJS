/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  //sum of mins
  let psse = findPSSE(nums);
  let nse = findNSE(nums);
  let min = 0;
  for (let i = 0; i < nums.length; i++) {
    let left = i - psse[i];
    let right = nse[i] - i;
    let val = left * right * nums[i];
    min += val;
  }
  // sum of max
  let plee = findPLEE(nums);
  let nle = findNLE(nums);
  let MAX = 0;
  for (let i = 0; i < nums.length; i++) {
    let left = i - plee[i];
    let right = nle[i] - i;
    let val = left * right * nums[i];
    MAX += val;
  }
  return MAX-min
};
function findPSSE(arr) {
  let stack = [];
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      resultArr.push(-1);
    } else {
      resultArr.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  return resultArr;
}

function findNSE(arr) {
  let stack = [];
  let resultArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      resultArr.push(arr.length);
    } else {
      resultArr.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  reverse(resultArr);
  return resultArr;
}

function reverse(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

function findPLEE(arr) {
  let stack = [];
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      resultArr.push(-1);
    } else {
      resultArr.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  return resultArr
}
function findNLE(arr) {
  let stack = [];
  let resultArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while(stack.length!=0 && arr[stack[stack.length-1]]<=arr[i]){
        stack.pop()
    }
    if(stack.length==0){
        resultArr.push(arr.length)
    }else{
        resultArr.push(stack[stack.length-1])
    }
    stack.push(i)
  }
  reverse(resultArr)
  return resultArr
}

