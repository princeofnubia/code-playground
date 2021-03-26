const facWrapper = (n) => {
    const recurse = (n) => {
        return (n == 0) ? 1 : recurse(n - 1) * n
    }
    return recurse(n)
}

const memoize = (fn) => {
        let cache = {}
        return (...args) => {
            let n = args[0]
            if (n in cache) {
                return cache[n]
            } else {
                cache[n] = fn(n)
                return cache[n]
            }
        }
    }
    // we are passing the factorial as a callback function in this memoize
const mem = memoize((n) => {
    if (n == 0) {
        return 1
    } else {
        return mem(n - 1) * n
    }
})


module.exports = facWrapper