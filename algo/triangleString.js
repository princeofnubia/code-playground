const triangularNumber = n => (n * (n + 1)) / 2;
const solution = (input) => {
    const countOfA = (input.match(/a/g) || []).length;
    // Cannot be split evenly among 3 parts:
    if (countOfA % 3 !== 0) {

        return 0;
    }
    if (countOfA === 0) {
        return Math.max(triangularNumber(input.length - 2), 0);
    }
    // Remove the leading characters so that only the middle segment is left:
    let middleSection = input;
    for (let i = 0; i < countOfA / 3; i++) {
        middleSection = middleSection.slice(middleSection.indexOf('a') + 1);
    }
    // Do the same for the trailing characters:
    for (let i = 0; i < countOfA / 3; i++) {
        middleSection = middleSection.slice(0, middleSection.lastIndexOf('a'));
    }
    // Now identify the number of characters leading up to the first `a`
    // and the number of characters from the last `a` to the end:
    const leftSize = middleSection.indexOf('a');
    const rightSize = middleSection.length - middleSection.lastIndexOf('a') - 1;
    return (leftSize + 1) * (rightSize + 1);
};