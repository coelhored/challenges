function rowWeights(array){
    const team1 = []
    const team2 = []
    array.forEach((x,i) => {
      if (i % 2 === 0) {
        team1.push(x)
      } else {
        team2.push(x)
      }
    })
  const team1Weight = team1.reduce((a, b) => a+b, 0 )
  const team2Weight = team2.reduce((a, b) => a+b, 0 )
  return Array.of(team1Weight, team2Weight)
  }