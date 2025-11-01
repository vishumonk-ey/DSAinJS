process.stdin.resume();
process.stdin.setEncoding("utf8");

let input = "";

process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  input = input.trim().split(/\s+/);
  main(input);
});
function main(input) {
  const t = input[0];
  let index = 1;
  for (let i = 0; i < t; i++) {
    const n = input[index++];
    const inputArr = [];
    const arrIndex = [];
    for (let j = 0; j < n; j++) {
      inputArr.push(parseInt(input[index++]));
      arrIndex.push(j);
    }
    const resultArr = new Array(n);
    arrIndex.sort((a, b) => inputArr[a] - inputArr[b]); //increasing order
    for (let j = 0; j < n; j++) {
      const left = j - 1;
      const right = j + 1;
      if (left < 0 || right >= n) {
        resultArr[arrIndex[j]] = -1;
      } else {
        const leftEl = inputArr[arrIndex[left]];
        const rightEl = inputArr[arrIndex[right]];
        const currEl = inputArr[arrIndex[j]];
        const totalX = (rightEl - leftEl) / 2;
        resultArr[arrIndex[j]] = totalX;
      }
    }
    console.log(resultArr.join(" "));
  }
}
