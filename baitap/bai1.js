//Create a function that will receive an array of numbers as argument 
//and will return a new array with distinct elements
function getDistinctElements(numbers) {
    return [...new Set(numbers)];
}

const arr = [1, 1, 1, 4, 4, 6, 7, 7, 7, 10];
document.write('Old array: ' + arr + '<br>');
document.write('New array with distinct elements: ' + getDistinctElements(arr)); 