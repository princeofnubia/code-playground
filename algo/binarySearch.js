const binarySearch = (list, item) => {
    let min = 0
    let max = list.length - 1
    let guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2)
        if (list[guess] === item) {
            return guess
        } else {
            if (list[guess] < item) {
                min = guess + 1
            } else {
                max = guess - 1
            }
        }
    }

    return -1
}

module.exports = binarySearch