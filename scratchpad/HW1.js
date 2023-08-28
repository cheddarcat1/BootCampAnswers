// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    
    return string.length; 
}



/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {

    return string.toLowerCase();

}







/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {

    return string.toUpperCase();
}







/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 */
 
 
 
function toDashCase(str) {
  // Convert the string to lowercase and replace spaces with dashes
  return str.toLowerCase().replace(/\s+/g, '-');
}

// Example usage
console.log(toDashCase('Hello World')); // Output: 'hello-world'


/*
STEPS

- lowercase using the toLowerCase() method.

- replace() method with a regular expression (/\s+/g) to match one or more whitespace characters and replace them with a dash -. 

    - \s means "one space", and \s+ means "one or more spaces".
    
    - /g flag (replace all occurrences)

- The g flag in the regular expression ensures that all occurrences of whitespace are replaced.

*/








/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 
function beginsWith(string, char) {
  
  return string.charAt(0).toLowerCase() === char.toLowerCase();
  
}



/*
STEPS:

1. charAt(0) method to access the first character of the string.

2. convert both the first character and the char argument to lowercase using the toLowerCase() method.

3. compare the lowercase versions of both characters and return true if they are equal, indicating that the string begins with the given character. Otherwise, we return false.

*/ 







/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 
function endsWith(string, char) {
  const lowercaseString = string.toLowerCase();
  const lowercaseChar = char.toLowerCase();
  const lastChar = lowercaseString[lowercaseString.length - 1];
  return lastChar === lowercaseChar;
}


/* STEPS!!!


Convert the input string and the character to lowercase (or uppercase) to make the comparison case-insensitive.

Retrieve the last character of the converted string using array access.

Compare the last character with the converted character using strict equality (===).

Return true if they are equal, and false otherwise.

*/ 




/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
  
  return stringOne + stringTwo;
}










/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
 
function join(stringOne, stringTwo) {
  
  var args = Array.from(arguments);
  
  return args.join('');
}



//HOW TO USE Array.from(arguments)

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]



function f() {
  return Array.from(arguments);
}

f(1, 2, 3); // [ 1, 2, 3 ]









/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
  if (stringOne.length >= stringTwo.length) {
    return stringOne;
  } else {
    return stringTwo;
  }
}







/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
   
   return stringTwo.localeCompare(stringOne);
}

//1 if the first is higher in alphabetical order
console.log(sortAscending('a','b'));  // 1 

//-1 if the second is higher in alphabetical order
console.log(sortAscending('b','a')); // - 1 


/* STEPS:

localeCompare() method. This method compares two strings and returns a NEGATIVE number if the FIRST string is sorted BEFORE the SECOND string, 

a POSITIVE number if the SECOND string is sorted BEFORE the FIRST string, and 0 if they are equal.

*/ 









/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {

return stringOne.localeCompare(stringTwo);

}

//return -1 if the SECOND is lower in alphabetical order
console.log(sortAscending('a','b')); // -1 

//return 1 if the FIRST is lower in alphabetical order
console.log(sortAscending('b','a')); // 1 








// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
