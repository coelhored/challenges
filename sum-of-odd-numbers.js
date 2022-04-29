function rowSumOddNumbers(n) {
    //   find the first number of the row
      const firstNum = n + (n-1)**2;
    //   initialize sum with first number in row
      let sum = firstNum;
    //   add the remaining odd digits in the row
      for (i=1;i < n; i++) {
        sum += firstNum + (i*2)
      }
      return sum;
    }