//Create a function to return the longest word in a string
function findLongestWord(str) {
    const words = str.split(" ");

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

// Example usage
const sentence = "I love programming";
const longestWord = findLongestWord(sentence);
document.write(`Từ dài nhất trong chuỗi: ${longestWord}<br><br>`);