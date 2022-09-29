function saleHotdogs(n){
    const price = n < 5 ? 100 : n < 10 ? 95 : 90;
    return price*n;
  }