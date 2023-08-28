// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120


var factorial = function(n) {
  if (n === 0 || n === 1) {
    // Base case: factorial of 0 or 1 is 1
    return 1;
  } else if (n < 0){
    return null; 
  }else{
        // Recursive case: multiply the current number by the factorial of (n - 1)
        //number * number - 1 
        // 4 * 3 * 2 * 1 
    return n * factorial(n - 1);
  }
};



/*2. Compute the sum of an array of integers.

-should return 0 for empty array
-should accept an array with a single integer

Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
*/

//function sum (arr)
var sum = function(array) {
  //if array length = 0 
  if (array.length === 0) {
    return 0; // return 0 for an empty array
  }
  
  // Base case: array contains a single element
  if (array.length === 1) {
    return array[0];
  }
  
  // Recursive case: array has more than one element
  //1st num of arr + 2nd num of arr 
  return array[0] + sum(array.slice(1));
};






// 4. Check if a number is even.
function isEven(n) {
  // Base cases
  if (n === 0) {
    return true; // 0 is even
  }
  if (n === 1) {
    return false; // 1 is odd
  }

  // Recursive case
  if (n < 0) {
    return isEven(-n); // Convert negative numbers to positive
  }

  return isEven(n - 2); // Subtract 2 and continue recursion
}




/*5. Sum all integers below a given integer.

First, we calculate the sum of integers from 1 to 9 (10 - 1):


sumBelow(10); // 45
sumBelow(7); // 21



-should return 0 for empty array
-should accept an array with a single integer
-should return the sum of an array of negative integers
-calculate sum of the integers 

*/

function sumBelow(n) {
  if (n <= 0) {
    return 0;
  }
  
  //calculate the sum of integers
  return n - 1 + sumBelow(n - 1);
}



function sumArray(arr) {
  //should return 0 for empty array
  if (arr.length === 0) {
    return 0;
  }
  
  // return the sum of an array of negative integers
  return arr[0] + sumArray(arr.slice(1));
}






// 6. Get the integers in range (x, y). Using recurssion
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

function range(x, y) {
  if (x === y || x === y - 1 || x === y + 1) {
    return []; // Base case: no integers in the range
  }

  if (x < y) {
    
    const result = range(x, y - 1); // Recursive call with a reduced upper bound
    
    result.push(y - 1); // Add the number (y - 1) to the result array
    
    return result;
    
  } else {
    
    const result = range(x, y + 1); // Recursive call with an increased lower bound
    result.push(y + 1); // Add the number (y + 1) to the result array
    
    return result;
  }
}






// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
  // Base case: exp is 0, exponent of any number to 0 is 1
  if (exp === 0) {
    return 1;
  }

  // Recursive case: exp is positive
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  }

  // Recursive case: exp is negative
  if (exp < 0) {
    return 1 / (base * exponent(base, -exp - 1));
  }
};





// 8. Determine if a number is a power of two. Use recurssion
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

//return parseInt( (Math.ceil((Math.log(n) / Math.log(2))))) == parseInt( (Math.floor(((Math.log(n) / Math.log(2))))));

function powerOfTwo(num) {
  //if num is <= 1 
  if (num <= 1) {
    //return 1 
    return num === 1;
  }

  //num % 2 == 0 aka num is even 
  if (num % 2 === 0) {
    //recurssion statement 
    return powerOfTwo(num / 2);
  }
  //return false 
  return false;
}




// 9. Write a function that accepts a string a reverses it.

function reverse(str) {
  
  // Base case: if the string is empty or has only one character, return the string itself
  if (str.length <= 1) {
    return str;
  }

  // Recursive case: reverse the substring starting from the second character onward
  
  // and concatenate the first character at the end
  
  //The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

  return reverse(str.substr(1)) + str.charAt(0);
}
  






/*10. Write a function that determines if a string is a palindrome.
should ignore spaces and capital letters
should return a boolean‣
should return true for palindromes‣
should return false for non-palindromes
*/

var palindrome = function(string) {
  
  //if string length = 1 
 if(string.length === 1 || 0){
   //return true 
   return true;
 }else{
   //if the 1st letter of string = the last letter of string 
   if(string[0]=== string[string.length - 1]){
     //var new word = string cut at 1st letter and last letter 
     let newWord = string.slice(1, -1); 
     //recurssion 
     return palindrome(newWord); 
   }else{
     //return false 
     return false; 
   }
 }
  
};


