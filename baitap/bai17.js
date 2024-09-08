//Create a function that will receive a bi-dimensional array as argument and a
//number and will extract as a unidimensional array the column specified by the number
function extractColumn(matrix, colIndex) {
    return matrix.map(row => row[colIndex]);
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let columnArray = extractColumn(matrix, 1);
document.write(`Cột được chỉ định: [${columnArray.join(", ")}]<br><br>`);