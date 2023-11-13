// Find x cube

// x = 3;
// function findX3 (x){
//     urjver = x * x * x;
//     return urjver;
// }
// console.log(findX3(x))

// Triangle area - oloh
// console.log('Triangle area');
// var side1 = 41;
// var side2 = 27;
// var side3 = 31;
// let s = (side1 + side2 + side3) / 2;
// let area = (s * (s - side1) * (s - side2) * (s - side3)) * (1 / 2);
// console.log("area", area);

// ijil usguudiig olj ustga

// function alphabets(string) {
//     let result = string[0];
//     for (let i = 1; i < string.length; i++) {
//         if (string[i] !== string[i - 1]) {
//             result += string[i];
//         }
//     }
//     return result;
// }
// const string = "aabbccd";
// console.log(alphabets(string));

// x² + 5x + 6 bod
// let x = 2;
// function task(x) {
//     result = (x * x) + (5 * x) + 6;
//     return result;
// }
// console.log(task(x))

//Гараас өгүүлбэр оруулаад түүнээс хамгийн урт үгийг олдог функц бичих
// let senten = "sainuu yu baina hune";
// let longestWord = 0;
// function howLongsent(senten) {
//   salgasan = senten.split(" ");
//   for (let i = 0; i < salgasan.length; i++) {
//     if (salgasan[i].length > longestWord) {
//       longestWord = salgasan[i].length;
//     }
//   }
//   return longestWord;
// }
// console.log(howLongsent(senten));

// Toonii mashin + - hoyulang hiideg tusdaa hariugargadag
// let a = 7;
// let b = 2;
// function sumAB(a, b) {
//     sumResult = a + b; 
//     return sumResult;
// }
// function hasah(a,b){
//     hasahresult = a - b;
//     return hasahresult
// }
// console.log(`A+b = ${sumAB(a,b)}, A-b = ${hasah(a,b)}`)



// Palindrom Checker 
let word = 'ralcar';

function Palindrom(word){
    splitedword = word.split('')
    for(let i = 0; i < splitedword.length; i++){
        for (let j = splitedword.length - 1; j >= 0 ; j--){
            if(splitedword[i] === splitedword[j]){
                return true
            } else {
                return false
            }
        }
    }
}
console.log(Palindrom(word))