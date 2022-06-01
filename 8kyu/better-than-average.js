function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    const sum = classPoints.reduce((a,b) => a + b, 0);
    const average = sum /classPoints.length;
    return yourPoints > average;
   }