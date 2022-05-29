var number = function(busStops){
    let total = 0;
      for (stop of busStops) {
        total += stop[0] - stop[1]
      }
      return total;
    }