Create a function shiftCharacters that takes in a string and changes each letter to the next in the alphabet. If the string contains non-letter characters, leave them in.



  //every other string upperCase 

var str = 'hello world how ya doing?';
function toUpperCase(str){
  return str.split('').map((v,i) =>  i%2 == 0 ? v[i].toLowerCase(): v[i].toUpperCase()).join('');
 }

console.log(toUpperCase(str));



// Your code here!
function shiftCharacters(str){
  //empty str 
  var emptyStr = ''; 
  //iterate through the array
  for(var i = 0; i < str.length; i++){
    return str[i].split('').map((a, c) => 
  }
}



function shiftCharacters(inputString) {
  // Create a variable to store the result
  let result = '';

  // Loop through each character in the input string
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    // Check if the character is a letter (a-z or A-Z)
    if (/[a-zA-Z]/.test(char)) {
      
      // Get the character code of the current letter
      let charCode = inputString.charCodeAt(i);

      // Determine if the letter is uppercase or lowercase
      let isUppercase = char === char.toUpperCase();

      // Calculate the next character code
      let nextCharCode = charCode + 1;

      // Handle wrapping around 'z' or 'Z' back to 'a' or 'A'
      if ((isUppercase && nextCharCode > 90) || (!isUppercase && nextCharCode > 122)) {
        nextCharCode -= 26;
      }

      // Convert the next character code back to a letter
      let nextChar = String.fromCharCode(nextCharCode);

      // Append the new letter to the result string
      result += nextChar;
    } else {
      // If the character is not a letter, leave it unchanged
      result += char;
    }
  }

  return result;
}

// Example usage:
console.log(shiftCharacters("Hello, World!")); // Output: "Ifmmp, Xpsme!"
