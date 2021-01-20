function testEven(n) {
    const number = n / 2;
    if (number % 1 === 0){
        return true;
} else {
        return false;
    }
}


console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.33), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for -4");

console.log('**********************');

console.log(2 / 2 % 0 );