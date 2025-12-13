function answer(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= 22; j++) {
      const comp = 2 ** j - nums[i];
      if (map.get(comp) != undefined && map.get(comp) >= i) {
        // console.log(`${nums[i]} and ${comp}`)
        count++;
      }
    }
  }
  console.log(count);
  //   count
}
const nums = [1];
answer(nums);
