/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    /*    let biggestWealth = 0
       let wealth
       for (let i = 0; i < accounts.length; i++) {
           wealth = 0
           for (let j = 0; j < accounts[i].length; j++) {
               wealth += accounts[i][j]
           }
           if (wealth > biggestWealth) {biggestWealth = wealth}
       } */
   
     /*   let sums  = accounts.map (x => {
           return x.reduce((a,b) => a+b)
       })
       return Math.max(...sums) */
   
       let biggestWealth = 0
       for (let i = 0; i < accounts.length; i++) {
            biggestWealth = Math.max(biggestWealth, accounts[i].reduce((a,b )=> a + b, 0))
       }
       return biggestWealth
   };