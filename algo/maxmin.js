const maxmin = (arr) => {
    let max = min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
        if (max < arr[i]) {
            max = arr[i]
        }
    }

    return {
        max,
        min
    }

}

module.exports = maxmin