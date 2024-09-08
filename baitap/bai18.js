//Create a function that will convert a string containing a binary number into a number
function binaryToNumber(binaryString) {
    return parseInt(binaryString, 2);
}

let number = binaryToNumber("1101");
document.write(`Chuyển chuỗi nhị phân thành số: ${number}<br><br>`);