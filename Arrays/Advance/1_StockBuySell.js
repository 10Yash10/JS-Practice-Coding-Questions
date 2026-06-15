// const arr = [7, 10, 1, 3, 6, 9, 2];
// const arr = [7, 6, 4, 3, 1];
const arr = [1, 3, 6, 9, 11];

// 1 way
// function MaxTransaction(arr) {
//   let i = 0,
//     j = 1;

//   let smallest = arr[0];

//   let res = 0;

//   while (i < arr.length) {
//     if (arr[i] < arr[j]) {
//       res = Math.max(res, arr[j] - smallest);
//       j++;
//     } else if (arr[i] > arr[j]) {
//       smallest = arr[j];
//       i = j;
//       j++;
//     } else {
//       i++;
//     }
//   }

//   return res;
// }

// console.log(MaxTransaction(arr));

// 2 way

function maxTransaction(arr) {
  if (!arr || arr.length < 2) return 0;

  let minPrice = arr[0];
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    } else {
      maxProfit = Math.max(maxProfit, arr[i] - minPrice);
    }
  }

  return maxProfit;
}

console.log(maxTransaction(arr));
