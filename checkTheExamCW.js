function checkExam(array1, array2) {
    let result = 0;
       for (i = 0; i < array1.length; i++) {
          if (array1[i] === array2[i]){
            result += 4
          } else if (array2[i] === '') {
              result += 0
          } else {
              result -= 1
          }
      } if (result < 0){
        return 0
      } else {
    return result
      }
  
  }

  console.log((checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])), 6);
  console.log((checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])), 7);
  console.log((checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])), 16);
  console.log((checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])), 0);