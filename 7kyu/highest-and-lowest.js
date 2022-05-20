function highAndLow(numbers){
    const arr = numbers.split(" ").map(item => Number(item)).sort((a,b) => a-b);
    console.log(arr)
    return `${arr[arr.length-1]} ${arr[0]}`
  }

  // better
  
  function highAndLow(numbers){
    numbers = numbers.split(" ");
      return `${Math.max(...numbers)} ${Math.min(...numbers)}`
    }