//Find the maximum number in a jagged array of numbers or array of numbers
function findMaxInJaggedArray(arr) {
    return arr.reduce((max, item) => {
        if (Array.isArray(item)) {
            return Math.max(max, findMaxInJaggedArray(item));
        }
        return Math.max(max, item);
    }, -Infinity);
}

let maxNumber = findMaxInJaggedArray(jaggedArray);
document.write(`Số lớn nhất trong mảng không đều: ${maxNumber}<br><br>`);