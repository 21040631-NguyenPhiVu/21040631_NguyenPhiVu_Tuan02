//Create a function that will convert an array containing ASCII codes in a string
function convertASCIIArrayToString(asciiArray) {
    return asciiArray.map(code => String.fromCharCode(code)).join('');
}

let str = convertASCIIArrayToString([72, 101, 108, 108, 111]);
document.write(`Mảng mã ASCII thành chuỗi: ${str}<br><br>`);