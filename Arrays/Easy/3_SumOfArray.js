const arr = [1, 2, 3, 4, 5];
let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

const sum_of_array = arr.reduce((val, acc) => val + acc);

console.log(sum_of_array);

// console.log(sum);
