
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/



function triangles(n) {
  
  for (let i = 1; i <= n; i++) {
    
    console.log('#'.repeat(i));
  }
}




////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function drawcheeseBoard(size)
let emptyBoard = ' '
nested loop for rows and col
if divisable by 2 
board += ''
else board += #
board += '\n'
console.log 

function drawChessboard(size) {
  //empty board
  let board = '';
  
  //nested loop
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      
      //even number 
      if ((row + col) % 2 === 0) {
        
        //add space
        board += ' ';
        
        //else 
      } else {
        
        //add thingy 
        board += '#';
      }
    }
    //make a space 
    board += '\n';
  }
  //console log board 
  console.log(board);
}



