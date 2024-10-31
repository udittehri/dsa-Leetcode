let counter = 0
var isPowerOfTwo = function (n) {
    let divided = 0
    console.log(n, counter)
    // return
    if (!Number.isInteger(n) || n < 2) {
        return false
    }
    else {
        counter++
        isPowerOfTwo(n / 2)
    }
};

isPowerOfTwo(16)

console.log(counter)