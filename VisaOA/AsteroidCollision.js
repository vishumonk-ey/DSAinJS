/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
//  var asteroidCollision = function (asteroids) {
//      let stack=[]
//      let resultArr=[]
//     for (let i = 0; i < asteroids.length; i++) {
//     if(asteroids[i]>0){
//         stack.push(asteroids[i])
//     }else{
//         while(stack.length!=0 && stack[stack.length-1]<-asteroids[i]){
//             stack.pop()
//         }
//         if(stack.length==0){
//             resultArr.push(asteroids[i])
//         }else if(stack[stack.length-1]==-asteroids[i] ){
//             stack.pop()
//         }
//     }

//   }
//   for(let i=0 ;i<stack.length;i++){
//     resultArr.push(stack[i]);
//   }
//   return resultArr
// };

var asteroidCollision = function(asteroids) {
    let result = []
    const stack  = []
    for ( let i = 0 ; i < asteroids.length ; i++){
        if(arr[i] > 0){
            stack.push(asteroids[i])
        }else if ( arr[i] < 0 && stack.length == 0){
            result.push(arr[i])
        }else{
            while(stack.length != 0){
                if ( Math.abs(arr[i]) > stack[stack.length - 1]){
                    stack.pop()
                    if(stack.length == 0){
                        result.push(arr[i])
                    }
                }else if (Math.abs(arr[i]) == stack[stack.length - 1]){
                    stack.pop()
                    break;
                }else{
                    break
                }
            }
        }
    }
    return [...result , ...stack]  
};