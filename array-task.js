// ARRAY - Easy Task

//Өгөгдсөн array - ийн гишүүдийн нийлбэрийн дундажыг ол. Input: [10, 20, 30, 40, 50]

// const arr = [10, 20, 30, 40, 50];
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// let average = sum / arr.length;
// console.log(average);

// // console дээр fibanocci дарааллын эхний 100 нь гишүүнийг array-д хадгалан хэвлэнэ. Fibanocci дараалал нь өмнөх тоон дээрээ өөрийгөө нэмж дараагийн тоогоо гаргадаг. Анхны 2 гишүүн нь 0, 1 байна.

// var i;
// const n = 100;
// const fib = [0, 1];
// for (i = 2; i <= n; i++) {
//   fib.push(fib[i - 1] + fib[i - 2]);
// }
// console.log(fib);

// // array dah suuliin elementiig solih

// const lastelement = [10, 20, 30, 40, 50];
// lastelement[4] = 30;
// console.log(lastelement)

// // Гараас массив доторх эерэг болон тэгш тооны нийлбэрийг олох

// const average = [2, -3, 5, 6, -8, 10];
// let i;
// let sum = 0;
// for(i = 0; i <= average.length; i++){
//   if (average[i] % 2 == 0 && average[i] > 0){
//   sum += average[i]
// }
// } console.log(sum)

// // // Chunk - Массивыг өгөгдсөн тоотой хэсэг болгон хуваах аргыг бич, loop push
// const outputtwo = [1, 2, 3, 4, 5, 6, 7, 8];
// let insert = 2;
// let emptyArr = [];

// for (let i = 0; i < outputtwo.length / insert; i++) {
//   emptyArr.push(outputtwo.slice(i * insert, i * insert + insert));
// }

// console.log(emptyArr);

// Find max and Min
// const findMaxMin = [1, 3, 5, 22, 89, 46, 17, 31, 23];
// let min = findMaxMin[0];
// let max = findMaxMin[0];
// for (i = 1; i < findMaxMin.length; i++) {
//   if (findMaxMin[i] < min) {
//     min = findMaxMin[i];
//   }
//   if (findMaxMin[i] > max){
//     max = findMaxMin[i];
//   }
// }

// console.log(min, max);


//sort in array
// const numbers = [5, 4, 3, 2, 1];
// for (i = 0; i < numbers.length; i++) {
//   for (j = 0; j < numbers.length; j++) {
//     if (numbers[i] < numbers[j]) {
//       var x = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = x;
//     }
//   }
// }
// console.log(numbers);

// Find Longest increasing Subsequence - Массив доторх хамгийн урт өссөн дэд дарааллыг ол.

// const num = [10, 9, 2, 5, 3, 7, 101, 18];


//find max subarray sum 
// const nums = [1, -2, 3, 4, -1, 2, 1, -5, 4]
//  var maxSubArray = function(nums) {
//     var max = nums[0];

//     for(i = 0; i < nums.length; i++){
//         for(j = i; j <nums.length; j++){
//             let sum = 0; 
//             for(k = i; k <= j; k++){
//                 sum += nums[k]
//             }
//             max = Math.max(max, sum)
//         }
//     }
//     return max
//  }

//  console.log(maxSubArray(nums))
