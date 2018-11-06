// // // *** Problem *** // // //

// Welcome.In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// // // *** Solution *** // // //

function squareDigits(num) {

    // make an array of each digit
    let arr = [...`${num}`];

    // loop through that array and square each digit
    arr = arr.map(el => Math.pow(el, 2));

    // turn the array into one string
    num = arr.join('');

    // return that string as a number
    return Number(num);
}