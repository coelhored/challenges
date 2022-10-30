function diamond(n){
    if (n % 2 == 0 || n < 0) {
      return null;
    }
    let diamond = ""
    
    function createLine(integer) {
      return `${" ".repeat((n-integer)/2)}${"*".repeat(integer)}\n`
    }
    
    for (let i = 1; i <= n; i+=2) {
      diamond += createLine(i)
    }
    for (let i = n-2; i>=1; i-=2) {
      diamond += createLine(i)
    }
    
    return diamond
  }