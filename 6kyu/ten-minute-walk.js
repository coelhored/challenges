function isValidWalk(walk) {

  
    const directionsCount = {}
    
    walk.forEach(x => { //count number of each sign
      directionsCount[x] ? directionsCount[x] += 1 : directionsCount[x] = 1
      })
    return walk.length === 10 &&  // check that length is 10
      directionsCount['n'] == directionsCount['s'] &&  //opposites must have equal counts
      directionsCount['e'] == directionsCount['w'] 
  }