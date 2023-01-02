function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return Date.parse(currentDate) <= Date.parse(expirationDate) && enteredCode === correctCode
    }