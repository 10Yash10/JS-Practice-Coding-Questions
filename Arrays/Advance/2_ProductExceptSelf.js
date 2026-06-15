const arr = [1, 2, 3, 4];
// output = [24, 12, 8, 6]

function productExceptSelf(arr) {
  if (!arr) return null;
  if (arr.length < 2) return arr;

  let i = 0,
    j = 0;
  let product = 1;

  let new_arr = [];

  while (i < arr.length) {
    if (i != j) {
      product *= arr[j];
    }
    j++;

    if (j == arr.length) {
      new_arr.push(product);
      i++;
      j = 0;
      product = 1;
    }
  }

  return new_arr;
}

console.log(productExceptSelf(arr));

// const res = arr.map((_, i) =>
//   arr.reduce((val, acc, j) => (i != j ? val * acc : val * 1)),
// );

// console.log(res);
