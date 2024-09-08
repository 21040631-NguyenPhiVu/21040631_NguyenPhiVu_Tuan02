//Create a function to convert a CSV text to a “bi-dimensional” array
function csvToArray(csv) {
    return csv.split('\n').map(row => row.split(','));
}
let csvArray = csvToArray("a,b,c\n1,2,3\n4,5,6");
document.write(`Chuỗi CSV thành mảng: [<br>${csvArray.map(row => `[${row.join(", ")}]`).join("<br>")}]<br><br>`);