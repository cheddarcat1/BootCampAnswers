Create a function alphabetize that takes in a string and returns a string where all the letters are in alphabetical order.

alphabetize('wow') // => 'oww'
alphabetize('helloworld'); // => 'dehllloorw'
alphabetize('bazinga'); // => 'aabginz'



function makeAlphabet(str) { 
   var arr = str.split(''),
   alpha = arr.sort().join('').replace(/\s+/g, '');
   return alpha; 
}
console.log(makeAlphabet("dryhczwa test hello"));




function alphabetize (str){
  var alphaWord = st.split('').sort().join('');
  return alphaWord; 
}



const alphabetize = (str) => {
  const sortedStr = str.split('').sort().join('');
  return sortedStr;
};
