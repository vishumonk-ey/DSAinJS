/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let count = 0
    let farmostPt = 0
    let length = nums.length - 1
    let i = 0
    while( length != 0) {
        farmostPt = Math.max(farmostPt , i + nums[i])
        if ( farmostPt >= length){
            count++
            length = i
            i = 0
            farmostPt = 0
        }
        i++
    }
    return count
};/**
* @param {number[]} nums
* @return {number}
*/
var jump = function(nums) {
   let count = 0
   let farmostPt = 0
   let length = nums.length - 1
   let i = 0
   while( length != 0) {
       farmostPt = Math.max(farmostPt , i + nums[i])
       if ( farmostPt >= length){
           count++
           length = i
           i = 0
           farmostPt = 0
       }else{
           i++
       }
   }
   return count
};