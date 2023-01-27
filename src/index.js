// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix)
        for (let i = 0; i < matrix.length; i++) {
            getValArr(matrix[i], arr, i % 2 == 1);
        }
    return arr;
};
