const arr = [16, 17, 4, 5, 3, 4];
let res = [];

let maxFromLast = arr[arr.length - 1];
res.push(maxFromLast);

for (let i = arr.length - 2; i >= 0; i--) {
  if (arr[i] >= maxFromLast) {
    maxFromLast = arr[i];
    res.push(arr[i]);
  }
}

res.reverse();

console.log(res);

// let i = 0;
// j = 0;

// while (i < arr.length) {
//   if (arr[i] < arr[j]) {
//     i++;
//     j = i;
//   } else if (j == arr.length) {
//     res.push(arr[i]);
//     j = i;
//     i++;
//   } else {
//     j++;
//   }
// }

// // pushign the last element
// res.push(arr[arr.length - 1]);
