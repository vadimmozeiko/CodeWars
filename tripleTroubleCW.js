function tripleTrouble(one, two, three){
    const size = one.length;
    let result = '';
    for (i = 0 ; i < size; i++) {
        result += one[i] + two[i] + three[i] 
    }
    return result;
}



console.log((tripleTrouble("this","test","lock")), "ttlheoiscstk");
console.log((tripleTrouble("aa","bb","cc")), "abcabc");
console.log((tripleTrouble("Bm", "aa", "tn")), "Batman");
console.log((tripleTrouble("LLh","euo","xtr")), "LexLuthor");