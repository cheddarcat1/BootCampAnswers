//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object and return its values in an array
function objectValues(object) {

return Object.values(object); 

} 





//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// Should take an object and return all its keys in a string each separated with a space

//Object.keys(obj)



//make the function 
function keysToString(object) {
  //an object and return all its keys 
  var answer =  Object.keys(object); 
  //return them seperated by space 
  return answer.join(" "); 
}





//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object and return all its string values in a string each separated with a space
function valuesToString(obj) {
  
  var values = Object.values(obj);
  
  var stringValues = values.filter(value => typeof value === 'string');
  
  return stringValues.join(' ');
}














//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take one argument and return 'array' if its an array and 'object' if its an object

function arrayOrObject(collection) {
  
    if(Array.isArray(collection) === true){
      
      return 'array'; 
    }else{
      return 'object'; 
    }
}



//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {

const firstLetter = string.charAt(0)
const firstLetterCap = firstLetter.toUpperCase()
const remainingLetters = string.slice(1)
const capitalizedWord = firstLetterCap + remainingLetters

return capitalizedWord; 

}






//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {

    const arr = string.split(" ");
    //loop through each element of the array and capitalize the first letter.
    for (var i = 0; i < arr.length; i++) {

        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    //Join all the elements of the array back into a string 
    //using a blankspace as a separator 
    const str2 = arr.join(" ");
    return str2;

}





//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object with a name property and return 'Welcome <Name>!'"
function welcomeMessage(object) {
  
  let string = object.name; 
  let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
  console.log(capitalizedString);
  
   return 'Welcome ' + capitalizedString + "!"; //Welcome bert!
}






//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name an a species and return '<Name> is a <Species>

function profileInfo(object) {
  
  var stringOne = object.name.charAt(0).toUpperCase() + object.name.slice(1);
  
  var stringTwo = object.species.charAt(0).toUpperCase() + object.species.slice(1);
 
  return stringOne + ' is a ' + stringTwo; 

}











//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises

function maybeNoises(object)
if object.noises.length > 0 
return object.nosies + ' '
else 
return 'there are no noises'






function maybeNoises(object) {
  
  if (object.noises.length > 0){
    
    return object.noises.join(' '); 
    
  }else {
    
    return 'there are no noises';
  }

}





//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.

function hasWord(string, word)
if string.length > 0 
return string of worlds 
else return false 


function hasWord(string, word){
    let cw = string.split(" ");
    for (var i = 0; i < cw.length; i++){
        if (cw[i] == (word)){
            return true;
        }
    }
  return false;
}



function hasWord(string, word){
    // make a for loop 
    for(var i = 0; i < string.length; i++){
        //compare string to word and split it 
        if (string[i].split(" ") == (word)){
          //return true 
            return true;
        }
    }
    //return false 
  return false;
}






//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and an object and add the name to the object's friends array then return the object


function addFriend(name, object) {
  object.friends.push(name);
  return object;
}








//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

function isFriend(name, object) {
  
  if (object.hasOwnProperty("friends")) {
    
    return object.friends.includes(name);
  }
  return false;
}





//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and a list of people, and return a list of all the names that <name> is not friends with

function nonFriends(name, arr){
    //make empty name list 
    var nameList = [];
    //make empty result list 
    var result = [];
    //current = null 
    var current = null;
    
    //loop around the array 
    for(var i = 0; i < arr.length; i++){
        //if name === name on array 
        if(name === arr[i].name){
            //make it null
            current = arr[i];
        }else{
            //else push it to the empty name list 
            nameList.push(arr[i].name);
        }
    }
    //if the list is null
    if(current === null){
        //return the name list 
        return nameList;
    }
    //loop around the list of dup names on the nameList
    for(var i = 0; i < nameList.length; i++){
        //if curent friends is faluse 
        if(current.friends.indexOf(nameList[i]) == -1){
            //push it to the name list 
            result.push(nameList[i]);
        }
    }
    //return the result 
    return result;

}





//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. 
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it

function updateObject(object, key, value) {
  object[key] = value;
  return object;
}







//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array>"

function removeProperties(obj, properties) {
  for (var i = 0; i < properties.length; i++) {
    if (obj.hasOwnProperty(properties[i])) {
      delete obj[properties[i]];
    }
  }
}





//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an array and return an array with all the duplicates removed"
function dedup(array) {
  
  return [...new Set(array)];

}














//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
