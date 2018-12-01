// // // *** Problem *** // // //


// Kata
// In this kata, we want to convert a URL query string into a nested object.The query string will contain parameters that may or may not have embedded dots('.'), and these dots will be used to break up the properties into the nested object.

// You will receive a string input that looks something like this:

// user.name.firstname = Bob & user.name.lastname=Smith & user.favoritecolor=Light % 20Blue
// Your method should return an object hash - map that looks like this:

// {
//     'user': {
//         'name': {
//             'firstname': 'Bob',
//                 'lastname': 'Smith'
//         },
//         'favoritecolor': 'Light Blue'
//     }
// }
// You can expect valid input.You won't see input like:
// // This will NOT happen
// foo = 1 & foo.bar=2
// All properties and values will be strings — and the values should be left as strings to pass the tests.
// Make sure you decode the URI components correctly
// A method has been provided for testing Objects to compare objects recursively without depending on property order:
// assertSimilarObjects(myValue, expectedValue);
// Use it just like Test.assertSimilar, it will call the testing framework for you.



// // // *** Solution *** // // //

// *** ------------------- Second Try (smaller)


const convertQueryToMap = query => {

    // build obj to hold the query
    const queryObj = {};

    // check it query is empty string
    if (!query) return {}


    // split the query into separate parts and put in an array
    const queryArray = query.split('&');

    // loop through the array of queries
    for (let i = 0; i < queryArray.length; i++) {
        // for each query split on '.' and loop through
        queryArray[i].split('.').reduce((path, item) => {
            // if last item (has = sign) then split and assign
            if (item.match(/=/)) {
                let items = item.split('=');
                path[items[0]] = decodeURIComponent(items[1])
                return path
            }
            // declare a new key if none exists 
            path[item] = path[item] ? path[item] : {};
            // return new key as path
            return path[item]
        }, queryObj)
    }

    return queryObj

}




// *** ------------------- First Try (with recursion)

const convertQueryToMap = query => {

    // build obj to hold the query
    const queryObj = {};

    // check it query is empty string
    if (!query) return {}



    // split the query into separate parts and put in an array
    // add spaces back in
    const queryArray = query.split('&');

    // build recersive function to build object
    const buildObj = (arr, j, path) => {

        // for simplicity make a variable to hold the current item
        let item = arr[j];

        // base case checks for '='
        if (item.match(/=/)) {
            // if base case then split on '='
            let both = item.split('=')
            // equal the first part to the second part and decode any other URI stuff
            path[both[0]] = decodeURIComponent(both[1])
            return path
        }
        // if already exists leave the same else add an obj
        path[item] = path[item] ? path[item] : {};
        // increment j
        j++
        // call function again
        return buildObj(arr, j, path[item])
    }


    // take each part of the array and loop through for as many layers there are
    queryArray.forEach(each => {
        // built new array splitting on the .
        each = each.split('.')

        // call recursive function to build/add to queryObject
        buildObj(each, 0, queryObj)


    })

    // return the final query object
    return queryObj
}