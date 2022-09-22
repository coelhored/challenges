function smallEnough(a, limit){
    return a.filter(number => number > limit).length > 0 ? false : true ;
    }