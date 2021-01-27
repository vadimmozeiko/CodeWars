function iqTest(numbers){
    numbers = numbers.split(' ')
    
    var evens = []
    var odds = []
    
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] & 1) {
        odds.push(i + 1)
      } else {
        evens.push(i + 1)
      }
    }
    
    return evens.length === 1 ? evens[0] : odds[0]
  }

Test.assertEquals(iqTest("2 4 7 8 10"),3);
Test.assertEquals(iqTest("1 2 2"), 1);
