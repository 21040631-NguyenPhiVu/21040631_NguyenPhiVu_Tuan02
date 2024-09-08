//Calculate Fibonacci(500) with high precision (all digits)
function fibonacci(n) {
    let a = BigInt(0);
    let b = BigInt(1);

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b.toString();
}

const result = fibonacci(500);
document.write(`Fibonacci(500) = ${result}<br><br>`);