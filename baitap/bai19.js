//Create a function to calculate the sum of all the numbers in a jagged array
//(contains numbers or other arrays of numbers on an unlimited number of levels)
function sumJaggedArray(arr) {
    return arr.reduce((sum, item) => {
        if (Array.isArray(item)) {
            return sum + sumJaggedArray(item);
        }
        return sum + item;
    }, 0);
}
let jaggedArray = [1, [2, [3, 4], 5], 6];
let totalSum = sumJaggedArray(jaggedArray);
document.write(`Tổng của mảng không đều: ${totalSum}<br><br>`);