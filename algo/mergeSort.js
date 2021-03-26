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
let count = 0
const merge = (left, right) => {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // console.log(++count)
    while (leftIndex < left.length && rightIndex < right.length) {

        if (left[leftIndex] == right[rightIndex]) {
            leftIndex++
        }
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex])
            leftIndex++
        } else {
            sortedArray.push(right[rightIndex])
            rightIndex++
        }
    }
    console.log(right.slice(rightIndex))
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

module.exports = mergeSort