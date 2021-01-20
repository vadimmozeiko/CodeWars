function enough(cap, on, wait) {
    let count = 0;
  if (cap < on + wait){
    count = cap - on
    count = wait - count
  } else {
      return 0;
  }
   
  return count;
}

console.log((enough(10, 5, 5)), 0);
console.log((enough(100, 60, 50)), 10);
console.log((enough(20, 5, 5)), 0);