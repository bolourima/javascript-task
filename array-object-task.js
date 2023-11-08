// Array-object-string-method TASKs

//Ascending order
// const order = {
//   b: 2,
//   a: 1,
//   c: 3,
//   f: 6,
//   l: 4,
//   s: 8,
// };
// console.log(Object.keys(order))
// for(i = 0; i < order.keys; i++){
//     for(j = i; j < order.keys; j++){
//         if(order.keys[i] < order.keys[j]){
//             let x = order.keys[i]
//             order.keys[i] = order.keys[j]
//             order.keys[j] = x
//         }
//     }
// } console.log(keys)

const order = {
  b: 2,
  a: 1,
  c: 3,
};
const unorder = Object.entries(order);
for(let i = 0; i < unorder.length; i++){
    for(let u = 0; u < unorder.length; u ++)
    if(unorder[i][1] < unorder[u][1]){
    let x = unorder[i];
    unorder[i] = unorder[u];
    unorder[u] = x;
}
}
console.log(Object.entries(unorder))


