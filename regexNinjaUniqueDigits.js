// // // *** Problem *** // // //

// Your task is to write a regular expression that will match only numbers whose digits are all unique, i.e.they are not repeated anywhere within the number.

// The input will be a positive integer, given as a string.You should assign your expression to the regex variable, which will be tested using RegExp.prototype.test().The test should return true if all digits of the number are unique, and false otherwise.

//     Examples:

// regex.test('1234')
// // --> true

// regex.test('1232')
// // --> false
// // because digit 2 is repeated
// Note: The kata includes anti - cheat code to prevent you from submitting non - regex solutions.



// // // *** Solution *** // // //

let regex = /^(?!.*(\d).*?\1).*?$/;




// // // *** Test *** // // //

// Test.assertEquals(regex.test('1'), true);
// Test.assertEquals(regex.test('1234'), true);
// Test.assertEquals(regex.test('1232'), false);
// Test.assertEquals(regex.test('10284'), true);
// Test.assertEquals(regex.test('79222'), false);
// Test.assertEquals(regex.test('6924015'), true);
// Test.assertEquals(regex.test('6060606'), false);
// Test.assertEquals(regex.test('2596108347'), true);
// Test.assertEquals(regex.test('25961088347'), false);
// Test.assertEquals(regex.test('25961508347'), false);