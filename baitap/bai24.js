//Create a function that will receive n as argument and return an array of n
//random numbers from 1 to n. The numbers should be unique inside the array.
function generateRandomArray(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    for (let i = 0; i < n; i++) {
        let j = Math.floor(Math.random() * n);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

const n = 10;
const randomArray = generateRandomArray(n);
document.write(`Mảng số ngẫu nhiên: [${randomArray}]<br><br>`);