console.log("---------------------------------")
console.log("---------------------------------")
console.log("this algo handles caching issues")

const isUnique = (arr) => {
    let cache = {}
    let result = true
    for (let i = 0; i < arr.length; i++) {
        if (cache[arr[i]]) {
            result = false
        } else {
            cache[arr[i]] = true
        }
    }
    return result
}

module.exports = isUnique