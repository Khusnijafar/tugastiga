function transpose(matrix) {
    const rows = matrix.length;
    const column = matrix[0].length;
    const index = [];

    for (let i = 0; i < column; i++) {
        index[i] = Array(rows);
    }
    for (let j = 0; j < rows; j++) {
        for (let k = 0; k < column; k++) {
            index[k][j] = matrix[j][k];
        }
    }
    return index;
}

console.log(transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));