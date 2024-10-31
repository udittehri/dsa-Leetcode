function main(num) {

    let numbers = []
    if (num[0] == 0) return 0
    else {
        let start = 0
        let len = num.length
        let lastNumber = 0
        while (start < len) {
            if (start == 0) {
                numbers.push(num[start])
                start++;

                continue;
            }
            else {

                if (num[start] > numbers[numbers.length - 1]) {

                    numbers.push(lastNumber ? String(lastNumber) + String(num[start]) : String(num[start]))
                    lastNumber = 0
                    start++;
                }
                else {
                    lastNumber = num[start]
                    start++;
                }

            }
        }

    }
    console.log(numbers)
    return numbers.length
}

console.log("RETURNING ", main("345"))
//Failed Case  9999999999999