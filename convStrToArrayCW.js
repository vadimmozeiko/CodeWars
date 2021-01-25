function digitize(n) {
    let result = [];
    const numStr = '' + n
     console.log(numStr)
     for (i = 1; i <= numStr.length; i++){
        let num = +numStr[numStr.length - i]
      result.push(num);
     }
   return result
 }

console.log((digitize(35231)),[1,3,2,5,3]);