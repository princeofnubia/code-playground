const memoization = (cb) => {
    const cache = {}

    return (n) => {
        if (cache(n)) {
            return cache(n)
        } else {
            cache[n] = cb(n)
            return cache[n]
        }
    }
}