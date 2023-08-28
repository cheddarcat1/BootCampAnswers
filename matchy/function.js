/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/*
## Step 1 - Search
 1. Open up the file `functions.js` in your editor.
 2. Implement a function declaration called `search` that:
   - Takes a paramater representing an Array of `animals`.
   - Takes a paramater representing a String, the name of an animal on which to perform a search.
   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
   - Returns `null` if no animal with that name exists
 3. Use the search bar at the top of the page to make sure your function works.
*/


function search(animals, name)
do a for statement 
if animals[i]name === name 
return animal[i]
}
}
return null 



search: function(animals, name){
  for(var i = 0; i < animals.length; i++){
    if (animals[i].name === name){
      return animals[i]; 
    }
  }
  
  return null; 
}



search function(input, name)
make for loop
if input name === name 
return input name 
reuturn null 






function search(animals, name) {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].name === name) {
      return animals[i]; // Return the animal's object if the name matches
    }
  }
  
  return null; // Return null if no animal with that name exists
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 1. Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
   - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
   - Otherwise do nothing.
 2. Preview the `index.html` page to test it on the website.
 */
 

    
  function replace(animals, name, replacement) {
    
    for (let i = 0; i < animals.length; i++) {
    
        if (animals[i].name === name) {
    
          animals[i] = replacement;
      
            break;
    }
  }
}





function replace(animalsInput, name, replacement)
for loop
if animalInput === name  
animalInput = replacement 







//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*## Step 3 - Remove
 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.
*/


function remove(animals, name) {
  
  for (var i = 0; i < animals.length; i++) {
    
    if (animals[i].name === name) {
      
      animals.splice(i, 1);
      
      break; // Exit the loop after removing the animal
    }
  }
}





function remove(animals, name) {
  var index = animals.findIndex(function(animal) {
    return animal.name === name;
  });

  if (index !== -1) {
    animals.splice(index, 1);
  }
}




function remove (animalsInput, name)
for loop
if animalsInput[i] == name 
animals.splice(i, 1)






//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/*

## Step 4 - Add
 1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   - Make sure it works.
   
*/




//WAY TO WRITE IT PART ONE
function add(animals, animal) {
  // Check if the animal Object has a name property with length > 0
  if (!animal.name || !animal.species) {
    return;
  }

  // Check if the animal name is unique
  if (animals.some(existingAnimal => existingAnimal.name === animal.name)) {
    return;
  }

  // All conditions pass, add the new animal to the animals Array
  animals.push(animal);
}



//EASY WAY TO WRITE IT 
function add(animals, animal) {
  
     if (animal.name.length < 0) {
    return;
      }

    if (animal.species.length < 0){
      return; 
       }

  var isNameUnique = false;  // isNameUnique is FALSE 
  
  for (var i = 0; i < animals.length; i++) {   //make a for loop 
  
    if (animals[i].name === animal.name) {   //if animal name === animal name 
    
      isNameUnique = true;   //isNameUnique is true 
      
      break;  //break
    }
  }
  
  
  if (isNameUnique) { 
    return;
  }

  // All conditions pass, add the new animal to the animals Array
  animals.push(animal);
}






function add(animals, animal){
  
  var isNameUnique = false;
  
  for(var i = 0; i < animals.length; i++){
    
    if(animal.name.length > 0 && animal.species.length > 0){
      if ()
    }

  }
}








/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
