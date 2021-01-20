function countSheeps(arrayOfSheep) {
    let count = 0;
    const length = arrayOfSheep.length

    for (i = 0; i < length; i++){
        if (arrayOfSheep[i] === true){
            count++
        }
    } 
        return count;
} 


  const array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, true,  false ,
    true,  true,  true,  true ,
    false, false, true,  true ];


console.log((countSheeps(array1)),"There are 17 sheeps in total");