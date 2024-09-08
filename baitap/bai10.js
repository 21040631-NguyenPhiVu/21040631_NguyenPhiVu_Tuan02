//Create a function that converts a string to an array of characters
function stringToArray(str) {
    return Array.from(str);
}

let charArray = stringToArray("Hello");
document.write(`Chuỗi thành mảng ký tự: [${charArray.join(", ")}]<br><br>`);