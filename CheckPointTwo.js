//  The final array should have the values in numerical order Using bracket syntax, add a value# to the beginning of the array THEN, using TWO SEPARATE Array methods, add two more value#s. THEN, using bracket syntax, add a value# to the end of the Array


function addToArray(resultArray, value1, value2, value3, value4) {
  
  //add a value# to the beginning of the array
  resultArray.unshift(value1);
  //add a value# to the end of the Array
  resultArray.push(value4);
  
  //add two more value#s
  resultArray.splice(1, 0, value2);
  resultArray.splice(2, 0, value3);
  
  
  return resultArray;
}


//Assign two new keyvalue pairs to the given resultObject. Each keyvalue should use the given parameters
function addToObject(resultObject, key1, value1, key2, value2) {
  
  //Assign two new keyvalue pairs to the given resultObject
  resultObject[key1] = value1;
  resultObject[key2] = value2;
  
  //return resultObject
  return resultObject;
}




//Find and return the object in the provided array that has the 'target' value on its key property. Should return null if target does not exist.


function addClasses(array, key, target) {
  //find the arry in obj
  for (let obj of array) {
    //the 'target' value on its key property
    if (obj[key] === target) {
      //return the obj
      return obj;
    }
  }
  //Should return null if target does not exist
  return null;
}




//  It should add an id property to each object. It should ALSO add the parameter key as a property to each object. Use dot syntax for one property, and bracket syntax for the other. Set the id property's value to the object's position in the array Set the key property's value to null


function updateObjects(array, key) {
  
  //It should add an id property to each object.
  array.forEach((obj, index) => {
    
    //Use dot syntax for one property
    //Set the id property's value to the object's position in the array Set
    obj.id = index;
    
    //bracket syntax for the other
    //Set the key property's value to null
    obj[key] = null;
  });
  
  return array;
}
