// Array-object-string-method TASKs

//Ascending order
// const order = {
//   b: 2,
//   a: 1,
//   c: 3,
// };
// const unorder = Object.entries(order);
// for(let i = 0; i < unorder.length; i++){
//     for(let u = 0; u < unorder.length; u ++)
//     if(unorder[i][1] < unorder[u][1]){
//     let x = unorder[i];
//     unorder[i] = unorder[u];
//     unorder[u] = x;
// }
// }
// console.log(Object.entries(unorder))

// Array reverse FullName

// var Person = {
//   firstName: "Bolormaa",
//   lastName: "Ikhbayar",
//   fullName: function () {
//     if (this.firstName && this.lastName) {
//       this.fullName = this.firstName + " " + this.lastName.toUpperCase();
//     } else {
//       console.log("Ta buten neree oruulna uu"); }
//     }
//   }
// Person.fullName();
// console.log(Person.fullName);




// ReadMe
// huvisagchid too uguud ter huvisagchaa arrayd baigaa uguig oloh,huvisagchid too uguud ter huvisagchaa array iin hed deh index deer bgaag oloh
// var readMe = 70;
// const array = [1, 2, 4, 5, 6, 7, 8, 9, 10];

// function findVariable(readMe) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === readMe) {
//       return i; 
//     }
//   }
//   return null;
// }

// const index = findVariable(readMe);

// if (index !== null) {
//   console.log(`Element ${readMe} is at index No ${index}`);
// } else {
//   console.log(`Element ${readMe} is not in the array.`);
// }
// //array iin tugsguluus N shirheg element ustgah 
// const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
// const N = 2; 
// const newArray = array2.slice(0, array2.length - N);
// console.log(newArray);

// //array iin ehlelees N shirheg element ustgah 
// const array3 = [1, 5, 34, 56, 75, 7, 8, 4];
// const L = 3;
// const slicedArray = array3.slice(L);
// console.log(slicedArray)

//string ees suulin usgiig ustgah 
// const string1 = 'Hello good morning';
// const splitedString = string1.split("");
// splitedString.pop()
// resultString = splitedString.join('')
// console.log(resultString)

//2 array iig niiluuleh
// const array1 = [1, 1, 1, 1];
// const array2 = [2, 2, 2, 2];
// const sumArray = array1.concat(array2)
// console.log(sumArray)

//string, too holildson arrayaas string, toog ni yalgaj 2 arrayd hiih
// const mixedArray = [1, 'string', 295, 'human', 99];
// const numberArray = [];
// const stringArray = [];

// for (let i = 0; i < mixedArray.length; i++) {
//   if (typeof mixedArray[i] === 'number') {
//     numberArray.push(mixedArray[i]);
//   } else if (typeof mixedArray[i] === 'string') {
//     stringArray.push(mixedArray[i]);
//   }
// }

// console.log(numberArray); 
// console.log(stringArray);


//Array reverse 1-10 toog reverse hiih

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reversed = array1.reverse();
// console.log('Reversed array: ', reversed)

// Sort by frequency - Her olon davtagdsanaarn erembeleh
// const fruit = ["apple", "banana", "apple", "cherry", "cherry", "cherry"];
// fruit.sort();
// fruit.reduce();
// // fruit.join(',')
// // console.log(fruit)

// const arr = ["apple", "banana", "apple", "cherry", "cherry", "cherry"];
// function sorted(arr) {
//   // array d hed bgaagn toolj bn
//   const frequency = arr.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});
//   const sorted = Object.keys(frequency).sort(
//     (a, b) => frequency[b] - frequency[a]
//   );
//   return sorted.join(", ");
// }
// console.log(sorted(arr));

// Update student grades - Dungiin dundajiig ol
// const students = {
//   number1: {
//     name: "Alice",
//     grades: Array(3),
//     averageGrade: 80,
//   },
//   number2: {
//     name: "Bob",
//     grades: Array(3),
//     averageGrade: 85,
//   },
//   number3: {
//     name: "Charlie",
//     grades: Array(3),
//     averageGrade: 85,
//   },
// };

// for (const studentNumber in students) {
//   const student = students[studentNumber];
//   const totalGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
//   student.averageGrade = totalGrades / student.grades.length;
// }

// console.log(students);

// const students = {
//   number1: {
//     name: "Alice",
//     grades: [75, 85, 90],
//     averageGrade: 0,
//   },
//   number2: {
//     name: "Bob",
//     grades: [80, 88, 92],
//     averageGrade: 0,
//   },
//   number3: {
//     name: "Charlie",
//     grades: [85, 90, 95],
//     averageGrade: 0,
//   },
// };
// for (const studentNumber in students) {
//   const student = students[studentNumber];
//   const totalGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
//   student.averageGrade = totalGrades / student.grades.length;
// }

// console.log(students);
