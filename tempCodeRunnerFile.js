var readMe = 2;
const array = [1, 2, 4, 5, 6, 7, 8, 9, 10];
function findVariable(readMe) {
  for (let i = 0; i = array.length; i++) {
    if (array[i] === readMe){
        return readMe;
    } 
  }
  return null
}
console.log(findVariable(readMe));