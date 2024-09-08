//Print the distance between the first 100 prime numbers
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(count) {
    const primes = [];
    let num = 2;
    while (primes.length < count) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function calculateDistance(primes) {
    const distances = [];
    for (let i = 0; i < primes.length - 1; i++) {
        const distance = primes[i + 1] - primes[i];
        distances.push(distance);
    }
    return distances;
}

const primeNumbers = getPrimeNumbers(100);
const distances = calculateDistance(primeNumbers);
document.write('The distance between the first 100 prime numbers is: ' + distances.join(', ') + '</br></br>');