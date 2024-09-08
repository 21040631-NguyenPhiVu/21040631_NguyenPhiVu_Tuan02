//Create a function that returns an array with words inside a text
function getWords(text) {
    return text.split(" ");
}
let words = getWords("I am a developer");
document.write(`Mảng chứa các từ trong đoạn văn: ${words}<br><br>`);