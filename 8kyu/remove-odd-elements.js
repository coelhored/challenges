function removeEveryOther(arr){
    result = arr.filter((element, i) => {
     return !(i % 2) 
    })
    return result;
  }