/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  let resultArr = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      while (stack.length != 0 && stack[stack.length - 1] < -asteroids[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        resultArr.push(asteroids[i]);
      } else if (stack[stack.length - 1] == -asteroids[i]) {
        stack.pop();
      }
    }
  }
  console.log(stack[stack.length - 1]);
  console.log(resultArr[resultArr.length - 1]);

  for (let i = 0; i < stack.length; i++) {
    resultArr.push(stack[i]);
  }
  return resultArr;
};

asteroidCollision([8, -8]);
