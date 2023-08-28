////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Write a function min that takes two arguments and returns their minimum.
function min(num1, num2) {
 if(num1 > num2){
   return num1; 
 }else{
   return num2; 
 }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  if(num % 2 == 0){
      return true;
  } else {
      return false; 
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//count number of specific character occurrences in string

function countChars() {
var count = str.split(ch).length - 1;
console.log(count);
}


//make function 
function countChars(str, letter) {
  //start the count at 0
  let count = 0; 
  //iterate through the str 
  for(var i = 0; i < str.length; i++){
    //if the str[i] == choosen letter 
    if(str.charAt(i) == letter){
      //count it and add it  
      count += 1
    }
  }
  //return the count 
  return count; 
}




////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//match(regexp)

//make the function
function countBs(str, letter) {
  //start count at 0
  let count = 0; 
  //iteratre throug the array 
  for(var i = 0; i < str.length; i++){
    //if char == letter 
    if(str.charAt(i) == letter){
      //count it and add it 
      count += 1
    }
  }
  //return the count 
  return count; 
}



function countBs(str) {
  let count = 0; 
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) == 'B'){
      count += 1
    }
  }
  return count; 
}




//counting string 

//create the function 
function countString(str, letter) {
  //start count at 0 
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
          //add the letters 
            count += 1;
        }
    }
    //return the count 
    return count;
}
