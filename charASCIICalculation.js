function calc(x){
    let result = 0
    let number = ''
    let total1 = 0
    let total2 = 0
    for (let num of x){
    number += num.charCodeAt(x)
    }
      let replace = number.replace(/7/g, "1");
      let string = replace.toString()
  
  for (let n of number){
    total1 += parseInt(n)
  }
    for (let m of string){
    total2 += parseInt(m)
  }
   
    return total1 - total2; 

}

console.log((calc('ABC')), 6)
console.log((calc('abcdef')), 6)
console.log((calc('ifkhchlhfd')), 6)
console.log((calc('aaaaaddddr')), 30)
console.log((calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')), 96)