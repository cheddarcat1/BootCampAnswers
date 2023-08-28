var each = function(collection, action) {
  
  if (Array.isArray(collection)) {
    
    for (var i = 0; i < collection.length; i++) {
      
      action(collection[i], i, collection);
    }
    
  } else {
    
    for (var key in collection) {
      
      action(collection[key], key, collection);
    }
  }
};





/*
Using the each function provided above implement the function map.

Inputs:

    An array
    A function

Objectives:

    call <function> for each element in <array> passing the arguments: the element, it's index, <array>
    
    save the return value of each <function> call in a new array
    
    return the new array
    
*/

var map = function(array, func) {
  var result = []; // Create a new array to store the mapped values

//call <function> for each element in <array> passing the arguments: the element, it's index, <array>
  each(array, function(element, index, array) {
    
    result.push(func(element, index, array)); // Call the function and add the return value to the result array
  });

  return result; // Return the mapped array
};





/*
Using the map function you just implemented set

mappedNumbers to the result of mapping the array

mapNumbers to produce each element divided by five.
*/


var mapNumbers = [10, 20, 30, 40, 50];

var mappedNumbers = map(mapNumbers, function(element) {
  return element / 5;
});

console.log(mappedNumbers);
// Output: [2, 4, 6, 8, 10]











/*
Using the each function provided above implement the function filter.

Inputs:

    An array
    A function

Objectives:

    call <function> for each element in <array> passing the arguments: the element, it's index, and <array>
    
    return a new array of elements for which calling <function> returned true
*/


var filter = function(array, func) {
  var result = []; // Create a new array to store the filtered values

  each(array, function(element, index, collection) {
    if (func(element, index, collection)) {
      result.push(element); // Add the element to the result array if the function returns true
    }
  });

  return result; // Return the filtered array
};








/*
Using the filter function you just implemented, set filteredNumbers to the result of filtering the array filterNumbers to produce only odd numbers.
*/

var filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filteredNumbers = filter(filterNumbers, function(element) {
  return element % 2 !== 0; // Return true for odd numbers
});

console.log(filteredNumbers);
// Output: [1, 3, 5, 7, 9]


