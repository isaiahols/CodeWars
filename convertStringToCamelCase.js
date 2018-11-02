// // // *** Problem *** // // //

// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized.

//     Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"





// // // *** Solution *** // // //

const toCamelCase = str => {

    // make regex to test for first letters of words
    let findFirst = /[^a-zA-Z]\w/g;

    // check the string for more than one word and replace with camelCase
    camelCaseString = str.replace(findFirst, u => {
        // just turn the letter not the space or punctuation to upper case
        return u[1].toUpperCase()
    })

    // return new camelCase string
    return camelCaseString;

}



// // // *** Solution (one line) *** // // //

const toCamelCase = str => str.replace(/[^a-zA-Z]\w/g, u => u[1].toUpperCase())