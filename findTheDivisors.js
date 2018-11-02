// // // *** Problem *** // // //
// Create a function named divisors / Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"



// // // *** Solution *** // // //

const divisors = int => {

    // build array to hold any divisors
    let hold = [];

    // loop int-3 times and test for divisors and push to hold
    for (let i = 2; i < int; i++) if (int % i === 0) hold.push(i)

    // if there are divisors return divisors array else say it is prime
    return hold[0] ? hold : `${int} is prime`;
};
