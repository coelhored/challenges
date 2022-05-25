function enough(cap, on, wait) {
    let remaining = on + wait -cap
    return remaining < 0 ? 0 : remaining;
  }