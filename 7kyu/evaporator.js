function evaporator(content, evap_per_day, threshold){ 
    let days = 0;
    const evapPercentage = 1-(evap_per_day/100);
    
     function oneDay(remaining) {
       if(remaining < threshold) {
         return;
       }
       days++;
       oneDay(remaining*evapPercentage);
     }
     oneDay(100);
   
   return days;
   }