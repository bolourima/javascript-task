// Array-object-string-method TASKs

//Ascending order
const order = {
  b: 2,
  a: 1,
  c: 3,
  f: 6,
  l: 4,
  s: 8,
};
// console.log(order)
for (const [key, value] of Object.entries(order)) {
  if (value > value + 1) {
    console.log(value);
  }
}

// for(i = 0; i < order.length; i++){
//     for(j = i; j < order.length; j++){
//         if(order[i] < order[j]){
//             let x = order[i]
//             order[i] = order[j]
//             order[j] = x
//         }
//     }
// }


