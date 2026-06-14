// const arr = [1, 2, 3, 4, 5, 6, 4, 3, 2, 1];
// const arr = [1, 2, 3, 4, 5, 6, 4, -13, 2, 1];
// const arr = [9, 2, 3, 4, 5, 6, 4, -13, 2, 1];
const arr = [-5, -23, -1];

let greatest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > greatest) greatest = arr[i];
}

// console.log(Math.max(...arr));
console.log(greatest);
