/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {

}

//Using **dot notation** give `animal` a **property** named `species`
animal.species = Honey Badger'; 

//Using **bracket notation** give `animal` a **property** called `name`
animal['name'] = 'Theo'; 

//Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = []; 

//Print your `animal` Object to the console by adding, `console.log(animal);
console.log(animal); 





//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a variable named `noises` and assign it to an empty array.
var noises = []; 

//Using **bracket notation** give `noises` it's first element.
noises[0] = 'rattle-roar';

//Using an array function add another noise to the end of `noises`.
noises.push('squeal-rattle');

noises.unshift('rawwwww');

//Using **bracket syntax** again, add another element to the end of `noises`
noises[noises.length] = 'meow';

//the length of `noises
console.log(noises.length); 

//the last element in `noises` again without hard coding the index.
//let lastElement = animal.noises[animal.noises.length - 1];
console.log(noises[noises.length - 1]); 

//`console.log` the whole array
console.log(noises);


var noises = [];
noises[0] = 'quack';
noises.push('squeak');
noises.unshift('honk');
noises[noises.length] = 'squawk';

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);





/*
unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
*/
let array = [2, 3, 4];
array.unshift(1);
console.log(array);  // Output: [1, 2, 3, 4]

/*
To add another element to the end of an array using bracket syntax in JavaScript, you can use the push() method. 
*/

const numbers = [1, 2, 3];
console.log(numbers); // Output: [1, 2, 3]

numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]


/*
you can also use the bracket notation with the length property to add an element at a specific index
*/

const numbers = [1, 2, 3];
console.log(numbers); // Output: [1, 2, 3]

numbers[numbers.length] = 4;
console.log(numbers); // Output: [1, 2, 3, 4]

/*Print last in Array*/ 
var array = [1, 2, 3, 4, 5];
var lastElement = array[array.length - 1];

console.log(lastElement); // Output: 5


//ADD TO EMPTY OBJECT 
var obj = {}; // Empty object

// Adding properties using bracket syntax
obj['property1'] = 'value1';
obj['property2'] = 'value2';

console.log(obj); // Output: { property1: 'value1', property2: 'value2' }





//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
animal['noises'] = noises; 


// Using any syntax add another noise to the `noises` property on `animal`.
animal['noises'].push('choo choo');


//`console.log` `animal`.
console.log(animal); 










/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************





 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */
 
 
 

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////


//Create a variable named `animals` and assign it to an empty array.

var animals = []; 

//`push` our `animal` that we created to `animals`.
animals.push(animal);


//`console.log` `animals
console.log(animals); 

//Create a variable called `duck` and assign it to the data:
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};  

//`push` `duck` to `animals`
animals.push(duck);


//`console.log` `animals`
console.log(animals); 



/*
Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
*/



//`console.log` `animals`,



//`console.log` the length of `animals






//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


/*
 1. [ ] Choose a data structure for this **list** of friends.
 2. [ ] Write a comment in your code that explains why you chose this data structure.
 3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
 4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 
 
 5. [ ] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
 
 
 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
 7. [ ] `console.log` `friends`.
 8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
 9. [ ] `console.log` your work.
 
 */ 


//empty list 
var friends = [];



//Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
function getRandom(animals) {


    //Using a random index from this function that you just created, get a random animal and add its `name` to `friends`. 
    var randomIndex = Math.floor(Math.random() * animals.length);
    
    //returns  a random `index` 
    return randomIndex;
    
}
    // 6. Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
    var randomIndex = getRandom(animals);
    var randomAnimal = animals[randomIndex];
    friends.push(randomAnimal.name);
    
    // 7. `console.log` `friends`.
    console.log(friends);
    
    // 8. Using bracket notation, add the `friends` list as a property also named `friends` on one of the animals in the `animals` array.
    randomAnimal['friends'] = friends.slice();
    
    // 9. `console.log` your work.
    console.log(randomAnimal);







//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
