//Create a function to calculate the distance between two points defined by their x, y coordinates
function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return distance;
}

let distance = calculateDistance(3, 4, 7, 1);
document.write(`Khoảng cách giữa hai điểm là: ${distance}<br><br>`);