const linearSearch = (list, item) => {
    let result = -1
    list.forEach((val, index) => {
        if (val === item) {
            return result = index
        }
    })
    return result
}

module.exports = linearSearch