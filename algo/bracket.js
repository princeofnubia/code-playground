function solution(S) {
    // write your code in Java
    let left = {
        '{': 1,
        "[": 2,
        "(": 3
    }
    let right = {
        "}": 1,
        "]": 2,
        ")": 3
    }

    let stack = []

    if ((S.length % 2) == 1) return 0
    let i = 0
    while (i < S.length) {
        if (left[S[i]]) {
            stack.push(left[S[i]])
        } else {
            if (stack.pop() !== right[S[i]]) {
                return 0
            }
        }
        i++
    }
    return stack.length == 0 ? 1 : 0

}