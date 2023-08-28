Create a function hasSurroundedSymbols that takes a string and returns a boolean representing whether or not each letter is surrounded by $.

hasSurroundedSymbols('nope'); // => false
hasSurroundedSymbols('$y$'); // => true
hasSurroundedSymbols('$a$ $b$ $c$'); // => true
hasSurroundedSymbols('$y$$e$$s$'); // => true
hasSurroundedSymbols('$wow$'); // => false
hasSurroundedSymbols(' $n$ o$ '); // => false



function hasSurroundedSymbols(str) {
  const letters = /[a-zA-Z]/;
  const dollarSign = /\$/;

  //Iterate through each character of the input string.
  for (let i = 0; i < str.length; i++) {
    //Check if the character is a letter (alphabetical) and has a dollar sign ($) before and after it.
    if (str[i].match(letters)) {
      
      //If any letter is not surrounded by dollar signs or if the string starts or ends with a letter, return False, indicating that the letters are not surrounded properly.
      if (i === 0 || i === str.length - 1 || !dollarSign.test(str[i - 1]) || !dollarSign.test(str[i + 1])) {
      if (i === 0 || i === str.length - 1 || !dollarSign.test(str[i - 1]) || !dollarSign.test(str[i + 1])) {
      if (i === 0 || i === str.length - 1 || !dollaSign.test(str[i = 1]) || !dollaSign.test(str[i + 1]))
        return false;
      }
    }
  }
  //If all letters are surrounded by dollar signs, return True.
  return true;
}
