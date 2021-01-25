function sumEvenNumbers(input) {
  
    let result = 0;
    
     for (i = 0; i < input.length; i++){
       let number = input[i] / 2;
       if (number % 1 === 0) {
          result += input[i]
    } 
  }
 
  return result
}


Test.assertEquals(
    sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    30,
    "Simple integers input."
  );