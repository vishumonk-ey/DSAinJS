/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let max=arr[i]
    let min=arr[i]
    for(let j=i;j<nums.length;j++){
        min=Math.min(min,arr[j])
        max=Math.max(max,arr[j])
        let range=max-min
        sum+=range
    }
  }
  return sum;
};