var palindrome = function(string) {
  // Convert the string to lowercase and remove spaces
  string = string.toLowerCase().replace(/\s/g, '');

  if (string.length <= 1) {
    return true;
  } else {
    if (string[0] === string[string.length - 1]) {
      let newWord = string.slice(1, -1);
      return palindrome(newWord);
    } else {
      return false;
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

//function mutiply 
function multiply(a, b) {
  //if b = 0 
  if (b === 0) {
    //return 0 (0*num = 0)
    return 0;
    //if b > 0 
  } else if (b > 0) {
    //return a + (a, b - 1) 
    return a + multiply(a, b - 1);
    //if be is less than 0 
  } else if (b < 0) {
    //negative number 
    return -multiply(a, -b);
  }
}


// 15. Write a function that compares each character of two strings and returns true if
// both are identical. use recurssion
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true


function compareStr(str1, str2) {
  // Base case: both strings are empty, they are identical
  if (str1 === '' && str2 === '') {
    return true;
  }
  // Base case: lengths of the strings are different, they can't be identical
  if (str1.length !== str2.length) {
    return false;
  }
  // Recursive case: compare the first characters and recursively compare the rest
  return str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1));
}



function compareStr(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }if (str1.length === 0) {
    return true;
  } if (str1[0] !== str2[0]) {
    return false;
  }return compareStr(str1.substring(1), str2.substring(1));
}



// 16. Write a function that accepts a string and creates an array where each letter occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  } else {
    return [str[0], ...createArray(str.slice(1))];
  }
};





// 17. Reverse the order of an array
var reverseArr = function(array) {
  //if the array length = 0 
  if (array.length === 0) {
    //return empty arr 
    return [];
  } else {
    //return the rest of the array, slice array at 1 and 0 
    return [...reverseArr(array.slice(1)), array[0]];
  }
};








// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

//function buildlist(value, length)
var buildList = function(value, length) {
  //if length = 0 
  if (length === 0) {
    //return empty arr 
    return [];
  } else {
    //return the value with the length - 1 
    //... = rest of the array 
    return [value, ...buildList(value, length - 1)];
  }
};



// buildList(0,5)
//value = 0 
//length = 5




// 19. Count the occurrence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2


//function cO (arr, v)
var countOccurrence = function(array, value) {
  //if the array = 0
  if (array.length === 0) {
    //return 0 
    return 0;
  } else {
    //if 1st num == value 
    if (array[0] === value) {
      //return 1 + 
      //slice array at 1 
      //count the value 
      return 1 + countOccurrence(array.slice(1), value);
    } else {
      return countOccurrence(array.slice(1), value);
    }
  }
};



//countOccurrence([2,7,4,4,1,4], 4) // 3






// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  } else {
    return [callback(array[0]), ...rMap(array.slice(1), callback)];
  }
};










// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
//should return null for negative integers
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  if (input.length === 0) {
    return [];
  } else {
    return [input[0].toUpperCase(), ...capitalizeWords(input.slice(1))];
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //make a base case 
  if(array.length === 0){
    return []; 
    
  }else{
    //make first var to == char[0]
    let firstChar = array[0][0].toUpperCase();
    //make var to equal rest of the word 
    let restOfWord = array[0].slice(1);
    //make var to ++ them
    var c = firstChar + restOfWord; 
    
    return [c, ...capitalizeFirst(array.slice(1))];
  }
  
};





// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    return obj;
  } else {
    let char = str[0];
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
    return letterTally(str.slice(1), obj);
  }
};







// 31. Eliminate consecutive duplicates in a list. If the list contains repeated elements, they should be replaced with a single copy of the element. The order of the elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if (list.length === 0) {
    return [];
  } else if (list.length === 1) {
    return [list[0]];
  } else {
    if (list[0] === list[1]) {
      return compress(list.slice(1));
    } else {
      return [list[0], ...compress(list.slice(1))];
    }
  }
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    if (array[0] === 0 && array[1] === 0) {
      return minimizeZeroes(array.slice(1));
    } else {
      return [array[0], ...minimizeZeroes(array.slice(1))];
    }
  }
};

// 34. Alternate the numbers in an array between positive and negative, regardless of their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    let sign = array.length % 2 === 0 ? -1 : 1;
    return [Math.abs(array[0]) * sign, ...alternateSign(array.slice(1))];
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent. Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); //
var numToText = function(str) {
  const numWords = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };

  if (str.length === 0) {
    return '';
  } else {
    let char = str[0];
    if (/[0-9]/.test(char)) {
      char = numWords[char];
    }
    return char + numToText(str.slice(1));
  }
};






// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node = document) {
  let count = 0;
  if (node.tagName === tag.toUpperCase()) {
    count++;
  }
  for (let i = 0; i < node.children.length; i++) {
    count += tagCount(tag, node.children[i]);
  }
  return count;
};






// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
var binarySearch = function(array, target, min = 0, max = array.length - 1) {
  if (min > max) {
    return -1;
  } else {
    let mid = Math.floor((min + max) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      return binarySearch(array, target, min, mid - 1);
    } else {
      return binarySearch(array, target, mid + 1, max);
    }
  }
};







// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  let merge = function(left, right) {
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  return merge(mergeSort(left), mergeSort(right));
};
