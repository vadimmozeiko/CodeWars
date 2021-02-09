function incrementString (x) {
    const split = x.split(/(\d+)/)
    console.log(split);
    const numberOnly = split.map(Number)
    console.log(numberOnly);
    let number = 0
    
    for(const y of numberOnly){
        const int = parseInt(y)
    if(!isNaN(int)){
      number = int + 1
       return `${split[0]}${number}` 
      }
      else{
        return `${split[0]}${number+1}` 
      }
    }
  }



  console.log((incrementString("foobar000")), "foobar001");
  console.log((incrementString("foo")), "foo1");
  console.log((incrementString("foobar001")), "foobar002");
  console.log((incrementString("foobar99")), "foobar100");
  console.log((incrementString("foobar099")), "foobar100");
  console.log((incrementString("")), "1");