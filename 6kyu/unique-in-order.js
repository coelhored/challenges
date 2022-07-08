var uniqueInOrder=function(iterable){
    // split into array
    //make new array with .map where x not equal to array[index +1]
    console.log(iterable)
    if (typeof iterable == "string") {
    iterable = iterable.split('')
    }
     return iterable.filter((el, index, arr) => el !== arr[index+1])
  }