// // myAge гэсэн хувьсагч зарлаж. 25 аас дээш байвал console дээр “above 25” гэж гаргах, 25 аас доош байвал console дээр “below 25” гэж гаргах
// console.log('Task 1:')
// var myAge = 4444;
// if (myAge < 25) {
//   console.log("Below 25");
// } else {
//   console.log("Above 25");
// }

// //n хувьсагчын утгын дагуу сондгой эсвэл тэгш олж хэвлэнэ. жишээ нь: n = 2 байвал it’s even number гэж console дээр гарж ирэх

// console.log('Task 2:')
// var number = 111;
// if (number % 2 == 0 ){
//  console.log('tegsh')
// } else {(number % 2 == 1)
//   console.log('songdoi')
// }

// // if … else ашиглан 12, 45, 30 хамгийн их утгатай хувьсагчийг console дээр хэвлэнэ үү

// console.log('Task 3:')
// var a = 12;
// var b = 30;
// var c = 45;
// if (c>b && c>a) {
//   console.log('c is highest number')
//  }
//  else if(a>b && a>c) {
//   console.log('a is the highest number')
// }
// else {
// console.log('b is the highest number')
// }

// //if … else ашиглан 12, 45, 30 хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
// console.log('Task 4:')
// var q = 12;
// var d = 30;
// var n = 45;
// if (n<d && n<q) {
//   console.log('n is lovest number')
//  }
//  else if(q<d && q<n) {
//   console.log('q is the lovest number')
// }
// else {
// console.log('d is the lovest number')
// }

// //Амралтын өдөр эсвэл ажлын өдөр эсэхийг шалгаарай. weekNumber гэсэн хувьсагч зарлаж weekNumber -ийн тоон утгаа prompt аас авна. жишээ нь: weekNumber = 2 гэж prompt оруулсан байвал “Мягмар-ажлын өдөр” гэж console дээр гарж ирэх
// console.log("Task 5:");
// var weekNumber = 5;
// if (weekNumber == 2) {
//   console.log("Мягмар-ажлын өдөр");
// } else if (weekNumber == 3) {
//   console.log("3-ажлын өдөр");
// } else if (weekNumber == 4) {
//   console.log("4-ажлын өдөр");
// } else if (weekNumber == 5) {
//   console.log("5-ажлын өдөр");
// } else if (weekNumber == 6) {
//   console.log("6-амралтын өдөр");
// } else if (weekNumber == 7) {
//   console.log("7-амралтын өдөр");
// } else {
//   console.log("1-ажлын өдөр");
// }
// // 4 н хувьсагч зарлан 85, 75, 96, 69 гэсэн тоон утга өгөх. Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол: 80-аас их тоонуудын нийлбэр - 181
// console.log("Task6:");
// var x = 85;
// var y = 75;
// var z = 96;
// var a = 69;
// var sum = 0;
// if (x > 80) {
//   sum += x;
// }
// if (y > 80) {
//   sum += y;
// }
// if (z > 80) {
//   sum += z;
// }
// if (a > 80) {
//   console.log((sum += a));
// } else {
//   console.log(sum);
// }

// // 4 н хувьсагч зарлан 3, 7, 2, 4 гэсэн тоон утга өгөх.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоонуудын үржвэр - 24
// console.log("Task 7:");
// var num1 = 3;
// var num2 = 7;
// var num3 = 2;
// var num4 = 4;
// var urjver = 1;
// if (num1 < 5) {
//   urjver *= num1;
// }
// if (num2 < 5) {
//   urjver *= num2;
// }
// if (num3 < 5) {
//   urjver *= num3;
// }
// if (num4 < 5) {
//   console.log((urjver *= num4));
// } else {
//   console.log(urjver);
// }

// /* Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
// Бат - 67 оноо, Очир - 59 оноо авчээШалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
// a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш мууb. Хэрвээ оноо 60 - 70 хооронд байвал - Хангалттайc. Хэрвээ оноо 70 - 80 хооронд байвал - Дундd. Хэрвээ оноо 80 - 90 хооронд байвал - Сайнe. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм
// Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу. */
// console.log('task 8:')
// var bat = 67;
// var ochir = 59;
// if (bat < 60) {
//   console.log(`Bat - ${bat} - Mash muu`);
// } else if (bat < 70 && bat >= 60) {
//   console.log(`Bat - ${bat} - Hangalttai`);
// } else { console.log('idk')}

// if (ochir < 60) {
//   console.log(`Ochir - ${ochir} - Mash muu`);
// } else if (bat < 70 && bat >= 60) {
//   console.log(`Ochir - ${ochir} - Hangalttai`);
// } else { console.log('idk')}

