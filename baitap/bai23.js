//Shuffle an array of strings
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const strings = ["string1", "string2", "string3", "string4", "string5"];
const shuffledStrings = shuffleArray(strings);
document.write(`Mảng sau khi trộn: [${shuffledStrings}]<br><br>`);