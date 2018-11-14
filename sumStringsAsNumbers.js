// // // *** Problem *** // // //

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1', '2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


// // // *** Solution *** // // //

// ------- attempted ------- //

const sumStrings = (a, b) => `${((a * 1) + (b * 1)).toPrecision(29).replace(/\.[0]*$/g, '')}`

// issues were that the Javascript math was not accurate enough for this past 20 digits

// ------- Actual ------- //

// to do this with Javascript and get the precision needed
//we are going to add each position individually and then 
//join them back together
const sumStrings = (a, b) => {

    // make array to hold each final digit
    let total = []

    // turn strings to arrays
    a = a.split('');
    b = b.split('');

    // loop through both arrays
    for (i = a.length, j = b.length; i > 0 || j > 0; i-- , j--) {
        // build variable to hold sum
        let sum;
        // check if both arrays still have numbers
        if (i > 0 && j > 0) {
            // add those numbers together
            sum = +a[i - 1] + +b[j - 1]
        } else {
            // equal sum to the single number
            sum = i > 0 ? +a[i - 1] : +b[j - 1]
        }
        // add the sum variable to the beginning of the total array inorder to retain proper order
        total.unshift(sum)
    }

    // now we deal with any numbers that are greater than 9
    //so we loop through the total array
    for (let i = total.length - 1; i >= 0; i--) {
        // check if each number is grreater than 9
        if (`${total[i]}`.length > 1 && i > 0) {
            // add the first digit to the number ahead
            total[i - 1] += (`${total[i]}`[0] * 1)
            // save the last digit to the current location
            total[i] = `${total[i]}`[1]
        }
    }

    // join total back into a string and remove any leading '0'
    return total.join('').replace(/^[0]*/, '')
}