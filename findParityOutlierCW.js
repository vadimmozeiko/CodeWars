function findOutlier(integers){
    let result1 = [];
    let result2 = [];
    
   
       for (i = 0; i < integers.length; i++){
           if (integers[i] % 2 === 0){          
            result1.push(integers[i])          
      } else if (integers[i] % 1 === 0){     
            result2.push(integers[i])        
      }
    }
       if (result1.length < result2.length){   
          return result1[0]                   
       } else {
          return result2[0]      
       }
         
  } 


  console.log((findOutlier([0, 1, 2])), 1);
  console.log((findOutlier([1, 2, 3])), 2);
  console.log((findOutlier([2,6,8,10,3])), 3);
  console.log((findOutlier([0,0,3,0,0])), 3);
  console.log((findOutlier([1,1,0,1,1])), 0);

