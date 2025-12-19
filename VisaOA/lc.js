function answer(arr) {
  const map = new Map();
  let sp = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i][0], arr[i][1]);
    // min = Math.min(min , arr[i][0])
  }
  const result = [];
  let child = sp;
  //   let parent
  while (child != null) {
    result.push(child);
    const parent = map.get(child);
    // result.push(parent)
    child = parent;
  }
  return result;
}
const Arr = [
  [4, 3],
  [5, 7],
  [3, 8],
  [8, 5],
];
console.log(answer(Arr));
