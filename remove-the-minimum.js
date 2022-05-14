function removeSmallest(numbers) {
    //   find min value
    //   remove first instance of that value
      let index = numbers.indexOf(Math.min(...numbers))
      return numbers.filter((x,i) => i !== index)
    }