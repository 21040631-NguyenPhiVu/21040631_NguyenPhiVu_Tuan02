//Create a function that will convert a string in an array containing the ASCII codes of each character
function convertStringToASCIIArray(str) {
    var asciiArray = [];
    for (var i = 0; i < str.length; i++) {
        asciiArray.push(str.charCodeAt(i));
    }
    return asciiArray;
}

let asciiArray = convertStringToASCIIArray("Hello");
document.write(`Chuỗi thành mảng mã ASCII: [${asciiArray.join(", ")}]<br><br>`);