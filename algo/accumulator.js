const accumulator = (arrayList, joinstring) => {
    const recurse = (index, resultSofar) => {
        resultSofar += arrayList[index]
        if (index === arrayList.length - 1) {
            return resultSofar
        } else {
            return recurse(index + 1, resultSofar + joinstring)
        }
    }
    return recurse(0, "")
}

module.exports = accumulator