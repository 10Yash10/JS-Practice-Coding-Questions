let arr = [2, -3, 4, -1, 5, -6];
// let arr = [-2, -3, 4, 1, 5, -6];
// let arr = [-5, 2, -3];

// 1 way
// function RearrangeNegativeToPositive(arr) {
//   let i = 0;
//   j = arr.length - 1;

//   while (i < j) {
//     if (arr[i] < 0) {
//       i++;
//     } else if (arr[j] >= 0) {
//       j--;
//     } else {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//       j--;
//     }
//   }

//   return arr;
// }
// console.log(RearrangeNegativeToPositive(arr));

// 2 way
// const negatives = arr.filter((item) => item < 0);
// const positives = arr.filter((item) => item >= 0);

// const rearranged = [...negatives, ...positives];
// console.log(rearranged);

// 3 way
function rearrange_array(arr) {
  let negatives = [];
  let positives = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) negatives.push(arr[i]);
    else positives.push(arr[i]);
  }

  const new_arr = negatives.concat(positives);

  return new_arr;
}

console.log(rearrange_array(arr));
