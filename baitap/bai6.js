//Create a function that will capitalize the first letter of each word in a text
function capitalizeWords(text) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
let capitalizedText = capitalizeWords("I am a developer");
document.write(`Đoạn văn viết hoa: ${capitalizedText}<br><br>`);