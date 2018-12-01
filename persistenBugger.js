// // // *** Problem *** // // //

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number



// // // *** Solution *** // // //

// using recursion
const persistence = (num, count = 0) => {

    // base case is if the number only is a single digit
    if (`${num}`.length === 1) {
        // return count if base case is true
        return count
    }

    // make new number that is the product of the two digits
    let prod = [...`${num}`].reduce((p, e) => p * e, 1)
    // increment count 
    count++

    // return this function passing in the new number and count
    return persistence(prod, count)
}


