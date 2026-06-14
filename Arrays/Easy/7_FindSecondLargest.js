const arr = [1, 2, 3, 5, 4, 6];

let greatest = -Infinity,
  secondGreatest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > greatest) {
    secondGreatest = greatest;
    greatest = arr[i];
  } else if (secondGreatest < arr[i] && arr[i] !== greatest) {
    secondGreatest = arr[i];
  }
}

console.log(greatest, secondGreatest);
