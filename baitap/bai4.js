//Create a function that will add two positive numbers of indefinite size. The numbers
//are received as strings and the result should be also provided as string.
function addLargeNumbers(num1, num2) {
    let carry = 0;
    let result = '';
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    const maxLength = Math.max(num1.length, num2.length);

    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(num1[i] || '0');
        let digit2 = parseInt(num2[i] || '0');
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    if (carry) result = carry + result;

    return result;
}
let largeSum = addLargeNumbers("123456789123456789", "987654321987654321");
document.write(`Tổng của hai số lớn: ${largeSum}<br><br>`);