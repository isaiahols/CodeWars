// // // Problem // // //

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.


// // // Solution // // //
const validatePIN = pin => {
    // build regex that tests for 4 or 6 digits 
    let validate = /^(\d{6}|\d{4})$/;

    // test the pin against the validate regex (returns true or false)
    return validate.test(pin)
}