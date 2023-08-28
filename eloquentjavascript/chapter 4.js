////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//CORRECT 
function range(start, end, step = 1) {
  let array = [];
  if (start !== end && ((step > 0 && start <= end) || (step < 0 && start >= end))) {
    for (let i = start; (step > 0 ? i <= end : i >= end); i += step) {
      array.push(i);
    }
  }
  return array;
}


//WRONG!
function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}


function range (start, end, step){
  let newArr = [];
  if (start === end) {return []}
  else if (!step) {
    for (let i = start; i <= end; i++){ 
    newArr.push(i)
  }}
  else if (step > 0) {
    for (let i = start; i <= end; i+= step){
    newArr.push(i)}
  }
  else if (step < 0) {
    for (let i = start; i >= end; i+= step){
    newArr.push(i)}
  }
  return newArr;
}



function sum(array){  
    var total = 0; // need to create a variable outside the loop scope
    for(var i in array){  
       total = total+array[i];  
    }
    return total;
}  



////////LIST SHIT\\\\\\\\\\\\\\\\\\\\\\\\\



function arrayToList(array) {
  //list = null 
  let list = null;
  //iterate around the array 
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}



//create the function
function listToArray(list) {
  //make empty array 
  let array = [];
  //while list DOES NOT null 
  while (list !== null) {
    //push the value of list into the empty array 
    array.push(list.value);
    //list = list.rest 
    list = list.rest;
  }
  //return the array 
  return array;
}




function prepend(element, list) {
  return { value: element, rest: list };
}





function nth(list, n) {
  if (list === null) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}




// Example usage:
console.log(arrayToList([10, 20])); // {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))); // [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); // 20






/////////////// deepEqual ////////////////////////////////////////////////////////////


function deepEqual(value1, value2) {
  // If the values are strictly equal, return true
  if (value1 === value2) {
    return true;
  }

  // If either value is null or not an object, or their types are different, return false
  if (value1 === null || typeof value1 !== 'object' ||
      value2 === null || typeof value2 !== 'object') {
    return false;
  }

  // Get the keys of both objects
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  // If the number of keys is different, return false
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Recursively compare the properties of the objects
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
      return false;
    }
  }

  // If all properties are deeply equal, return true
  return true;
}





let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true