//  m = y2-y1/x2-x1 хариуг олох
// console.log("Task 9:");
// let y2 = 13,
//   y1 = 3,
//   x2 = 3,
//   x1 = 1;
// m = y2 - y1 / x2 - x1;
// console.log(m);

// // Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.
// console.log("Task 10:");
// let C = 20,
//   F;
// F = (C + 32) * (5 / 9);
// console.log(F);

// // Area triangle
// console.log("Task 11: ");
// var side1 = 41;
// var side2 = 27;
// var side3 = 31;
// let s = (side1 + side2 + side3) / 2;
// console.log("s", s);
// let area = (s * (s - side1) * (s - side2) * (s - side3)) * (1 / 2);
// console.log("area", area);

// // Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл.
// console.log('Task 12: ');
// let F = 121;
// let C = (F - 32) * (9/5);
// console.log("C", C);

// // Gegabyte нь хэдэн биттэй тэнцүү вэ ?
// console.log("Task 13: ");
// let Gigabytes = prompt("Gigabyte number: ");
// let calculatedgigabytes = 8589934592 * Gigabytes;
// console.log("Bits: ", calculatedgigabytes);

// // 18 nas hursen esehees hamaarch nasand hursen esehiig tootsno
// let age = prompt("Age: ");
// if (age > 18) {
//   console.log("Ta nasand hursen baina");
// } else console.log("Ta nasand hureegui baina");

// Ugugdsun 3 tooni hamgiin unduriig ol
// let number1 = prompt("Number 1 :");
// let number2 = prompt("Number 2 :");
// let number3 = prompt("Number 3 :");
// if (number1 > number2 && number1 > number2) {
//   console.log(`Number 1 is the hishest number: ${number1}`);
// } else if (number2 > number1 && number2 > number3) {
//   console.log(`Number 2 is the hishest number: ${number2}`);
// } else {
//   console.log(`Number 3 is the hishest number: ${number3}`);
// }

// // // Second largest
// let a = prompt("Number 1:");
// let b = prompt("Number 2:");
// let c = prompt("Number 3:");
// let d = prompt("Number 4:");
// if (a > b && a > c && a > d) {
//   if (b > c && b > d) {
//     console.log(`${b} is second highest number`);
//   } else if (c > d && c > b) {
//     console.log(`${c} is second highest number`);
//   } else console.log(`${d} is second highest number`);
// } else if (b > a && b > c && b > d) {
//   if (a > c && a > d) {
//     console.log(`${a} is second highest number`);
//   } else if (c > a && c > d) {
//     console.log(`${c} is second highest number`);
//   } else console.log(`${d} is second highest number`);
// } else if (c > a && c > b && c > d) {
//   if (a > b && a > d) {
//     console.log(`${a} is second highest number`);
//   } else if (b > a && b > d) {
//     console.log(`${b} is second highest number`);
//   } else console.log(`${d} is second highest number`);
// } else {
//   if (a > b && a > c) {
//     console.log(`${a} is second highest number`);
//   } else if (b > a && b > c) {
//     console.log(`${b} is second highest number`);
//   } else console.log(`${c} is second highest number`);
// }

// if (!(a > b && a > c && a > d));

// // Number of Days in a Month
// let month = prompt('Month : ');
// if (month == 1) {
//     console.log(' 1 sard 30 udur baina')
// } else if ( month == 2) {
//     console.log(' 2 sard 28 honog baina')
// } else { console.log('hi')}

//FOR , WHILE LOOP

// let num = 10;
// while(num>0){
//     console.log(num);
//     num--
// }

// do..while - sesame

// let secret;
// do {
//   secret = prompt("password chn yuve?");
// } while (secret !== "sesame");
// alert("zuv bn");
// for (let num = 0; num < 10; num++) {
//   console.log(num);
// }

// tegsh tooni niilber =
// let sum = 0;
// let number = prompt("number: ");
// for (let i = 0; i < number; i += 2) {
//   sum += i;
// }
// console.log(`${sum} niilber `);

// // tegsh tooni niilber  uur huvilbaraar
// let sum1 = 0;
// let number1 = prompt("number: ");
// for (let i = 1; i < number1; i++) {
//   if (i % 2 === 0) {
//     sum1 += i;
//   }
// }
// console.log(`${sum} niilber `);

// 1ees ugsun too hurtel niilberiig ol
// let sum = 0;
// let num = prompt('number: ');
// for(let i = 0; i <= num; i++){
//     sum += i
// } console.log(`${sum} niilber `);

// Ugsun tooni zereg 1000c ih boloh uyd zogsoh
// let num = prompt("Toogoo oruuulna uu: ");
// let zereg = 0;
// let urjver = 0;
// if (num == 1 || num > 999) {
//   console.log("Ta 1 ees ih 1000s baga too oruulna uu");
// } else {
//   while (urjver <= 1000) {
//     urjver = num ** zereg;
//     zereg++;
//   }
//   console.log(`${num}-iin ${zereg - 1} n zereg 1000s ih ${urjver} baina`);
// }

