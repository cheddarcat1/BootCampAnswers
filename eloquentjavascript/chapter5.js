// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////



/*
Use the reduce method AND concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

*/


//CORRECT ANSWER 
function flatten(arrays) {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}



//MY ANSWER 
function flatten(arrays) {
  return arrays.reduce((a, b) => a.concat(b), []);
}

console.log(flatten(arrays));




//EXAMPLE!!!!!

const flatValues = 
  //array.reduce((Total/initialValue, currentValue)
  data.reduce((total, value) => {
  //concat together
 return total.concat(value);
    //initial Value = empty array 
}, []);

console.log(flatValues);



arrays.reduce(a,b) => return a.concat(b); 





// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////



/*
Write a higher-order function called `loop` that mimics the behavior of a `for` loop statement. It should take four parameters: `value`, `test`, `update`, and `body`. 

- `value`: Represents the initial value of the loop.
- `test`: A function that will be called on each iteration. It should return `true` or `false`. If it returns `false`, the loop should stop.
- `update`: A function that will be called after each iteration to update the `value`.
- `body`: A function that will be called on each iteration with the current `value`.

Here's an example of how the `loop` function should work:

1. The `loop` function starts by evaluating the `test` function using the current `value`.

2. If the `test` function returns `false`, the loop stops.

3. If the `test` function returns `true`, the `body` function is called with the current `value`.

4. After executing the `body` function, the `update` function is called with the current `value` to generate a new value.

5. The process repeats from step 1, using the new value as the current `value`.
*/ 



function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}












// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/*
Analogous to the some method, arrays also have an every method. The every method returns true when the given function returns true for every element in the array. In a way, some is like the || operator that acts on arrays, and every is like the && operator.

Your task is to implement the every function, which takes an array and a predicate function as parameters. You need to write two versions of the every function—one using a loop and another using the some method.

Here are the requirements for each version:

Loop-based version:

    -Iterate over each element of the array using a loop.
    -Apply the predicate function to each element.
    -If the predicate function returns false for any element, the function should immediately return false.
    -If the loop completes without encountering any false value from the predicate function, the function should return true.

some method version:

    -Use the some method on the array, passing the predicate function as an argument.
    
    -If the some method returns true, the function should return false (since not every element matches the predicate).
    
    -If the some method returns false, the function should return true (since every element matches the predicate).
    
    -Remember, the every function should return true if the predicate function returns true for every element in the array, and false otherwise.

Please implement the every function based on the above requirements.
*/

//MINE!!!

function every(array, test) {
  for(var i = 0; i < array.length; i++){
    var element = array[i]; 
    if(predicate(element) == true){
      return true;
    }
  }
  
  return false; 
}


//ANSWER!!!!

function everyLoop(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      return false;
    }
  }
  return true;
}










console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true











// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name !== 'none');

  let dominant = scripts.reduce((a, b) => {
    return a.count > b.count ? a : b;
  });

  return dominant.name;
}


