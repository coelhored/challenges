function validatePIN (pin) {

    const regex = /[^0-9]/
    return !regex.test(pin) && (pin.length === 4 || pin.length === 6)
  }


// using only regex

// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
//   }