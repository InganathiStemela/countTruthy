const inputArray = [0, null, undefined, '', 2, 3];
console.log(countTruthy(inputArray));

function countTruthy(inputArray) {
    let count = 0;

    for (let item of inputArray) {
        if (item)
            count++;
    }

    return count;
}