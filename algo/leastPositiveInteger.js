const mergeSort = (list) => {
    // if the list.length < 2 return
    //break the list into halves L R
    if (list.length === 1) {
        return list
    }

    // divide the arrray in halve

    const middle = Math.floor(list.length / 2)

    // the right array

    const left = list.slice(0, middle)
    const right = list.slice(middle)

    return merge(mergeSort(right), mergeSort(left))
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

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sorted = mergeSort(A)
    let min = parseInt(sorted[0])
    let max = parseInt(sorted[sorted.length - 1])
    let least = 0
    for (let i = 0; i < sorted.length; i++) {
        if (min < 0) {
            min = sorted[i + 1]
            sorted[i] = 0
            continue;
        }
        if (min > 1) {
            min = 1
            least = min
            break;
        } else {
            if (Math.abs(sorted[i] - sorted[i - 1]) > 1) {
                return least = sorted[i - 1] + 1
                break;
            } else {
                if (i == sorted.length - 1) {
                    return least = sorted[i] + 1
                }
            }
        }
    }
    if (least == 0) { return 1 }
    return least
}