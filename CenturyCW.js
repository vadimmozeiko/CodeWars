function century(year) {
    let result = 0;
    for (let i = 0; i < year; i++ ){
        if (i % 100 === 0){
            result++
        }
    }
    return result
  };


console.log((century(1705)), 18);
console.log((century(1900)), 19);
console.log((century(1601)), 17);
console.log((century(2000)), 20);
console.log((century(89)), 1);
