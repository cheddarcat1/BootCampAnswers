var types = [
  'a',
  true,
  2,
  console.log,
  null,
  { a: 'b', c: 'd' },
  [ 1, 2, 3 ],
];

// 1
var REPLACE_ME = types[0];
var func = types[3];
var number = types[2];
var nul = types[4];
var string = types[5].a;
var array = types[6];
var boolean = types[1];
var object = types[5];

// 2
var student = {
  firstName: '',
  lastName: '',
  major: ''
};

// 3
function addClasses(student, class1, class2, class3) {
  // YOUR CODE BELOW
  student.classes = [];
  student.classes.push(class1, class2);
  student.classes.unshift(class3);
  // YOUR CODE ABOVE
}

// 4
addClasses(student, 'english', 'math', 'science');

// 5
function fullName(student) {
  return student.firstName + ' ' + student.lastName;
}




// 6
function reverseClasses(student) {
  // YOUR CODE BELOW
  return student.classes.slice().reverse();
  // YOUR CODE ABOVE
}


function reverseClasses(student) {
  // YOUR CODE BELOW
  var cw = []; 
	for(var i = student.classes.length - 1; i >= 0; i--){
    cw.push(student.classes.length[i]); 
    return cw; 
  }
}


function reverseClasses(student) {
  var cw = [];
  for (var i = student.classes.length - 1; i >= 0; i--) {
    cw.push(student.classes[i]);
  }
  return cw;
}


const originalArray = ['cat', 'dog', 'mouse'];
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}

console.log(reversedArray);





// 7
function oddNumbers(end) {

  for (var i = 1; i <= end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}



// 8
function evenNumbers(start) {
  for (var i = start; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
