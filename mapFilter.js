// ### Task Set for `map`:

//1. **Double the Numbers:**   Given an array of numbers, use the `map` method to create a new array where each number is doubled.

// const array1 = [1, 4, 5, 22, 4, 5];
// const doubleArray = array1.map((num) => num * 2);
// console.log(doubleArray);
// //2. **Convert Temperatures:**   Create a function that takes an array of temperatures in Celsius and use `map` to convert them to Fahrenheit.
// const farArray = array1.map((el) => el + 32);
// console.log(farArray);
// //3. **Square Roots:**   Given an array of numbers, use `map` to find the square root of each number and create a new array with the results.

// const sqtr = array1.map((obj) => Math.sqrt(obj));
// console.log(sqtr);
// //4. **Uppercase Names:**   Given an array of names, use `map` to create a new array where each name is in uppercase.

// var array = ['Naraa', 'Boloroo', 'Henee', 'bataa'];
// var uppers = array.map( x => x.toUpperCase());
// console.log(uppers);
//5. **Extract Initials:**   Create a function that takes an array of full names and uses `map` to generate an array of initials (first letter of the first name and last name).
// const array = [
//   {
//     firstName: "Narantsatsralt",
//     lastName: "Bumnasan",
//   },
//   { firstName: "Namkhai", lastName: "Bumnasan" },
//   { firstName: "Gundalai", lastName: "Bumnasan" },
//   { firstName: "Lkhamjav", lastName: "Bumnasan" },
//   { firstName: "Serik", lastName: "Bumnasan" },
// ];
// const array7 = array.map(
//   (el) => el.firstName.charAt() + "." + el.lastName.charAt()
// );
// console`.log(array7);
// //### Task Set for `filter`:
// //6. **Even Numbers:**   Given an array of numbers, use the `filter` method to create a new array containing only the even numbers.

// const array1 = [1, 4, 5, 22, 4, 5];
// const evenNumber = array1.filter(obj => obj % 2 === 0)
// console.log(evenNumber)


// //7. **Positive Numbers:**   Create a function that takes an array of numbers and uses `filter` to generate a new array containing only the positive numbers.
const array6 = [1, 4, -5, 22, 4, -5];
// const positiveNum = array6.filter(el => el > 0)
const positiveNum = array6.filter(function (el) {
  return el > 0;
})
console.log(positiveNum)


// //8. **Long Words:**   Given an array of words, use `filter` to create a new array with only the words that have a length greater than a specified number.

const words = [ 'animals', 'bts', 'bangtansonyeangdan', 'jungkook','rm']
// console.log(words.filter(obj => obj.length > 7))
console.log(words.filter(function (obj) {
  return obj.length > 7;
}))

//9. **Prime Numbers:**   Create a function that takes an array of numbers and uses `filter` to generate a new array containing only the prime numbers.

// const primeNum = []
// Өгөгдсөн тоо анхны эсэхийг олох функц бич
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function filterPrimes(numbers) {
  return numbers.filter(isPrime);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbersArray = numbersArray.filter(isPrime);

console.log(primeNumbersArray); 

//10. **Search by Starting Letter:**    Given an array of words, use `filter` to create a new array with only the words that start with a specific letter.
