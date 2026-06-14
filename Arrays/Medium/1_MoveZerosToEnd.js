const arr = [0, 0, 1, 0, 1, 1, 1, 0];

let i = 0,
  j = arr.length - 1;

// while (i <= j) {
//   if (arr[i] < arr[j]) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//   } else {
//     j--;
//   }
// }

const zeros = arr.filter((item) => item == 0);
const nonzeros = arr.filter((item) => item !== 0);

console.log([...nonzeros, ...zeros]);

// console.log(arr);
