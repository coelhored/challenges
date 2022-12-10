function capitalize(s){
    let evens = ""
    let odds = ""
    
   const array = Array.from(s)
   array.forEach((element, index) => {
     if (index % 2 == 0) {
       evens += element.toUpperCase()
       odds += element
     } else {
       evens += element
       odds += element.toUpperCase()
     }  
   })
    
   return [evens, odds]   
  };