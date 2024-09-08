//Calculate 70! with high precision (all digits)
let factorial = BigInt(1);
for (let i = 2; i <= 70; i++) {
    factorial *= BigInt(i);
}

document.write(`70! = ${factorial}`);