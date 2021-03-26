function convertToBinary(N) {
    let totalValue = ''
    let tracker = []
    let index = 0

    function binaryRecurse(N) {
        if (N == 1) {
            totalValue = 1 + totalValue
            if ((tracker.length - 1) in tracker) {
                return tracker
            } else {
                tracker.push(0)
                return tracker
            }

        } else {
            let remainder = N % 2
            let quotient = Math.floor(N / 2)
            if ((remainder) == 0) {
                totalValue = 0 + totalValue
                if ((tracker.length - 1) in tracker) {
                    tracker[tracker.length - 1]++
                }
            } else {
                // if tracker existed before this, start a new tracker
                tracker.push(0)
                totalValue = 1 + totalValue
            }
            return binaryRecurse(quotient)
        }
    }

    return binaryRecurse(N)
}

const merge = (left, right) => {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // console.log(++count)
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex])
            leftIndex++
        } else {
            sortedArray.push(right[rightIndex])
            rightIndex++
        }
    }
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function MergeSort(arr) {
    if (arr.length == 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(MergeSort(left), MergeSort(right))
}

function getLargestBinaryGap(N) {
    let m = convertToBinary(N)
    let result = MergeSort(m)
    return result.pop()
}

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (N < 4) {
        return 0
    } else {
        return getLargestBinaryGap(N)
    }

}

module.exports = solution