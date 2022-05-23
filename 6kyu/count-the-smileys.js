//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0;
      arr.forEach(x => {
        if (x[0] === ':' || x[0] === ';') {
          if (x[1] === '-' || x[1] === '~') {
            if ( x[2] === ')' || x[2] ==='D') {
              count ++;
            }    
          } if ( x[1] === ')' || x[1] ==='D') {
            count ++
          }
        }
      })
      return count;
    }

    // using regex
    
    //return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter(x => (/^[;|:][-|~]?[)|D]$/).test(x)).length
    }