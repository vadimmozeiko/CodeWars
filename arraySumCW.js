function positiveSum(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let result = 0;
    const length = arr.length

    for (let i = 0; i < length; i++) { 
     if (arr[i] > 0){
        result += arr[i];
        }
    };
    return result;
};

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);