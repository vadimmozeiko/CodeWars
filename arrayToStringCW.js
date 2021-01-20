function createPhoneNumber(numbers) {
    let arrTotext = ''; 
    const space = ' '
    const hyphen = '-' 
    const length = numbers.length;
    
    for (i = 0; i < length; i++) {
        const num = numbers[i]
        if (num < 0 || num >9) {
            return 'Enter the numbers between 0-9 '
        } else {
            arrTotext += num
        }
      
    } 
    return `(${arrTotext[0]}${arrTotext[1]}${arrTotext[2]})${space}${arrTotext[3]}${arrTotext[4]}${arrTotext[5]}${hyphen}${arrTotext[6]}${arrTotext[7]}${arrTotext[8]}${arrTotext[9]}`;
}   

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");