// 2 toonii hamgiin ih yrunhii huvaagchiig ol

// let num1 = prompt("Ehnii toogoo oruulna uu: ");
// let num2 = prompt("2 dah toogoo oruulna uu");
// let min;
// let i = 1;
// if (num1 > num2) {
//   min = num2;
// } else {
//   min = num1;
// }
// while (i <= min) {
//   i++;
//   if (num1 % i == 0 && num2 % i == 0) {
//   }
//   console.log(i);
// }

// // NESTED LOOP - Od hevleh
// let n = prompt("number: ");
// for (let i = n; i > 0; i--) {
//   let res = "";
//   for (let j = i; j > 0; j--) {
//     res += "*";
//   }
//   console.log(res);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }

// x3 -iig F(X) ashiglaj hiiih
// function findXCube(x){
//   const cube = x ** 3
//   console.log(cube)
// }
// findXCube(3);

// ugugdsun 2 toonii ihiig oloh function bish
// let num1 = prompt("Number 1: ");
// let num2 = prompt("Number 2: ");
// let max;
// function findHighestNumber(num1, num2) {
//   if (num1 > num2) {
//     max = num1;
//   } else {
//     max = num2;
//   }
//   return max;
// }
// console.log(findHighestNumber(Number(num1), Number(num2)));

// factorial oloh
// let n = 1;
// let answer = 1;
// function factorial(n) {
//   if (n == 1 || n == 0) return answer;
//   if (n > 1) {
//     for (var i = n; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   }
// }
// console.log(factorial(n));

//  tegsh too baigaa esehiig shalgah
// let x = 9;
// function evenNumber(x) {
//   if (x % 2 == 0) {
//     return `it is even number ${x}`;
//   } else return `it odd number ${x}`;
// }
// console.log(evenNumber(x));

// // Ugugdsun array iin dundajiig ol
// let x = 2;
// let y = 3;
// let z = 6;
// let n = 7;
// let average;
// function averageFunction(x, y, z, n){
//   average = (x + y + z + n)/4
//   return average
// } console.log(averageFunction(x, y, z, n))

// Ugugdsun temdegt muriin buh usgiig tom usgeer bich
// let text =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, maiores!";
// let result;
// function upperLetterfunction(text) {
//   result = text.toUpperCase();
//   return result;
// }
// console.log(upperLetterfunction(text));

//Ugugdsun temdegt muriin buh usgiig jijig usgeer bich
// let text =
//   "Lorem ipsum dolor SIT AAAA amet consectetur adipisicing elit. Animi, maiores!";
// let result;
// function upperLetterfunction(text) {
//   result = text.toLowerCase();
//   return result;
// }
// console.log(upperLetterfunction(text));

// Өгөгдсөн тоо анхны эсэхийг олох функц бич
// let num = 7;
// let result;
// let i;
// function primeNumberFunction (num) {
//   if(num < 1){
//     for(let i = num; i <= num; i--){
//       result = num % i
//     } return
//   }
// }

// ARRAY

//Өгөгдсөн array - ийн гишүүдийн нийлбэрийн дундажыг ол. Input: [10, 20, 30, 40, 50]
// const arr = [10, 20, 30, 40, 50];
// var sum = 0;
// for(let i = 0; i < arr.length; i++){
//   sum += arr[i]
// }
// let average = sum / arr.length
// console.log(average);

// console дээр fibanocci дарааллын эхний 100 нь гишүүнийг array-д хадгалан хэвлэнэ. Fibanocci дараалал нь өмнөх тоон дээрээ өөрийгөө нэмж дараагийн тоогоо гаргадаг. Анхны 2 гишүүн нь 0, 1 байна.

// var i;
// const n = 100;
// const fib = [0, 1];
// for (i = 2; i <= n; i++) {
//   fib.push(fib[i - 1] + fib[i - 2]);
//   console.log(fib);
// }

// array dah suuliin elementiig solih

// const lastelement = [10, 20, 30, 40, 50];
// lastelement[4] = 30;
// console.log(lastelement)

// Гараас массив доторх эерэг болон тэгш тооны нийлбэрийг олох

// const average = [2, -3, 5, 6, -8, 10];
// let i;
// let sum = 0;
// for(i = 0; i <= average.length; i++){
//   if (average[i] % 2 == 0 && average[i] > 0){
//   sum += average[i]
// }
// } console.log(sum)

// // Chunk - Массивыг өгөгдсөн тоотой хэсэг болгон хуваах аргыг бич, loop push
// const outputtwo = [1, 2, 3, 4, 5, 6, 7, 8];
// let insert = 2;
// let emptyArr = [];

