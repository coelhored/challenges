function findNb(m) {
    let vol = 0
    let layer = 0
    const layerVol = size => size**3 
    while (vol < m) {
      layer ++
      vol = vol + layerVol(layer)
    }
    return vol === m ? layer : -1
  }