function palindrome(arr) {
    let regex = /[\W_]/g;
    let trimArr = arr.toLowerCase().replace(regex, "");
    let opposite = trimArr.split("").reverse("").join("");

    if (opposite === trimArr) {
        return true;
    } else {
        return false;
    }
};

console.log(palindrome("nurses run"));
console.log(palindrome("makan"));