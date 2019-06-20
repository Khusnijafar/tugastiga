function multiplyMatrix(matrixA, matrixB) {
    let result = new Array(matrixA.length);

    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(matrixB[i].length);
        for (let j = 0; j < matrixA.length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < matrixB.length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return result;
}

console.log(multiplyMatrix([
    [3, 4],
    [1, 2]
], [
    [7, 5],
    [6, 4]
]));