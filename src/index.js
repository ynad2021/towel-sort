// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!Array.isArray(matrix) || matrix.length === 0) return result;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnIdx =
                i % 2 === 0
                    ? result.push(matrix[i][j])
                    : result.push(matrix[i][matrix[i].length - j - 1]);
        }
    }
    return result;
};
