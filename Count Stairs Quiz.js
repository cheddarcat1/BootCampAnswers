/* Write a function called countStairs that takes in a string of open and closing parenthesis that returns the number of the 'stair' you are on. 

An OPEN parenthesis means UP one set of stairs and a

CLOSED parentheses means DOWN one set of stairs. 

You cannot be on a negative stair number. */

const countStairs = (string) => {
  // TODO: Your code here!
};


const countStairs = (string) => {
  
  let stair = 0; // Initialize the current stair number to 0

  for (let i = 0; i < string.length; i++) {
    
    if (string[i] === '(') {
      
      stair++; // Move up one stair
      
    } else if (string[i] === ')') {
      
      stair = Math.max(0, stair - 1); // Move down one stair, but never below 0
    }
  }

  return stair;
};




const countStairs = (string) => {
  
  const stair = string.split('').reduce((acc, val) => {
    
    if (val === '(') {
      
      return acc + 1; // Move up one stair
      
    } else if (val === ')') {
      
      return Math.max(0, acc - 1); // Move down one stair, but never below 0
    }
    return acc;
  }, 0);

  return stair;
};
