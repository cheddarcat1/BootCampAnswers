/*
Create a function longestWord that takes in a sentence and returns the longest word in it. If there are multiple words of the same length, then return the first one. A word can not contain spaces, numbers, or symbols.

longestWord('aword'); // => 'aword'
longestWord('longest word'); // => 'longest'
longestWord('longest$word'); // => 'longest'
longestWord('0only@$# the word'); // => 'only'
longestWord('Are you sure?'); // => 'sure'
*/


    function longest(str){
    // Split the string using regex
    str = str.match(/[a-zA-Z0-9]+/gi);
    // Creating a empty string to store largest word
    let largest = "";
         
    // Creating a for...loop to iterate over the array
    for(let i = 0; i < str.length; i++){
        // If the i'th item is greater than largest string
        // then overwrite the largest string with the i'th value
        if(str[i].length > largest.length){
        largest = str[i]
        }
    }
    return largest;
    }
     
    console.log(longest("Hello guys this is geeksforgeeks where"+



  function longestWord(sentence) {
  const words = sentence.match(/[a-zA-Z]+/g);
  let longest = '';
  
  if (words) {
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
  }
  
  return longest;
}




const longestWord = (sentence) => {
  const words = sentence.split(' ');

  let longest = '';
  for (const word of words) {
    const cleanWord = word.replace(/[^a-zA-Z]/g, ''); // Remove symbols, numbers, and spaces
    if (cleanWord.length > longest.length) {
      longest = cleanWord;
    }
  }

  return longest;
};
