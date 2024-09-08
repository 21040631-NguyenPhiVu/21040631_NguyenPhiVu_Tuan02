//Calculate the sum of first 100 prime numbers and return them in an array
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfFirst100Primes() {
    let primes = [];
    let sum = 0;
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
            sum += num;
        }
        num++;
    }
    return [sum, primes];
}

const [sum, primes] = sumOfFirst100Primes();
document.write("</br></br>Sum of the first 100 prime numbers:", sum + '</br>');
document.write("The first 100 prime numbers are: ", primes.join(', ') + '</br></br>');