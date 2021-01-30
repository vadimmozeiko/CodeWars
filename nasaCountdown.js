function countdown (millisecs) {
    let negative = millisecs
    if (negative < 0){
     negative = Math.abs(millisecs * -1)
    }
    const seconds = Math.round(negative / 1000);
    const hours = Math.floor(seconds / 60 / 60);   
    let unusedSeconds = seconds - hours * 60 * 60;                                      
    const minutes = Math.floor(unusedSeconds / 60);
    unusedSeconds -= minutes * 60;
          
    if (millisecs < 0){
    return `-${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${unusedSeconds.toString().padStart(2, "0")}`
  } else {
    return `+${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${unusedSeconds.toString().padStart(2, "0")}`
  }


 }


 console.log((countdown(-154800000)), '-43:00:00');
 console.log((countdown(0)), '+00:00:00');
 console.log((countdown(61000)), '+00:01:01');
 console.log((countdown(360000000)), '+100:00:00');
  