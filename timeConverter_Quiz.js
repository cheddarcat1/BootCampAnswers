Create a function timeConverter that takes in a number representing minutes and should return it converted to hours + minutes formatted as: hours:minutes.


function timeConverter(min){
const h = Math.floor(min / 60);
const m = min % 60; 

  const formattedM = m === 0 ? '0' : (m < 10 ? `${m}` : String(m))
  
  return `${h}:${formattedM}`; 
}
