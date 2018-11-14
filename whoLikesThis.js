// // // *** Problem *** // // //

// You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.It must return the display text as shown in the examples:

// likes[] // must be "no one likes this"
// likes["Peter"] // must be "Peter likes this"
// likes["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

// // // *** Solution *** // // //

const likes = names => {
    let len = names.length;
    let first = ``;
    switch (len) {
        case 0:
            first = `no one`;
            break;
        case 1:
            first = `${names[0]}`;
            break;
        case 2:
            first = `${names[0]} and ${names[1]}`;
            break;
        case 3:
            first = `${names[0]}, ${names[1]} and ${names[2]}`;
            break;
        default:
            first = `${names[0]}, ${names[1]} and ${len - 2} others`;
            break;
    }

    return `${first} like${len < 2 ? 's' : ''} this`

}