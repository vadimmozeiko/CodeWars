function solution(string,limit){
    let result = ''
      for (i = 0; i < limit; i++){
        if (limit < string.length){
         result +=string[i]
        }
         else {
          return string;   
      }
    }return `${result}...` 
  }

console.log((solution('Testing String', 3)),'Tes...'); 
console.log((solution('Testing String', 8)), 'Testing ...'); 
console.log((solution('Test', 8)), 'Test'); 

