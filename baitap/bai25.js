//Find the frequency of letters inside a string. Return the result as an array of
//arrays. Each subarray has 2 elements: letter and number of occurrences.
function getLetterFrequency(str) {
    let frequency = {};

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (frequency[letter]) {
            frequency[letter]++;
        } else {
            frequency[letter] = 1;
        }
    }

    let result = [];
    for (let letter in frequency) {
        result.push([letter, frequency[letter]]);
    }

    return result;
}

let frequencyArray = getLetterFrequency("Hello World");
document.write(`Tần suất các chữ cái: [${frequencyArray.map(([letter, count]) => `[${letter}, ${count}]`).join(", ")}]<br><br>`);