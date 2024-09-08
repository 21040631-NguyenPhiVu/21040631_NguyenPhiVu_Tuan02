//Deep copy a jagged array with numbers or other arrays in a new array
function deepCopyJaggedArray(arr) {
    return arr.map(item => {
        if (Array.isArray(item)) {
            return deepCopyJaggedArray(item);
        }
        return item;
    });
}
let copiedArray = deepCopyJaggedArray(jaggedArray);
document.write(`Mảng sao chép sâu: [${JSON.stringify(copiedArray)}]<br><br>`);