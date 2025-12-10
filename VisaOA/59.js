/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let count = 1;
    let left = 0
    let top = 0;
    let right = n - 1
    let bottom = n - 1;
    const mtx = Array.from({ length: n }, () => new Array(n))
    while (left <= right && bottom >= top) {
        for (let i = left; i <= right; i++) {
            mtx[top][i] = count
            count++
        }
        top++
        for (let i = top; i <= bottom; i++) {
            mtx[i][right] = count
            count++
        }
        right--
        for (let i = right; i >= left; i--) {
            mtx[bottom][i] = count
            count++
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            mtx[i][left] = count
            count++
        }
        left++
    }
    return mtx
};
