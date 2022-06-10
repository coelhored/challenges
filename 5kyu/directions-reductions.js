function dirReduc(arr){

    arr = arr.map( x => { // convert to integers to simplify cancelling out of directions
      switch (x) {
          case "NORTH": return 1
          case "SOUTH": return -1
          case "EAST" : return 2
          case "WEST" : return -2
          }
    }) 
      
    let same = false // flag to check if function result is the same as passed argument
    function reduce(currentArray) {
       let  startingLength = currentArray.length // initial and final length will be compared to set flag
       let i = startingLength
        while (i > 0){          // iterating from the end of the array
          if (currentArray[i] + currentArray[i-1] === 0) {
            currentArray.splice(i-1,2)  // if the two consecutive elements cancel each other, remove them
            i -= 2   // increment by 2 because two elements were removed
          } else {
            i -= 1  // increment by 1 because no elements were removed
          }
        }
      if (startingLength == currentArray.length) { // set flag to true if the result is the same as the input 
        same = true
      }
        return currentArray  
      }
    
    while (same == false) {  // keep reducing until the same flag is true
       arr = reduce(arr) 
    }
      
    arr = arr.map( x => {   // convert back to compass directions
      switch (x) {
          case 1 : return "NORTH"
          case -1 : return "SOUTH"
          case 2 : return "EAST" 
          case -2 : return "WEST" 
          }
    }) 
      return arr
    
    }