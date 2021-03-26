let sum = (arr) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer)
}

const equillibrum = (arr) => {
    if (arr.length < 2) return Math.abs(arr[0] - arr[1])
    let leftweight = arr.slice(0, 1)
    console.log(leftweight)
    let rightWeight = arr.slice(1)
    console.log(rightWeight)
    let currentLeftSum = sum(leftweight)
    console.log(currentLeftSum)
    let currentRightSum = sum(rightWeight)
    console.log(currentRightSum)
    let leastDiff = Math.abs(currentLeftSum - currentRightSum)
    for (let i = 0; i < rightWeight.length; i++) {
        currentLeftSum = currentLeftSum + rightWeight[i]
        currentRightSum = currentRightSum - rightWeight[i]
        let newDiff = Math.abs(currentLeftSum - currentRightSum)
        console.log(currentLeftSum)
        console.log(currentRightSum)
        if (newDiff <= leastDiff) {
            leastDiff = newDiff
        }
    }

    return leastDiff
}

module.exports = equillibrum