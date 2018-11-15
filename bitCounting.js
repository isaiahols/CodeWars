// // // *** Problem *** // // //




// // // *** Solution *** // // //


// ------ Long Version ------- //

// I am going to user recursion here so I can take any number and still have this work
//I added in a 'count' parameter and set its default to 0
let countBits = (n, count = 0) => {

    // base case is when the last number is 1 or 0
    if (n / 2 === 0) {
        // I add the remainder of n / 2 to the count
        return count += n % 2;
    }
    // add the remainder of n / 2 to the count variable
    //if the remainder is 0 it will not make a difference and if it is 1 it will increment it
    count += n % 2;
    // divide by 2 and remove the remainder and set that as the new n
    n = Math.floor(n / 2);

    // call its self again and pass in n and count
    return countBits(n, count)
};


// ------ One Liner ------- //
const countBits = n => n.toString(2).replace(/[0]/g,'').length