// for (let i = 0; i < outputtwo.length / insert; i++) {
//   emptyArr.push(outputtwo.slice(i * insert, i * insert + insert));
// }

// console.log(emptyArr);

//      OBJECT

//sort in array
// const numbers = [5, 4, 3, 2, 1];
// for (i = 0; i < numbers.length; i++) {
//   console.log("i", numbers[i]);
//   for (j = 0; j < numbers.length; j++) {
//     console.log("j", numbers[j]);
//     if (numbers[i] < numbers[j]) {
//       console.log("i umber", numbers[i]);
//       console.log("j umber", numbers[j]);
//       var x = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = x;
//     }
//   }
// }
// console.log(numbers);
// Өгөгдсөн object - ийг өсөх дарааллаар эрэмбэлcэн array буцаадаг функц бич. Input: { b: 2, a: 1, c: 3 }
// const ascendingOrder = {
//   b: 2,
//   a: 1,
//   c: 3,
// }
// console.log(ascendingOrder['a'])

//
// const data = [
//   {
//     productName: "Bakery",
//     unitPrice: 5000,
//     amount: 200,
//     totalPrice: 500000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Chocolate",
//     unitPrice: 3000,
//     amount: 18,
//     totalPrice: 54000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Milk",
//     unitPrice: 1500,
//     amount: 320,
//     totalPrice: 480000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Sneaker",
//     unitPrice: 2000,
//     amount: 30,
//     totalPrice: 60000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Juice",
//     unitPrice: 3500,
//     amount: 20,
//     totalPrice: 70000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Juice-2",
//     unitPrice: 4500,
//     amount: 21,
//     totalPrice: 84500,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Cigar",
//     unitPrice: 5000,
//     amount: 50,
//     totalPrice: 250000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "M&M",
//     unitPrice: 4100,
//     amount: 10,
//     totalPrice: 41000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Cola",
//     unitPrice: 2400,
//     amount: 5,
//     totalPrice: 12000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Orange",
//     unitPrice: 1000,
//     amount: 270,
//     totalPrice: 270000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Mushroom",
//     unitPrice: 1000,
//     amount: 55,
//     totalPrice: 55000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Brokkli",
//     unitPrice: 5000,
//     amount: 5,
//     totalPrice: 25000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Oil",
//     unitPrice: 11000,
//     amount: 4,
//     totalPrice: 44000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "paper",
//     unitPrice: 500,
//     amount: 3,
//     totalPrice: 1500,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "Icecream",
//     unitPrice: 300,
//     amount: 140,
//     totalPrice: 45000,
//     casherId: 1,
//     date: "2022-11-01",
//   },
//   {
//     productName: "water",
//     unitPrice: 1250,
//     amount: 10,
//     totalPrice: 12500,
//     casherId: 1,
//     date: "2022-11-01",
//   },
// ];
// var sum = 0;
// for (let i = 0; i < data.length; i++) {
//   sum = sum + data[i].totalPrice;
// }
// console.log(`1. Niit borluulaltiin dun ${sum} baina`);

// var productsum = 0;
// for (let j = 0; j < data.length; j++) {
//   productsum += data[j].amount;
// }
// console.log(`2. Niit borluulagdsan baraani too ${productsum} shirheg baina`);

// for (let l = 0; l < data.length; l++) {
//   for (let h = l; h < data.length; h++)
//     if (data[l].amount < data[h].amount) {
//       var x = data[l].amount;
//       data[l].amount = data[h].amount;
//       data[h].amount = x;
//     } 
// }
// console.log(data[l].amount.slice(5))
// console.log(`4. Hamgiin ih zaragdsan 5 baraani jagsaalt/too hemjeegeer/ 
// ${data[0].amount} ${data[1].amount} ${data[2].amount} ${data[3].amount} ${data[4].amount}`);


//Parking system
//new Date(year, month, day, hours, minutes, seconds, milliseconds);

// const firstDate = new Date("2023-11-07T12:15:00");
// const endDate = new Date("2023-11-07T12:15:29");
// let t = (endDate.getHours()) - (firstDate.getHours()) 
// console.log(t)
// let m = (endDate.getMinutes()) - (firstDate.getMinutes()) 
// console.log(m)
// allMinut = ((t * 60) + m)
// let s = (endDate.getSeconds()) - (firstDate.getSeconds())
// console.log(s) 
// if (allMinut <= 30 && s <=   59){
//   console.log('Ehnii 30 minut unegui')
// }
// console.log(firstDate.getHours())
// console.log(firstDate.getMinutes())
// console.log(firstDate.getSeconds())

// // 
// let totalMinut = 0
// if(totalMinut < 30){
//   console.log('Ehnii guchin minut unegui')
// } else {
//   for( i = 31; i < totalMinut; i += 60)}
      
