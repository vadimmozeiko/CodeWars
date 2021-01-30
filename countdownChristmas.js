function daysUntilChristmas(days) {
    let currentYear = days.getFullYear();
    let targetDate = new Date (currentYear,11,25)
    let result = (targetDate - days) / 1000 / 60 / 60 / 24

        if (result < 0){
            currentYear++
            targetDate = new Date (currentYear,11,25)
            result = (targetDate - days) / 1000 / 60 / 60 / 24
        }
    
    return result 
} 



console.log((daysUntilChristmas(new Date(2016,11,9))), 16);
console.log((daysUntilChristmas(new Date(2016,11,8))), 17);
console.log((daysUntilChristmas(new Date(1996,11,7))), 18);
console.log((daysUntilChristmas(new Date(2015,1,23))), 305);
console.log((daysUntilChristmas(new Date(2001,6,11))), 167);
console.log((daysUntilChristmas(new Date(2000,11,9))), 16);
console.log((daysUntilChristmas(new Date(1978,2,18))), 282);
console.log((daysUntilChristmas(new Date(2016,11,25))), 0);
console.log((daysUntilChristmas(new Date(2016,11,26))), 364);
console.log((daysUntilChristmas(new Date(2015,11,26))), 365);