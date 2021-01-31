function whatCentury(year)
{
    let result = 0;
    for (let i = 0; i < year; i++ ){
        if (i % 100 === 0){
            result++
        }
    }

        result = result.toString()

      if (result[1] === '1' && result > 20){
      return result + 'st'
      } 
      if (result[1] === '2' && result > 20){
      return result + 'nd'
      }
      if (result[1] === '3' && result > 20){
      return result + 'rd'
      } else {
      return result + 'th'
      }
  };

console.log((whatCentury("1999")), "20th");
console.log((whatCentury("2011")), "21st");
console.log((whatCentury("2154")), "22nd");
console.log((whatCentury("2259")), "23rd");
console.log((whatCentury("1234")), "13th");
console.log((whatCentury("1023")), "11th");
console.log((whatCentury("2000")), "20th");