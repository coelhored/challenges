function deleteNth(arr,n){
    // return new list which contains each  unique element only n times 
  //   make object with item : count as key value pair
    const count = {}
    const result = []
    let current 
    for ( let i = 0; i < arr.length; i++) {
      current = arr[i] //the current item in the array
      count[current] ? count[current] +=1 : count[current] = 1 //add item to the count object or increment count by 1
      if (count[current] <= n) {
       result.push(current) // push it to the result array if the items count is less than n
      }
    }
    return result 
  }

//   better way, using filter

function deleteNth(arr,n){
    const count = {}
    return arr.filter( x => {
      count[x] = (count[x]||0) + 1
      return count[x] <= n
    })
    }
