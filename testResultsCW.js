function betterThanAverage(classPoints, yourPoints) {
    let average = 0;
    length = classPoints.length
    for (i = 0; i < length; i++){
       average += classPoints[i] / length
    }
    if (average < yourPoints) {
        return true
       }

    return false
} 
  

console.log((betterThanAverage([2, 3], 5)), true);
console.log((betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)), true);
console.log((betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)), false);