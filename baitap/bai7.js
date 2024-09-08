//Calculate the sum of numbers received in a comma delimited string
function sumCommaDelimitedString(str) {
    return str.split(',').map(Number).reduce((acc, curr) => acc + curr, 0);
}
let commaSum = sumCommaDelimitedString("1,2,3,4,5");
document.write(`Tổng của chuỗi phân cách bằng dấu phẩy: ${commaSum}<br><br>`);