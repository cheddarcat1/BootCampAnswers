// #!/usr/bin/env node
'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** NUMBER 1
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */


 function nameOfFunction (para){
   
   return function (value){
     
     if the base is a string or the base is a number 
     
      return value is greater than base 
      
      else 
      
        return an error code 
   }
 }



function createGreaterThanFilter(base) {
  return function(value) {
    //check if string OR number 
    if (typeof base === 'string' || typeof base === 'number') {
      //given value is greater than the base
      return value > base;
    } else {
      throw new Error('NaN.');
    }
  };
}






/** NUMBER 2
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 
 
 
 function whateverName (base){
   function(value){
     if the base is a string or number 
     return value < base 
     else 
      make error code 
   }
 }
 
 
function createLessThanFilter(base) {

  return function(value){
    //check if string OR number 
    if(typeof base === 'string' || typeof base === 'number'){
      //test if given value is LESS than the base 
      return value < base; 
    }else {
      throw new Error('NaN.');
    }
  }

}


 
 
 
 
 
 
 

/** NUMBER 3
 Given a startsWith character, which will be a single character, return a 
 Function that tests whether a given String starts with the startsWith 
 character.
 
 So you need to force the input into the same case
With touppercase or tolowercase
 */








function createStartsWithFilter(startsWith) {
  return function (str) {
    if (str.charAt(0).toLowerCase() === startsWith.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  };
}




 
 /** NUMBER 4
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 *  So you need to force the input into the same case
With touppercase or tolowercase
 */




function createEndsWithFilter(endsWith) {
  
  return function (str) {
    
    if (str.charAt(str.length - 1).toLowerCase() === endsWith.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  };
}




/** NUMBER 5
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
 
 
function modifyStrings(strings, modify) {
  
  var modifiedStrings = []; // Create an empty array to store the modified strings
  
  for (let i = 0; i < strings.length; i++) { //loop 
    
    var modifiedString = modify(strings[i]); // Apply the modify function to the current string
    
    modifiedStrings.push(modifiedString); // Add the modified string to the collection
  }
  
  return modifiedStrings; // Return the collection of modified strings
}


 
 
 
 
 
 /** NUMBER 6
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
 
 
function allStringsPass(strings, test) {
  
  for (var i = 0; i < strings.length; i++) {
    
    if (!test(strings[i])) {
      
      return false; // Return false if any string fails the test
    }
  }
  
  return true; // Return true if all strings pass the test
}


/*
The function iterates over each string in the strings array using a for loop. 

For each string, it calls the test function with the string as an argument.

If the test function returns FALSE for any string, indicating that it fails the test, the function immediately returns FALSE. 

This means that if any string fails the test, the overall result will be false.

If the loop completes without encountering any strings that fail the test, the function returns true, indicating that all strings in the array pass the test.
*/ 
 
 
 
 
 
 
 // DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
