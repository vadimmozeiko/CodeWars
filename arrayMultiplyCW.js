function findDifference(a, b) {
    let aResult = 1;
    let bResult = 1;
  
  for (let i = 0; i < a.length; i++) { 
        aResult = aResult * a[i]
        }
  for (let i = 0; i < b.length; i++) { 
        bResult = bResult * b[i]
        }
  if (aResult - bResult < 0){
    return bResult - aResult
  }  else {
    return aResult - bResult
  }
  
}

console.log((findDifference([3, 2, 5], [1, 4, 4])), 14);
console.log((findDifference([9, 7, 2], [5, 2, 2])), 106);
console.log((findDifference([11, 2, 5], [1, 10, 8])), 30);
console.log((findDifference([4, 4, 7], [3, 9, 3])), 31);
console.log((findDifference([15, 20, 25], [10, 30, 25])), 0);