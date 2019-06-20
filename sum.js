let sum = (arr) => arr.reduce((a, b) => a + (+b), 0);

let singleDigit = (arr) => {
    while (arr.length != 1) {
        let sums = sum(arr);
        arr = String(sums).split("");
    }
    return arr[0];
}

console.log(singleDigit([123, 9, 27]));