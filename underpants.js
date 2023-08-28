// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};





/**_.identity ONE 
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
  return value; 
  
}




/** _.typeOf TWO
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


_.typeOf = function getType(value) {
    if (Array.isArray(value)) {
      return "array";
    } else if (value === null) {
      return "null";
    } else {
      return typeof value;
    }
  }





/** _.first  THREE 
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/


/*
Logical NOT (!)
!x
Returns false if its single operand can be converted to true; otherwise, returns true
*/




 _.first = function (array, number) {
   // If <array> is not an array, return []
  if (!Array.isArray(array)) {
    return [];
  }
  //If <number> is not given or not a number, return just the first element in <array>.
  if (typeof number !== 'number') {
    return array[0];
  }
  //Should return empty list if numerical argument is not a positive number.
  if (number <= 0) {
    return [];
  }
  //Should return the whole array if numerical argument is greater than the array's length.
  if (number >= array.length) {
    return array;
  }
  //Otherwise, return the first <number> items of <array>
  return array.slice(0, number);
}



/** _.last  FOUR 
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/



_.last = function (array, number) {
  // If <array> is not an array, return []
 if (!Array.isArray(array)) {
   return [];
 }
 //If <number> is not given or not a number, return just the LAST element in <array>.
 if (typeof number !== 'number') {
  return array.pop();
 }
 //Should return empty list if numerical argument is not a positive number.
 if (number <= 0) {
   return [];
 }
 //Should return the whole array if numerical argument is greater than the array's length.
 if (number >= array.length) {
   return array;
 }
 //Otherwise, return the LAST <number> items of <array>
 return array.slice(-number); 
}



console.log(last("ponies", 2)); //[]
console.log(last(["a", "b", "c"], "ponies"));//c
console.log(last(["a", "b", "c"], 1)); //c
console.log(last(["a", "b", "c"], 2)); //b, c 






/** _.indexOf  FIVE 
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/



//function (array, value)
function indexOf(array, value) {
  //iterate around the array 
  for (var i = 0; i < array.length; i++) {
    //Return the index of <array> that is the first occurrance of <value>
    if (array[i] === value) {
      return i;
    }
  }
  //Return -1 if <value> is not in <array>
  return -1;
}







/** _.contains  SIX 
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


function contains(array, value) {
  //Return true if <array> contains <value>
  //Return false otherwise
  return array.includes(value) ? true : false;
}





/** _.each  SEVEN 
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//function (coll, fun)
function each(collection, func) {
  //collection is an array 
  if (Array.isArray(collection)) {
    //iterate around hte collection 
    for (var i = 0; i < collection.length; i++) {
      //call the function 
      func(collection[i], i, collection);
    }
  } 
  //if collection === object 
  else if (typeof collection === 'object') {
    //call <function> once for each property with the arguments
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        //the property's value, it's key, <collection>
        func(collection[key], key, collection);
      }
    }
  }
}






/** _.unique EIGHT 
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

function unique(array) {
  var uniqueArray = [];
//iterate around the array 
  for (var i = 0; i < array.length; i++) {
    //Return a new array of all elements from <array> with duplicates removed
    if (_.indexOf(uniqueArray, array[i]) === -1) {
      //push to empty array 
      uniqueArray.push(array[i]);
    }
  }

  //return new array 
  return uniqueArray;
}






/** _.filter  NINE 
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//function array func 
function filter(array, func) {
  //make empty array 
  var filtered = [];
  //loop around the array 
  for (var i = 0; i < array.length; i++) {
    //element = arr[i]
    var element = array[i];
    //if function returns 
    if (func(element, i, array)) {
      //push to the empty arr 
      filtered.push(element);
    }
  }
  //return the new array 
  return filtered;
}






/** _.reject TEN
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

function reject(array, func) {
  var rejected = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    if (!func(element, i, array)) {
      rejected.push(element);
    }
  }

  return rejected;
}





/** _.partition ELEVEN 
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


function partition(array, func) {
  var truthyValues = [];
  var falsyValues = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    var result = func(element, i, array);

    if (result) {
      truthyValues.push(element);
    } else {
      falsyValues.push(element);
    }
  }

  return [truthyValues, falsyValues];
}








/** _.map TWELVE 
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
 
 _.map = function(collection, func){
   
   //make empty Arr 
   var emptyArr = []; 
   // if <collection> is an array:
   if(Array.isArray(collection) == true ){
     //the element, it's index, <collection>
     return
     //typeof operand; collection is an object 
   }else(collection typeof == "object"){
     //the value, it's key, <collection>
   } return 
   
   
 }


//CORRECT ANSWER 

_.map = function(collection, func) {
  var result = [];

  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      result.push(func(collection[i], i, collection));
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(func(collection[key], key, collection));
      }
    }
  }

  return result;
}








/** _.pluck THIRTEEN
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = function (arr, prop){
  //Return an array containing the value of <property> for every element in <array>
  
  
}


function pluck(array, property) {
  return _.map(array, function(obj) {
    return obj[property];
  });
}





/** _.every  FOURTEEN
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

function every(collection, func) {
  if (typeof func !== 'function') {
    // If no function is provided, check if every element is truthy
    return collection.every(Boolean);
  }

  if (Array.isArray(collection)) {
    // If the collection is an array
    for (var i = 0; i < collection.length; i++) {
      if (!func(collection[i], i, collection)) {
        return false;
      }
    }
  } else if (typeof collection === 'object' && collection !== null) {
    // If the collection is an object
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (!func(collection[key], key, collection)) {
          return false;
        }
      }
    }
  }

  return true;
}





/** _.some  FIVETEEN
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


function some(collection, func) {
  if (typeof func !== 'function') {
    // If no function is provided, check if at least one element is truthy
    return collection.some(Boolean);
  }
  
  // If the collection is an array
  if (Array.isArray(collection)) {
    // iterate around the array 
    for (var i = 0; i < collection.length; i++) {
      
      //Call <function> for every element of <collection> with the paramaters:
      //current element, it's index, <collection>
      if (func(collection[i], i, collection)) {
        return true;
      }
    }
    // // If the collection is an object
  } else if (typeof collection === 'object' && collection !== null) {
   
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        
        //Call <function> for every element of <collection> with the paramaters:
        //current value, current key, <collection>
        if (func(collection[key], key, collection)) {
          return true;
        }
      }
    }
  }
//If it is false for all elements, return false
  return false;
}







/** _.reduce SIXTEEN
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/



function reduce(array, func, seed) {
  var startIndex = 0;
  var accumulator = seed;

  if (seed === undefined) {
    // If no seed is provided, use the first element as the seed and start from the second element
    accumulator = array[0];
    startIndex = 1;
  }

  for (var i = startIndex; i < array.length; i++) {
    accumulator = func(accumulator, array[i], i);
  }

  return accumulator;
}







function reduce(array, func, seed) {
  //Start by declaring variables startIndex and accumulator, 
  var startIndex = 0;
  var accumulator = seed;
  
  //Check if seed is undefined.
  if (seed === undefined) {
    // If no seed is provided, use the first element as the seed and start from the second element
    accumulator = array[0];
    startIndex = 1;
  }

  //Use a loop to iterate through the array starting from the startIndex.
  for (var i = startIndex; i < array.length; i++) {
    //Update accumulator with the return value of the func function.
    accumulator = func(accumulator, array[i], i);
  }
  
  //After iterating through all the elements of the array, return the final value of accumulator.
  return accumulator;
}



/** _.extend SEVENTEEN
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


function extend(targetObj, ...sourceObjs) {
  for (var i = 0; i < sourceObjs.length; i++) {
    var sourceObj = sourceObjs[i];
    for (var key in sourceObj) {
      if (sourceObj.hasOwnProperty(key)) {
        targetObj[key] = sourceObj[key];
      }
    }
  }
  return targetObj;
}



