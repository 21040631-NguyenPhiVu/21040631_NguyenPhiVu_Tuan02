//Create a function that will return the number of words in a text
function countWords(text) {
    const words = text.split(" ");
    return words.length;
}

const text = "I am a developer";
const wordCount = countWords(text);
document.write(`Số từ trong ${text}: ${wordCount}<br><br>`);