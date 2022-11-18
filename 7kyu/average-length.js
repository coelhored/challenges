function averageLength(arr) { 
    // find sum of all the element lengths
     const sum = arr.reduce( (a,b) => a + b.length, 0)
     // find average value
     const average = Math.round(sum/arr.length)
   // create a new array where each element repeats the character the average number of times
    return arr.map(x => x[0].repeat(average)) 
   }